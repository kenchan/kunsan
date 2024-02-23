---
title: 'laymanからeselect-repositoryに移行した'
slug: 'laymanからeselect-repositoryに移行した'
publishedOn: 2020-04-11
createdAt: 2020-04-11 02:26:06 +0900
updatedAt: 2020-04-11 02:26:06 +0900
---
数日前のGURUの記事に対してursmがmentionをくれたので早速移行した。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">時代は eselect-repository</p>&mdash; Keita Urashima (@ursm) <a href="https://twitter.com/ursm/status/1246857070168535041?ref_src=twsrc%5Etfw">April 5, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

移行といっても、実際は`emerge eselect-repository`をするだけでよいので楽ちん。`layman -l`と`eselect repository list -i`を見比べて、有効になっているoverlayが同じだったらOK。

```shell-session
[11:20:33] in ~ via 💎 v2.7.1
❯ layman -l

 * dotnet                    [Git       ] (https://github.com/gentoo/dotnet.git                                              )
 * go-overlay                [Git       ] (https://github.com/Dr-Terrible/go-overlay.git                                     )
 * guru                      [Git       ] (https://anongit.gentoo.org/git/repo/proj/guru.git                                 )
 * jorgicio                  [Git       ] (https://github.com/jorgicio/jorgicio-gentoo.git                                   )
 * snapd                     [Git       ] (https://github.com/zigford/snapd.git                                              )


[11:23:36] in ~ via 💎 v2.7.1
❯ sudo eselect repository list -i
Available repositories:
  [99]  dotnet # (https://github.com/gentoo/dotnet)
  [148] gentoo * (https://gentoo.org/)
  [163] go-overlay # (https://github.com/Dr-Terrible/go-overlay)
  [168] guru # (https://wiki.gentoo.org/wiki/Project:GURU)
  [197] jorgicio # (https://github.com/jorgicio/jorgicio-gentoo)
  [276] pepabo @
  [349] snapd # (https://github.com/zigford/snapd)

```

`eselect-repository`の方は、privateなリポジトリもでて便利。よかったよかった。


see also: [eselect/repository \- Gentoo Wiki](https://wiki.gentoo.org/wiki/Eselect/Repository)
