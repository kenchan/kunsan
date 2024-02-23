---
title: 'GentooにghqをインストールするにはGURUが便利'
slug: 'GentooにghqをインストールするにはGURUが便利'
publishedOn: 2020-03-16
createdAt: 2020-03-16 13:32:20 +0900
updatedAt: 2020-03-22 07:56:07 +0900
---
Gentooのパッケージ管理システムであるportageは、野良パッケージリポジトリを使うのが容易なので、自分が必要だけどメインツリーや信頼できるoverlayに存在しないものは、以下のような自分でメンテナンス可能なリポジトリで管理していた。(この他にも、社内でしか使わないであろうものはGitHub Enterprise上にもリポジトリを作っている)

- [kenchan/portage\-overlay: My Personal Portage Overlay](https://github.com/kenchan/portage-overlay/)
- [esminc/esm\-overlay: ESM's portage overlay\. It's useful for especially Ruby/Rails application development\.](https://github.com/esminc/esm-overlay)

しかし、少し前に [Project:GURU \- Gentoo Wiki](https://wiki.gentoo.org/wiki/Project:GURU) というものを知ったので、これからはなるべくこちらに入れるようにしようと思っている。GURUはArchでいうAUR、つまりユーザによるコミュニティ公式のパッケージリポジトリである。

ここにebuildファイルを追加する方法はプロジェクトページに書いてあるので割愛するが、私がghqのebuildファイルをdevブランチにpushしたところ、若干の手直しがあって翌日にはmasterブランチで公開されていた。

さて、実際にgentooにghqをインストールしたい場合は、おそらくみなさん`layman`をお使いだと思うので以下の2コマンドでOK。

```shell-session
# layman -a guru

# emerge ghq
```

レビュー込みでこれだけの早さで公開されるのはとてもよい体験だったので、細かい修正をしてくれるTrusted Contributorsの方々に感謝するばかり。これからも足りないソフトウェアはどんどんebuildを書いていれていくぞ〜。
