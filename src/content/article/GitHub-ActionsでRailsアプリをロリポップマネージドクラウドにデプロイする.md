---
title: 'GitHub ActionsでRailsアプリをロリポップマネージドクラウドにデプロイする'
slug: 'GitHub-ActionsでRailsアプリをロリポップマネージドクラウドにデプロイする'
publishedOn: 2020-05-02
createdAt: 2020-05-02 02:32:49 +0900
updatedAt: 2020-05-02 03:29:45 +0900
---
[ロリポップ！マネージドクラウド](https://mc.lolipop.jp/)(以下マネクラ)へのRails(Ruby)アプリケーションのデプロイは、Herokuと同じように`git push`をすることで`bundle install`やDBのマイグレーションなどが自動で行われるようになっている。このウェブ日記もRailsで作っていて、そのデプロイをGitHub Actionsで自動化したのでそのやり方や試行錯誤の過程を記録しておく。

## 2020-05-02時点で利用している完全なYAML

「結論ははじめに」ということで、以下ようなYAMLと2つのsecrets(SSH_PRIVATE_KEYとLOLIPOP_REPOSITORY_URL)を用意すれば、masterへのpushをトリガーにしてマネクラにRailsアプリケーションがデプロイされる。

```yaml
name: deploy

on: 
  push:
    branches:
      - master

jobs:
  deploy_to_lolipop_mc:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
      with:
        fetch-depth: 0

    - uses: webfactory/ssh-agent@v0.2.0
      with:
          ssh-private-key: ${{ secrets.SSH_PRIVATE_KEY }}
    
    - name: add known_hosts
      run: cat .github/workflows/known_hosts >> ~/.ssh/known_hosts
    
    - name: git remote add
      run: git remote add lolipop ${{ secrets.LOLIPOP_REPOSITORY_URL}}

    - name: git remote update
      run: git remote update

    - name: deploy
      run: git push lolipop HEAD:master
```

各stepを簡単に解説する。

- checkout@v2に`fetch-depth: 0`を設定する。デフォルトでは1となっていてgitの履歴をとってこない設定になっているため、マネクラ側にpushする際にnon-fast-forwardと判定されてしまう。デフォルトのままにして`git push -f`とする手もあると思う。
- webfactory/ssh-agentを使ってsshの秘密鍵を使えるようにする。(後述)
- webfactory/ssh-agentはknown_hostsの管理はやってくれないので、リポジトリ上にknown_hostsをコミットしておいてそれを書き込む。(後述)
- マネクラのgitリポジトリをremoteに追加する。
- git pushのためには一度fetchしてくる必要があるので`remote update`する。
- マネクラのgitリポジトリにpushする。

今回は、テストの実行などはステップに含めていない。デプロイだけであればこれくらいのステップ簡単にできる。

## webfactory/ssh-agent でsshの秘密鍵をメモリ上で管理する

SSHの鍵認証しか許していないサーバにGitHub Actionsの中からアクセスするためには、GitHub Actionsが動作している環境に秘密鍵を置く必要がある。 [GitHub Marketplace · Actions to improve your workflow](https://github.com/marketplace?type=actions)をsshで検索するといくつかsshができるようにするActionsがあることがわかるが今回は[webfactory/ssh-agent](https://github.com/webfactory/ssh-agent)を利用した。

sshとその秘密鍵を利用可能にするActionsは大別すると以下の2種類がある。

- ssh-agentを実行する(webfactory/ssh-agent)
- `~/.ssh` に秘密鍵を書き込む

GitHub Actionsの実行モデルはよく理解できていないが、実行環境のローカルファイルシステム上に秘密鍵を書き込むよりはメモリ内に留められる方法のほうがよかろうと思い、このActionsを使うことにした。なお、公式の[actions/checkout](https://github.com/actions/checkout)でも秘密鍵を扱う仕組みはあって、ファイル名をランダムにして書き込むということをしている。

[https://github.com/actions/checkout/blob/94c2de77cccf605d74201a8aec6dd8fc0717ad66/src/git-auth-helper.ts#L186-L197](https://github.com/actions/checkout/blob/94c2de77cccf605d74201a8aec6dd8fc0717ad66/src/git-auth-helper.ts#L186-L197)

## Secretsに登録する秘密鍵とURLを準備する

デプロイに使う秘密鍵は、GitHub Actions専用のものを用意したほうが安全だろう。マネクラではキーペアを簡単に作成・登録できる仕組みがあるので、この機能を使ってデプロイ用のキーペアを作っておく。Ed25519の鍵ができるので強度も安心。

![マネクラのコンパネでSSHのキーペアを作成する](https://lh3.googleusercontent.com/nUX3sFLU0Zgl9DNIqZGjuVMHu1fUxtZh2bF5tJlAxACG3zUMqDyy2Wq1fyWoZ68YSfS8pqug4Q52dQFgiBpVJWiVVUGbU9VI0bT1Xx64ESeG2fMk9I8o2jgUnBiFs9C1F1pFMqnZ3TUX3FrPW5Mkkkc1RGGqUUpJGLJRH8lZry9bCzcU9RdN4V4WAREcX_2lxbDV9M-GnGMQzv5M-id89A-6ZBe5YtVGdb_BQZkw_bkKbgeSwR0gC8EbHSnuoupDanOXxezTSvrqEpMmb9h7fivNxmuRv6pzfFIjvq7VFjOpXRStDsMqUpO0u1j2gEUciB8QCxNTnGAAxQMt8BYGq_On-NiXyQ54wTO9cn-IlTvFZBzNTgaLeImbgNp0cXpiFcUgAfOJza3RC20VpFmdlTERioCrqxCUuXajXSgBvAwdol_lEfIZkszUXNDNLkImDJvT3fuksdAx9MwPd_lbtMEIBd0Pz-5Rm15j2A_vG8ENEK7wUeEIXOxK8bsnmwgW87PgFBYQkVQcbefi6a9BVgGSPhN1brB3pTG1-qIB_KiETkzx4JBQqa4SEaDkgy0yPVaKEJ2jBfouLbvITE4-aIye_mq1-bIaDHIrygALysQtlZy8xl6W7t3zRcAJjq5edUiu06_JuXNXQJIBppeAOLrKYY34fwkmzob_cWxNORy3N_WtULToyUc4wnCDreYsmP51SErTvdKpY9UWmCKOsb3j0KmZMDeOqROgAfuwzHxTDrpOXTfraAs=w600-no)

ここで作成してダウンロードされた秘密鍵の中身をそのまま、GitHub側に `SSH_PRIVATE_KEY`というsecretsに登録すればOK。

![GitHub側でのsecretsの登録](https://lh3.googleusercontent.com/cHBeicvMq_kRF-AnOrLu9aoyMKpUPZtVopLZoQ30gDaQjTgdf5kSpEpnDrqVsEMeTyhz5gtFkk1vN-6Vjre5zksnS9lB7Ud43CxubQX6YOeopG6F1xft3G8KODgx9QL83YmbhXxJi5k1tsyjY-5nw_2cJyYPLZQhfdwnQ3HAOGbLxZpqYZAnPuQMD_1dY7xbze881Fqd-DePLPjtDGpTiGrMYTtxxpuhNqhfZC0NnwL8_6QKzuJEDoTB77llf5aFZTFYcXO1q9J0GW1F6poMald12j7D1V8ATcXd6etpV99ezg3ALtFQLD0VHv8nzQZJWw6YYwlUTsAbhN1loRqwfXtx7borXCmnx5r4you-tMhUUk6q3a0d9Ye2uCc0ojMAHQw6D4kgIoKsyckEmPdhRHqFni9wUtJ15yFsx_3i3wEgYhhPm3-t8oJtknVuKNiInVoyTYsLpHUXwQgtCV1A9mXwOIgu3fW1SrPKZBF5ftYG7spBB_1EBmi3eHxNpi1W09PuaTjlOmuNMRAQ2tpZHLCtqQE4j8SXcMZGLAL4vBpXDPRXOCLplGPsCfOJt0_UZRMJpN066jzlWOePgZG02lXs1qppcS0kCsQ16xEu9CcOz0FLxouNXHVQ2x-bRXY9aIdI6Ayj2z_IyEmcJR9h3K1qSl3YoSFiDY14NtbkNnFo13iZJssMiaYTsycuFecWjvTyiVeG0KVEB_8UaKATndRhATuZylpRfAZxKzd44iWzN_Hx_s3Z5eo=w600-no)

また、`LOLIPOP_REPOSITORY_URL`という名前で、マネクラのコンパネに書かれているリポジトリ「`ssh://xxxxxx@yyyy.lolipop.jp:port/`」を追加しておく。

![マネクラでの接続先情報](https://lh3.googleusercontent.com/0S4run37lrss8YgK14fPmOav0N0gW0U4zo7Q-HTve_S9fU1f6kOID_H6_MkjJR9i9B02-67MciEaZImAEG31qliMI0CUIIV843W1ux2FAJr8cpaRtxUhxcI0uL2KRfgvdBDUaDyRs29W5vZz4sy37Mmkr4UQ_KwjB6OKjDmyrSUc6_9jflNi9Hzlgj2_YTZBBGlFAL_gMzdPiUnsCs7AzY6dNXXienC2AqRVcaPwQ6oCJSHWO2F5zfI-VZbVcUAqjj3fb1bmhqX_qTA-b6Qqb3rAIJ07s9gjv5SsW6kaB7eWfQb5imE3flfcidFexNXWPfA0Zca33ClAqqccOaiGwVQw126zo0_am38shlWGeK03HwgS4NgItDFX1fPEXp78X6YtAsS6CJ-iDdulOYUSqWftlT2atYLewTkwPR8rVzvtVogUZ-jgwsYf7HOKCLb7kvVrdv0cP6Jfx5Xt9T8EdAPSlY0vJUrB-h-rZbcYeFSdk3w89oqVdNCHo_aylxYa72Df-GtNDZGxe7usAI6CvYGuwnqE6zp8vkhQ_w1oKx43S3ToFlcvVe7ow-v0yLJ41ih4yfnpEporVqCO8J06oCQI7oHfL1PAsaaS-ggn8mF10rHAZO0NEhszEHURj4vT5Np4DkSgwyc68bejsk_8A5sXEnjZG3ZP4n0VrItrnTptCzt4IIktVP3yqMcNUbEA4sy_4_ZaxeP0LcVyjLD8ssX5vIXgrXepjWYAD_YfA72gqvGP32RnZyM=w600-no)

Actionsの実行に必要な秘匿情報の追加はこれでおわり。

## known_hostsをリポジトリに入れる

sshで初めて接続しようとしたときにプロンプトが出てくるアレのこと。何らかの方法でマネクラサーバのホストキーをknown_hostsにいれないと`git push`ができないのだ。[webfactory/ssh-agentのREADME](https://github.com/webfactory/ssh-agent#run-ssh-keyscan-to-add-host-keys-for-additional-hosts)では、actionsの中で`ssh-keyscan`を使って書き込むか、この内容は秘匿情報ではないのでリポジトリにコミットするとよいと書かれている。このファイルの目的は、READMEにもあるとおり接続先のサーバが正しいものか、MITM攻撃にあっていないか、を検証するためのものなので、Actionsの中で毎回取得するよりは同じものを使ったほうが良いだろうと思い、コミットすることにした。

マネクラのコンパネからリモートリポジトリの情報を元に、以下のコマンドで実行することでホストキーを取得することができる。しかし、**マネクラ側のSSHコンテナが起動していないと鍵がうまく取れないことがあるので、事前に別のターミナルなどでSSHをつないでおいたほうがいい。**

```shell-session
ssh-keyscan -p <your port> -H <your ssh host>
```

上のコマンドを実行したときに、stderrに以下のような文字列が出てきたら、一度SSHしてから試してみるとうまくいく。

```shell-session
xxxx.mc.lolipop.jp: Connection closed by remote host
```

この問題のせいで、Actionsの中で`ssh-keyscan`するのはひと手間掛かりそう。

## おわりに

GitHub Actionsを使ったマネクラへのデプロイは、sshの秘密鍵をどう管理したらいいかわからずに二の足を踏んでいたのだけど、改めて学習し直して自分なりに安全な方法を考えてみた。マネクラでもこれで継続的なデプロイをGitHubだけで完結させることができるので、かなり便利ではないかと思う。

この方法でも危険な部分などあったら、是非コメントやツイッターなどで教えてください。

## おまけ

テックブログでのロリポ関連の記事を読んだことで、この記事を書くモチベーションがあがりました。@antipopと@linyowsに感謝！

- [GitHub Actionsで「ロリポップ！」「ヘテムル」をもっと便利に使おう - ペパボテックブログ](https://tech.pepabo.com/2020/03/11/github-actions-for-lolipop-and-heteml/)
- [PRPLパターンで「ロリポップ！」「ヘテムル」のWordPressを爆速にしよう - ペパボテックブログ](https://tech.pepabo.com/2020/05/01/wordpress-on-lolipop-and-heteml-to-faster-by-prpl-parttern/)
