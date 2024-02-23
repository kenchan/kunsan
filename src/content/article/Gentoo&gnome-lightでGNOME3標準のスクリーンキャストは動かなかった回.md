---
title: 'Gentoo&gnome-lightでGNOME3標準のスクリーンキャストは動かなかった回'
slug: 'Gentoo&gnome-lightでGNOME3標準のスクリーンキャストは動かなかった回'
publishedOn: 2019-02-26
createdAt: 2019-02-26 11:31:24 +0900
updatedAt: 2020-03-22 08:12:24 +0900
---
GNOME3には `Ctrl+Alt+Shift+r` で起動するスクリーンキャスト（レコーダー）があるんだけど、これがうまく動いていなかったので調べていた。

うんともすんとも言わないので困っていたのだけど、`journalctl -f` しながら上記コマンドを実行すると以下のようなログがでていた。

```shell-session
gnome-shell[4509]: ShellRecorder: failed to parse pipeline: no element "vp9enc"
gnome-shell[4509]: shell_recorder_close: assertion 'recorder->state != RECORDER_STATE_CLOSED' failed
````

`vp9enc` は `media-plugins/gst-plugins-vpx` に含まれているものらしいので、こいつをemergeしたら録画されるようになった。よかったよかった。
