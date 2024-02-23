---
title: 'PhantomJS 2.0.0 はファイルアップロードがうまくいかないことがある'
slug: 'PhantomJS-2.0.0-はファイルアップロードがうまくいかないことがある'
publishedOn: 2015-06-17
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
YAPCに応募したトークの通り、今私はcapybara(& poltergeist)でE2Eテストを書いてるわけですが、 `attach_file` を利用したファイルアップロードがうまくいかないなーと悩んでいたらドンピシャなissue [Webpage.uploadFile not working in phantomjs 2.0 · Issue #12506 · ariya/phantomjs](https://github.com/ariya/phantomjs/issues/12506) があったので諦めてバージョンを下げたものを使うようにしました。

homebrewでインストールしている場合は以下の方法でバージョンを下げられます。

```
$ brew tap install homebrew/versions # ここにphantomjs198がある
$ brew install phantomjs198
$ brew link phantomjs198
```

このバージョンだと、今度はJavaScriptの警告が出るようになってしまったのですが、テスト自体はうまくいっているのでこちらで進もうと思います。
