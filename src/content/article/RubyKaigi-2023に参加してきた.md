---
title: 'RubyKaigi 2023に参加してきた'
slug: 'RubyKaigi-2023に参加してきた'
publishedOn: 2023-05-21
createdAt: 2023-05-21 12:42:12 +0900
updatedAt: 2023-05-22 05:19:39 +0900
---
![](https://lh3.googleusercontent.com/pw/AJFCJaXvddzLekp2xgFCxpkgs1Rigjbx6AErnksiwlKVWAUY7iFfUiU5CXb4wECeYM1ROeJJ477J2DN5NgEBlb_5R1dGY7lBLM8TtUPnQptpkKA8Y3frvKNzXjsRdLhhqoXhALPlCrFkaInFFiLy27fU_h3Q4g=w800)

2023-05-10から2025-05-13まで長野県松本市で開催されたRubyKaigi2023に参加した。

昨年から二年連続での会場での参加だったが、ほぼCOVID-19前のRubyKaigiが戻ってきたような感じで、とても充実した3日を過ごすことができた。

オーガナイザーやヘルパーをはじめとしたスタッフのみなさん、本当にありがとうございました。

今年は、スポンサーブースでの対応と、カンファレンス筋の衰えによって、すべての時間のトークを聞くことはできなかったのだけど、聞いたトークについての感想をまとめていく。

## Matz Keynote

今年のMatzのKeynoteはRubyの歴史をふりかえる内容。最近はよくこういう話をされているように思うが、何度聞いても言語デザイナーとしての意思決定や、その結果のふりかえりは勉強になる。これからもう30年残る言語の特徴として「簡潔で読みやすく拡張性が高い」ということを上げていたが、これと3日目のRuby Committers and The Worldでの話を聞いて、今後のRubyという言語について自分のできることは何だろうと考えさせられた。

## The future vision of Ruby Parser

金子さんがここ数年取り組んできたRubyのパーサーについての集大成のようなトークでとてもよかった。「Rubyをキメると気持ちいい」のは、プログラマが書きたいように書いたコードがそのまま動くからで、そのキマってるコードが動く最初の入口がパーサーなんだよね。これまでも「こんなコードも動くんですよ」という紹介が何度もあったけど、それらを制限するんじゃなくて、動くままパーサーをよりメンテナブルにするという偉業を成し遂げたのは本当にすごかった。会期中にRuby本体にマージされたようなので、今年のRubyKaigiのヒーローだと思う。

## Lightning Talks

@kokuyouwindさんの型をLLMに推論させようというトークと、@asonasさんのテスト実行時間を短縮する仕組み、@sora_hさんのIdPの話がよかった。rspec-daemonは手元にcloneしたけどまだ読めてないのでコードを読んでいこうと思う。

## Fix SQL N+1 queries with RuboCop

Shibuya.rbでも今回のトークの概要を解説をしてくれた@sue445さん。仕事としての開発現場ではRuboCopにevalされたら困るだろうが、環境を限定したらそのほうが効率がよいという発想は新しい視点でとてもよかっった。

## The Resurrection of the Fast Parallel Test Runner

多数のOSSのメンテナである@koicさんの新しいメンテナンスGem、test-queueの話。test-queueがメンテナンスされていたころは何度か使った記憶があるくらいだったが、テストを並列実行するアーキテクチャから、test-queueでの実装までとてもよくわかるトークだった。

また、トーク後半からエンジンがかかってきて早口になって身振りが大きくなる"いつもの@koic"をひさしぶりに見ることができたのが本当によかった。

## Optimizing YJIT’s Performance, from Inception to Production

YJITの話は理解するのが難しいのだけど、Shopifyという世界でもトップレベルのトラフィックを受けるRubyアプリケーションを開発・運用しているからこそ、処理系のパフォーマンスがビジネスにも大きなインパクトを与えられるわけで、そこに対して真剣に取り組んで成果をだしているのがほんとうに凄いの一言。私達はその恩恵を受けるだけの側ではあるけど、トークの中でもあったようにまずは使うというのが最初の貢献でもあるので、プロダクションにYJITを入れるぞという気持ちが強くなった。

## Ruby Committers and The World

今年はShopifyがホストということもあり、基本英語で、これまでとはやや雰囲気の違うセッションとなったが、それぞれのコミッタが今考えて取り組んでいることがわかってとてもよい時間だったように思う。

## Ruby JIT Hacking Guide

本当にすごいことをやっているk0kubunさんが、いつもどおり楽しそうに発表する姿を見れて今年もよかったなぁと思ってしまった。内容も本当におもしろくて、「もしかしたら本当にJITがかけるかも？」と一瞬だけ思ってしまう魔力があった。紹介されていた参照実装をとりあえず眺めるくらいからはじめてみよう。

## Parsing RBS

型定義ファイルに文法エラーがあると、それを使った支援ができないという問題から、文法エラーのケースでもASTを取得できるようにしたという内容。で、文法エラーがあるということは当然だが正解のコードがわからないという状態なのだが、現実的におきうるエラーをどのように扱うというのを具体的なケースをあげて説明していて、どれもなるほどと思うものばかりだった。毎年RubyKaigiの後は「RBS入れるぞ！」と思って帰路につくのだけど、今年もそう思えるようなすばらしいクロージングキーノートだった。

## スポンサーブース

GMOインターネットグループは、今年もVideoスポンサーとして協力している。また、スポンサーブースでは、ノベルティの配布やSUZURIのグッズ展示していたのと、今年の新しい取り組としてTwitterアイコンやQRコードのシールをオンデマンド印刷で提供していた。これは、ペパボのDevRelチームが機材の準備からデザインまで取りまとめてくれたのだが、会期中だんだんと口コミで広がってとてもいい取り組みになったと思う。

![](https://lh3.googleusercontent.com/pw/AJFCJaXgVhASXS-FGoDhTnMWs6qIvUrcdFl8BlrO-J-1ffn7Exj2elW0NU0vZXl-TxefXvXWfhyBf3imTwfLYcckwcGCv8v2O6Cl34yakblsGbXvnzgcT9vx6ZJDeoT8NQ16ATQKrMbR9oPdByQYlhZ_1s3dkQ=w800)

## authorsrb

鳥井さんが企画した[Rubyist Book Authors Stamp Rally](https://note.com/yotii23/n/n031bfdc95859)がとてもよかったので、会場で売っている物理本を買ってサインをもらったり、fluentd実践入門を持っていってハウスでモリスさんにサインを貰うなどした。うなすけファンブックはする完売だろうと諦めていたのだが、もう少し早くハンコを貰いに行けば買えたっぽいので残念。

![](https://lh3.googleusercontent.com/pw/AJFCJaX0SJrS-ChK05z6BEhniVntdZNabhneTiGAVfvgMVHh76bZkG4BeaZPcY2IbDm5tfxlliy_Tt5haBXIe3awQZuRXNHeEUgwiaBu8jTrJAnMCF7AXwYpDMbXovQlNJFTA29UOnaXHaGdzu15Qdb6i8bbJg=w800)

スタンプはけっこう集めたほうじゃないだろうか。

![](https://lh3.googleusercontent.com/pw/AJFCJaW8PDvyd4Ekfo8723Qu-rcLuQajgeT_qJ5UJt_SVM9LvYahxMbJy4EJaWTXFiKaIffwAu5BvqYisOGxHVyMVouBnBmIkQtV2bCfUo1NgC54Karw_FjyaAjD479Tb_6EaE69tO08hdjNPFW8WN9ZCd1djQ=w800)

このおかげで、Jeremy Evansさんに直接Polished Rubyがとてもすばらしいと伝えることができてよかった。そういえば、RubyKaigi2019では、当時とある事情でsequelを使っていたのでその感謝を伝えることができて嬉しかったのを思いだした。

RubyKaigiは、読んでよかった本や、使っているライブラリの作者(特に海外の方)に直接御礼を言える数少ないチャンスなんだよな。本当にありがたい。

## 朝食、ランチ

朝食は、初日はやんちゃハウスメンバーで栞日でトースト、2日目は@katsyoshiさんと珈琲喫茶かめのやへ。

![](https://lh3.googleusercontent.com/pw/AJFCJaUZ9lBKJDMzxSVT-WLPpSQ140mTcNWE2CDL8aP06zbQH-7EpQoXUMjdjC7lxSWCTJqOzQoiPi66Zi6W8r4OUEotwllhooMBB5SNE0GyYW002F39UXLTK8mWQE9vPHSlXPHbcbGgCplio4MIwDeQ9O1Nlw=w800)



3日目は松本城の開店待ちをしたかったのでコンビニのサンドイッチだった。

松本はカフェ文化があっていい喫茶店が多いという話を聞いてはいたが、本当によい喫茶店が沢山あってとてもよい街だと思った。ただ、さすがにRubyKaigi参加者の人数はきびしかったですね。モーニングでワンオペのお店のみなさん、本当にありがとうございました。

ランチは、初日は会場の奥にデプロイされていたお弁当、2日目は時間をずらしてイオンのフードコートのお蕎麦、3日目はjune29に車(通称:くるみ)をだしてもらってペパボや元ペパボメンバーで松本メーヤウでカレーを食べた。

![](https://lh3.googleusercontent.com/pw/AJFCJaXgDCyxaMCe3I1BEkNBd-VVC4pU7yLJ-QONZ60e5bJZnTlcOg2GY7eHTlwdBbGQMq_Jks_nwzlXKQEDAF4iSkQLEqJtwW-QEl69L4N5aV8-uU8RvXt2WbAVGprG3Rub7PwKPxM5-WHH8WAxenyQes8p_w=w800)

![](https://lh3.googleusercontent.com/pw/AJFCJaXFJd8cSeog-y-pEu2v1rNyL9T55n_GArwZZK6B-9p9tCFEoZ0B1z9VOCRjRXMCCet9kJdhs_3t3-T2QTllzP-r9Z02ADwd4MIQT5_xH7MVsDtkBtz3zndjPKTcK_TzRk8Ved1Sr3PbwjHtQzttyCmFow=w800)

## ドリンクアップなど

初日はオフィシャルパーティー、その後はペパボっぽいメンバーで[アジアのキッチン小吃](https://www.shisen.ne.jp/matsumoto_st/)で二次会。オフィシャルパーティーは食べ物もおいしかったし、ひさしぶりの人たちと沢山話ができてよかった。

二日目はドリンクアップの申し込みに乗り遅れたのと、疲労がやばかったので塩井乃湯に行ってゆっくりお湯につかってから麺匠佐蔵でラーメン。その後はやめにハウスに戻ってきたメンバーとRubyとかソフトウェアエンジニアとして働くことについて話したりしていた。

![](https://lh3.googleusercontent.com/pw/AJFCJaVcQwgrYCvhTVEY5HPpRjidYouMu_RL90WLASynAIE7WhORqCmqfxrHSfXOW15PcJ6h8lgUz62wN24FStVfAn-Y6IkPWUWnM8B2RFsGcFT_D39fyWPQI6eTThd7WGkcJJNapaPoZXyAG51_KHqVZ6Ri6w=w800)

![](https://lh3.googleusercontent.com/pw/AJFCJaUs3CIw0cSt7cDd9AECJVNp9Au-99CJshKU885w7Jxe44_iXFUV-73IvdWOv024XJtj-2PHAgTywRmCAKgaaVOzq7hK_-tvWi-lyl8w1sRzfQwo0oG2VKJvh-TvtHrGBNghXGhwU76R4L174Zf9UHOwag=w800)

3日目は、終あずさで帰宅予定だったので駅前でなにか食べようと歩いていたら、野生の@koicさんとたまたま遭遇し、@yahondaさんとおなじく終あずさで帰る@kamipoさんとご飯をたべるというのでご一緒させてもらうことにした。Rails開発者の二人と、Railsもまた人が作っているんだよなと思えるいい話がきけたし、koicと「コードの一行、血の一滴」の話ができてよかった。これを書きながら、小バエを叩いていたらビールを盛大に倒してkamipoさんにかけてしまったことを思いだしました。その際はご迷惑おかけしました :pray:

## 観光

当初の予定では土曜日までいて少し観光して帰ろうと思っていたのだけど、GWの新潟旅行のダメージも残っていたのではやく帰ることにしたためあまり観光らしいことはできなかった。

それでも松本城だけは上ろうと、3日目の朝の開店(開城?)にあわせて行ってきた。朝一だと、城の上り下りの待ち時間もほとんどなく、30分くらいで一周できたので、最初のセッションにも間に合って丁度よかった。

![](https://lh3.googleusercontent.com/pw/AJFCJaW-sxPu_yp_J9LlX-Lorv86zG0I1Jb8zCb_NVU25on3g8VI85XIkQjbnE-HNQMbsv0HLBv40dK-Kfpsrcs0ER8P1PpHIG87a3T3eTOp541qbGCwayHKWVmNnj9pWa_XlQyT-pSEEkzJVx3pbb19_WOjxQ=w800)

## 宿

福岡に続いて二度目のやんちゃハウスのメンバーになった。○○ハウスについてはいろいろな噂もあるので、別のエントリにする。

## おわりに

最近は仕事でRubyを書くこともめっきり減ってしまった私だが、今年もまたRuby(やRubyist)が好きなんだよなと再確認できた3日間だった。362日のRubyistとして沖縄に胸をはっていけるようにやっていこう。

最後にあらためて、スタッフのみなさん本当にありがとうございました。
