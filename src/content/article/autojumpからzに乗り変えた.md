---
title: 'autojumpからzに乗り変えた'
slug: 'autojumpからzに乗り変えた'
publishedOn: 2013-02-21
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
だいぶ前からzに乗り換えてみたかったんですが、公式のportage treeにはなかなか入らないようなので、[esm-overlay](https://github.com/esminc/esm-overlay)に追加して使い始めました。

`emerge z`でインストールできますが、実際は`/usr/share/z/z.sh`を入れるだけで、自分で`. /usr/share/z/z.sh`をしないといけなくなっています。

autojumpは/etc/profile.d/につっこむので何もしなくても使えたんですが、zでは`_Z_CMD=j`などの設定をsourceする前に行わないといけないため、このようになっています。

今まで「emergeできないから使ってなかった」という方は是非ご利用ください。
