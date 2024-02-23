---
title: 'みんなでHerokuをcronとして使う'
slug: 'みんなでHerokuをcronとして使う'
publishedOn: 2014-09-10
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
Heroku Button の勉強を兼ねて、とある業務を自動化して公開した。

[kenchan/yuru-char-voter](https://github.com/kenchan/yuru-char-voter)

Jenkinsを高度なcronとして使っているという事例はたくさんあるけど、アプリケーションのポータビリティが劇的に向上した2014年後半では、コードを公開してHeroku Buttonをつけることで他の人も簡単に自動化の恩恵を受けることができる。

細かい設定はできないけど、毎時、毎日何かをしたいというくらいであればscheduler addonで十分だし、他のaddonを使えば自分でサーバ管理してcron回すよりは安定して稼働させることができるだろう。

Addonの設定はapp.jsonではできなさそうなのだけど、こうやったらできるよーとかschedulerの設定を画面以外からやる方法を知ってる人いたら教えて下さい。
