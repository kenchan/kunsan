---
title: 'SUZURIのAPI ClientをHeroicsで生成しました'
slug: 'SUZURIのAPI-ClientをHeroicsで生成しました'
publishedOn: 2015-03-13
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
[Ruby Business User Conference で JSON Hyper-Schema についてLT](https://diary.shu-cream.net/blog/2015/02/27/ruby-business-user-conference.html) をしたのも半月前のこと、ついに[SUZURI Developer Center](https://suzuri.jp/developer/)でAPIとJSON Schemaが公開されました。

折角なので、[interagent/heroics](https://github.com/interagent/heroics)を使ってクライアントライブラリを生成してみました。

[kenchan/suzuri_client](https://github.com/kenchan/suzuri_client)

いざ生成してみると、ちょっとおかしいなと思うインタフェースがいくつかあるので原因を調べときます。

あとは、HeroicsはHTTPクライアントライブラリとしてexconを使っているのですが、手元の環境だとうまくSSLの証明書が読み込めないっぽく、exconのREADMEにあるように証明書を自分で設定しないとHTTPSで接続できませんでした。(それか`Excon.defaults[:ssl_verify_peer] = false`をする)

そんなこんなでちょっと変なところもあるんですが、これも一つの試みということで。

あわせて読みたい: [ワンクリックでインターネットをTシャツにアーカイブれるGoogle chrome拡張作った。 - パルカワ2](https://hisaichi5518.hatenablog.jp/entry/2015/03/12/132551)
