---
title: 'WordPressの初期パスワード生成のコード'
slug: 'WordPressの初期パスワード生成のコード'
publishedOn: 2017-03-22
createdAt: 2017-03-23 03:06:12 +0900
updatedAt: 2020-03-22 08:20:52 +0900
---
コードは [https://github.com/WordPress/WordPress/blob/96b2923e625606aa174f3a2dc845e5483571dccd/wp-includes/pluggable.php#L2158](https://github.com/WordPress/WordPress/blob/96b2923e625606aa174f3a2dc845e5483571dccd/wp-includes/pluggable.php#L2158)のあたり。

なんてことはないシンプルな実装。`random_password`フィルターはコアでは登録されていないようなので、このfilterを加えるとパスワードの生成ロジックをいろいろいじれるっぽい。

ランダムなパスワードを雑に生成して、それと強度と一緒にユーザに提示するというのは確かによいロジックのように思った。ついついちゃんと文字種が入っているかとかチェックしたくなってしまうんだけど、強度を見せておけばバリデーション自体はゆるくしておいてもいいのかもな、と。
