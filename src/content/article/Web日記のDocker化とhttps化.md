---
title: 'Web日記のDocker化とhttps化'
slug: 'Web日記のDocker化とhttps化'
publishedOn: 2017-03-26
createdAt: 2017-03-26 09:37:27 +0900
updatedAt: 2017-03-27 01:21:15 +0900
---
このWeb日記は [kenchan/tdnm: tdnm is simple weblog tool](https://github.com/kenchan/tdnm) という自作のRailsアプリで、さすがにそろそろhttps化しないと恥ずかしいのでついでにDocker化もしてみた。

## Docker化する

RailsアプリのDocker化については、[jokerさんのQiita](http://qiita.com/joker1007) が参考になると思う。

最初は開発環境もDockerにしようかと思っていたのだけど、`Gemfile` にpath指定したいときに困る＆Dockerの旨味がなくなると感じたので、開発はローカルでやることにした。([2017年をキャッチアップする 三種の神器 / ghq_gem-src_and_bundler // Speaker Deck](https://speakerdeck.com/kenchan/ghq-gem-src-and-bundler))

本番環境のイメージについては、静的ファイルの扱いを一旦おいておいて、`bundle install`と`rails assets:precompile`をしたイメージを作ることにした。

ベースのイメージは `ruby:2.4-alpine` にして、必要な依存関係をとかをバシバシいれていく。

- nativeビルドで必要なものは事前に入れておく
- `bundle install --deployment` オプション便利
- `bundle install`とgccやmake等のインストールをワンラインでやるとイメージは小さくなるが、nativeビルドに失敗した時にやり直しに時間かかる

というあたりが発見だろうか。

現時点で最終的なイメージが130MBくらい。

[kenchan/tdnm - Docker Hub](https://hub.docker.com/r/kenchan/tdnm/)

## https-portalでhttps化する

https化は [docker で全自動 Let's encrypt - Qiita](http://qiita.com/kuboon/items/f424b84c718619460c6f) がめちゃくちゃ便利だった。

特に何も考えなくてもローカルでのオレオレ証明書での検証と、本番でのLet's encryptでの運用ができる。

一回ハマったのは、`FORCE_RENEW`オプションをつけたまま本番で何回かビルドしなおしたせいでLet's encrypt側の制限で証明書の取得が失敗するようになってしまったところ。たまたま過去のコンテナを雑に消したあとだったのでめっちゃ困った…結局、Railsを80番で直接出すことで1週間ほどをしのいだ。

## docker-composeとデプロイ

ここはめっちゃ雑にやっている。dockerだけをインストールしたVMをConoHaに立てていて、その中に本番用の`docker-compose.yml`がある。

デプロイは、瞬断しても困らないのでイメージをpullしてrestartという感じ。

Docker Cloud使ってみたかったんだけど、母艦をArch Linuxで立ててしまったのでサポート外だと言われて使えなかった…Ubuntuで作り直そうかな…

## バックアップとか

まだ特に何もやってないので、今壊れると何日か分のWeb日記消失することになる。これから考える。

## まとめ

先月から少しずつDocker化、Ruby2.4化、https化を進めてみた。モダンな感じには程遠いが、実際自分で試してみると辛いポイントや工夫のしどころがわかって勉強になった。
