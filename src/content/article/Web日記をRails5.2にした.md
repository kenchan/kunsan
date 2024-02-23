---
title: 'Web日記をRails5.2にした'
slug: 'Web日記をRails5.2にした'
publishedOn: 2018-04-24
createdAt: 2018-04-25 15:22:05 +0900
updatedAt: 2018-04-25 15:22:05 +0900
---
[thoughtbot/administrate](https://github.com/thoughtbot/administrate) のRails 5.2対応版がリリースされたのでぴっと上げた。

特別なことはなにもしてないので、`bin/rails app:update`して、springをはずして、5.2でなくなったオプションをはずしたりしておしまい。

secret_key_baseがないとproductionが起動しない設定のままデプロイしちゃってしばらく落としてしまって一回休み。

次はフロント側を整理しようかな。
