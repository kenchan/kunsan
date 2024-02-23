---
title: 'tmuxでよく使うやつは装飾キーを押しっぱでもいいようにbindしておく'
slug: 'tmuxでよく使うやつは装飾キーを押しっぱでもいいようにbindしておく'
publishedOn: 2018-10-30
createdAt: 2018-10-30 10:55:26 +0900
updatedAt: 2018-10-30 12:15:30 +0900
---
of the yearの中で、「便利だよ」って教えたやつをどんどん書いていく。

tmuxでのwindowの切り替えなど頻繁に行う操作は、Ctrlキー込みのbindもしておくと便利。設定方法はこんなかんじ。

```
bind ^c new-window
bind ^t last-window
bind ^n next-window
bind ^p previous-window
```

(例: [私のtmux.conf](https://github.com/kenchan/dotfiles/blob/8407a54c6af4b46ce483cace4cab0f5c4c7a29f7/tmux.conf#L18-L21)

prefixを「Ctrl+なにか(私の場合`t`)」にしている場合、たとえばnext-windowを呼び出すためには

+ `Ctrl+t`を押す
+ `Ctrl`を離す
+ `n`を押す

というかんじで、一度Ctrlを離す必要がある。

しかし、上記のように`^`込みのbindを設定しておくと、Ctrl押しっぱのまま`n`を押してもnext-windowが呼び出される。

ちょっとしたことなんだけど、Ctrl離すのが遅れたせいでうまく移動できなくなるのは地味にストレスなので、tmuxでうまく動けていない人をみるたびに布教してまわっている。
