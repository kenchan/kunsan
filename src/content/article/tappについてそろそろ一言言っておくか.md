---
title: 'tappについてそろそろ一言言っておくか'
slug: 'tappについてそろそろ一言言っておくか'
publishedOn: 2011-11-07
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
弊社で(総力を上げて)メンテナンスしているtappというライブラリがあるのですが、思ったより認知度が低いようなのでここで紹介させていただきます。

## まとめ
tappは、従来のPrint Debugの問題点を解決する画期的なライブラリです。
次のような経験がある方は、いますぐGemfileにtappを追加することをお勧めします。

* メソッドチェーンの間のオブジェクトの状態を見るためだけに一時変数を使ったことがある
* ppやp、putsを消し忘れてリポジトリにコミットしてしまった

## tappとは
tappは、Print Debugを簡単に行うためのRubyライブラリです。

リポジトリは[https://github.com/esminc/tapp](https://github.com/esminc/tapp)になります。

## tappの歴史
tappの作者である@ursmは、2008〜2009年頃に社内向けのモンキーパッチとしてtappを生みだし、Rails勉強会41.1回([Rails勉強会＠東京第41.1回にいってきた - ayumin](https://d.hatena.ne.jp/ayumuaizawa/20090621/1245587231))や、[InactiveSupportのご紹介](https://www.slideshare.net/ursm/inactivesupport)により、一部のRubyistに広まることとなりました。

そして、その1年後の2010年7月7日にバージョン1.0.0がgemとしてリリースされました。

現在はリポジトリをesminc(会社の公式アカウント)に移し、開発を継続しています。

## tappの機能

2011/11現在、tappは次の3つのメソッドを提供しています。

* Object#tapp
* Object#taputs
* Object#taap

出力の形式に違いはありますが、要は**「レシーバをpp(puts,ap)して返す」**というだけです。

```ruby
>> require 'tapp'
=> true
>> "hoge".tapp
hoge
=> "hoge"
```

これだけだと`pp "hoge"`と何が違うのかわかりませんね。tappを使いこなすには、「レシーバを返す」というところを上手く使えるようにならなければいけません。

## tappの使い所

tappがあれば、急に次のようなコードのメンテナンスを依頼されても慌てることはありません。
<a href="https://www.slideshare.net/kakutani/the-gate-8616906/32">
{%img /images/kakutani_slideshare.png %}
</a>
(SlideShareのページ指定埋めこみがうまくいかなかったので画像にしています)

Rubyでプログラムを書いていると、ArrayやHashに対してメソッドチェーンを使う場合が非常に多いと思います。そんなとき、メソッドチェーンの途中の状態を見たくなりませんか？

そこでtappの**「レシーバを返す」**というのが効いてきます。

例えば、「1から10までの数字で奇数だけを合計する」ような処理では、tappを使って次のようにメソッドチェーンの途中の状態を見ることができます。

```ruby
>> (1..10).tapp.select(&:odd?).tapp.inject(&:+)
1..10
[1, 3, 5, 7, 9]
=> 25
```

tappを使わずに同じようなことをしようとすると、途中の状態を一時変数に入れなければなりません。tappがあれば処理の流れを切ることなく、自然にPrint Debugを差し込むことができます。

また、tappはBlock引数を受けとることができるので、`Symbol#to_proc`と組合せることで任意の属性だけを出力することも簡単です。

```ruby
>> User.first.tapp(&:name)
"kenchan"
=> #<User id: 1, name: "kenchan">
```

## Print Debug消し忘れ対策としてのtapp

みなさん一度はリポジトリに対してppやpをコミットしてしまったことがあるのではないでしょうか。書き方によっては、ppやpはgrepで見つけることが困難になり、探すのに苦労することもあります。

そんなときもtapp系を使っていれば安心です。間違いなくgrepで見つけることができます。

また、v1.3.0からはtappのコマンドラインツールが同梱されており、バージョン管理にGitを使っている場合は簡単にtappを検索できるようになっています。

```sh
$ bundle exec tapp grep
Gemfile:  gem 'tapp'
Gemfile.lock:    tapp (1.3.0)
Gemfile.lock:  tapp
```

## tappの落とし穴

Rails(ActiveModel)でtappを使う際には、AssociationProxyやScopeに注意しなければいけません。

普通に使っている分にはArrayのように見える彼等ですが、チェーンの間にtappを差しこんでしまうとそこでチェーンが切れてしまうため、その先がエラーになってしまう場合があります。

どこまでがScopeやAssociationProxyのチェーンになっているか見極めてtappを差し込みましょう。

## おわりに

tappはオープンソースプロダクトです。みなさんからのpull requestをお待ちしています！

[https://github.com/esminc/tapp](https://github.com/esminc/tapp)
