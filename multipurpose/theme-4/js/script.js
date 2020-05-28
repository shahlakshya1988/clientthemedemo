/*jshint jquery:true */
/*global $:true */

var $ = jQuery.noConflict();

$(document).ready(function($) {
	"use strict";

	/* ---------------------------------------------------------------------- */
	/*	for ie8 line
	/* ---------------------------------------------------------------------- */
	var dropdownMenu = $('.dropdown');
	dropdownMenu.css('z-index', 99999);

	/* ---------------------------------------------------------------------- */
	/*	Fancybox
	/* ---------------------------------------------------------------------- */
	var fancyelem = $(".view-image, .zoom-image");

	try{
		fancyelem.fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',

			prevEffect : 'elastic',
			nextEffect : 'elastic',

			closeBtn  : false,

			helpers : {
				title : {
					type : 'inside'
				},
				buttons	: {}
			}
		});
	} catch(err) {
	}
	/* ---------------------------------------------------------------------- */
	/*	Accordion
	/* ---------------------------------------------------------------------- */
	var clickElem = $('#accordion div h4');

	clickElem.on('click', function(){
		var $this = $(this),
			parentCheck = $this.parent('div');
		if( !parentCheck.hasClass('active')) {
			var accordItems = $('#accordion div');
			accordItems.removeClass('active');
			parentCheck.addClass('active');
		}
	});

	/* ---------------------------------------------------------------------- */
	/*	testimonials isotope
	/* ---------------------------------------------------------------------- */
	// Needed variables
		var $content=$('.testimonial-box');
		try{
			$content.imagesLoaded( function(){
				$content.isotope({
					layoutMode:'masonry',
					animationOptions:{
						duration:750,
						easing:'linear'
					}
				});
			});
		} catch(err) {
		}

		var winDow = $(window);
		winDow.bind('resize', function(){

			try {
				$content.isotope({ 
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {
			}
			return false;
		});


	/*-------------------------------------------------*/
	/* =  Flexslider
	/*-------------------------------------------------*/
	try {

		var boxSlider = $('.flexslider');

		boxSlider.flexslider({
			animation: "fade"
		});
	} catch(err) {

	}

	var nextSlide = $('.next-slide'),
		prevSlide = $('.prev-slide');

	nextSlide.on('click', function(e){
		e.preventDefault();
		var nextTrigg = $('.flex-direction-nav .flex-next');
		nextTrigg.trigger('click');
	});

	prevSlide.on('click', function(e){
		e.preventDefault();
		var prevTrigg = $('.flex-direction-nav .flex-prev');
		prevTrigg.trigger('click');
	});

	/* ---------------------------------------------------------------------- */
	/*	Client Slider
	/* ---------------------------------------------------------------------- */
		var clientSlider = $('.bxslider.clSlider');

		try {
			clientSlider.bxSlider({
				auto: true,
				mode: 'horizontal'
			});
		} catch(err) {
		}

	/*-------------------------------------------------*/
	/* =  portfolio isotope
	/*-------------------------------------------------*/


	// Needed variables
		var $container=$('.projects-container');
		var $filter=$('.filter-items');

		try{
			$container.imagesLoaded( function(){
				$container.show();
				$container.isotope({
					filter:'*',
					layoutMode:'masonry',
					animationOptions:{
						duration:750,
						easing:'linear'
					}
				});
			});
		} catch(err) {
		}

		winDow.bind('resize', function(){
			var selector = $filter.find('a.active').attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {
			}
			return false;
		});
		
		// Isotope Filter 
		$filter.find('a').click(function(){
			var selector = $(this).attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {

			}
			return false;
		});

	/* ---------------------------------------------------------------------- */
	/*	Alert
	/* ---------------------------------------------------------------------- */

		var CloseAlert = $('.close-alert-box, .close-not');

		CloseAlert.on('click', function(e){
			e.preventDefault();

			var $this = $(this);
			$this.closest('div').fadeOut(300);
		});

	/* ---------------------------------------------------------------------- */
	/*	Tabs and toogle
	/* ---------------------------------------------------------------------- */

		var tabListclick = $('.tab-list li a');
		tabListclick.on('click', function(e){
			e.preventDefault();
			var $this = $(this).parent('li'),
				x = $this.index();
			if( !$this.hasClass('active')) {

				var tabListItems = $('.tab-list li'),
					tabContentItems = $('.tab-content li'),
					nextTabContent = $('.tab-content li:eq('+ x +')');

				tabListItems.removeClass('active');
				$this.addClass('active');
				tabContentItems.fadeOut(400);
				nextTabContent.delay(400).fadeIn(400);
			}
		});

		var clickElement = $('.toogle-content h4 a');
		clickElement.on('click', function(e){
			e.preventDefault();

			var $this = $(this),
				hisParents = $this.parents('.toogle-content');
			if ( !hisParents.hasClass('active')) {

				hisParents.find('div').fadeIn(300, function(){
					hisParents.addClass('active');
				});
			} else {
				hisParents.find('div').fadeOut(300, function(){
					hisParents.removeClass('active');
				});
			}
		});

	/* ---------------------------------------------------------------------- */
	/*	Calendar
	/* ---------------------------------------------------------------------- */

		var Calendarbox = $( "#datepicker" );

		try {
			Calendarbox.datepicker();
		} catch(err) {

		}
	/* ---------------------------------------------------------------------- */
	/*	Contact Map
	/* ---------------------------------------------------------------------- */
	var contact = {"lat":"52.204914", "lon":"0.121686"}; //Change a map coordinate here!

	try {
		var mapContainer = $('.map');
		mapContainer.gmap3({
			action: 'addMarker',
			latLng: [contact.lat, contact.lon],
			map:{
				center: [contact.lat, contact.lon],
				zoom: 14
				},
			},
			{action: 'setOptions', args:[{scrollwheel:true}]}
		);
	} catch(err) {

	}
});