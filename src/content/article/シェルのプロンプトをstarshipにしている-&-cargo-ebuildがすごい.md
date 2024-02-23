---
title: 'シェルのプロンプトをstarshipにしている & cargo-ebuildがすごい'
slug: 'シェルのプロンプトをstarshipにしている-&-cargo-ebuildがすごい'
publishedOn: 2019-10-07
createdAt: 2019-10-08 02:44:15 +0900
updatedAt: 2020-03-22 07:46:09 +0900
---
[fishを使いはじめた | けんちゃんくんさんのWeb日記](https://diary.shu-cream.net/2018/02/20/hello-fish-shell.html) にあるように、プロンプトは独自のものを作って使っていたのだけど、少し前から [starship/starship: ☄🌌️ The cross-shell prompt for astronauts.](https://github.com/starship/starship) というやつを使っていた。

しばらくデフォルトで使っていたのだけど、いろいろカスマイズできるところが増えてきたので、順番をかえたりいらないモジュールをオフったりしてみたりした。

設定はこちら [https://github.com/kenchan/dotfiles/blob/master/config/starship.toml](https://github.com/kenchan/dotfiles/blob/master/config/starship.toml)

また、gentooでstarshipを使おうと思うとoverlayに1つだけメンテされてそうなebuildがあるのだけど、せっかくなので自分で作ったりしている。

[kenchan/portage-overlay: My Personal Portage Overlay](https://github.com/kenchan/portage-overlay)

Rustのeclassって、必要なライブラリを依存するものも含めて全部をバージョン込みで記載する必要があって、このフォーマットがCargo.lockとも微妙に違うので、awkを使って掃き出させたりしていたんだけど、[cardoe/cargo-ebuild](https://github.com/cardoe/cargo-ebuild) っていうはちゃめちゃ便利そうなやつを見つけて興奮したりした。cargo-debみたいなのもあるらしく、Rustすごいなぁ。

ちなみに、awkのワンライナーはこんなかんじ。苦しい。

```shell
grep checksum Cargo.lock | grep -o -E " \S+ \S+ " | awk -F' ' '{print $1 "-" $2}'
```
