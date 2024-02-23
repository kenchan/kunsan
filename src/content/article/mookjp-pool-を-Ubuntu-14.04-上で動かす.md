---
title: 'mookjp/pool を Ubuntu 14.04 上で動かす'
slug: 'mookjp-pool-を-Ubuntu-14.04-上で動かす'
publishedOn: 2015-01-19
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
話題の [mookjp/pool](https://github.com/mookjp/pool) をなんとか使いたいと思って、社内の仮想環境上で動かしてみました。

ペパボの社内用サーバは [mizzy/maglica](https://github.com/mizzy/maglica) というツールを使って管理されてるんですが、まだCoreOSは実績がなかった気がするので、dockerが一番まともに動くであろう Ubuntu 14.04 上でチャレンジしたところ無事動いたのでした。

だいたいは、READMEにあるamazon linux用の手順でよくて、

- dockerとgitをapt-getで入れる
- dockerの実行ファイルをREADMEの手順通りに最新版にする
- `scripts/init_host_server` を実行する

というだけでとりあえず動きました。(2015/01/20現在)

社内ではCIにDroneを使っているプロジェクトがいくつかあるので、まずはその辺から使えるようにしていこうかと。

[prevs.io - Your environment, just one click](https://prevs.io/) のエンタープライズ用がでるのはまだまだ先だろうから、社内でカジュアルに使える環境があると便利なんじゃないかと思っています。

Dockerの周辺技術はぜんぜんキャッチアップできていなかったので、ちょうどいい機会だからいろいろ勉強しよう。
