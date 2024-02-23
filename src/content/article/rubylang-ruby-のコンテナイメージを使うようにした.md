---
title: 'rubylang/ruby のコンテナイメージを使うようにした'
slug: 'rubylang-ruby-のコンテナイメージを使うようにした'
publishedOn: 2019-01-29
createdAt: 2019-01-29 14:35:31 +0900
updatedAt: 2019-01-29 14:35:31 +0900
---
<blockquote class="twitter-tweet" data-conversation="none" data-lang="ja"><p lang="ja" dir="ltr">ruby:2.5.3 は Docker 社が勝手に作ってるやつなんですよ。<br>ruby core team が作ってるイメージはこっちです <a href="https://t.co/rmkeRQwtfH">https://t.co/rmkeRQwtfH</a></p>&mdash; みょうが (@mrkn) <a href="https://twitter.com/mrkn/status/1088323198767095808?ref_src=twsrc%5Etfw">2019年1月24日</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

というのを見て、ほほーと思ってWeb日記を動かしているコンテナのベースイメージをこちらにした。

イメージ自体のファイルサイズはそれなりに増えてしまうけど、gfxさんの言っていたbundlerと環境変数の問題は自分もたまに困っていたので丁度よかった。

ついでに、Docker HubのAutomated buildが遅くて困っていたので、CircleCIの workflowsでbuildとpushをするようにしたり。ドキュメントや例をみればさくっとできるんだけど、インデントを間違えてるのが気付きにくいのがYAMLの限界だ。
