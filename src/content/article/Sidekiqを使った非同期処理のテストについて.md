---
title: 'Sidekiqを使った非同期処理のテストについて'
slug: 'Sidekiqを使った非同期処理のテストについて'
publishedOn: 2013-05-06
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2015-08-06 01:43:33 +0900
---
## まとめ

sidekiqを2つのRailsアプリケーションで使ってみて、テストの書き方と残し方について思うところがあったので書いてみます。

- 特別な事情がなければ`sidekiq/testing`を使うべき(`sidekiq/testing/inline`は使わない)
- 非同期処理そのもののユニットテストは`MyWorker.new.perform`で書けばよい
- 非同期処理をキックする側のユニットテストは`MyWorker.jobs.size`を検証するだけにする
- エンドツーエンドテストでは「全ての非同期ジョブを実行する」というようなstepやメソッドを作ってそれを呼ぶ

## `sidekiq/testing`と`sidekiq/testing/inline`について

[sidekiqのwiki](https://github.com/mperham/sidekiq/wiki/Testing)には、テストのための仕組みとして`sidekiq/testing`と`sidekiq/testing/inline`の2つがあり、**「どちらか選んで使え」**と書いてあります。

それぞれの実装を読んでもらえばわかりますが、

- `sidekiq/testing`はジョブキューをArrayで潰して非同期処理が実行されなくする
- `sidekiq/testing/inline`はワーカーの処理を同期実行する

という動きをします。

ぱっとみ`sidekiq/testing`はユニットテスト、`sidekiq/testing/inline`がエンドツーエンドテスト向き、のように見えますが、両方とも`sidekiq/testing`を使うべきだと私は感じました。

- `require`しただけで有効になってしまうので`spec_helper`で切り分けるのが困難である
- 同期処理を前提としたテストを書けてしまう(実際に書くかどうかは別として)
- エンドツーエンドテストでは後述の仕組みを使って、明示的に非同期処理を走らせたほうがテストの意図を表現しやすい
- テストを書く上では非同期処理の先を気にしなくていい場合の方が圧倒的に多いのに、その全てで`perform`をstubするのが面倒だし意図が捕みにくい

というところで、`sidekiq/testing`を使ってどうやってテストを書いていけばよいか紹介します。

## 非同期処理の処理内容のテスト

非同期処理の処理内容は簡単で、[testing-workers-directlyの項](https://github.com/mperham/sidekiq/wiki/Testing#testing-workers-directly)にあるように直接`perform`を呼べばよいです。

```ruby
describe S3UploadWorker do
  let(:worker) { S3UploadWorker.new }

  describe '#perfome' do
    it { expect { worker.perform() }.to change(...) }
  end
end
```

## 非同期処理の実行をキックする方のテスト

非同期処理の実行をキックする側は、`sidekiq/testing`の流儀に従ってジョブキューに処理が入ったことだけを検証するようにしましょう。

例えば`Image#upload`が`S3UploadWorker`を使ってS3へのアップロードを非同期化していることを検証したい場合は以下のように書けばよいでしょう。

```ruby
describe Image do
  let(:image) { Image.new(...) }

  describe '#upload' do
    it { expect { image.upload }.to change(S3UploadWorker.jobs, :size).by(1) }
  end
end
```

これだけだとジョブがいつまでも残ってしまうのでspec_helper等に`clean_all`を呼ぶコードを入れておきましょう。

```ruby
config.before(:each) do
  Sidekiq::Worker.clear_all
end
```

## エンドツーエンドテスト

では、非同期処理も含めたエンドツーエンドテストはどうすればいいでしょうか。

[sidekiqのwiki](https://github.com/mperham/sidekiq/wiki/Testing)を読むと`drain`というクラスメソッドがあります。これを使います。

- `Sidekiq::Worker.drain`は特定のワーカーのジョブキューに溜っているジョブを全て実行します
- `Sidekiq::Worker.drain_all`は全てのワーカーのジョブキューに溜っているジョブを全て実行します

`request specs`ならばこれらを直接、cucumberやturnipであれば以下のようなステップを作って明示的に呼び出すようにします。

```gherkin
step 'バックグランド処理を全て実行する' do
  Sidekiq::Worker.drain_all
end
```

この方法は、非同期処理の完了を待ち合わせをしたり、適当にsleepを入れたりしなくてもいい上に、テストの意図も表現しやすいのでお勧めです。

## おわりに

今回のエントリは、実際にお仕事で別々のテスト戦略を選択したRailsアプリケーションに機能追加や修正をしてみたところ、`sidekiq/testing/inline`は安易に選択しないほうがよさそうと思ったのがきっかけです。

`sidekiq/testing/inline`を選択した場合は、以下のような問題が起きる可能性を考慮しなければなりません。

- 非同期処理がいらないところにすべて`stub`を仕込まないといけない
- 実行されてもされなくてもいいところでは全て実行されるので、スローテスト問題になりやすい
- 同期実行される前提でテストが書かれる可能性がある
- 非同期処理の先も含めてのユニットテストが書かれてしまったりする

「そんなの書かねーよ」と言われればそれまでですが、こういう書き方ができてしまう方法を選択しないほうがよいにこしたことはないと思います。

というわけでみなさん非同期処理のライブラリとして`sidekiq`を選択する場合は以下のような方針でテストを書いみるのがよいのではないでしょうか。

- 特別な事情がなければ`sidekiq/testing`を使うべき(`sidekiq/testing/inline`は使わない)
- 非同期処理そのもののユニットテストは`MyWorker.new.perform`で書けばよい
- 非同期処理をキックする側のユニットテストは`MyWorker.jobs.size`を検証するだけにする
- エンドツーエンドテストでは「全てのジョブを実行する」というstepやメソッドを作ってそれを呼ぶ

おわり。
