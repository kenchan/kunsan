---
title: 'メンテナブルJavaScriptとテスタブルJavaScript'
slug: 'メンテナブルJavaScriptとテスタブルJavaScript'
publishedOn: 2015-02-16
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
JavaScript関連の積読を2冊ほど消化しました。

<iframe src="https://rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=shucreamnet-22&o=9&p=8&l=as4&m=amazon&f=ifr&ref=ss_til&asins=487311635X" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>

<iframe src="https://rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=shucreamnet-22&o=9&p=8&l=as4&m=amazon&f=ifr&ref=ss_til&asins=4873116104" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>

どちらも、(少し前の時代の)JavaScriptという言語では、

- メンテナブル、テスタブルなコードとはどういうことか
- それらを評価する方法
- サポートするツール

というあたりがまとまっていて、リーダブルコードやJavaScript:The Good Partsが頭に入っていると、スムーズに理解できそうな内容でした。

ただ、括弧書きにしている通り、特にツール類は一時代前のものが多いので、2015年ならどうだろうと読み替える必要はあるでしょう。

## メンテナブルJavaScript

前半はJavaScript:The Good Partsをより実践的にしたような内容で、良いパーツはわかったんだけど、実際に書こうとするとうまく書けないという人には参考になりそうな内容でした。

個人的には10章あたりからが面白かったですね。

JavaScriptにおけるエラーの考え方、テスタブルJavaScriptにも繋がるオブジェクトの結合度、ブラウザ判定を例とした特徴検出と特徴推定など、なかなか興味深い内容でした。

ツールについては、前述の通りちょっと古いので、最近のナウいツールに読み替えたほうがよさそうです。

## テスタブルJavaScript

こっちはかなりツールと細かいコードの書き方に寄っていて、時代と個人の趣向に結構依存しそうな内容だと感じました。

今読むなら、それらの詳細から一歩引いて「ソースコードの定量的な評価の方法」として見ると、コードメトリクスからテストカバレッジ、テストコードの分類などきれいにまとまっているのでおすすめです。

特によかったのは「高いカバレッジの値は誤解を招きますが、低い値は明らかに問題を示しています」というカバレッジに対する考え方ですね。

## どちらかと言えばメンテナブルJavaScriptがおすすめ

筆者は二人ともYahoo!のフロトンエンドエンジニアとして大規模なライブラリの開発、メンテナンスをしていたということもあり、でてくるコードはYUIの内部のコードだったりとかなり実践的な内容にはなっていますが、いかんせん時代の流れがはやすぎますね。

テスタブルJavaScriptは今読む必要はないかなと思いますが、メンテナブルJavaScriptは今でも参考になるところは多いなーという印象です。

特に、最初に書いたようにJavaScript:The Good Partsやリーダブルコードは読んだけど、実際どうすんのよ、というところに手が届く数少ない本だろうと思いました。

<iframe src="https://rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=shucreamnet-22&o=9&p=8&l=as4&m=amazon&f=ifr&ref=ss_til&asins=4873113911" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>

<iframe src="https://rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=shucreamnet-22&o=9&p=8&l=as4&m=amazon&f=ifr&ref=ss_til&asins=4873115655" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
