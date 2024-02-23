---
title: 'emergeしたら草を生やす Part2'
slug: 'emergeしたら草を生やす-Part2'
publishedOn: 2019-07-09
createdAt: 2019-07-09 14:50:33 +0900
updatedAt: 2020-03-22 07:44:53 +0900
---
前回の [emergeしたら草を生やす | けんちゃんくんさんのWeb日記](https://diary.shu-cream.net/2019/02/22/grass-grass-grass.html) で紹介した方法は致命的な問題があってしばらく使うのをやめていた。

それは、インストールするパッケージ側で `pkg_postinst` 関数が定義されていた場合、 `/etc/portage/bashrc` が上書きしてしまうというもので、普段使いするパッケージの中では `gentoo-sources` の `symlink` useフラグの処理がこの関数で実装されている。

というわけで、あらためてドキュメントを読み直して `EBUILD_PHASE`という環境変数で分岐することができるとわかったので、そのように変更した。 `/etc/portage/bashrc` の内容は以下の通り。

```shell
if [ "${EBUILD_PHASE}" == "postinst" ]; then
  curl -X PUT https://pixe.la/v1/users/kenchan/graphs/emerge-count/increment -H 'X-USER-TOKEN:{ひみつのトークン}' -H 'Content-Length:0'
fi
```


これで草生やし放題againですね。よかったよかった。
