---
title: 'boot-updateとeclean-kernel'
slug: 'boot-updateとeclean-kernel'
publishedOn: 2012-01-07
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
古いカーネルを削除するのに[eclean-kernel](https://github.com/mgorny/eclean-kernel)がいいよと教えてもらったのは昨年末の話。
ずっとboot-updateの設定がまずくてちゃんと使えてなかったのですが、Kernel 3.2のついでに設定を見直しました。

```
boot {
    generate grub
    default vmlinuz
    timeout 3 
}

"Funtoo Linux" {
    kernel vmlinuz vmlinuz.old
}
```

こうすることで、常に最新と一つ前にビルドしたカーネルだけを残して、他のカーネルをeclean-kernelで綺麗にできました。
