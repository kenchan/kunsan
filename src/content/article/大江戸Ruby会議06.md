---
title: '大江戸Ruby会議06'
slug: '大江戸Ruby会議06'
publishedOn: 2017-03-20
createdAt: 2017-03-21 03:59:26 +0900
updatedAt: 2017-03-21 13:36:37 +0900
---
[大江戸Ruby会議06](http://regional.rubykaigi.org/oedo06/) という素晴らしい会に参加してきたので感想等。

## Docker時代の分散RSpec環境の作り方

[Docker時代の分散RSpec環境の作り方 // Speaker Deck](https://speakerdeck.com/joker1007/dockershi-dai-falsefen-san-rspechuan-jing-falsezuo-rifang)

起床に微妙に失敗したので途中から。

jokerさんの新作の紹介。テストの分散実行は、以下の3点がポイントだと考えている。

- アプリケーション（とテスト）の実行環境のポータビリティ
- テストを分散させるルール
- テスト結果の集約

それらの課題について、まずはDockerを前提とすることでポータビリティを確保。その上で、ECS・スポットインスタンス・S3をうまく利用することによって、分散ルールを単純にした上で妥当な金額の金で殴るという発想が面白かった。

## My Open Source Journey

[My Open Source Journey // Speaker Deck](https://speakerdeck.com/juanitofatas/my-open-source-journey)

3月から恵比寿に住むC社のjuanitoさん。

自身がどのようにOSS開発とか関わってきたのかを踏まえて、4つのフェーズ（？）においてどのように振る舞うとよいか・何を気をつけるべきかというのがとても参考になった。

また仕事とOSSについて、オープンにできるところを見つけて積極的にやっていくことは価値があり、今の自分にも求められているところだなと強く感じたのでやっていこう。

## Text Editing in Ruby

[shugo/oedo06: Slides for oedo06](https://github.com/shugo/oedo06)

(宇宙の均衡のために)Rubyでエディタを作っていて、プレゼンも自作エディタのプラグインという圧倒的な実装力を目の当たりに。

自分がほしいと思ったものをすぐに手を動かして作り、その過程でRubyの知らなかった機能を見つけたり、処理系への改善提案までやれるという、圧倒的で理想的な開発だなと強く感じた。

## Ruby考古学II 1993~1997

基調講演のsorahさんが産まれるまでのRubyの歴史を掘り起こすということだったが、初期のRubyの文法は今のものはかなり違っていたというのがとても興味深かった。

今の文法になった時期や、コミッタ陣がMLに現れた時期など、こういう機会でないと知ることができない歴史ばかりで大満足。

また、yuguiさんの以下のツイートはとても考えさせられた。

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">我々のソフトウェア考古学にはメールアーカイブは重要な道具だが、slackは次世代にそういったものを残してくれるようになるであろうか</p>&mdash; Yuki Yugui Sonoda (@yugui) <a href="https://twitter.com/yugui/status/843698007174336512">2017年3月20日</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## 多相型、推論、Ruby

[多相型、推論、Ruby // Speaker Deck](https://speakerdeck.com/soutaro/duo-xiang-xing-tui-lun-ruby)

Rubyに型を入れるために「何を犠牲にするのか」というのを、理想の型システムから考えて落としところを見つけていく過程がとてもおもしろかった。

とても丁寧に説明してくださっていたので、自分でも型がちょっとわかった気になってしまった。

その中でも、「anyを導入した上で型を絶対に書かないということは、anyの広がりをとめることができない」という話は、それこそ言われればその通りなんだけどなるほど～と口に出しそうになってしまった。

## esaとRubyistと私

[esaとRubyistとわたし // Speaker Deck](https://speakerdeck.com/ken_c_lo/esatorubyisttowatasi)

pplog、いつもお世話になっています！

デザイナーとしてというよりは、PdMとしてとても大事なことがたくさん詰まっているように感じて、資料公開されたら社の人たちに配って歩きたい。

## Rationalを（もうちょっと）最適化してみた

こういった改善が日々のRubyの速度改善を支えてると思うと「本当にありがとうございます」という気持ちが溢れてくる。

Rationalは日常的には使わない側の人なので、直接の恩恵は受けられないとのことだったが、改善のプロセスを含めて勉強になった。

## フルタイムコミッター対戦

超難問早押しクイズ大会。難しすぎるけど、コミッタ陣が唸る姿を眺めて楽しかったw

このために作ったシステムも面白そうだ。[asakusarb/hayaoshi: 大江戸Ruby会議06の『フルタイムコミッター大戦』で使用した早押しクイズアプリ](https://github.com/asakusarb/hayaoshi)

## 高濃度雑談

[thats-done-2017-03-20-oedork06-ujihisa - Google スライド](https://docs.google.com/presentation/d/1diEe7qYLjkHrjKoPNgyhlLItxV6ahnNgsfXdId0EmNI/edit#slide=id.p)

タイトルと導入の通りかなりのカオス。Cooking for Geeks と 発酵の技法 はやっぱり読まねばなと思った。

会場に [thincaさん](https://twitter.com/thinca) がいたそうなので、いつも一方的にお世話になっているとご挨拶したかった…次の機会に。

## Ruby 2.4 Internals

笹田さんのドヤリングタイム。

Cは全くかけないといってもいいので理解が追いつかないところがおおいけど、いつか少しはわかるようになりたいな。

## 如何にして若き天才コミッタは生まれるのか

内輪のノリの中にしっかりとしたメッセージがあって、内容だけじゃなくてそのスタイルにもとても感動した。

育成においては、「密度を上げて時間でなぐる」というのは本当にそのとおりだと強く感じたので、身近なところからはじめていこうと思った。

あと、マジで優秀な若者たちは本当にやばいという危機感が強く残った…

## Keynote

[Keynote (Oedo RubyKaigi 06) // Speaker Deck](https://speakerdeck.com/sorah/keynote-oedo-rubykaigi-06)

sorah氏の自慢話。rosylilly氏の話と合わせて聞くことで、ただの自慢ではなくて、正しく半生のふりかえりになったように思った。

インターネットを始める話、すごすぎて振り切られたけど応援していますｗ

## まとめ

生活発表会という大江戸Ruby会議のコンセプト（？）はとても最高で、いつも最高の発表が聞けてありがとうございます。

そう。生活の中でこれだけのことをやっている人たちがいるってのをたまに忘れてしまうことがあるので、自分も生活発表できるような生活をしていかないとなと参加する度に思う。

去年くらいからいろいろやって軸がなくなってきたり、なんか文章やコードを継続的に書くこともできていないので、このあたりで一回リセットしてやりなおしていくぞ！

毎回ですが、こんな素晴らしい会をひらいてくれているAsakusa.rbのみなさんありがとうございました！
