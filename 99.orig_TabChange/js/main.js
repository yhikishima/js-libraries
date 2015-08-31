'use strict';

// LIB
var LIB = {};

//tab change
(function(LIB){
  LIB.tab = function(arg) {
    this.triggetList = $('#'+ arg.triggerIdName + ' > li');
    this.targetList = $('#'+ arg.targetIdName + ' > li');
    this.tabCurrent = ( arg.tabCurrent ) ? arg.tabCurrent : 0;
    this.changeType = ( arg.changeType ) ? arg.changeType : 'normal';
    this.easing = ( arg.easing ) ? arg.easing : 'swing';
    this.distance = ( arg.distance ) ? arg.distance : 500;

    this.init();
  }

  var proto = LIB.tab.prototype;

  proto.init = function() {
    var self = this;

    this.setDefault();

    this.triggetList.on('click', function() {
      self.changeTarget(this);
    });

  }

  proto.setDefault = function() {
    this.triggetList.eq(this.tabCurrent).addClass('current');

    if ( this.changeType === 'fade' ) {
      this.targetList.addClass('hide').eq(this.tabCurrent).removeClass('hide');
    }

    this.targetList.eq(this.tabCurrent).addClass('current');
  }

  proto.changeTab = function(target) {
    this.triggetList.removeClass('current');
    $(target).addClass('current');
  }

  proto.changeTarget = function(target) {
    var targetNum = this.triggetList.index(target);

    this.changeTab(target);

    if ( this.changeType === 'normal' ) {
      this.targetList.removeClass('current');
      this.targetList.eq(targetNum).addClass('current');

    } else if ( this.changeType === 'fade' ) {
      this.targetList.removeClass('current').addClass('hide');
      this.targetList.eq(targetNum).fadeIn(this.distance, this.easing).addClass('current').removeClass('hide');
    }
  }
})(LIB || (LIB = {}));



(function() {
  new LIB.tab({
    triggerIdName : 'js-tabTrigger',
    targetIdName : 'js-tabTarget',
    tabCurrent : 1,
    changeType: 'fade',
    easing: 'linear',
    distance: 200
  });
})();