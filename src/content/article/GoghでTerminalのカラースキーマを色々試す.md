---
title: 'GoghでTerminalのカラースキーマを色々試す'
slug: 'GoghでTerminalのカラースキーマを色々試す'
publishedOn: 2019-02-27
createdAt: 2019-02-27 15:08:16 +0900
updatedAt: 2020-03-22 08:08:23 +0900
---
みなさんはカラースキーマが好きですか？私は好きです。

[Mayccoll/Gogh](https://github.com/Mayccoll/Gogh) というTerminalのカラースキーマを追加してくれるツールがあり、これをつかっていろいろなカラースキーマを試している。

READMEなどにはgnome-terminalやelementary terminalが対応と書いてあるけど、実際に実行してみるとiTerm2にも対応してそうなのでMacOSの人でも使えるかもしれない。

カラースキーマの追加処理は、環境変数`$TERMINAL`を見ているようなので、tmuxなどのターミナルマルチプレクサで環境だと失敗することがある。

なお失敗したときのメッセージは以下の通りで、ここでiTerm2も使えそうというのを見つけたのだった。

```
Supported terminals:
   mintty and deriviates
   guake
   iTerm2
   elementary terminal (pantheon/elementary)
   mate-terminal
   gnome-terminal
   tilix
```

Github Pages にあるサイト [Gogh - Color Scheme](http://mayccoll.github.io/Gogh/) ではカラースキーマ毎のスクリーンショットがたくさんあるので、ここを眺めるだけでも楽しいかもしれない。

去年まではlightなテーマを全体的に使っていたんだけど、そろそろ目を労わったほうがいいとも思い、darkなテーマをたまに変えながら使っている。

今のお気に入りは「Google Dark」で、なんとなくみなれた配色なのが安心感があってよいw
