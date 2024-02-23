---
title: 'KinesisのWindowsモードにおけるWindowsキーは右Winのキーコードが割り当てられている'
slug: 'KinesisのWindowsモードにおけるWindowsキーは右Winのキーコードが割り当てられている'
publishedOn: 2020-05-18
createdAt: 2020-05-18 12:03:19 +0900
updatedAt: 2020-05-18 12:03:51 +0900
---
だから何？という話なんだけど、どうもこの違いによってWindowsのスナップ機能またはPowerToysに入っているFancyZonesの挙動がおかしくなる気がしている。

キーイベントについては、 https://w3c.github.io/uievents/tools/key-event-viewer.html を使って確認したのだけど、こんな感じでになっていた。92となっているところがKinesisのWinキーを押したときのキーコードで、91[Meta]となっているのが、ラップトップのWinキーを押したときのキーコード。

![](https://lh3.googleusercontent.com/pw/ACtC-3dxntyFXJsDQRuaBkEt6DGh7ildWLXlN1GWoCGQjuvF39OAPt2F-8DsdzdBxny5F73Hp3OeJ3_zv8OqSb1oX0FWvmOA0Kgz9LRa5j5XlHgHl4NGNSmHo2vVAuOB-TFoMd39xZk7tRavZmeH6PZ8re0Jog=w400-no)

FancyZonesの詳細については、また別途書くつもりだが、とにかくこの機能が右Winキーのキーコードだとうまく動かない。

というわけで、どうにかKinesisから左Winのキーコードを入れれないかとマニュアルを見ていたら、Macモードにすると左右にCommandキーが割り当てられることに気付く。これなら左Winキーを入力できるのではないかと思いやってみたらビンゴ。自分は、親指のエリア両方にWinキーをリマップしているのだけど、両方とも左Winキーにすることで問題解決。よかったよかった。
