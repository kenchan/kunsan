---
title: '俺アドベントカレンダー1日目「git logでタグ名を表示する」'
slug: '俺アドベントカレンダー1日目「git-logでタグ名を表示する」'
publishedOn: 2011-12-01
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
折角なので俺アドベントカレンダーをやります。テーマは特になくて、私が便利だと思うものやちょっとした小ネタを書くつもりです。いつまで続くかしら…

gitに限らず以前のリリースからの差分を知りたいときなど、コミットログにタグやブランチ名が出たら便利ですよね。gitではlogに`--decorate`オプションを付けるだけで簡単に表示できます。

(画像がどこかに消えてしまった…)

これはtappで`git log --decorate --oneline`した結果ですが、色もいい感じで見やすいですよね。
とくに邪魔になることもないので、私はlog系のエイリアスにすべて`--decoreate`をつけています。
[https://github.com/kenchan/dotfiles/blob/master/dot.gitconfig#L21](https://github.com/kenchan/dotfiles/blob/master/dot.gitconfig#L21)

初日はこれくらいで。
