---
title: 'mysql2を 0.3.13 に上げて苦労した話'
slug: 'mysql2を-0.3.13-に上げて苦労した話'
publishedOn: 2013-07-22
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2020-03-22 11:06:00 +0900
---
今のプロジェクトは [Jenkins に bundle update した上で Pull Request させる - @kyanny's blog](https://blog.kyanny.me/entry/2012/11/06/003902) を参考に10弱くらいのリポジトリを週1で `bundle update` してるんですが、今朝のアップデートで mysql2 があがってちょっとだけはまったのでメモ。

問題が起きたのは、`SELECT SUM(column_name) AS s FROM table_name`という感じでSQL的にSUMしたときなんだけど、もしかしたらSUM以外でも影響あるのかもしれない。

0.3.11では、SUMを入れると必ずBigDecimal(ただしfloatを除く)だったのが、0.3.13だと「その数値を表現するのに必要十分な型」で返すようになったような印象。

地味にDecimalの`precision: 10, scale: 0`の結果が変わってるのがちょっと疑問が残るところ…

以下に例を上げておきますので「そうじゃねーよ」ということなら教えてください>< (ちなみに、Railsは3.2.11です)

## 例

以下のようなモデル(Point)があったとして、それぞれどんなかんじになるかというと

```ruby
class CreatePoints < ActiveRecord::Migration
  def change
    create_table :points do |t|
      t.integer :i
      t.float :f
      t.decimal :d1, precision: 5, scale: 2
      t.decimal :d2, precision: 10, scale: 0

      t.timestamps
    end
  end
end
```

### 0.3.13の結果

```ruby
irb(main):001:0> Point.create(i: 1, f: 1.1, d1: 1.2222, d2: 1)
   (0.0ms)  BEGIN
  SQL (0.3ms)  INSERT INTO `points` (`created_at`, `d1`, `d2`, `f`, `i`, `updated_at`) VALUES ('2013-07-22 11:30:40', 1.2222, 1, 1.1, 1, '2013-07-22 11:30:40')
   (0.1ms)  COMMIT
=> #<Point id: 1, i: 1, f: 1.1, d1: #<BigDecimal:7f930db7b4a0,E'0.12222E1',18(45)>, d2: 1, created_at: "2013-07-22 11:30:40", updated_at: "2013-07-22 11:30:40">

irb(main):002:0> Point.select("SUM(i) AS s").first.s
  Point Load (0.2ms)  SELECT SUM(i) AS s FROM `points` LIMIT 1
=> 1

irb(main):003:0> Point.select("SUM(f) AS s").first.s
  Point Load (0.2ms)  SELECT SUM(f) AS s FROM `points` LIMIT 1
=> 1.100000023841858

irb(main):004:0> Point.select("SUM(d1) AS s").first.s
  Point Load (0.2ms)  SELECT SUM(d1) AS s FROM `points` LIMIT 1
=> #<BigDecimal:7f930db243d0,E'0.122E1',18(18)>

irb(main):005:0> Point.select("SUM(d2) AS s").first.s
  Point Load (0.2ms)  SELECT SUM(d2) AS s FROM `points` LIMIT 1
=> 1
```

### 0.3.11の結果

```ruby
irb(main):001:0> Point.create(i: 1, f: 1.1, d1: 1.2222, d2: 1)
   (0.0ms)  BEGIN
  SQL (0.3ms)  INSERT INTO `points` (`created_at`, `d1`, `d2`, `f`, `i`, `updated_at`) VALUES ('2013-07-22 11:30:40', 1.2222, 1, 1.1, 1, '2013-07-22 11:30:40')
   (0.1ms)  COMMIT
=> #<Point id: 1, i: 1, f: 1.1, d1: #<BigDecimal:7f930db7b4a0,E'0.12222E1',18(45)>, d2: 1, created_at: "2013-07-22 11:30:40", updated_at: "2013-07-22 11:30:40">

irb(main):001:0> Point.select("SUM(i) AS s").first.s
  Point Load (0.1ms)  SELECT SUM(i) AS s FROM `points` LIMIT 1
=> #<BigDecimal:7f31daaf1730,E'0.1E1',9(18)>

irb(main):002:0> Point.select("SUM(f) AS s").first.s
  Point Load (0.3ms)  SELECT SUM(f) AS s FROM `points` LIMIT 1
=> 1.100000023841858

irb(main):003:0> Point.select("SUM(d1) AS s").first.s
  Point Load (0.2ms)  SELECT SUM(d1) AS s FROM `points` LIMIT 1
=> #<BigDecimal:7f31da9b7e28,E'0.122E1',18(18)>

irb(main):004:0> Point.select("SUM(d2) AS s").first.s
  Point Load (0.3ms)  SELECT SUM(d2) AS s FROM `points` LIMIT 1
=> #<BigDecimal:7f31da98b440,E'0.1E1',9(18)>
```
