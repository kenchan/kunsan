---
title: 'Kernel 3.1にアップデート'
slug: 'Kernel-3.1にアップデート'
publishedOn: 2011-10-27
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
gentoo-sourcesに3.1が降ってきたのでとりあえずインストール。

さくらVPSの方は何事もなく完了したのですが、仕事のマシン(Lenovo T410)で無線LANが認識されなくなりました＼(＾o＾)／

wlan0ができなくて、dmesgはこんな感じ。

```
wlagn 0000:03:00.0: PCI INT A -> GSI 17 (level, low) -> IRQ 17
iwlagn 0000:03:00.0: setting latency timer to 64
iwlagn 0000:03:00.0: pci_resource_len = 0x00002000
iwlagn 0000:03:00.0: pci_resource_base = ffffc900117b0000
iwlagn 0000:03:00.0: HW Revision ID = 0x35
iwlagn 0000:03:00.0: pci_enable_msi failed
iwlagn 0000:03:00.0: PCI INT A disabled
iwlagn: probe of 0000:03:00.0 failed with error -1
```

@ursmはまだアップデートしてないらしく、まさか人柱になるとは…

**解決しました！**
[【解決】Kernel 3.1にアップデート](/blog/2011/11/01/iwlagn-error-code-1)
