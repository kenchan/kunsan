---
title: 'Gentooにruby-oci8をインストールする'
slug: 'Gentooにruby-oci8をインストールする'
publishedOn: 2014-01-09
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
お仕事でOracleを使うことになったので、Gentooでのインストール方法のメモでも。

`emerge oracle-instantclient-basic oracle-instantclient-sqlplus`をするとOracleのサイトからzipを落して所定のディレクトリに置けと言われるのでその通りにするだけ。

プロプライエタリなやつをインストールするためのいつもの方法ですね。

あとは`bundle install`なり`gem install ruby-oci8`をするだけ。

Ruby 2.1の場合はruby-oci8のバージョンを2.1.6以上にする必要があるみたい。

MacやDebianが落したzipを展開したところにLD\_LIBRARY\_PATHを自分で通したりしないといけないところ、Gentooなら一発案件でした。
