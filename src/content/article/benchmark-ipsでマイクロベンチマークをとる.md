---
title: 'benchmark-ipsでマイクロベンチマークをとる'
slug: 'benchmark-ipsでマイクロベンチマークをとる'
publishedOn: 2022-12-01
createdAt: 2022-12-01 07:10:36 +0900
updatedAt: 2022-12-01 07:13:23 +0900
---
この記事は[🎄GMOペパボエンジニア Advent Calendar 2022](https://adventar.org/calendars/7784)1日目の記事です。今年のGMOペパボエンジニアによるアドベントカレンダーは「🎄」と「🎅」があり、こちらは🎄です。明日はSUZURI事業部の[@kurotaky](https://twitter.com/kurotaky)です。

GMOペパボ株式会社で技術責任者とEC事業部のシニアエンジニアリングリードをしている @kenchan です。普段の業務はエンジニアリングマジメントですが、エンジニアアドベントカレンダーなのでRubyの話を書きます。

Rubyには、コードの実行速度についてベンチマークをとるためのモジュールとして、 [benchmarkモジュール](https://docs.ruby-lang.org/ja/latest/class/Benchmark.html) が本体にバンドルされています。Benchmarkモジュールを使うことでコードの実行時間(CPU時間)を簡単に計測できて便利なのですが、[evanphx/benchmark-ips](https://github.com/evanphx/benchmark-ips) というライブラリを使うと、視覚的にわかりやすい出力を得ることができます。(ipsはiterations per secondの頭文字をとったもので、単位時間あたりにそのコードを何回実行できたかという指標です)

使い方は以下の通りです。今回は、二次元配列を一次元配列にする方法としてどういう方法が早いのかを調べてみます。実際のコードを見ると、benchmarkモジュールとほとんど同じ使い方ができることがわかるかと思います。

```ruby
require 'bundler/inline'

gemfile do
  source 'https://rubygems.org'

  gem 'benchmark-ips', require: 'benchmark/ips'
end

arrays = 100.times.map { 100.times.map { rand(100) } }

Benchmark.ips do |x|
  x.report('inject_and_concat') {
    arrays.inject([]) {|acc, array| acc.concat(array) }
  }
  x.report('flatten()') { arrays.flatten }
  x.report('flatten(1)') { arrays.flatten(1) }
  x.compare!
end
```

実行結果は以下の通りです。最初にウォームアップがあり、そのあとに実行結果、最後に速度の比較がでてきます。

```shell_session
❯ ruby -v
ruby 3.1.3p185 (2022-11-24 revision 1a6b16756e) [x86_64-linux]

❯ ruby inject_vs_flatten.rb
Warming up --------------------------------------
   inject_and_concat     5.020k i/100ms
           flatten()   179.000  i/100ms
          flatten(1)   633.000  i/100ms
Calculating -------------------------------------
   inject_and_concat     72.696k (± 6.7%) i/s -    366.460k in   5.067973s
           flatten()      1.961k (± 9.6%) i/s -      9.845k in   5.089034s
          flatten(1)      9.530k (± 7.0%) i/s -     47.475k in   5.007885s

Comparison:
   inject_and_concat:    72696.2 i/s
          flatten(1):     9530.2 i/s - 7.63x  (± 0.00) slower
           flatten():     1960.8 i/s - 37.08x  (± 0.00) slower

```

`inject`を使った方法は三次元以上の多次元配列を考慮していないので速度面では有利だとは思っていましたが、`flatten(1)`よりも早いのは面白いですね。

アプリケーションを書いていると、Rubyの表現力の高さから、ついつい自分自身が気持ちいい書きかたをしてしまうことがあります。その結果、APMなどで計測してみるとRubyのコードがボトルネックになってしまっていることも少なくありません。

そういったケースでは、今回紹介したようなモジュールやライブラリでマイクロベンチマークをとって、速度の改善に取り組むとよいのではないでしょうか。また、ベンチマークの結果はコードを変更する根拠にもなるので、パフォーマンスの改善をする際には必ず行うといいでしょう。
