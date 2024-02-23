---
title: 'Railsを読むぞ #1'
slug: 'Railsを読むぞ-1'
publishedOn: 2015-01-04
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
Rails、たまに眺めるけどちゃんと読んだことなかったのと、結構知らない便利メソッドが発見できたりするのでちょっとずつ読むことにしました。できれば記録をつけながら続けていきたいなという意思表明を兼ねて。

まずは入りとしては `active_support/core_ext` が実用的だし楽なので、このあたりから始めます。

## active\_support/core\_ext/array/access.rb

いきなり知らなかった `Array#from` `Array#to` からスタート。何番目から最後までとか、最初から何番目まで、みたいなのをとりたいことってあるかなぁ? Rails本体では使われないみたい。

`Array#second` とか `Array#forty_two` とか。 生命、宇宙、そして万物についての究極の疑問の答えだ！

## active\_support/core\_ext/array/conversions.rb

[to\_sentence](https://api.rubyonrails.org/classes/Array.html#method-i-to_sentence)は便利だ！いつもヘルパーを作ってしまっていた気がする。

i18nにも対応しているけど、i18nがロードされてるかどうかを `if defined?(I18n)` で判定している。なるほど。

`Array#to_formatted_s` が `to_s` にエイリアスされていて、これが。`to_s(:db)` を処理しているけど `:db` 以外は無いんだね。

`to_xml`は…まぁたぶん使うことはないと思うからいいかな…blockを渡せるのは知らなかったけど、どう使うんだろ…
