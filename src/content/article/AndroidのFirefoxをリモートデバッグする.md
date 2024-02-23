---
title: 'AndroidのFirefoxをリモートデバッグする'
slug: 'AndroidのFirefoxをリモートデバッグする'
publishedOn: 2017-09-25
createdAt: 2017-09-25 14:25:31 +0900
updatedAt: 2017-09-25 14:28:21 +0900
---
タイトルの環境に依存した問題が起きたので調査のために準備していた。

特に難しいことは何もなくて [Android 版 Firefox のリモートデバッグ - 開発ツール | MDN](https://developer.mozilla.org/ja/docs/Tools/Remote_Debugging/Firefox_for_Android) を見ながらやればOK。

Chromeよりはだいぶ手間だけど、実機で表示してる画面を開発ツールでいじれるのは便利だし。要素を検証するときは実機の画面にレイヤーが描かれたりしてなかなか面白い。

問題が起きていたのは [HTML フォームへの高度なスタイル設定 - ウェブ開発を学ぶ | MDN](https://developer.mozilla.org/ja/docs/Learn/HTML/Forms/Advanced_styling_for_HTML_forms) あたりに書かれている話で、このページにある「劣悪なウィジェット」という言葉と某プロジェクトのことを思い出したりした。懐かしい。
