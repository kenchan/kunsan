---
title: '1Passwordのitemを環境変数にセットするためのシェルコマンドを出力するワンライナー'
slug: '1Passwordのitemを環境変数にセットするためのシェルコマンドを出力するワンライナー'
publishedOn: 2022-10-16
createdAt: 2022-10-16 03:17:42 +0900
updatedAt: 2022-10-16 03:27:26 +0900
---
[1Password CLIのrunサブコマンド](https://developer.1password.com/docs/cli/reference/commands/run/)が登場して以来、envchainやenvopからの移行を進めていたのだが、読み込むための記法が若干面倒という課題がある。

そのため、手元では以下のようなワンライナーをつかって`export`文に変換している。これを実行する前に`op signin`などで該当のitemが存在するvalutにはログインしておく必要がある。

```bash
op item get --format json <your-item-name> | jq -r '.vault.id as $vault | .id as $item | .fields[] | "export " + .label + "=op://" + $vault + "/" + $item + "/" + .id'
```

これを実行すると、your-item-nameに保存された全部の情報(ここでは、OS_USERNAMEやOS_PASSWORDといったもの)が環境変数に読みこまれるよう以下のような出力が得られる。

```bash
export OS_USERNAME=op://i3ur98q3kfqihr38q2wioejr09/tovg2feyqhni24tw6z3kgzkjlu/kdtoogjjsris6hnwrdnify7ox4
export OS_PASSWORD=op://i3ur98q3kfqihr38q2wioejr09/tovg2feyqhni24tw6z3kgzkjlu/ksrvngveh3y6f5qawcyp6gslsu
...
```

これを`.envrc`に入れておけば、[direnv](https://github.com/direnv/direnv)を使って特定のディレクトリにいるときには秘匿情報が環境変数にセットされる。jqによって出力される文字列を変えれば、他のツールで使える記法や、環境変数をセットする関数やコマンドを作ることもできるはず。
