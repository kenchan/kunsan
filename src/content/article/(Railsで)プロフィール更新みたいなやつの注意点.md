---
title: '(Railsで)プロフィール更新みたいなやつの注意点'
slug: '(Railsで)プロフィール更新みたいなやつの注意点'
publishedOn: 2014-09-11
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
前職と現職で2アウト案件。

Railsに限らないけど、ログインユーザの情報を変更するときは `current_user` みたいな変数を変更するんじゃなくて、DBを引き直して更新しましょうって話。

ダメな例

```ruby
class ProfileController
  def update
    if current_user.update(profile_params)
      redirect_to :root
    else
      render :edit
    end
  end
end
```

良い例

```ruby
class ProfileController
  def update
    @user = User.find(current_user)
    if @user.update(profile_params)
      redirect_to :root
    else
      render :edit
    end
  end
end
```

## なんでだめなの？

バリデーションエラーが起きた時に `current_user` が不正な状態になってしまうから。

こういう書き方をしてるってことは、だいたい `_form.html.haml` はこういう感じになっているはず。

```haml
- form_for current_user do |f|
  = f.label :name
  = f.text :name
  ...
```

これだけ見ると大丈夫そうだけど、問題は **ヘッダなどに current\_user の情報を表示している** ようなケース。

```haml
%header
  .name= #{current_user.name} 様
```

こうなってると、`update` で `current_user#name` が不正な状態になってしまうとそれがそのまま画面に出てしまうよね。

## dup や clone じゃだめなの？

[dup は Shallow Copy](https://rurema.clear-code.com/2.1.0/method/Object/i/clone.html)なので、大丈夫って自身があるならそれでもいいんじゃないですかね。

よほど速度に影響するというわけじゃなければ `find` のほうが安全だと思っています。

## まとめ

フォームで変更するオブジェクトが、フォーム以外の場所でも表示されている場合、フォームで変更するオブジェクトと表示するオブジェクトは分けておかないと意図していない挙動になるから注意しましょう。
