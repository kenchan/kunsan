---
title: 'boot2dockerのIPがVPNのネットワークとかぶってしまった'
slug: 'boot2dockerのIPがVPNのネットワークとかぶってしまった'
publishedOn: 2015-02-12
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2020-03-22 08:27:27 +0900
---
家に帰ってVPNを繋いでboot2dockerでコンテナを作ろうとしたら、以下のような感じでエラーになってしまっていました。

```shell-session
$ docker build .
Sending build context to Docker daemon
FATA[0032] Post https://192.168.59.103:2376/v1.16/build?rm=1&t=: dial tcp 192.168.59.103:2376: i/o timeout
```

VPNを繋いだときだけ問題がおきるのと、IPアドレス帯を見てみたところこれはかぶっちゃってるかなーと思い `traceroute 192.168.59.103` してみるとビンゴ。VPNのネットワークに吸い込まれていました。

boot2dockerのIPを変える方法は、[boot2docker/boot2docker-cli の configration](https://github.com/boot2docker/boot2docker-cli#configuration) にあるように `boot2docker config` の結果をファイルに落としてから変更すればよさそうな雰囲気。

実際やってみると、ネットワークの設定は変更してVMの再起動では当然ダメで、VirtualBoxのホストオンリーネットワークを消してから `boot2docker delete` > `boot2docker init` として作り直す必要がありました。(自分でホストオンリーネットワークを変更してもいけると思いますが)

IPの設定回りを以下のようにざっくりと変更したところ、VPNを繋いでいても問題なく動くようになりました。めでたしめでたし。

```shell
...
HostIP = "172.16.59.3"
DHCPIP = "172.16.59.99"
NetMask = [255, 255, 255, 0]
LowerIP = "172.16.59.103"
UpperIP = "172.16.59.254"
...
```
