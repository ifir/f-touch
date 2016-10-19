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

	function Ftouch(el){
		this.el = typeof el === 'object' ? el : document.querySelector(el);

	}

	Ftouch.prototype = {
		constructor: Ftouch,
		start: function(){

		},
		move: function(){

		},
		end: function(){

		},
		cancel: function(){

		},
		destroy: function(){

		}
	}


	return Ftouch;
})