---
title: '論理削除 Casual Talks #1という夢を見たんだ'
slug: '論理削除-Casual-Talks-1という夢を見たんだ'
publishedOn: 2015-09-01
createdAt: 2015-09-01 07:54:20 +0900
updatedAt: 2015-09-01 08:19:10 +0900
---
![](https://lh3.googleusercontent.com/YMEaiMFRcpkkcBx8re2JLzUr1xtz1S1sKjHU49Xbk5XH=w309-h201-no)

それは前職のころ、今回の登壇者でもある @moro の発表にもあるような「要件としての論理削除はない」ということに熱く語りあったりしていたとかいなかったとか。

そして、ある日私が論理削除つらいということをつぶやいたところからこの企画は動きだしました。

このときは半分冗談で、いつか内輪で集まってやれたらいいかなというくらいだったのですが、今年の春にJxckさんの [RDB - DELETE_FLAG を付ける前に確認したいこと。 - Qiita](https://qiita.com/Jxck_/items/156d0a231c6968f2a474) をきっかけとしてインターネットで論理削除が盛り上がったこと、所属する組織から技術イベントをやっていこうという機運が高まっていたこと、この2つがちょうどいいタイミングで重なって、これはやるしかないなと思ったのでした。(とはいえ、Jxckさんのエントリからは半年も経ってしまっていますが…)

[@t_wada](https://twitter.com/t_wada)さんの全体像と総論(と思ったら予想以上に踏み込んだ内容でおもしろかった！)から、[yoku0825](https://twitter.com/yoku0825)さんのDBAからみると「毒を食わらば皿まで」という話。[@misoobu](https://twitter.com/misoobu)さんからは論理削除をいくつかの方法で実装してきた歴史と、それを踏まえて削除ログという形に落ち着いているという生の声を、[moro](https://github.com/moro)さんからはアプリケーションの要件定義や設計フェーズでの考え方を示していただき、[gyugyu](https://github.com/gyugyu)さんからはDBMSの外にある論理削除という感じで、登壇者の方々は発表内容のユニーク制約に苦労したようですが、それぞれが伝えたい重要なメッセージには特徴があったように思います。こんなテーマのトークを引き受けていただいてとても感謝しています。

- [SQLアンチパターン 幻の第26章「とりあえず削除フラグ」](https://www.slideshare.net/t_wada/ronsakucasual)
- [MySQLで論理削除と正しく付き合う方法](https://www.slideshare.net/yoku0825/mysql-52276506)
- [論理削除と、そこでのElasticsearch活用 | 論理削除 Casual Talks #1 / soft_delete // Speaker Deck](https://speakerdeck.com/misoobu/soft-delete)
- [do-not-delete-softly // Speaker Deck](https://speakerdeck.com/moro/do-not-delete-softly)
- [少し変わった論理削除 // Speaker Deck](https://speakerdeck.com/gyugyu/shao-sibian-watutalun-li-xue-chu)

懇親会では、Oracleと札束では我々が相手にしているような論理削除は問題じゃないのではないかという話や、実はあの発表の裏にはアレな事情があってとか、発表内容にちなんだより深い話ができてとても楽しかったです。

今回こんな冗談みたいなイベントができたのは、本当に登壇者の方と参加者の方(とスタッフとして手伝ってくれた同僚と、懇親会費用をサポートしてくれた所属企業)のおかげですので、本当にみなさんありがとうございました。

もし第2回(?)があればまたお会いしましょう！
