---
title: 'Docker Desktop for Windows (Edge)でinotifyがうまく動いていなかった話(解決)'
slug: 'Docker-Desktop-for-Windows-(Edge)でinotifyがうまく動いていなかった話(解決)'
publishedOn: 2020-03-21
createdAt: 2020-03-21 12:44:15 +0900
updatedAt: 2020-03-23 12:46:45 +0900
---
家のマシンをSurface Proにしてから、仕事以外のことはだいたいWindows上でやっていて、このブログをいじるときもVisual Studio CodeのRemote Development(Container)でやっている。

で、今日久しぶりにいじっていたら、 エディタでファイルを編集してリロードしても変更が反映されなくなってしまっていた。ただ、サーバプロセスを再起動すると反映されたので、ファイルの変更がうまく検知されてなさそうということがわかった。

さて、ファイルの変更を検知して読み込みなおすような仕組みは `inotify` を使って実現されていて、Railsでは [guard/listen](https://github.com/guard/listen) というラッパーライブラリを使っている。まずはイベントがちゃんと起きているのかを調べる必要があるので、`inotifywait`というコマンドを使ってみる。`inotifywait`コマンドは、debian系なら`inotify-tools`というパッケージに入っている。

コマンドが使えるようになったら、`inotifywait -m .`などとしてイベントをモニタリングする。案の定、VS Code上でファイルを変更してもイベントが通知されず、コンテナ内で直接ファイルを操作した場合には通知されることを確認した。

docker/for-winのissueを眺めてみると、inotify絡みの問題は度々起きているようで、最近だと [File not changing inside docker container after updating from 2.1.0.5 to 2.2.0.0 · Issue #5530 · docker/for-win](https://github.com/docker/for-win/issues/5530) というissueがあった。これによると、stableの2.2.0.4だと問題がなさそうとのこと。

EdgeをアンインストールしてStableをインストールして無事解決したのであった。最初は、WSL2絡みのバグかなぁと思ったのだけど、Stableを使えばWSL2でもHyper-Vを直接使った場合もでどちらでもうまく動いた。めでたしめでたし。

2020-03-23 追記

やっぱりうまくうごいていないときがある。ただ、Dockerをrestartするとうまく行くことがあったり、原因がわからん。具体的には、`inotifywait`を実行するディレクトリはうまく拾えるのだけど、`-r` オプションをつけて再帰的にモニタリングするとダメな感じ。悩ましい。

## 2020-03-23  追記2

WSL2の問題っぽいことがわかったので戻した。さすがexperimental。
