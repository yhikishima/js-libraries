(function() {
  var eachMethod = document.getElementById('eachMethod');
  var timeMethod = document.getElementById('timeMethod');

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


})();