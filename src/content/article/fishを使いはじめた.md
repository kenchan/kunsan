---
title: 'fishを使いはじめた'
slug: 'fishを使いはじめた'
publishedOn: 2018-02-20
createdAt: 2018-02-21 03:45:32 +0900
updatedAt: 2020-03-22 08:17:38 +0900
---
EC事業部の中では [yinm(@_yinm_)さん | Twitter](https://twitter.com/_yinm_) が中心となってエンジニア以外の職種に啓蒙してくれているんだけど、一方でエンジニアにfish使ってる人が少なすぎてローカル環境でfish固有の問題がおきたときに解決するのが大変なので少し困ってました。ついでに自分も少し環境を変えてみようという気持ちが高まってきたので、えいっと移行しました。

[zsh から fish にした - HsbtDiary(2017-04-21)](https://www.hsbt.org/diary/20170421.html) をみたりしながらふむふむーとhistoryの移行をしたり、プラグインはfishermanでいくつか入れてみたり。

「homebrewでインストールしたfishにchshしていいのか?」というhsbtの指摘はその通りだと思ったので、同じようにterminal.appで設定することにした。ただ、そうするとtmuxが起動時に`$SHELL`で起動してしまうので、[Mac用のtmux.conf](https://github.com/kenchan/dotfiles/blob/master/dot.tmux.darwin.conf)に以下の設定を入れたんだけどださい。なんかいい方法ないですか?

```shell
if 'test -x /usr/local/bin/fish' 'set -g default-shell /usr/local/bin/fish'
```

プロンプトについてはzshのときのをだいたい移植してfishermanでインストールできるようにしてそれを使うことに。

https://github.com/kenchan/fish-prompt

これに加えて、config.fishに以下の設定を入れて、フルパスがでるようにしてる。

```shell
set -g fish_prompt_pwd_dir_length 0
```

このプロンプトは結構気にいっていて、

- 2段にすることでプロンプトの開始位置がそろうので、左右の目線の移動が減る
- ターミナルをそのままコピペすることで、共有する際に必要な情報がだいたい全部でてる

というところが便利だと思ってる。`$status`をどっかにだしたいとは思ってるんだけどあまり妙案がない。色を変えるだけだとテキストとしてコピペしたときに情報が失なわれちゃうんだよなぁ…

ちょっと困っていることとしては、設定ファイルのバージョン管理で、 `.config/fish/` の中は `config.fish` と `fishfile` と自分で作ったfunctionsやconf.dだけを管理したいんだけど、fishermanがこの下にぶちまけるのでつらいということ。( see [dotfiles/dot.config at master · kenchan/dotfiles](https://github.com/kenchan/dotfiles/tree/master/dot.config) )

なんか妙案があったら教えてください。そもそもツールによって`.config`配下の使いっぷりがアレなので、ignoreが糞めんどくさいという問題もある。

あと地味に混乱したこととして、私は`xargs -I`のプレースホルダを`{}`にする癖(`xargs -I{}`)があって、fishだと `{}` なにかに解釈されちゃってうまくいかなかった。今は `xargs -I[]` とするようにしてるんだけど、みんなこの文字なににしてるんだろう。
