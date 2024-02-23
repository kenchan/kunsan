---
title: 'Yaku Han JPを入れてcommonmarkerを使うようにした'
slug: 'Yaku-Han-JPを入れてcommonmarkerを使うようにした'
publishedOn: 2017-10-17
createdAt: 2017-10-18 03:49:57 +0900
updatedAt: 2017-10-18 03:50:33 +0900
---
[「Yaku Han JP」で“約物”を半角に | Swings](https://bulan.co/swings/yaku-han-jp/)

深津さんの記事([読みやすさのデザイン備忘録｜深津 貴之 (fladdict)｜note](https://note.mu/fladdict/n/naac944b0078f))を読んで、そういうものがあるのかと試しに入れてみた。私にとってはコードを書き換えてリロードしたら差がわかる位なんだけど、なんとなくシュッとした気がする！

このサイトのmarkdownのレンダリングはずっと`github-markdown`というgemを使っていたんだけど、この前みたらもうメンテしないよって書いてあったので [gjtorikian/commonmarker](https://github.com/gjtorikian/commonmarker) に変更した。とくにgithub markdown依存の書き方はしてないと思うんだけど、なにか変なところがあったら教えてください。
