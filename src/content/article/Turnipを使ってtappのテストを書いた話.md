---
title: 'Turnipを使ってtappのテストを書いた話'
slug: 'Turnipを使ってtappのテストを書いた話'
publishedOn: 2012-03-04
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2018-06-05 06:14:04 +0900
---
WEB+DB PRESSのRubyわくわくナビでも紹介された[tapp](https://github.com/esminc/tapp)のテストについては社内でも定期的に上がる話題で、もう少し広い意味で考えると、標準出力を扱うアプリのテストをどうするかという話になったりするのですが、

+ tappの単体テストってなんかしっくりこないよね
+ 標準出力に出すだけだしね
+ そういえば、[vim-ruby-refactoring](https://github.com/ecomba/vim-ruby-refactoring)っていうVimプラグインのテストがCucumberで書いてあるんですよ
+ そういえば、jnicklas先生の新作[Turnip](https://github.com/jnicklas/turnip)っていうのがあって…
+ それ使ってみましょう

という感じでTurnipを使ってAcceptance Testを書いてみました。

Turnipの特徴はこんな感じです。

- 記法はCucumberと同じ[Gherkin](https://github.com/cucumber/cucumber/wiki/Gherkin)
- Stepの定義に正規表現を使わずに、ただの文字列と、その中にコロン(:)をプレフィックスとしたプレースホルダで変数を扱う
- Stepに名前空間ある
- Stepの名前空間に変数が持てる

日本語で書けるかどうかは試してないですが、なかなかよさそうじゃありませんか？

Turnipで書いたtappのテストを下に載せておきます。
ただ、名前空間とかは使ってないので、Cucumberとは殆ど変わりませんね。

```Gherkin
Feature: Object#tapp

  Scenario: Call tapp within methods chain
    Given I have the following code:
    """
    require 'tapp'

    (1..5).tapp.select(&:odd?).tapp.inject(&:+)
    """

    When Ruby it

    Then I should see:
    """
    1..5
    [1, 3, 5]
    """
```

Step定義も合わせてどうぞ。
こっちは、よくある標準出力をテストする方法を使っています。

```ruby
step "I have the following code:" do |code|
  @code = code
end

step "Ruby it" do
  stdout = StringIO.new
  $stdout = stdout
  begin
    eval @code
  ensure
    $stdout = STDOUT
  end
  @output = stdout.string.chop
end

step "I should see:" do |output|
  @output.should == output
end
```

結構読みやすいと思うんですがどうでしょう。標準入出力を扱う簡単なツールは、こんな感じで単体テストよりもエンドツーエンドのテストを書いておいた方が価値があると思います。

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=shucreamnet-22&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4798121932&linkId=124af5ae9614baad519a7d3e2d6c1a60"></iframe>
