;(function(global, factory){
	if (typeof define === 'function' && define.amd) {
		define(function () {
			return (global.Ftouch = factory(global, global.document));
		});
    } else if (typeof exports === 'object') {
        module.exports = factory(global, global.document);
    } else {
        global.Ftouch = factory(global, global.document);
    }
})(typeof window !== 'undefined' ? window : this, function (window, document) {
	'use strict';

	function Ftouch(){
		return new Ftouch.fn.init();
	}

	Ftouch.fn = Ftouch.prototype = {
		constructor: Ftouch,
		init : function(e){
			var _this = this;
			_this.moveSwitch = false;
			_this.startX = 0;
			_this.startY = 0;

			_this.selectTouch();
			document.documentElement.addEventListener(_this.touchstart, this.start.bind(this), false);
			document.documentElement.addEventListener(_this.touchmove, this.move.bind(this), false);
			document.documentElement.addEventListener(_this.touchend, this.end.bind(this), false);
		},
		selectTouch: function(){
			var _this = this;
			if(window.navigator.msPointerEnabled){
				_this.touchstart = 'MSPointerDown';
				_this.touchmove = 'MSPointerMove';
				_this.touchend = 'MSPointerUp';
			}else if(window.navigator.pointerEnabled){
				_this.touchstart = 'pointerdown';
				_this.touchmove = 'pointermove';
				_this.touchend = 'pointerup';
			}else{
				_this.touchstart = 'touchstart';
				_this.touchmove = 'touchmove';
				_this.touchend = 'touchend';
			}
		},
		createEvent: function(eventName){
			try{
				var evt = new window.CustomEvent(eventName, {
					bubbles: true,
					cancelable: true
				});
			}catch(err){
				var evt = window.document.createEvent('HTMLEvents');
				evt.initEvent(eventName, true, true);
			}

			evt.eventName = eventName;
			return evt;
		},
		fireEvent: function(e, eventName){
			e.target.dispatchEvent(this.createEvent(eventName));
		},
		start: function(e){
			var _this = this;
			_this.startTime = Date.now();
			_this.moveSwitch = true;
			_this.startX = e.touches[0].pageX;
			_this.startY = e.touches[0].pageY;
		},
		move: function(e){
			var _this = this;
			if(!this.moveSwitch) return;
			_this.offsetX = e.touches[0].pageX - _this.startX;
			_this.offsetY = e.touches[0].pageY - _this.startY;
			_this.isMove = (Math.abs(_this.offsetX) > 11 || Math.abs(_this.offsetY) > 11) ? true : false;
		},
		end: function(e){
			var _this = this;
			_this.endTime = Date.now();
			var touchTime = _this.endTime - _this.startTime;
			if(!_this.isMove){
				touchTime < 500 && _this.fireEvent(e, 'tap');
				touchTime > 500 && _this.fireEvent(e, 'longtap');
			}else{
				var X = Math.abs(_this.offsetX), Y = Math.abs(_this.offsetY);
				X > 30 && X > Y && _this.offsetX < 0 && _this.fireEvent(e, 'swipeLeft');
				X > 30 && X > Y && _this.offsetX > 0 && _this.fireEvent(e, 'swipeRight');
			}
			_this.startX = 0;
			_this.startY = 0;
			_this.isMove = false;
			_this.moveSwitch = false;
		}
	}
	Ftouch.fn.init.prototype = Ftouch.prototype;


	return Ftouch();
})