---
title: 'irbrcを整理した'
slug: 'irbrcを整理した'
publishedOn: 2019-09-25
createdAt: 2019-09-25 23:30:14 +0900
updatedAt: 2019-09-25 23:30:14 +0900
---
同僚の [@ryuchan_00](https://twitter.com/ryuchan_00) から 「おまえのirbrcに書いてる `require`  は必要なのか？」ということ言われ、たしかにもういらんなーと思ってばっさり消した。歴史的にはこれらが必要だったころもあったのじゃ…

[all libraries required by default · kenchan/dotfiles@f4c7f28](https://github.com/kenchan/dotfiles/commit/f4c7f2893711773401e881f0674d424084610bc7)

`irb/ext/save-history` は手元(2.7.0-preview1)で試したところでは、 `IRB.conf[:SAVE_HISTORY]`  に値がはいっていたら機能が有効になるようだった。

ついでに、@hsbtから [janlelis/irbtools: Improvements for Ruby's IRB console 💎︎](https://github.com/janlelis/irbtools) というのを教えてもらって、 `copy_input` と `copy_output` は便利そうだなーと思って眺めてた。
