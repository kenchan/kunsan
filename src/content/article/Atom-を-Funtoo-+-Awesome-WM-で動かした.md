---
title: 'Atom を Funtoo + Awesome WM で動かした'
slug: 'Atom-を-Funtoo-+-Awesome-WM-で動かした'
publishedOn: 2014-05-07
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
昨日寝ようとしたところで公開されてしまったので、とりあえずコンパイルして動かして寝ようかと思ったけど動かなかったのが、一晩したら動くようになっていた。

<blockquote class="twitter-tweet" lang="en"><p>Gentoo(Funtoo)+AwesomeWMでAtom動かそうとしたけどだめだったので寝ます…( libudev.so.0 がなかったのでとりえあえず libudev.so を symlinkしてみて、次は /dev/fd/3 になにかを書きこもうとしてセグフォ(ここまで))</p>&mdash; Kenichi TAKAHASHI (@kenchan) <a href="https://twitter.com/kenchan/statuses/463711243367243777">May 6, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

なんか、とくになにもしなくても動く人がいたりと謎な感じなんだけど、まずは動いたので満足。

ちょっとソースコードを読んだりして

<blockquote class="twitter-tweet" lang="en"><p>Linuxの場合は script/grunt install に INSTALL_PREFIXという環境変数でディレクトリを渡せば usr/local 以外にはいるみたい (/usr/local/share/atom に入るだけなのであまり気にしなくてもよさそうだけど)</p>&mdash; Kenichi TAKAHASHI (@kenchan) <a href="https://twitter.com/kenchan/statuses/463711923792400384">May 6, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

こういうのを見つけたりしていた。

そろそろモダンなエディタを使ってみたいのでしらばく使ってみようかな。
