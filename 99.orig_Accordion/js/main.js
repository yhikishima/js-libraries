'use strict';

// LIB
var LIB = {};

(function(LIB) {
  LIB.Accordion = function(args) {
    var $trigger = args.trigger;

    $trigger.on('click', function() {
      var index = $trigger.index(this);
      args.target.eq(index).slideToggle(args.speed);
    });
  };
})(LIB || (LIB = {}));


// main.js
(function() {
  var $accordion = $('#js-accordion');

  LIB.Accordion({
    trigger: $accordion.find('.title'),
    target:  $accordion.find('.contents'),
    speed: 100
  });
})();
