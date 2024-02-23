---
title: 'emergeしたら草を生やす'
slug: 'emergeしたら草を生やす'
publishedOn: 2019-02-22
createdAt: 2019-02-22 08:35:38 +0900
updatedAt: 2020-03-22 08:09:49 +0900
---
**追記: この方法は致命的な問題があったので [emergeしたら草を生やす Part2 | けんちゃんくんさんのWeb日記](https://diary.shu-cream.net/2019/07/09/grass-grass-grass-grass.html) を見てください。**

今年の1月から、4年ぶりくらいに仕事のマシンをGentoo Linuxにしている。(最近のペパボの開発環境についてはこちら [GMO ペパボの社内IT環境 2019 - ペパボテックブログ](https://tech.pepabo.com/2019/01/25/pepabo-corporate-it-2019/) )

GentooはPortageというパッケージ管理システムを使っていて、パッケージのインストールなどは `emerge` というコマンドを使って行うようになっている。`emerge`を使ったパッケージインストールは [Ebuild Functions – Gentoo Development Guide](https://devmanual.gentoo.org/ebuild-writing/functions/index.html) にあるようなフローで進んでいき、それぞれにフックポイントがある。

そこで、インストールが成功したら [Pixela](https://pixe.la/) に草を生やすようにしてみた。

グローバルなフックは [Handbook:AMD64/Portage/Advanced - Gentoo Wiki](https://wiki.gentoo.org/wiki/Handbook:AMD64/Portage/Advanced) にあるように `/etc/portage/bashrc` に特定の関数を定義すればよいらしく、つまり以下のようなファイルを作っておけばOK。(事前にpixe.laのチュートリアルなどを済ませてグラフまで作っておくこと)

```shell
#!/bin/bash

function pkg_postinst() {
  curl -X PUT https://pixe.la/v1/users/kenchan/graphs/emerge-count/increment -H 'X-USER-TOKEN:{ひみつのとーくん}' -H 'Content-Length:0'
}
```

昨日から飛ばすようにしたので、今のところこんなかんじ。

[https://pixe.la/v1/users/kenchan/graphs/emerge-count](https://pixe.la/v1/users/kenchan/graphs/emerge-count)

毎日うどんワールドすれば大草原不可避。よかったですね。
