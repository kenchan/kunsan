---
title: 'GW2日目: tmuxを2.9にした'
slug: 'GW2日目-tmuxを2.9にした'
publishedOn: 2019-04-28
createdAt: 2019-04-29 06:26:14 +0900
updatedAt: 2020-03-22 08:01:08 +0900
---
息子が近くのカードショップでポケカのジムバトルに出ている間、ドトールでtmux 2.9ではいった非互換な変更の対応をしてた。

いわゆる `*-bg` や `*- fg` 、 `*-attr` あたりが軒並消滅していて、かわりに `*-style` を使えというやつ。

[Tmux 2.8.X to 2.9.X migration · Issue #1689 · tmux/tmux](https://github.com/tmux/tmux/issues/1689) や、ここからリンクされているwikiをみると完全理解できるのでおすすめ。

あわせて `man tmux` をながめていたら、実は色指定は256色が使えるってことを知ったので、こんなふうにしてみた。

```shell
set -g status-style "bg=colour23 fg=white"
```

正直、256色パレットの23番目っていわれても全然わからないから悩ましいところではあるけど、色見がよければそれでよしということで。

ついでに、設定の棚卸もしてだいぶすっきりしたのでよかったよかった。

[dotfiles/tmux.conf at 5c24b3a54b072f4137a85cd7d7547403d3f76360 · kenchan/dotfiles](https://github.com/kenchan/dotfiles/blob/5c24b3a54b072f4137a85cd7d7547403d3f76360/tmux.conf)
