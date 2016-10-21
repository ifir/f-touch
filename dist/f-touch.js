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

	function Ftouch(ele){
		var _this = this;
		_this.ele = typeof ele === 'object' ? ele : document.querySelector(ele);
		_this.startX = 0;
		_this.startY = 0;
		_this.moved = false;
		_this.isTouch = false;
		//addEventListener
		_this.ele.addEventListener('touchstart', _this, false);
		_this.ele.addEventListener('mousedown', _this, false);

	}

	Ftouch.prototype = {
		constructor: Ftouch,
		start: function(e){
			if(e.type === 'touchstart'){

			}else if(e.type === 'mousedown'){

			}
		},
		move: function(){

		},
		end: function(){

		},
		cancel: function(){

		},

		destroy: function(){
			this.ele.removeEventListener('touchstart', this, false);
	        this.ele.removeEventListener('touchmove', this, false);
	        this.ele.removeEventListener('touchend', this, false);
	        this.ele.removeEventListener('touchcancel', this, false);
	        this.ele.removeEventListener('mousedown', this, false);
	        this.ele.removeEventListener('mouseup', this, false);
	        this.ele.removeEventListener('mousemove', this, false);
		}
	}


	return Ftouch;
})