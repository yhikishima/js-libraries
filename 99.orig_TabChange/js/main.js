'use strict';

// LIB
var LIB = {};

//tab change
(function(LIB){
  LIB.TabChange = function(arg) {
    this.triggetList = $(arg.triggerIdName + ' > li');
    this.targetList = $(arg.targetIdName + ' > li');
    this.tabCurrent = ( arg.tabCurrent ) ? arg.tabCurrent : 0;
    this.changeType = ( arg.changeType ) ? arg.changeType : 'normal';
    this.easing = ( arg.easing ) ? arg.easing : 'swing';
    this.distance = ( arg.distance ) ? arg.distance : 500;

    this.init();
  }

  var proto = LIB.TabChange.prototype;

  proto.init = function() {
    this.setCurrent();
    this.bindEvent();
  }

  proto.setCurrent = function () {
    this.triggetList.eq(this.tabCurrent).addClass('current');
    this.targetList.eq(this.tabCurrent).addClass('current');
  }

  proto.bindEvent = function() {
    var self = this;

    this.triggetList.on('click', function() {
      self.changeTab(this);
    });
  }

  proto.changeTab = function(target) {
    var index = this.triggetList.index(target);

    this.addTriggerCurrent(target);
    this.addTargetCurrent(index);
  }

  proto.addTriggerCurrent = function(target) {
    this.triggetList.removeClass('current');
    $(target).addClass('current');
  }

  proto.addTargetCurrent = function(index) {
    if ( this.changeType === 'normal' ) {
      this.targetList.removeClass('current');
      this.targetList.eq(index).addClass('current');

    } else if ( this.changeType === 'fade' ) {
      this.targetList.removeClass('current').removeAttr('style');
      this.targetList.eq(index).fadeIn(this.distance, this.easing).addClass('current');
    }
  }

})(LIB || (LIB = {}));


(function() {
  new LIB.TabChange({
    triggerName : '#js-tabTrigger',
    targetName : '#js-tabTarget',
    tabCurrent : 1,
    changeType: 'fade',
    easing: 'linear',
    distance: 200
  });
})();