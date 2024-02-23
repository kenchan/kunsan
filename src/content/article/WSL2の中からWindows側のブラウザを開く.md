---
title: 'WSL2の中からWindows側のブラウザを開く'
slug: 'WSL2の中からWindows側のブラウザを開く'
publishedOn: 2022-01-27
createdAt: 2022-01-26 15:17:19 +0900
updatedAt: 2022-01-26 15:32:06 +0900
---
[GitHub CLI](https://cli.github.com/)や[Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)など、ブラウザを自動で開いて認証させるタイプのCLIが最近増えています。

普通に使う分には便利なのですが、WindowsのGUIアプリ+WSL2という環境では、WSL2の中からWindows側のブラウザを開くことができなくて一手間かかることがあります。

最近はWSLgを使ってすべてをWSL側で完結させるという手もあるでしょうが、今の自分の開発のスタイルでは、CLIのツールはすべてWSL2、GUIツールはWindows側に入れるようにしています。そのため、上記のような問題がおきることが度々あり困っていました。

今はこれを解決するために

1. xdg-openを入れる
2. Windows側のブラウザを開くデスクトップエントリを作る
3. `xdg-open`のdefault-web-browserに2で作ったデスクトップエントリを登録する

という方法を使っています。

## 1. xdg-openを入れる

Windowsでいう`start`やMacOSでの`open`のように、引数に応じていいかんじにデスクトップアプリケーションを起動するためのエントリポイントとなるツールが`xdg-open`です。(実際にはシェルスクリプト)

`xdg-open`または`xdg-utils`というパッケージに入っていることが多いのでこれをインストールします。Gentooなら`emerge xdg-utils`でOKです。

## 2. Windows側のブラウザを開くデスクトップエントリを作る

デスクトップエントリというのは、Linuxにおけるアプリケーションやディレクトリへのショートカットのことです。

詳しくは信頼と実績のArchWiki [デスクトップエントリ - ArchWiki](https://wiki.archlinux.jp/index.php/%E3%83%87%E3%82%B9%E3%82%AF%E3%83%88%E3%83%83%E3%83%97%E3%82%A8%E3%83%B3%E3%83%88%E3%83%AA) をどうぞ。Linuxデスクトップであれば、デスクトップの画面上にならぶアプリケーションの起動ショートカットの実態がこれになります。

ユーザ単位のデスクトップエントリは `~/.local/share/applications/`に置くことになっているので、ここにWindowsのEdgeを起動するデスクトップエントリを作成します。中身はこんなかんじ。

```
[Desktop Entry]
Encoding=UTF-8
Version=1.0
Type=Application
NoDisplay=true
Exec=/mnt/c/Users/kenchan/AppData/Local/Microsoft/WindowsApps/MicrosoftEdge.exe
Name=Edge
Comment=Microsoft Edge
```

Execに指定するパスは、`which MicrosoftEdge.exe` などで調べればよいです。

さて、だったらここで`start`や`explorer.exe`を指定すれば、Windows側のデフォルトブラウザの変更を反映していいかんじになるんじゃないの？と思った人、鋭いですね。

ただ、以下のような理由でそれではうまくいきません。

- `start`はアプリケーションではなくWindowsのコマンド(?)なので、WSL側から実行するにはcmd.exeを経由したりしないといけない
- `explorer.exe`はアプリケーションを開けても終了コードが0(正常)に**ならない**ため、`xdg-open`との相性が悪い。

`xdg-open`でブラウザを判定して開く処理は [scripts/xdg-open.in · master · xdg / xdg-utils · GitLab](https://gitlab.freedesktop.org/xdg/xdg-utils/-/blob/master/scripts/xdg-open.in#L375) にあります、この関数の呼出元を見てもらうとわかるのですが、ざっと説明すると「ブラウザっぽいコマンドを優先順位を決めて並べて、それを順番に叩いて正常終了したらそこでおわり」という大味な実装になっています。

そのため、`explorer.exe`を指定したデスクトップエントリを作った場合、たしかにブラウザは開くのですが、警告のメッセージが大量にでてきたり、同じページをブラウザで何回も開かれたりということがおきます。

上記の理由から、今のところ私はデフォフトブラウザとして使っているEdgeを直接開くデスクトップエントリを使っています。

## 3. default-web-browserとして設定する

`xdg-open`にURLを渡したときに開くアプリケーションを指定する方法は2つあります。

- 環境変数 `BROWSER` にコマンドを指定する
- `xdg-settings`で`default-web-browser`にデスクトップエントリを指定する

今回は下の方法を使います。上の方法を使うのであれば実は今書いているようなことは一切必要なく、`BROWSER=MicrosoftEdge.exe`で終わりです。しかし、dotfilesを他環境と統一している場合は分岐を入いれるか、`/etc/environments.d`をいじるかになり、ちょっと嫌だなと思って、こちらの方法にしています。

`xdg-settings`で設定するには以下のようなコマンドを打てばOKです。`edge.desktop`の部分は、2でつくったデスクトップエントリのファイル名を指定します。

```ShellSession
# setで設定
$ xdg-settings set default-web-browser edge.desktop

# getで確認
$ xdg-settings get default-web-browser
```

設定ができたら`xdg-open https://google.com`などでWindows側のブラウザが開くことを確認しましょう。

これで、CLIの中からいきなりブラウザが起動されることがあっても大丈夫です。よかったですね。

## おまけ

こんなことをしなくても、 [4U6U57/wsl-open: Open files with xdg-open on Bash for Windows in Windows applications. Read only mirror from GitLab, see link](https://github.com/4U6U57/wsl-open) を入れればよかろうというのはそうです。はい。
