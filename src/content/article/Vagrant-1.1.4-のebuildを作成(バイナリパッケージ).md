---
title: 'Vagrant 1.1.4 のebuildを作成(バイナリパッケージ)'
slug: 'Vagrant-1.1.4-のebuildを作成(バイナリパッケージ)'
publishedOn: 2013-03-26
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
1.x はgemでリリースされないそうなので、ダウンロードページにあるバイナリパッケージ的なもののebuildを [esminc/esm-overlay](https://github.com/esminc/esm-overlay) で公開しました。

`emerge vagrant-bin`でインストールできます。

[https://github.com/esminc/esm-overlay/pull/3](https://github.com/esminc/esm-overlay/pull/3) にもあるようにちょっとよくわからない警告がでるのですが、とりあえず`vagrant up`は問題なくできているので大丈夫ですかね…

公式の方でも、1.1系がマスクされた状態であるので、それまでの繋ぎとしてお使いください。
