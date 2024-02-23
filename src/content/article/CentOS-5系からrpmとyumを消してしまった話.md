---
title: 'CentOS 5系からrpmとyumを消してしまった話'
slug: 'CentOS-5系からrpmとyumを消してしまった話'
publishedOn: 2012-07-03
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
すごく悲しい出来事が起きたのでご報告。

そもそもはcapybara-webkitを入れるためにQtの環境を作ろうとしたところ、[ドキュメントにはCentOS 6.2の話](https://github.com/thoughtbot/capybara-webkit/wiki/Installing-Qt-and-compiling-capybara-webkit)しかないので試しに同じ手順でやってみたのです。

そうすると、rpmで入っているsqlite3のバージョンが古くてうまくいかなかったので、sqlite3をアップグレードしようとしたのがよくなかった。

単純にアップグレードしようとしても「コンフリクトするよー」と言われてしまい、じゃあ消せばいいかと`yum remove sqlite3`を…いろいろ巻き添えになって消されそうだったんだけど、まあこの際一回パッケージを綺麗にしようと`y`を押してしまったら最後、rpmとyumまで消えてしまったのでした…

rpmがsqlite3に依存していて、yumがrpmに依存しているので結局ほぼ統べてのパッケージが消えてしまい、数分ほど放心状態に(テスト環境でホントによかった)(本番ではそんな雑に作業しないつもりだけど)。

とりあえずGoogle先生から[CentOS6.0でrpmをインストールする方法](https://www.polidog.jp/2011/09/27/centos6-0%E3%81%A7rpm%E3%82%92%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95/)というページを教えていただき、同じバージョンのCI環境をつかってrpmやyumを復旧したのでした。

で、結局capybara-webkitは普通にqt4-develを入れればよかったという落ちで、ほんとに涙目でした。みなさんもパッケージを消すときは気をつけましょう。

(ここから愚痴)
そうはいっても、やっぱりパッケージ管理システムが切腹できちゃまずいと思うんですよ。ちゃんと見ろとか、ダブルチェックとかそういう話にしてもしょうがないと思うんですよ。
たとえば、Gentooなら

```sh
$ sudo emerge -C portage
 * This action can remove important packages! In order to be safer, use
 * `emerge -pv --depclean <atom>` to check for reverse dependencies before
 * removing packages.
 * Not unmerging package sys-apps/portage-2.3.4-r4 since there is no valid
 * reason for Portage to unmerge itself.
```

という感じでそもそも消せないわけで、また一つCentOSが嫌いになったのでした。
