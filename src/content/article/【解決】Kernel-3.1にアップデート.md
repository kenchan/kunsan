---
title: '【解決】Kernel 3.1にアップデート'
slug: '【解決】Kernel-3.1にアップデート'
publishedOn: 2011-11-01
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
先日の[wlan0が認識されない問題](/blog/2011/10/27/kernel-3-1)が解決しました!

CONFIG\_PCI\_MSIがnになっていたからというしょうもない原因でした。たぶん3.1にするとき、これいらないかなーと思って消したんでしょうね…

iwlagのproveでerror -1が出たら疑ってみましょう。

参考リンク[Intel 6050 wireless adapter problems](https://www.linuxquestions.org/questions/linux-networking-3/intel-6050-wireless-adapter-problems-892634/)
