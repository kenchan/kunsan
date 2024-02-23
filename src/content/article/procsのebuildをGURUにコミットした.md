---
title: 'procsのebuildをGURUにコミットした'
slug: 'procsのebuildをGURUにコミットした'
publishedOn: 2020-04-10
createdAt: 2020-04-10 11:59:12 +0900
updatedAt: 2020-04-10 11:59:12 +0900
---
Rustで書かれたモダン`ps`こと[dalance/procs](https://github.com/dalance/procs)のebuildファイルをGURUにコミットした。

Rustのツールをebuildにするのは[cardoe/cargo-ebuild](https://github.com/cardoe/cargo-ebuild)というコマンドを使うと一撃でできるのだけど、出来上がったebuildファイルにコメントがあるとおり、このツールではライセンスのリストがうまく出せないことがある。

`cargo-ebuild`が出力するebuildファイルのLICENSEの部分は、リンクする全てのライブラリのライセンスを集めてきて出してくれるのだけど、

- 2つのライセンスが設定されている場合は両方でてくるが、実際にはどちらか一方となっているものも多い
- portageのLICENSE名と必ずしも一致していない

という問題がある。

最終的にどういうライセンスにすればよいかは、[onur/cargo-license](https://github.com/onur/cargo-license)というものを使えと書いてあって、これがメチャクチャ便利…すごい。これの出力をみながら、最小限のANDをとっていくとよさそう。

portageのライセンス名とのマッチングは [License groups - Gentoo Wiki](https://wiki.gentoo.org/wiki/License_groups) このあたりを見ながらマッチングしていけば良さそう。procsのebuildを作るにあたり困ったのは、`BSD-3-Clause`というライセンスで、これはportage的には`BSD`というライセンスだったので直したりした。
