---
title: 'カラーミーアプリ開発Weekをやってる(1日目)'
slug: 'カラーミーアプリ開発Weekをやってる(1日目)'
publishedOn: 2019-09-04
createdAt: 2019-09-05 02:38:57 +0900
updatedAt: 2019-09-05 05:37:42 +0900
---
今日から、EC事業部内のエンジニア半分くらいを動員して、カラーミーアプリ開発Weekというのをやっている。

カラーミーショップでは5月に[カラーミーショップアプリストア](https://app.shop-pro.jp/)というやつをリリースしている。これは、ペパボ以外の企業や開発者がカラーミーショップの利用者にむけてアプリを開発・公開し、さらに収益を上げられるようにするという枠組みである。(似たようなものは各EC事業者にも当然ある)

今回は、このアプリ上で動作するペパボの公式アプリ(以後ファーストパーティアプリ)を増やそうという企画。アプリストアという枠組み自体は社外に向けたものではあるんだけど、盛り上がってる感をだすためには数を増やすということも必要だし、またドッグフーディングによってアプリ開発の過程における課題を明かにして改善したい、というのが今回の取り組みの意図となっている。

自分のチームは、[@hrysd](https://twitter.com/hrysd)と[@ryuchan_00](https://twitter.com/ryuchan_00)の3人チームで、中規模ショップオーナー向けのアプリを開発している。

せっかくなので、初日にやったことや流れをメモしておく。

## 簡易インセプションデッキ

簡易インセプションデッキとして「我々はなぜここにいるのか」「エレベーターピッチ」「やらないことリスト」をやった。アプリ開発Weekの狙いや、このアプリの要件は自分が一番よく知っているので、それらを話しながら、疑問点をつっこんでもらって、ここにいる意味を理解してもらった後、それを踏まえて今回のプロダクトのエレベーターピッチを各自で書いて、それをネタにチームで一つのエレベータピッチをつくった。

今回は1週間ということもあり、「やらないことリスト」は決めておいたほうがいいかなとおもってやってみたけど、それほど凝ったアプリでもない都合上、意見が割れたり疑問がでたりすることはあまりなかった。まぁ意識をあわせられたからヨシとしよう。

だいたいここまでで1時間。

## ペーパーモックとタスクリスト作成

自分が別件の差し込みがあったので暫くはなれているうちに、二人でペーパーモックとタスクリストの作成をすすめてくれていた。ペーパーモックを元に、「これをやって、これをやって……これでおわり！」くらいのざっくりとしたタスクリストを作ることができた。

これがだいたいこれが2~3時間くらい

## 開発!!1

アプリストアのアプリを作るのは全員初めてだったけど、事前に開発キットのアルファ版を[@tsuchikazu](https://twitter.com/tsuchikazu)と[kymmt90](https://twitter.com/kymmt90)が作ってくれていたので、それを使ってローカルでカラーミーショップのアカウントでログインしてショップ情報を取得するところまでモブプロでガンガンすすめた。30分でドライバーを交代して、2コマか3コマしたら休憩というサイクルで3時間くらい。

![](https://lh3.googleusercontent.com/dkhihKT-czop_3Jkn3Y_4NzAzBS-bis83GK97raDldSacwY0WqSIxGf_a_PXs0qsQghFdeGSnAplRv8hsRUz8siUXaK2-J4cK03vwWVttUPi66HCm2s2TNzZA_juZgmOGlDNlZBRCUujjvU5huTkkguuJ8FA2iso8R-SDg9e-gW8szBJChWQ95-tqop_HlEJ9oJV7Aai7rbolmeL_wmg4Fr_AWvJg9ZH5t9B0lhqu7tW7RDiuPrwzhWfRvyuWFSX8epgqwQ03mNZsHI6Dmh5mNz7WAMQRWLERjB4edkKOZexIBVSeSOkY1622CzNHGNxkaINqPFVX5t_6H3K4LfBiEO9pI7vvFvMKl0uPluBURdfYbNv0fuOXD4d1fW3SJ7KumYRdh6QO2yX8kN-zc4jIrJkwvbmPPoqZAeKWVJRd5x8NMMMn5Qn04ieJpISRlMKaO9CB4EDRMkvPDrkz-w4kyPItT2CHBTMapn2F9LVg7rNLn7qiBLcDST3cn52QK0tPE8PWviFVLUH6qGG1R_Nkp7hoawswGLW0G8Y0h1lNMmqzz1cj2M9in-YVyjLfQ-w9tB42ASkELrSlH_UWjq65Ywv5c-KR2tj_zUIFmethnANR8I_RWrIC2ahrfuzp2Cuuk6LpCPNFezgUGFvdXA4nvbY7NvN0Zel6sY-0DZjiw2iGQQOZTAzw8dYa0AYdNtiVBkFLKnFoc0PLc3ULElqYtHJgwBd615P3uL011QHPkm5Sp3I=w400-no)

## 疲労困憊

久々に合宿スタイルの開発でハチャメチャにつかれた…でも、久々にモブプロでめっちゃ楽しかった。明日もがんばるぞ！
