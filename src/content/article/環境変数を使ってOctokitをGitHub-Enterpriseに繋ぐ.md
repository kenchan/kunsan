---
title: '環境変数を使ってOctokitをGitHub Enterpriseに繋ぐ'
slug: '環境変数を使ってOctokitをGitHub-Enterpriseに繋ぐ'
publishedOn: 2017-07-04
createdAt: 2017-07-04 15:38:38 +0900
updatedAt: 2020-03-22 08:19:42 +0900
---
[octokit/octokit.rb: Ruby toolkit for the GitHub API](https://github.com/octokit/octokit.rb#using-env-variables) に書いてある通り、Octokitは環境変数から設定のデフォルト値を読み込むことができる。

これをいい感じに設定しておくと、GH:Eにつなぎたいときや、プレビュー版のAPIを使いたい時（EnterpriseのProjects関係のAPIはまだプレビュー版だったりする）にとても便利だった。

環境変数の設定にはenvchainを使った。 ([OS X キーチェーンから環境変数をセットするツールを作りました - クックパッド開発者ブログ](http://techlife.cookpad.com/entry/envchain))

設定した環境変数は以下の4つ。

- OCTOKIT_ACCESS_TOKEN
- OCTOKIT_API_ENDPOINT
- OCTOKIT_DEFAULT_MEDIA_TYPE
- OCTOKIT_SILENT

`DEFAULT_MEDIA_TYPE`には前述のProjects APIを叩くために`application/vnd.github.inertia-preview+json`を設定しておく。また、プレビューAPIを叩くと警告がでるので`OCTOKIT_SILENT`には`true`を設定する。

`envchain`には`ghe`という名前で登録している。登録するコマンドは以下の通り。

```shell-session
$ envchain -s ghe OCTOKIT_ACCESS_TOKEN OCTOKIT_API_ENDPOINT OCTOKIT_DEFAULT_MEDIA_TYPE OCTOKIT_SILENT
```

設定したら、irbを起動するときにenvchainを経由すればOK。GitHub Enterpriseに接続してデータが取得できる。

```shell-session
$ envchain ghe irb
irb(main):001:0> require 'octokit'
=> true
irb(main):002:0> Octokit.user
=> {:login=>"kenchan",
...
...
```

めでたしめでたし。
