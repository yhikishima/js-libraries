(function() {
  var eachMethod = document.getElementById('eachMethod');
  var timeMethod = document.getElementById('timeMethod');
  var keysMethod = document.getElementById('keysMethod');
  var extendMethod = document.getElementById('extendMethod');
  var templateMethod = document.getElementById('templateMethod');
  var bindMethod = document.getElementById('bindMethod');
  var deferMethod = document.getElementById('deferMethod');


  /*
  * 1.[_.each]ES5のforEachと同じ機能を持つイテレータメソッド
  */

  var eachTest = (function(members) {
    var ret = '<ul>';
    _.each(members, function(member, i) {
      ret = ret + [
        '<li>',
          '<p class="mod-name">name: ' + member.name + '</p>',
          '<p class="mod-job">job: ' + member.job + '</p>',
        '</li>'
      ].join('');
    });
    return ret + '</ul>';
  }([
    { name: '山田太郎',  job: 'フロントエンドエンジニア' },
    { name: '山田花子', job: 'デザイナー' }
  ]));

  eachMethod.innerHTML = eachTest;

  /*
  * 2.[_.times]実行回数が決まっていない_.each()に対して、すでに何回実行するか決まっているイテレータは_.times()で実行。
  */

  _.times(3, function(n) {
    var node = document.createTextNode(n + ',');
    timeMethod.appendChild(node);
  });


  /*
  * 3.[_.keys]オブジェクトのキーを配列にして返す。
  */

  var keys = {
    name: '鍵のキー',
    category: '鍵',
    detail: ['家', '車']
  };

  _.each(_.keys(keys), function(n) {
    var node = document.createTextNode(n + ', ');
    keysMethod.appendChild(node);
  });

  /*
  * 4.[_.extend]1つ目のオブジェクトに対して2つ目以降のオブジェクトのプロパティをコピーするメソッド
  */

  var breed = { breed: 'ミニチュアダックスフント' };
  var age = { age: 6 };
  var dog = _.extend({}, breed, age);

  extendMethod.innerHTML = '種類：'+dog.breed+', 年齢：'+dog.age;

  /*
  * 5.[_.template]テンプレートメソッド
  */

  var template = _.template('<p><%- value %></p>');
  var t = template({ value: 'This is value.' });

  templateMethod.innerHTML = t;

  /*
  * 6.[_.bind]指定した関数にObjectを束縛したり、部分適用を実現できる
  */

  var func = function(greeting){ return greeting + ': ' + this.name };
  func = _.bind(func, {name : 'moe'}, 'hi');
  bindMethod.innerHTML = func();

  /*
  * 7.[_.defer]実行するクロージャー内のコールスタックが空になった時点で実行する関数を予約できる
  */

  _.defer(function() {
    deferMethod.innerHTML = 'done!';
  });


})();