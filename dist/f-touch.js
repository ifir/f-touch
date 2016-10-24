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

	var utils = {};
	utils.userAgent = function(){
		if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){

		}else{

		}
	}

	function Ftouch(){
		return new Ftouch.fn.init();
	}

	Ftouch.fn = Ftouch.prototype = {
		constructor: Ftouch,
		init : function(e){
			var _this = this;
			this.CT = 'tap'; // 是click还是tap
			document.documentElement.addEventListener('touchstart',this.fireEvent.bind(this));
		},
		// userAgent: function(){
		// 	if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
		// 		this.CT = 'tap';
		// 	}else{
		// 		this.CT = 'click';
		// 	}
		// },
		createEvent: function(e){
			var evt = new window.CustomEvent("tap", {
				bubbles: true,
				cancelable: true
			});
			return evt;
		},
		fireEvent: function(e){
			e.target.dispatchEvent(this.createEvent());
		}
	}

	Ftouch.fn.init.prototype = Ftouch.prototype;


	return Ftouch();
})