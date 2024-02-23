---
title: 'Seleniumで立ち上がるFirefoxに画面を占有されたくない人のawesomeの設定'
slug: 'Seleniumで立ち上がるFirefoxに画面を占有されたくない人のawesomeの設定'
publishedOn: 2012-06-18
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
capybara-seleniumを使ったテストがあると、急にブラウザが立ち上がって(タイル型WMだと特に)邪魔なので、Awesomeの設定でFirefoxの起動する場所を決め打ちすることにしました。

設定自体は、デフォルトのrc.luaにコメントアウトされた状態で存在しているので、そのコメントを外してあげればだいたいできます。

```
awful.rules.rules = {
  { rule = { class = "Firefox" },
    properties = { tag = tags[1][9] } }
    -- 1番ディスプレイの9番タグで起動する
}
```

これだと、単純にFirefoxを使いたいときも9番に起動してしまうんですが、Firefoxを使いたいことなんて滅多にないので問題ありませんよね。
