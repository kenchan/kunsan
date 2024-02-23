---
title: 'Jenkins Plugin(JRuby)の勉強会をしました'
slug: 'Jenkins-Plugin(JRuby)の勉強会をしました'
publishedOn: 2012-04-16
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
昨年から細々と続けている社内勉強会の60分一本勝負で、(デブサミで川口さんとnahiさんからいろいろ聞いてきた)hsbtにJenkinsプラグインをJRubyで書く方法について教えてもらいました。

私はそもそもJavaが入ってなかったので次のような感じでいろいろ入れるところからスタート。

<script src="https://gist.github.com/kenchan/2398032.js"></script>

最後に入れている[jpi](https://github.com/jenkinsci/jenkins.rb)がJRubyでJenkins Pluginを作るためのgemだそうな。

手順としては、

+ `jpi new hogehgoe`で雛形を生成
+ `jpi generate hogehoge fugafuga`としてできたファイルを編集
+ `jpi build`でパッケージング
+ `jpi server`で作ったプラグインが入ったJenkinsが起動

という感じで、`generate hogehoge`がけっこう肝な感じでした。

Generatorは、いまのところ次の6つがあるんですが、後半はhsbtもよくわからないとのこと。

- publisher (設定画面で「ビルド後の処理」に入るもの)
- builder (設定画面で「ビルド」に入るもの)
- wrapper (設定画面で「ビルド環境」に入るもの)
- node\_property
- run\_listener
- computer\_listener

まずは、上の3つをいろいろ使ってみたり、いまのところJRubyで書かれた唯一のプラグインである[rvm-plugin](https://github.com/jenkinsci/rvm-plugin)を見ながらエスパーしたり、「Rubyで書けるならこう書きたい！」みたいなのを考えてみようかという話をしていました。

あとは、Gentooで`jpi server`が動かない問題を調査して、pull requestはhsbt(と奥さんの英語力)に託したりと、なかなか有意義な勉強会でした。
