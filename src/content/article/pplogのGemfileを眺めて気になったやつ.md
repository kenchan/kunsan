---
title: 'pplogのGemfileを眺めて気になったやつ'
slug: 'pplogのGemfileを眺めて気になったやつ'
publishedOn: 2015-01-07
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
[pplogのGemfile - pblog](https://ppworks.hatenablog.jp/entry/2015/01/06/073003) が公開されていたので眺めながら、気になったやつを調べてみました。

## [garb](https://github.com/Sija/garb)

Google Analytics API の Ruby クライアント。管理画面とかで使ってるんですかね。

数値だけもってきて他のメトリクスと合わせて表示できると便利そうなのであとで試してみよう。

## [inuicon-rails](https://github.com/taea/inuicon-rails)

なんだこれ？と思ったらWeb Font!!!

便利だ。

## [dekiru](https://github.com/mataki/dekiru)

便利なヘルパーの集合。[dekiru/controller_additions.rb at master · mataki/dekiru](https://github.com/mataki/dekiru/blob/master/lib/dekiru/controller_additions.rb) が便利そうでした。

## [uuidtools](https://github.com/sporkmonger/uuidtools)

大体の場合は [singleton method SecureRandom.uuid](https://rurema.clear-code.com/2.2.0/method/SecureRandom/s/uuid.html) でよいと思うのですが、なにかの事情で使わないといけなくなったときのために覚えておきます。

## [brakeman](https://github.com/presidentbeef/brakeman)

本日のスターしてたわー大賞。お仕事のアプリにも使ってみよう。

## おわりに

ちょっと古いけど [IdobataのGemfile](https://gist.github.com/kakutani/43b9f42197ab002fcdf8) もどうぞ。(更新されたりしないかな？)
