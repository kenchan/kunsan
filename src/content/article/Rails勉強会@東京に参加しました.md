---
title: 'Rails勉強会@東京に参加しました'
slug: 'Rails勉強会@東京に参加しました'
publishedOn: 2012-04-21
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
子供を連れてきてうるさくしていたのが私です…本当にすみませんでした…

もうちょっと持つかなぁと思ったのですが、子供1人は無理ですね。次回はみんな子供を連れてくればいいのでは？(ごめんなさい)

参加したセッションは、「Rails Engine」と「テストについて」の2つでした。

## Rails Engine

Rails Engineについて一家言あるような人はいなかったので、[RAILSCAST #277 Mountable Engines](https://railscasts.com/episodes/277-mountable-engines)を淡々を写経しながら議論していました。

### Q. EngineにするのとRailtieを継承したクラスを作ることの違いは？

EngineはRailtieを継承している。そして、EngineになるとRackのミドルウェアになる。
なので、Generatorを拡張するようなものはEngineにせずにRailtieを継承して作るのもあり。

### Q. assetsの下が他のEngineのassetsに影響したりしないの？

明示的に読みこまない限りない。たとえば、RailsAdminはbootstrapを使っているけど、それがRailsアプリケーションに影響を与えたら大変なことになる
(今はアプリケーション自体もEngineとして動作している)

### Q. exception\_handler.rb のファイルパスが間違ってますよね？

ascii castの日本語版だと間違ってるみたいです。あと、ファイルの中の改行もそのままだとsyntax errorなので一行に書きましょう。
(原文では正しくなってます)

### おまけ

Engineをrails newしたあと、.gitignoreにGemfile.lockが足されていたほうがいいような気がするんですがどうなんでしょ。

## テストについて

だいたいmoroへの質問コーナーになってしまっていて、もうちょっとやりようがあるんじゃないかなぁと思ったのでした。

## まとめ

実は初参加だったのですが、勉強会らしい勉強会に久し振りに参加したような気がします。
進行役 & 会場係の@takkanmありがとうございました。
