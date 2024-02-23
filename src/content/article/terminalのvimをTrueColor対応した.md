---
title: 'terminalのvimをTrueColor対応した'
slug: 'terminalのvimをTrueColor対応した'
publishedOn: 2019-07-03
createdAt: 2019-07-04 02:14:04 +0900
updatedAt: 2019-07-04 02:14:39 +0900
---
カラースキーマいじりをしていたところ、スクショの色見とだいぶ違うと気付いてしまった。原因はTrueColorがでていないことだったので、以下のコミットで修正した。

[[vim] True Color Support · kenchan/dotfiles@cda8f17](https://github.com/kenchan/dotfiles/commit/cda8f174a55ea8acb631601c7e07e78bfd13b949#diff-7750e397ddc103150f7d1db02d07ca7f)

自分の環境では、`set termguicolors` したら色が無になってしまったので調べていたら、 `set t_Co=256` を消したらいいかんじになったのでこれで。

termの変更はべつにいらなかったけどコミットしてしまった。失敗。

カラースキーマは [Nord](https://www.nordtheme.com/) というやつにした。わりと今っぽくて（？）満足。
