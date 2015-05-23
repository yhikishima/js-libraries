(function() {
  var foo = 'foo';
  var isExitElem = document.getElementById('isFooExist');
  var isNotExitElem = document.getElementById('isFooNotExist');
  var isNumber1Elem = document.getElementById('isNumber1Even');
  var isNumber2Elem = document.getElementById('isNumber2Even');
  var isNumber1AnyElem = document.getElementById('isNumber1AnyEven');
  var isNumber2AnyElem = document.getElementById('isNumber2AnyEven');

  var numbers1 = [2, 4, 6, 8];
  var numbers2 = [2, 4, 5, 8];


  /*
  * 1.[existy]変数が存在している（nullやundefinedでない）かどうかのチェック
  */

  if ( is.existy(foo) ) {
    isExitElem.innerHTML = '`foo` is exist!';

  } else {
    isExitElem.innerHTML = '`foo` is not exist!';
  }

  /*
  * 2.[not.existy]チェック結果がfalseと判定される場合にtrueを返す
  */

  if ( is.not.existy(foo) ) {
    isNotExitElem.innerHTML = '`foo` is not exist';

  } else {
    isNotExitElem.innerHTML = '`foo` is exist!';
  }

  /*
  * 3.[all]与えられた複数の値がすべてtrueと評価される場合のみ、trueを返す
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

  /*
  * 4.[any]与えられた複数の値のうちいずれかがtrueと評価される場合に、trueを返す
  */

  if ( is.any.even(numbers1) ) {
    isNumber1AnyElem.innerHTML = '`numbers1` is Even!';

  } else {
    isNumber1AnyElem.innerHTML = '`numbers1` is not Even!';
  }

  if ( is.any.even(numbers2) ) {
    isNumber2AnyElem.innerHTML = '`numbers2` is Even!';

  } else {
    isNumber2AnyElem.innerHTML = '`numbers2` is not Even!';
  }


})();


