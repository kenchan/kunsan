---
title: 'Rails 4 で TimeWithZone#as_json がmsecを出してしまう問題'
slug: 'Rails-4-で-TimeWithZone-as_json-がmsecを出してしまう問題'
publishedOn: 2014-08-12
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
Rails3からRails4へのアップグレード業で、TimeWithZoneがmsecを持つようになったために`as_json`でmsecが出力されてテストがたくさん落ちる事案が発生した。

今回はJSON APIのテストで時刻をすべて正規表現でチェックしていたのでほぼ全滅という有り様であった。

最初はモンキーパッチしてみてとりあえずテストが通ることを確認したんだけど、よく考えたらそれも変だよなーといろいろ見ていたら`ActiveSuppot::JSON::Encoding.time_precision`というのを見つけた。

`config/initializers/json_encoding.rb`みたいなところに

```ruby
ActiveSuppot::JSON::Encoding.time_precision = 0
```

と書いて終わり。よかったよかった。
