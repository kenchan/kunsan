---
title: 'Railsを読むぞ #2'
slug: 'Railsを読むぞ-2'
publishedOn: 2015-01-05
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
今日は `core_ext/array/*` の残り。

## active\_support/core\_ext/array/extract\_options.rb

引数の最後のHashを抜き出すいつものやつですね。 `Hash#extractable_options?` も一緒に定義していて、Hashのサブクラスでextractされないようなものを作れるようになってるそうな。なるほどー。

## active\_support/core\_ext/array/groups.rb

`in_groups_of` と `in_groups` 似てるけどだいぶ違う。 `in_groups` のほうがロジックは大分難しいんですね。


## active\_support/core\_ext/array/prepend\_and\_append.rb

aliasを定義してるだけ。

## active\_support/core\_ext/array/wrap.rb

おなじみ `Array.wrap` 。いつもお世話になっています。

`to_ary` に反応してもnilが変えってくることを考慮して、

```ruby
elsif object.respond_to?(:to_ary)
  object.to_ary || [object]
```

となっているのはなるほど感ありますね。
