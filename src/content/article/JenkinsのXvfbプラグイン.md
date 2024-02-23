---
title: 'JenkinsのXvfbプラグイン'
slug: 'JenkinsのXvfbプラグイン'
publishedOn: 2012-02-07
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
Jenkinsでcapybara-webkitをX無しで使うために[headless](https://github.com/leonid-shevtsov/headless)を入れていました。
ただ、CIの環境に依存したコードが少なからずリポジトリに入ってしまうのもなんだかなーと思っていたところ、[Xvfbプラグイン](https://wiki.jenkins-ci.org/display/JENKINS/Xvfb+Plugin)なるものがあるそうなのでこちらに乗り変えてみました。

設定は、xvfbコマンドのあるところを教えてあげるだけでいいので楽チンです。

コードベースからもいらないコードが消せるので、headlessを使っていた人は乗り換えてもいいんじゃないでしょうか。
