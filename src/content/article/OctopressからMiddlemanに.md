---
title: 'OctopressからMiddlemanに'
slug: 'OctopressからMiddlemanに'
publishedOn: 2013-04-17
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
Octopressからmiddleman(middleman-blog)に移行してみました。

`source/_post`をそのままもってきて起動してみるといろいろエラーが出たので、それを適宜直してmiddleman-deployでデプロイ。

- ファイル名の日付とFrontmatterの`date`の値が違っているとエラーが…
- Frontmatterから`layout`を削除
- デフォルトのmarkdownインタプリタの`maruku`だとin-line HTML(amazonのアサマシとか)をうまく解釈できなかったのでredcarpetに
- Octopressのgistプラグインを使っていたところを修正
- シンタックスハイライトはmiddleman-syntaxと[richleland / pygments-css](https://github.com/richleland/pygments-css)のgithub.cssで色付け
- slimを使ったことなかったのでレイアウトとかはslimで
- マークアップとCSSは[lab.ursm.jp](https://ursm.jp)を参考に(HTML5勉強になります！)

思ってたより沢山やらないといけないことがあったけど(静的サイトを作るための物なんだから当然…)、一度やってしまえばいいことが多いし、見た目を弄るのはOctopressよりずっと簡単なのでしばらくここに住んでみようと思います。
