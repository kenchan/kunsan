---
title: 'venvで普段使いのpythonを3系にする(macOS)'
slug: 'venvで普段使いのpythonを3系にする(macOS)'
publishedOn: 2017-09-11
createdAt: 2017-09-11 04:42:19 +0900
updatedAt: 2020-03-22 08:18:50 +0900
---
homebrewでpython3をインストールすると、全てのコマンドのサフィックスに`3`をつけないといけなくて面倒(`python3`や`pip3`など)。自分の用途では2系はほぼ使わないし、`python`って打って3系が起動してほしい!

今までは、pythonをつかう可能性のあるプロジェクト毎にvenvで3系の仮想環境を作ってactivateしていたんだけど、プロダクトの開発に使ってるわけではないのにライブラリが分散するのが嫌になってきたのでなんとかしたかった。

今回やってみたのはこんな感じ。

- homebrewでpython3をインストールする
- venvでホームディレクトリに仮想環境を作る
- (ba|z)shrc 等でそれをactivateする

具体的にはこんな感じ。

(python3の仮想環境を作る)

```shell-session
$ mkdir ~/.venv
$ python3 -m venv ~/.venv/python3
```

(zshrcの様子)

```shell
if [[ -d ~/.venv/python3 ]] then
  source ~/.venv/python3/bin/activate
fi
```

こうするとターミナルをひらいたらすぐactivateされた状態になってくれる。

```shell-session
$ which python
/Users/kenchan/.venv/python3/bin/python

$ python --version
Python 3.6.2

$ pip --version
pip 9.0.1 from /Users/kenchan/.venv/python3/lib/python3.6/site-packages (python 3.6)
```


もっといい方法あれば教えてください！
