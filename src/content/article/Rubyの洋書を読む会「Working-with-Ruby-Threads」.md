---
title: 'Rubyの洋書を読む会「Working with Ruby Threads」'
slug: 'Rubyの洋書を読む会「Working-with-Ruby-Threads」'
publishedOn: 2015-02-17
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
火曜日はRubyの洋書を読む会の日。今年に入ってからは [The Pragmatic Bookshelf | Working with Ruby Threads](https://pragprog.com/book/jsthreads/working-with-ruby-threads) を読んでいます。

今日はGILをもうちょっと詳しくという感じで、別にいじわるをしたくてGILを導入しているわけではなくて、これに私たちのプログラムが安全に実行できて、レースコンディションに関わる複雑なバグが起きないようにしてくれているんだよ、という話でした。

IO待ちになったスレッドはGILを勝手に開放するってのは当たり前なんだろうけどなるほどなーと思いました。
