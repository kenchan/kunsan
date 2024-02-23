---
title: 'PythonのテスティングフレームワークとDjangoでテストメソッド単位での実行'
slug: 'PythonのテスティングフレームワークとDjangoでテストメソッド単位での実行'
publishedOn: 2016-06-06
createdAt: 2016-06-07 00:55:35 +0900
updatedAt: 2020-03-22 08:23:14 +0900
---
Pythonのテスティングフレームワークは、unittestとnoseっていう全部入りのやつが2つあって、それぞれdjangoと組み合わせて使うことができる。

今のプロジェクトではdjango-noseを使っているんだけど、これのテストメソッド単位ので実行方法がわからなくて混乱してた。(ぐぐったらすぐでてくるんだけど…)

Djangoでは、Railsでいう`rails`コマンドみたいなエントリポイントは`manage.py`ってやつになっている。

たとえば、全部のテスト実行は`python manage.py test`とかでできるんだけど、個別実行しようとすると、テスティングフレームワークによって指定の仕方がかわる

unittestの場合はヘルプの通り `.` でぜんぶ 繋いでゆくと実行できる。

```shell-session
$ python manage.py test -h

Usage: manage.py test [options] [path.to.modulename|path.to.modulename.TestCase|path.to.modulename.TestCase.test_method]...
```

一方でdjango-noseのときはこれでは駄目で以下のようにテストクラス名の前をコロン `:` にしないとだめなのであった。

```shell-session
$ python manage.py test path.to.modulename:TestCase.test_method
```

ちょっとバージョンが古いというのもあるだろうけど、上のtestunitのような指定をしてもエラーにならずにテストケースが0で実行されるというのがちょっとよくわからなくて混乱していた。
