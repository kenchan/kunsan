---
title: 'GitHubのメモリポジトリを集約した'
slug: 'GitHubのメモリポジトリを集約した'
publishedOn: 2016-09-19
createdAt: 2016-09-20 02:45:15 +0900
updatedAt: 2016-09-20 02:45:15 +0900
---
GitHubの自分のリポジトリを整理しようと思い立って、幾つかのリポジトリを  https://github.com/kenchan/memory に集約した。

例えば、atcoderをやっていたときのコードを`memory/atcoder`に集約したければ、`git subtree` で以下のように指定すればOK。

```
$git subtree add --prefix=atcoder ../atcoder/ master
```

`--prefix` はなくても良きに計らってくれるらしいけど、変にマージされてもこまるので一応指定する。

もうちょっとあるかなとおもってたけど、残しておきたいと思うものは2個位しかなかったのでさっと集約しておしまい。
