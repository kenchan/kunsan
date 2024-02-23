---
title: 'git switch、restoreの補完がfishで効かないのでmasterからcompletionsをもってくる'
slug: 'git-switch、restoreの補完がfishで効かないのでmasterからcompletionsをもってくる'
publishedOn: 2019-09-24
createdAt: 2019-09-24 09:17:00 +0900
updatedAt: 2020-03-22 07:59:58 +0900
---
先週からgitの新しいサブコマンドを使うようにaliasを変更したり、手で打つときに意識したりしていたのだけど、fishだとブランチ名の補完が効かないことに気付いてしまった。

幸いにも、masterには対応したものがあったので( [fish-shell/git.fish at master · fish-shell/fish-shell](https://github.com/fish-shell/fish-shell/blob/master/share/completions/git.fish) )、これをまるっとcloneしてきて

```shell
cp share/completions/git.fish ~/.config/fish/completions/ 
```

をして一旦おしまい。3.10のリリースまでこれでやっていきましょう。

## 2019/09/25 追記

`fish_update_completions` というコマンドを教えてもらった！これはman(1)からcompletionsを生成してくれる。
しかし、 `git switch <tab>` のようなサブコマンドの補完はmanでは表現できないので、上のようにfishが独自に拡張してくているのだ！(`man(1)` では `git-switch`といったコマンドになっている)
