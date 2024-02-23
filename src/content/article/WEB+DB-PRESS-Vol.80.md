---
title: 'WEB+DB PRESS Vol.80'
slug: 'WEB+DB-PRESS-Vol.80'
publishedOn: 2014-05-03
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
電子書籍版が出たようですが、やっぱり紙だよね！ということで紙を買っています。

一通り目を通してから、テスト駆動インフラを写経したり、西尾さんのやつをじっくり読んだりしました。

## テスト駆動インフラ

かなりエクストリームな内容でとてもよかったですね。

Gentooで写経していたのですが、ちょっと気をつけないといけないのは2点くらい。

- Vagrantを普通に入れようとするとバージョンが1.4なのと後述の理由から問題がおきるので、[overlayからvagrant-bin](https://gpo.zugaina.org/app-emulation/vagrant-bin)をいれたほうがよい
- ルート証明書のインストールは不要

Vagrantはバージョンが古かったのもあるのか、Rubyの環境をrbenvなどで作ってしまっていると、serverspec経由で実行されるVagrantのgem pathがrbenvのものになってしまい、必要なgemがロードできないって問題がおきたのでした。バイナリパッケージの場合は内部に全て必要なgemが内蔵されていて、かつgem pathもrbenvの影響をうけないようなのでうまくいくみたい。

ルート証明書はMacでだけ必要とかそういうかんじなんですかね？とりあえず該当のパッケージはなかったしなくても大丈夫っぽいです。

こういう特集は一冊の本にもできるだろうけど、それをしてしまうと出版までも時間がかかるし、まさに雑誌ならではというかんじでよいですね。

やってみると、DigitalOceanとWercker、GitHubの組み合わせのすごさを実感できました。

## エンジニアの学び方

普段、こういうものってすごく言語化が難しいんですが、3軸と3つのフェーズに整理して、さらにさまざま状況でどう目標を作って学んでいくことができるのかという例まで示されているのはすごいですね。

特集の最後にある通り、コーティングを支える技術のコラムがさらに濃くなったような内容に満足です。

<iframe src="https://rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&npa=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=shucreamnet-22&o=9&p=8&l=as4&m=amazon&f=ifr&ref=ss_til&asins=4774163988" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
