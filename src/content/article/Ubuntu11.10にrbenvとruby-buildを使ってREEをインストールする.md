---
title: 'Ubuntu11.10にrbenvとruby-buildを使ってREEをインストールする'
slug: 'Ubuntu11.10にrbenvとruby-buildを使ってREEをインストールする'
publishedOn: 2012-01-19
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
仕事用のマシンを修理に出すので、代替機として借りたマシン(ThinkPad Edge)のVirtualBox上にUbuntu11.10を入れて開発環境を作りました。

## rbenvとruby-buildのインストール
[rbenv](https://github.com/sstephenson/rbenv)と[ruby-build](https://github.com/sstephenson/ruby-build)のインストールは、それぞれのページの通りでOK。

## Ruby処理系のインストール
rbenvとruby-buildをUbuntuで使う場合は、典型的なエラーが起きた場合には対処方法が画面に表示されます。ですので、とりあえず普通にやってエラーメッセージの通り対処する、という進め方がオススメです。

まずは、おもむろに`rbenv install ree-1.8.7-2011.12`してみると、「curlがないから`apt-get install curl`してね」と出てきます。(そこからですか…)

curlをインストールして、もう一度インストールコマンドを叩くと、今度はダウンロードは成功するけど必要なライブラリがないと言われます。sslとかreadlineとかいつものやつ。(本当にいつものやつ！かつて何度同じことをしたんだろう)
ここでは、readlineのパッケージとしてlibreadline5-devを提案されるんですが、このパッケージは今はないようなので、libreadline-gplv2-devを入れます。

さぁ、再度インストールコマンドを叩いて、これで終わりかと思えば「gccがないのでbuild-essentialを入れてね(ハート)」と、このタイミングで言われます。

build-essentialを入れてインストールコマンドを叩けば多分成功します。

## 最近のUbuntu
Ubuntuは3年振りくらいに触ったんですが、App Storeみたいなやつでaptの全パッケージに評価とかコメントを付けることができるようになっていたり(Vimはすばらしい！☆5！)、デスクトップが凄く重いのでまずはクラシックに戻したり、と期待を裏切らない感じで安心しました。
