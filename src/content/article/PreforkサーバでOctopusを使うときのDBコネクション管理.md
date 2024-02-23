---
title: 'PreforkサーバでOctopusを使うときのDBコネクション管理'
slug: 'PreforkサーバでOctopusを使うときのDBコネクション管理'
publishedOn: 2014-11-10
createdAt: 2015-08-06 01:43:33 +0900
updatedAt: 2019-10-13 02:46:20 +0900
---
unicornに代表されるprefork(する)サーバでは、DBへのコネクションのような各プロセスで共有してはいけないリソースを`before_fork`と`after_fork`で適切に管理する必要がある。

ふつうのRails Applicationは以下のように、ARのコネクションをはりなおしていると思う。

```ruby
before_fork do |server, worker|
  ActiveRecord::Base.connection.disconnect!
end

after_fork do |server, worker|
  ActiveRecord::Base.establish_connection
end
```

しかし、Octopusを使っている場合はこれだけでは不十分で、このままだと再起動直後にエラーが大量に出ることになる。今関わっているプロジェクトでは`NoMethodError: undefined method 'query' for nil:NilClass`というかんじで、ARの`@connection`がnilになるという問題が多発していた。

[Octopusのissue#59](https://github.com/tchandy/octopus/issues/59#issuecomment-3134239)では

```ruby
after_fork do |server, worker|
  ActiveRecord::Base.connection_proxy.instance_variable_get(:@shards).each {|k,v| v.clear_reloadable_connections! }
end
```

というかんじで`after_fork`でだけ`clear_reloadable_connections!`というメソッドを呼べばいいよ、ということになっていた。

- ActiveRecord::Base.connection、またはconnection_proxyは、OctopusのConnectionProxyに置き換えられている
- これの持っている`@shards`というインスタンス変数に、すべてのAR::ConnectionPoolがはいっている
  - シャーディングしている場合は対象の接続すべて、レプリケーションの場合は **masterとslaveの接続全て**
- [clear\_reloadable\_connections!](https://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/ConnectionPool.html#method-i-clear_reloadable_connections-21)は、ARのメソッドでだいぶ便利メソッドっぽい

というかんじである。

で、実際はこれだけでも例外はでなくなったのだが、再起動が異様にもっさりするようになったので

```ruby
before_fork do |server, worker|
  ActiveRecord::Base.connection_proxy.instance_variable_get(:@shards).each  do |_, c|
    c.disconnect!
  end
end
```

というかんじで`before_fork`でdisconnectはするようにして様子を見ている。(これだとストレスがなかった)

## おまけ

Octopusの動作を完璧に理解するには、沢山のスパイクをしたり、ソースコードを読みまくらないといけない。(つらい)

みんながそんなことをしなくてもいいとは思うので、よくある問題の一つである「意図しているDBにクエリが飛んでいない」というのをデバッグするために、DBの接続先を判断している部分のポインタを置いておく。
原因がよくわからないときは、最小の再現コードを書いてこの部分に`binding.pry`して動きを追ったりしている。

[tchandy/octopus lib/octopus/proxy.rb#L260](https://github.com/tchandy/octopus/blob/ce55a0d931fcd0698f64357a656984981e6b3f6c/lib/octopus/proxy.rb#L260)

```ruby
    def method_missing(method, *args, &block)
      binding.pry # ココをひっかける
      if should_clean_connection_proxy?(method)
        conn = select_connection
        self.last_current_shard = current_shard
        clean_connection_proxy
        conn.send(method, *args, &block)
      elsif should_send_queries_to_shard_slave_group?(method)
        send_queries_to_shard_slave_group(method, *args, &block)
      elsif should_send_queries_to_slave_group?(method)
        send_queries_to_slave_group(method, *args, &block)
      elsif should_send_queries_to_replicated_databases?(method)
        send_queries_to_selected_slave(method, *args, &block)
      else
        select_connection.send(method, *args, &block)
      end
    end
```

なんと、Octopusは実際にクエリ投げるメソッドを横取りするために`method_missing`を使っている。だいたいのSQLの実行はここを通るので、ここをひっかけるのが一番楽だと思う。

逆にここにひっかからない場合は、Octopusが独自に実装している何らかのメソッドを経由しているのでそれはそれで調査が捗る。

このif-elseの条件のどこにはいって、その先のDB接続先の判定をするメソッドがどう振る舞うかを見ると、「あーなるほどね」となることがけっこうある。

[複数DBとの戦いの記録](https://diary.shu-cream.net/blog/2014/10/27/octopus-round-robin-bug.html) で見つけたラウンドロビンに関する意図しない挙動も、これで見つけたのであった。

今夜の 複数DB Casual Talks 、盛り上げてこ!!1
