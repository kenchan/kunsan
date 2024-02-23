---
title: 'Asakusa.rb 459回'
slug: 'Asakusa.rb-459回'
publishedOn: 2018-05-01
createdAt: 2018-05-02 01:33:34 +0900
updatedAt: 2018-05-02 01:33:34 +0900
---
ActiveDecoratorで一つ困り事があったので相談したくて、とてもとても久し振りに参加しました。

- ActionController::APIはBaseからモジュールを減らすことで高速化を測っているんだけど、減らされたモジュールにActiveDecoratorが依存している
- jbuilderを使うとそのモジュールがAC::APIにも入る
- Rails 5.0だと :action_controller_api というhookがないので、現在のActiveDecoratorではモジュールが差しこまれない
- 5.0のときは :actoin_contoller のhookでAC::APIにもActiveDecoratorのモジュールを入れたい。だけど、jbuilderがないときは必要なモジュールも入れないといけない。

PRとしては既にあって( [Improve ActionController::API support. by frodsan · Pull Request #90 · amatsuda/active_decorator](https://github.com/amatsuda/active_decorator/pull/90) )、これどうですか?という話をしていた。

あとは、statesmanにMySQLかつ特定の条件下でデッドロックがおきる問題の再現ケースを作ったりしておしまい。
