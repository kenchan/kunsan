---
title: 'tmuxの中でopenコマンドが実行できなくなっていた件'
slug: 'tmuxの中でopenコマンドが実行できなくなっていた件'
publishedOn: 2014-09-01
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2020-04-05 01:26:50 +0900
---
もともとは、capybaraの `save_and_open_page` でブラウザが開かない問題を追っていたら、どうもtmuxの中で`open`がエラーになるということに気づいて調べていた。

```shell-session
$ open -a safari hoge.html
LSOpenURLsWithRole() failed for the application /Applications/Safari.app with error -600 for the file /Users/kenchan/hoge.html.
```

インターネットでは｢tmux再起動したら治ったよ｣みたいなのんきなコメントが散見されるなかで、他の人は同じ環境で問題なさそうなので、自分の環境をちゃんと見始めていたら、tmuxの亡霊が1つ生き残ってることに気づいた。

`killall tmux`で成仏してもらったところ、今度は無事動くようになったのでよかったよかった。
