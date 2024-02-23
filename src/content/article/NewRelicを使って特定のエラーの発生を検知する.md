---
title: 'NewRelicを使って特定のエラーの発生を検知する'
slug: 'NewRelicを使って特定のエラーの発生を検知する'
publishedOn: 2020-04-03
createdAt: 2020-04-03 04:41:40 +0900
updatedAt: 2020-04-03 09:25:40 +0900
---
NewRelicには、NRQL(New Relic Query Language)というクエリ言語を使って、NewRelicに溜まっている様々なデータを検索したりする仕組みがある。

NRQLについては、社内でもたまに勉強会が行われていて([New Relic勉強会をペパボ社内で開催しました \- ペパボテックブログ](https://tech.pepabo.com/2019/06/28/newrelic-study-group/))、うまく活用しているサービスも多い。

これとAlertsを組み合わせると、特定のエラーの発生や、エラーの傾向の変化でアラートを発生させることができるようになる。

## NRQLとデータ構造

NRQLで扱うことのできるデータは [NRQL入門 \| New Relicのドキュメント](https://docs.newrelic.co.jp/docs/query-data/nrql-new-relic-query-language/getting-started/introduction-nrql#what-you-can-query) あたりにまとまっており、アプリケーションのエラー情報は `TransactionError` に入っている。

さて、次はこのデータ構造がどうなっているかを調べる必要があるのだけど、それは [New Relic data dictionary \| New Relic Documentation](https://docs.newrelic.co.jp/attribute-dictionary) を見るとわかる。もしくは、Insightsという機能で

```sql
SELECT * FROM TransactionError
```

といったクエリを流してみると、具体的にどういう情報が入っているかわかると思う。`error.class`や`error.message`にどういった文字列が入るかは言語に依るところがあるので、実際のデータをみるのはどちらにしても必要だろう。

ドキュメントにはなさそうだけど面白いカラムとして`aggregateFacet`というものがある。NewRelicやこの手のエラートラッキングシステムでは、類似のエラーをまとめる機能がだいたいついているが、このキーとなるのが`aggregateFacet`というカラムのようだ。今回は使わなかったが、このカラムのユニークカウントの傾向で、新しいエラーが起きているかを検知できそう。

## NRQLでAlertsを設定する

`TransactionError`の内容はわかったので、これをアラートに適用していく。今回は「PHPを使ったアプリケーションで、WARNINGもNewRelicに通知しているが、E_ERRORが一定数を超えたときにアラートにしたい」ということをやった。

「Alerts poricies」がなければ新しく作り、あるものに追加するのであればそれを選び、「add a Condition」を選ぶと「Categories」の中に「NRQL」があるので選ぶ。

今回設定したクエリは以下の通り。PHPアプリケーションの場合は、`error.class`には`E_ERROR`や`E_WARNING`といった文字列が入っていることがわかったので、これをつかってWARNINGを除いた単位時間あたりの数をアラートのしきい値にすることにした。

```sql
select count(*)
from TransactionError
where appName = 'your-app-name' and error.class not in ('E_USER_WARNING', 'E_WARNING')
```

アラートのしきい値の設定方法は以下の３つがあり、今回は「Static」を選んだが、他２つも便利そうなのでいつか使ってみようと思う。

- 固定値の「Static」
- 傾向を見る「Baseline」
- ２つの値の関係をみる「Outliner」

実際に設定したのは画面はこんな感じ。時間や縦軸はぼかしてある。

![NewRelic Alertsのスクリーンショット](https://lh3.googleusercontent.com/H-Cdg0-RoASTVZthmfiLQjzXTaLICtJdygMMeGZ8RILWte_NwulSSK7IJ9vVnE1JNvHG52niwLrK6Fkv2PRBDZAXzpZyqT6FiXICfhNEUJQfAi-uFnKZP6MGaSPbgHD3FAdMGuVKQrs0uqTYLM6PNEC2OehPx-_iP3dXLMhas-dBYWre_jK2yrRuL8d0xMAZlfEI_MTB9yUnhKKq3FrBGnQofk4dwpV7VXKZ70crtitjpNUcpLCxrcaRXt4RtcETDIP4UW4q2eAk65HyFLUOQvDTPJn4fbWU9a9ArANRfrUxvt15DhAnHDhyOLvD75BwTCJuVtG3VwsDXiYuMJKEDlgj-QSoD0k6kCXV_xrjqTYvXngAFlk2Q07UdKcWPBfgDJDs5xYexm1orIvbklZUkdgWtxRjigCHUG0pFEbSqyrAB-bYeZ8XJ1JH8bSxBuOAvzjyu1RsjE3KxcOoraHux_Qb-acKrg0AAfMGfVD0CdLQCGOWWi5uekn4dVXAseVSidaaZPRKd4u4Ry6AB_mrC2n-Hmg1RHZMAvn-Fjg_Id_G_dr24duPo2WMNAW4KsquFdPmg5W8WEmuRjQa34ob63x5kDlAk1CUeDosFU-5b0tsJDhITw5ot_j1xE1SZyVtT5-wwjC6q-FU2ZSc1zAOuRMRCQwrc6RKlqf5sxsVgDXVBc4nVN_96IMweZghl4B-dG37IcCpR-NUPc8XV7jbuy5xpXeph8qIB5P939cQpzCt9oMTv3rryZdd=s0)

## おわりに

NewRelic(NRQL)を使って、特定のエラーの発生を通知する仕組みについて紹介した。エラーのトリアージが必要な場合もあると思っていて「新しい機能をリリースしたのでその機能に関係するエラーについてのみ知りたい」「特定の画面は特に重要度が高いので、通知のポリシーを分けたい」といったような使い方にも応用できると思う。
