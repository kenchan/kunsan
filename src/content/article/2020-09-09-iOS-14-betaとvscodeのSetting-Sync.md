---
title: '2020-09-09: iOS 14 betaとvscodeのSetting Sync'
slug: '2020-09-09-iOS-14-betaとvscodeのSetting-Sync'
publishedOn: 2020-09-09
createdAt: 2020-09-09 13:24:53 +0900
updatedAt: 2020-09-09 13:28:15 +0900
---
## iOS14とWatchOS 7のbeta

プライベートのiPhoneとApple Watchに、iOS 14とWatchOS 7のbetaを入れた。watchOSのほうはまだこれが便利というのは無いのだけど、iOS 14のPinPはかなりいいなという印象。何がいいって、スマホだけで周回しながらjune29 vlogが見れるんですよね。これは本当にすごい。ライフチェンジングな機能。

![「Web日記用」の写真 - Google フォト](https://lh3.googleusercontent.com/pw/ACtC-3f_Tw462m4xa1juFowF97qGUK_CcGOD02zZiUKFr0mOxArq0hsRMV5dh0wIIy-SGcF23D3meo06NHV-h_kc26PwlWkaqufgFPGkQrJMvtMdcGDjnw7B0jz72BWoiL4F5jOxw1R85jENZYritdWZEI9q7w=w153-h331-no?authuser=0)

ただ、当然アプリ側の対応はまだまだなので(apiはあるのかな？わかってない)、SafariでYouTubeを開いてPinPするということをしている。各アプリが対応してくると「ながら見」が捗るようになるな。

## vscodeのSetting Syncがstableにきてた

vscode標準のSettings Syncのstableにも来ていることに気づいたので、insidersをやめてstableを使うようにした。変更した項目は多くないので横に並べてぽちぽち設定を同期していたのだけど、一通りやってから改めてドキュメントを読んだところ[insidersからstableに同期する仕組みがある](https://code.visualstudio.com/docs/editor/settings-sync#_syncing-stable-versus-insiders )ことに気づいたので、これをやればよかったのであった。
