(function() {
  var foo = 'foo';
  var isExitElem = document.getElementById('isFooExist');
  var isNotExitElem = document.getElementById('isFooNotExist');
  var isNumber1Elem = document.getElementById('isNumber1Even');
  var isNumber2Elem = document.getElementById('isNumber2Even');

  var numbers1 = [2, 4, 6, 8];
  var numbers2 = [2, 4, 5, 8];


  /*
  * 1.変数が存在している（nullやundefinedでない）かどうかのチェック
  */

  if ( is.existy(foo) ) {
    isExitElem.innerHTML = '`foo` is exist!';

  } else {
    isExitElem.innerHTML = '`foo` is not exist!';
  }

  /*
  * 2.チェック結果がfalseと判定される場合にtrueを返す
  */

  if ( is.not.existy(foo) ) {
    isNotExitElem.innerHTML = '`foo` is not exist';

  } else {
    isNotExitElem.innerHTML = '`foo` is exist!';
  }

  /*
  * 3.与えられた複数の値がすべてtrueと評価される場合のみ、trueを返す
  */
  if ( is.all.even(numbers1) ) {
    isNumber1Elem.innerHTML = '`numbers1` is Even!';

  } else {
    isNumber1Elem.innerHTML = '`numbers1` is not Even!';
  }

  if ( is.all.even(numbers2) ) {
    isNumber2Elem.innerHTML = '`numbers2` is Even!';

  } else {
    isNumber2Elem.innerHTML = '`numbers2` is not Even!';

  }
})();


