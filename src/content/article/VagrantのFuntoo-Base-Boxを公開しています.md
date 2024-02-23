---
title: 'VagrantのFuntoo Base Boxを公開しています'
slug: 'VagrantのFuntoo-Base-Boxを公開しています'
publishedOn: 2013-03-18
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
最近流行ってますねVagrant。

とにかく簡単にVMが作れちゃうので「これを機にGentooデビューしちゃおっかなー」という人が沢山いるということは想像に難くないところですし、「Funtooにしちゃおっかなー☆」という人も一定数いるに違いありませんよね。

ただ、[VagrantUp - www.funtoo.org](https://www.funtoo.org/wiki/VagrantUp)でリンクされているBase Boxはportage treeが1年前くらい前の物な上に、`emerge --sync; emerge -uDN world`するともれなく数時間コース、そして2、3回つまずくところがって、さらにgrubのメジャーバージョンが挙がってしまうという3重苦のような感じで、ここでも初めて使う人を寄せつけない感じになっております。

そこで数日前(20130307)に更新したBase BoxをDropboxで公開してみました。

[https://dl.dropbox.com/u/268888/funtoo-current-20130307.box](https://dl.dropbox.com/u/268888/funtoo-current-20130307.box)

変更点は、以下の通りです。

- 20130307時点のportage treeにsyncして`emerge -uDN world`済
- なぜか`MAKE_OPTS = -j9`となっていたので`MAKE_OPTS = -j3`に
- `eix`が入っている


さくっとfuntooを試してみたい方は`vagrant box add funtoo https://dl.dropbox.com/u/268888/funtoo-current-20130307.box`という感じでご利用ください。

今はknife-soloでごにょごにょやろうとしているんですが、knife-soloは`/etc/issue`を見てディストリビューションを判断する仕組みになっていて、funtooは`/etc/issue`が無いのでそのままで使えずに、面倒だからveeweeで作りなおすかーということころまでヤクの毛刈りが進んでいるところです。
