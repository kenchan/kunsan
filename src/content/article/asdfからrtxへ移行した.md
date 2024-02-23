---
title: 'asdfからrtxへ移行した'
slug: 'asdfからrtxへ移行した'
publishedOn: 2023-02-27
createdAt: 2023-02-26 15:15:26 +0900
updatedAt: 2023-02-27 02:29:46 +0900
---
[rtxを使ってstarship+asdfのプロンプトの表示が遅くなる問題を解決する - ぶていのログでぶログ](https://tech.buty4649.net/entry/2023/02/05/231401) を見て、プロンプトの遅さが気になるほどではなかったが、Rustで書かれたツールは正義なので入れることにした。

書かれている`rtx global`の挙動など、細いところがasdfよりも使いやすくなっていてよいし、早いような気もするのでうれしい。

移行にあたっては、たしかにasdfのディレクトリをそのままもっていっても有効なランタイムとして認識されないので調べていると、[READMEのRuntime Cache](https://github.com/jdxcode/rtx#runtime-cache)のところに答えが書かれていた。言語毎の固有の設定をバージョンのディレクトリ配下にMessagePack形式で保存していて、有効なランタイムかどうはこれがあるかどうかをチェックしているようだ。

```shell-session
❯ pwd
/home/kenchan/.local/share/rtx/installs/ruby/3.2.1

❯ ls .rtxconf.msgpack
.rtxconf.msgpack
```

試しにこのファイルを同じように作ってみると有効なランタイムとして認識されたので、えいっと作ってまわるとそのまま移行できそうな予感。ただ、`rtxconf.msgpack`の中身はrtxで使われてるランタイムプラグインに依存していそうなので、rtxを経由しないで作るのはちょっと微妙かなぁ。

ひとまず、必要なランタイムは必要になったときに入れることにして移行はおわり。移行作業でのdotfilesやセットアップスクリプトの変更点、ついでにつくったスニペットを置いておく。

- https://github.com/kenchan/dotfiles/commit/e969c7483716065869e5aef685697f0b85b56bc1
- https://github.com/kenchan/wsl-setup/commit/3668b3d60aa3e3b2d6d6b061176434b94728bf08
- https://github.com/kenchan/snippets/blob/48e5e0e0ad4fc357ca59858b91a2548532cc4b50/rtx.yml
