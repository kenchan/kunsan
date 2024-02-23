---
title: 'Request Spec で HTTP HEADER を勝手につける gem を作った'
slug: 'Request-Spec-で-HTTP-HEADER-を勝手につける-gem-を作った'
publishedOn: 2015-01-20
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
[kenchan/rspec-default\_https\_header](https://github.com/kenchan/rspec-default_https_header) です。

APIサーバの Request Spec を書こうと思ったときに、毎回 OAuth のトークン設定したり、 `CONTENT_TYPE: 'application/json'` とか付けるのは人間のやることではないので、もうちょっと簡単にできるようにしました。

最初は [r7kamura/rspec-request\_describer](https://github.com/r7kamura/rspec-request_describer) がいいかなと思ったんですが、ちょっと枠組みがエクストリームな感じなので、最初から導入したりえいやっと書きかえるならよかったんですが、もうちょっとゆるめのやつが欲しかったのです。

- Q. テストがないようですが？
- A. すみません…テスト書いたらリリースしてWeb日記書こうと思ったんですが、うっかり社内のプロダクトに入れてしまったので書いちゃいました。

わりと便利だと思うのでよかったらお使いください。

<iframe src="https://rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=shucreamnet-22&o=9&p=8&l=as4&m=amazon&f=ifr&ref=ss_til&asins=4798121932" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
