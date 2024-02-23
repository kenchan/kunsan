---
title: '2020-09-15: GitHub CLIに入門した'
slug: '2020-09-15-GitHub-CLIに入門した'
publishedOn: 2020-09-15
createdAt: 2020-09-16 14:07:38 +0900
updatedAt: 2020-09-16 14:18:32 +0900
---
満遍なくミーティングが入っていたのだけど、その合間にちょっとしたコード書きなどを。

今回の課題は「あるリポジトリのmainブランチへのマージをトリガーとして別のリポジトリにそれを反映したPull Requestを出したい」というもの。ペパボではGitHub Enterpriseをホストしていて、CIは[Drone CI](https://drone.io/)のOSS版を構築して使っている都合上、それらに合わせて仕組みを作る必要がある。

 最初はGitHubのAPIをコードを書いて叩こうかと思っていたのだけど、[GitHub CLI](https://cli.github.com/)はどんなもんかとみてみたら、大体これでできるじゃんとなったのでシェルスクリプトで済ませてしまった。

ざっくりとした流れはこんな感じ。

1. GitHub Enterpriseのpersonal access tokenをDroneの秘匿情報を扱う仕組みで環境変数として読み込ませる
2. `echo $TOKEN | gh auth login --hostname xxxx --with-token`などとして、CI上でGitHub CLIを使えるようにする
3. `gh clone yyyy`として適当なディレクトリにPull Requestを出したいリポジトリをcloneしてくる
4. cloneしてきたディレクトリでごにょごにょする
5. `gh pr create -t 'pr title' -b 'pr body`としてpull requestを出す

`gh pr create`で複数行のbody(GitHub上ではPull Requestのdescriptionになる)をうまく書けなかったので少しハマってしまったが、HTMLのタグも書けるのを思い出して`<br>`を入れたらうまくいったのでよかった。

今までGitHub CLIは存在は知っていたが使ったことはなかったのだけど、issueやPRに関する機能は現時点でもかなり充実しているから、手元からシュッと操作するには便利だと思う。また、インストールも簡単なのでCIに組み込むのも楽でいいね。

GitHub ActionsがEnterpriseにもきたらまた別のやり方ができる気がするので、またそのときに仕組みを見直そうと思う。
