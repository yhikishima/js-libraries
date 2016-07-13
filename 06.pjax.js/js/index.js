(function() {

  if ($.support.pjax) {
    $.pjax({
      area : '#pjax-container',
      link : 'a:not([target])'
    });
  }

})();