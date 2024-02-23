---
title: 'snapがうまく動かないのはmake 4.3とAppArmorの組み合わせのせいだった話'
slug: 'snapがうまく動かないのはmake-4.3とAppArmorの組み合わせのせいだった話'
publishedOn: 2020-04-15
createdAt: 2020-04-15 12:49:51 +0900
updatedAt: 2020-04-15 12:53:08 +0900
---
久しぶりにsnapで入れたmicrok8sを動かそうとしたら全然動かなくて、調べていくとAppArmorが動かなくなっていることに気付いた。

AppArmorの起動ログには、以下のようにcapabilityがおかしいというエラーがたくさんでていたのだけど、さすがに `sys_admin` がないというのはおかしい。

```plain
AppArmor parser error for /etc/apparmor.d/sbin.klogd in /etc/apparmor.d/sbin.klogd at line 17: Invalid capability sys_admin.
```

インターネットの海をさまようと、AppArmorのissue  [Make\.rules fails to generate cap\_names\.h and af\_names\.h \(\#74\) · Issues · AppArmor / apparmor · GitLab](https://gitlab.com/apparmor/apparmor/issues/74) と、Gentoo側のissue  [714158 – sys\-apps/apparmor\-2\.13\.4 \-> ? fails at runtime if built with sys\-devel/make\-4\.3](https://bugs.gentoo.org/714158)をみつけて、なるほどとなった。

Gentoo側のissueの通り、make 4.3をmaskして4.2に落として、再度コンパイルしたら動くようになったのでよかったですね。
