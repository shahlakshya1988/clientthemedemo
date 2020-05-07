(function (window, document, $) {
	'use strict';

	var AXIL = {
		i: function (e) {
			AXIL.s();
			AXIL.methods()
		},

		s: function (e) {
			this._window = $(window),
				this._document = $(document),
				this._body = $('body');
		},

		methods: function (e) {
			AXIL.w();
			AXIL.clickDoc();
			AXIL.click();
		},

		w: function (e) {
			this._window.on('load', AXIL.l).on('scroll', AXIL.scrl).on('resize', AXIL.res)
		},

		l: function (e) {},

		clickDoc: function (e) {
			var smoothScroll;

			//SMOOTHSCROLL
			smoothScroll = function (e) {

				if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
					var $f = target.offset().top,
						$g = $f - 40,
						$y;

					if (target.length) {
						$('#section-featured_work').is(target) ? $y = $g : $y = $f;
						$('html, body').animate({
							scrollTop: $y
						}, 1000, 'easeInOutExpo');
						return !1
					}
				}
			};

			AXIL._document.on('click', '.page-scroll', smoothScroll);
		},

		click: function (e) {
			AXIL.b();
			AXIL.c()
		},

		b: function (e) {},
		c: function (e) {}
	};
	AXIL.i()
})(window, document, jQuery);