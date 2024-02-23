---
title: 'Vendorerで取ってきたassetsはコミットすること'
slug: 'Vendorerで取ってきたassetsはコミットすること'
publishedOn: 2014-06-16
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
[Vendorer](https://github.com/grosser/vendorer)という[idobata.ioでも使っている](https://gist.github.com/kakutani/43b9f42197ab002fcdf://gist.github.com/kakutani/43b9f42197ab002fcdf8)、Railsのvendor以下のファイルを管理するためのgemがあるんだけど、これの使い方というか考え方がいまいちわからなかったので社内で聞いてみた。

そもそもの疑問は「development groupに入れろって書いてあるけど、ってことはこれで取ってきたファイルはコミットするべきものなの？bundlerみたいなやつじゃないの？」というところだった。

結論としては **「Vendoerは指定したURLからファイルをとってくるだけで、バージョンを指定できないからとってきたファイルはコミットする」** ということだそうな。

で、それもイマイチだから、Railsのことだけを考えるならbower.jsonをPRして [Rails Asssts](https://rails-assets.org/) でパッケージングしてもらうのがよさそうということになったのであった。
