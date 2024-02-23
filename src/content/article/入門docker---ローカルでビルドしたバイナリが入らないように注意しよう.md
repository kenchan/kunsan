---
title: '入門docker - ローカルでビルドしたバイナリが入らないように注意しよう'
slug: '入門docker---ローカルでビルドしたバイナリが入らないように注意しよう'
publishedOn: 2015-02-02
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2020-03-22 11:02:25 +0900
---
本日の私の生産性を著しく低下させた件について共有させていただきます。

とあるフロントエンドアプリケーションを動作させるためのDockerコンテナを作っていたのですが、Dockerfileをこんな感じにしていたんです。

```dockerfile
FROM dockerfile/nodejs-bower-grunt

...

ADD package.json /app/
RUN npm install

ADD bower.json /app/
RUN bower install --allow-root

ADD . /app/

...

```

ちょっとこみいった事情があったのでonbuildではないのですが、手元の環境でbuildしたイメージを実行しようとしても `grunt imagemin:dist` でエラーになってしまう。しかし、リモート(具体的には mookjp/pool の中)だとその部分は動いている。(その先が動かなかったのでデバッグしたかった)

エラーメッセージでググっても `npm cache clean` しろとか、apt-get で入れてる optipng を消せとか言うので `docker run -i -t {imagename} /bin/bash` していろいろやっていたら、`./node_moduels` 内にある `optipng` の実行ファイルが壊れており、`ADD . /app/` で `node_modules` がローカルのものに上書かれていることにようやく気付いたのでした…

手元で `node_modules` を消してbuildしたら無事動くものができあがったのでした。つらい。

みなさんもローカルで `docker build` するときはバイナリが入らないように注意しましょう…
