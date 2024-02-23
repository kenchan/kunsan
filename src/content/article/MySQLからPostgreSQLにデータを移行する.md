---
title: 'MySQLからPostgreSQLにデータを移行する'
slug: 'MySQLからPostgreSQLにデータを移行する'
publishedOn: 2022-06-30
createdAt: 2022-06-30 13:48:16 +0900
updatedAt: 2022-06-30 13:48:16 +0900
---
ロリポップマネージドクラウドからrender.comにこのサイトを移設するにあたり、DBMSの変更が必要になったのでそのときに調べたことや手順などを残しておく。

データ量は大したことはないが、データの大半がmarkdownやHTMLであり、SQLの中にはいっているなかなか苦労しそうな文字達が多かった。

[lanyrd/mysql-postgresql-converter: Lanyrd's MySQL to PostgreSQL conversion script](https://github.com/lanyrd/mysql-postgresql-converter) のようなツールをつかうとほぼ一撃っぽいのだが、どういう違いがあるのかを知りたかったのでsedで置換してながせるようにしてみた。

## 1. mysqldumpをとる

`mysqldump`には`compatible`というオプションがあり、これをつけるとちょっとだけ他のDBMSでも読み込みやすいSQLを掃き出してくれる。ちょっとだけというのがポイントであり、これだけでは当然うまくいかないのだ。

また、このアプリはRailsでできてるので、スキーマはダンプしないように`--no-create-info`をつける。

さらに、`--skip-quote-names`でテーブル名やカラム名などがクオートされないようにしておく。これってDBMS依存なんだ……という発見があった。

```
mysqldump --compatible=postgresql --skip-quote-names --no-create-info --default-character-set=utf8mb4
```


## 2. 文字列中のシングルクォートを処理する

1で作成したdumpは文字列がシングルクオートで囲まれていて、中では`\'`と`\`でエスケープされているが、PostgreSQLではこれはだめ。シングルクォートは二つ重ねるらしい。

`\'`を`''`に変換してあげる。

```
sed "s/\\\\'/''/g" 
```


## 3. 文字中にエスケープ文字が入っていることを伝える

文字列中に`\n`のように`\`がはいっていると、PostgreSQLはそのままではうまく読み込めない。

`'\n'`を`E'\n'`のように文字列リテラルの先頭にEをつけてあげる必要があるようだ。これをsedでやってあげる。余計に付けても問題なかったので、全ての文字列リテラルにつけてしまった。

```
sed "s/,'/,E'/g" 
```

## 4 tinyint(1)をbooleanにする

mysqldumpはtrueを1、falseを0で出力するが、これはそのままでは取り込まれてない。これはかなり苦労しそうなところだったが、なんとintのカラムがprimary keyであるid以外にはなかったので、とりあえず雑に全部変換してから、だめだったところを個別に手直しした。

```
sed "s/,0,/,false,/g" | sed "s/,1,/,true,/g"
```

## まとめ

そんなこんなで、これくらい変換したらとりこめるようになったので、最終的にはこんなワンライナーで処理できた。めでたしめでたし。

```
sed "s/,0,/,false,/g" dump.sql | sed "s/,1,/,true,/g" | sed "s/\\\\'/''/g" | sed "s/,'/,E'/g" > dump_ok.sql
```
