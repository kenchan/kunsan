---
title: 'highlight.jsからPrismなどWeb日記いじり'
slug: 'highlight.jsからPrismなどWeb日記いじり'
publishedOn: 2020-03-25
createdAt: 2020-03-25 00:49:11 +0900
updatedAt: 2020-03-25 00:57:15 +0900
---
Windows + VS Code Remote(Container) + Docker Desktop for Windows(WSL2)の練習を兼ねて、Web日記いじりをしていた。

- コードハイライトを[highlightjs/highlight.js:](https://github.com/highlightjs/highlight.js) から [Prism](https://prismjs.com/) にする
- Google AdSenseを削除する
- AMPページのフォントをちゃんとする
- AMPページからshareボタンを削除する

コードハイライトのライブラリであるhighlight.jsは、コードの自動判定などが便利なので使っていたが、その仕組み上読み込むだけではハイライトされなくて、`document.onload`などにくっつけないといけない。もしくは、READMEにある通りWeb Workerを使う。

一方のPrismは、自動判定が無いために`<code>`に`class=language-*`というクラスをつけるのが必要になっている。しかし、それ利用することを前提として言語毎のJavaScriptを分離していて、結果として読み込むJavaScriptの量を減らすことができている。

なお、Markdownでは以下のようにコードブロックに言語を書くことができ、多くのMarkdownライブラリはPrism.jsが処理するclassのついたタグを出力ができる。便利。

```ruby
def hello
  puts hello
end
```

↑のブロックは、こういうhtmlになっている。

```html
<pre class="language-ruby">
  <code class="language-ruby">
...
```

そんなことよりも、試しにいれてるCSPをなんとかしたほうが良いと思うのだが、腰が重いのでまずはこのへんから。
