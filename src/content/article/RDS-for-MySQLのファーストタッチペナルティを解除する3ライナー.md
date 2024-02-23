---
title: 'RDS for MySQLのファーストタッチペナルティを解除する3ライナー'
slug: 'RDS-for-MySQLのファーストタッチペナルティを解除する3ライナー'
publishedOn: 2021-04-02
createdAt: 2021-04-02 11:51:53 +0900
updatedAt: 2021-04-02 12:08:58 +0900
---
この記事の3ライナーはほぼ [@yoku0825](https://twitter.com/yoku0825) によるものです。感謝。

RDS for MySQLのデータボリュームはEBSの技術を使っているため、スナップショットから復元を行うと初回のデータアクセス時にレイテンシの悪化が起こる。これは「ファーストタッチペナルティ」または「ファーストタッチレイテンシー」と呼ばれていて、AWSのドキュメントにも記載のある現象である。([Amazon EBS ボリュームの初期化 \- Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/ebs-initialize.html))

EC2+EBSの場合は、ddで触るといった方法でこれを解消することになるが、RDS for MySQLではもう少し複雑な作業が必要になる。

具体的には次の3つのことをしなければいけない。

- primary keyをすべて読み込み
- secondary keyをすべて読み込む
- すべてのデータを読み込む

ファーストタッチペナルティの解除についてインターネットで探すと、「`select count(*) from テーブル名` を全テーブルに打ちましょう」というのがよくでてくるが、これだけだとsecondary keyを読み込めてないので本番投入後に特定のSQLが最初だけ遅いという現象が起きうる。(MySQLの `count(*)` は実データに触るので、３番目のすべてのデータを読み込むというのは達成できている。)

さて、MySQL 5.6(RDS for MySQLの現時点で利用できる下限のバージョン)以上では、information_schemaにsecondary keyを含むすべてのインデックスの情報が入っているので、これを利用してファーストタッチペナルティを解除するスクリプトを作ることができる。それが以下の3ライナー。`YOUR_DATABASE_NAME`をDB名に置き換え、ホスト名などの認証情報は`~/.my.cnf`等に書いておくと楽。

```bash
mysql -sse "SELECT distinct table_name, index_name FROM information_schema.statistics WHERE table_schema = 'YOUR_DATABASE_NAME'" | while read table index ; do
        mysql -sse "SELECT count(*) FROM $table FORCE INDEX($index)" YOUR_DATABASE_NAME > /dev/null &
done
```

どれくらいで終わるかはテーブルとレコードの量、インスタンスタイプに依存するので一概には言えないけど、こういうのを考える必要があるサービスの規模であれば、数時間は見ておいて方がいいだろう。終わったかどうかは実行したクライアントマシンのmysqlプロセスの数を見るか、MySQLサーバに入って`show processlist`等でSELECTクエリが残っているかをみればよい。

なお、新しいDBサーバの本番投入の前には、バッファプールも整えておいたほうが良い。これこそサービス依存なのでこうすればいいというのは存在しないが、SELECTされる回数の多いテーブルなどメモリにのっていてほしいデータをSELECTするクエリを流しておくとよい。

### 参考文献

- [ASCII\.jp：カヤックでのAurora移行は「今のところいいことしかない」](https://ascii.jp/elem/000/001/404/1404815/)
