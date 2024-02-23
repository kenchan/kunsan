---
title: 'Ember.js勉強会を開催しました(60min.第8回)'
slug: 'Ember.js勉強会を開催しました(60min.第8回)'
publishedOn: 2012-07-20
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
最近[@ursm](https://twitter.com/ursm)が興味を持っているJavaScriptフレームワークである[Ember.js](https://github.com/emberjs/ember.js)について社内勉強会を開催しました。

まずは定番のTodoアプリでもと思ったら、[ちょうどいいチュートリアル](https://github.com/frodsan/emberjs-getting-started)があったのでこれを写経して、その後わからないところをursmに聞く or みんなで考えるという感じでした。

チュートリアルと本家ドキュメントをちゃんと見れば、Todoアプリの動作については理解できるようになっているので丁度いい難易度でした。

以下に出た質問とか。

## ArrayControllerにcontent? contentsじゃなくて？
Controllerから見れば一つのcontentだからいいんじゃないですかね。

## メソッドの後ろについてるpropertyって？
Computed propertiesの宣言ですね。その中のプロパティが変わったら、こっちも変わるようになる。
`@each.isDone`みたいなのは「`content`の全要素のisDoneというプロパティ」という感じ。

## remainingBinding: 'Todos.todosController.remaining'って何これ？
以下の省略記法だと思ってもらえれば。
```
remaining: function() {
  return Todos.todosController.get('remaining');
}.property('Todos.todosController.remaining'),
```
