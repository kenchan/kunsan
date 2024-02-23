---
title: 'trailertrash.vimをやめてALE組み込みのfixerを使うようにした'
slug: 'trailertrash.vimをやめてALE組み込みのfixerを使うようにした'
publishedOn: 2019-10-15
createdAt: 2019-10-15 16:11:48 +0900
updatedAt: 2019-10-15 16:15:51 +0900
---
[csexton/trailertrash.vim](https://github.com/csexton/trailertrash.vim) というvimプラグインがある。これは名前の通り、行末の余分な空白を視覚化したり(自動で)消したりすることができるもので長らく愛用していた。

最近、pythonやgoを読み書きする機会が増えてきたので(昨年比)環境を見直していたところ、[dense-analysis/ale](https://github.com/dense-analysis/ale) の組み込みのfixerで行末空白を削除してくれるやつがあることに気付いた。

設定は[ALEのREADMEにある設定例](https://github.com/dense-analysis/ale#2ii-fixing)のままで、全ファイルに2つのfixerを設定するといいかんじに動いてくれた。

さらにおまけとして、`let g:ale_fix_on_save = 1` と [907th/vim-auto-save](https://github.com/907th/vim-auto-save)、各言語のlintツールのfixerを全部有効にすると、書いてるそばからどんどんfixされてこれが令和時代の開発…という気持ちになったのであった。
