---
title: 'gigをセットアップ'
slug: 'gigをセットアップ'
publishedOn: 2012-02-06
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
hsbtの[gig(github irc gateway)を使い始めた](https://www.hsbt.org/diary/20120113.html)を読んでなかなか良さそうだったので、自分のサーバにも入れてみました。

そのまま1.9.2で起動したみたら、daemonizeするときのSTDIN.reopenでエラーで落ちてしまうので、$stdinにファイルディスクリプタを代入するようにして起動してみました。

あとで理由を調べてフィードバックしたいところ。

ひとまず、githubのwatchとかfollowとかを見る癖がつくのはだいぶいい感じですね。
