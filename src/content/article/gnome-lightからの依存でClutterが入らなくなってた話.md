---
title: 'gnome-lightからの依存でClutterが入らなくなってた話'
slug: 'gnome-lightからの依存でClutterが入らなくなってた話'
publishedOn: 2020-04-09
createdAt: 2020-04-10 00:57:02 +0900
updatedAt: 2020-04-10 00:57:02 +0900
---
日課のうどんワールドとdepcleanの後、[ChWick/gnomesome](https://github.com/ChWick/gnomesome) が動かなくなっているのに気付いて、GNOME Tweaksを見てみるとClutterがないよーというエラーが出ていた。

`eix -e clutter`を見てもたしかに入ってないし、`/var/log/emerge.log`を見るとdepcleanでも消えてることに気付いた。

とりあえず復旧させたいのだけど、Clutterを直接入れるのも違うよなーと思って、一番それっぽい`gnome-shell-extensions`を入れてお茶を濁す子にした。

`depclean`するときはよく画面を見ましょう。
