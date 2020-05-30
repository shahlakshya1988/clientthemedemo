/*jshint jquery:true */
/*global $:true */

var $ = jQuery.noConflict();

$(document).ready(function($) {

	"use strict";
	/*-------------------------------------------------*/
	/* =  testimonial
	/*-------------------------------------------------*/
	try{
		var testimUl = $('.testimonial ul');

		testimUl.quovolver({
		transitionSpeed:300,
		autoPlay:true
		});
	}catch(err){
	}
	/*-------------------------------------------------*/
	/* =  Fancybox Images
	/*-------------------------------------------------*/
	try {

		var ImageGallery = $(".zoom-image");
		ImageGallery.fancybox({
			nextEffect:'fade',
			prevEffect:'fade',
			openEffect:'fade',
			closeEffect:'fade',
			helpers:{
				title:{
					type:'float'
				}
			}
		});
	}catch(err){
	}

	/*-------------------------------------------------*/
	/* =  Flexslider
	/*-------------------------------------------------*/
	try {

		var boxSlider = $('.flexslider');

		boxSlider.flexslider({
			animation: "fade",
			start: function(){
				var body = $('body');
				body.removeClass('loading');
			}
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

	/*-------------------------------------------------*/
	/* =  Blog post carousell
	/*-------------------------------------------------*/

	var blogCarNext = $('#next-blog');
	blogCarNext.on('click', function(e){
		e.preventDefault();

		var itemLength = $('.carousell-item').length - 1,
			current = $('.carousell-item.active').index(),
			nextItem = current + 1;

		if( current < itemLength ) {
			var lastActive = $('.carousell-item.active'),
				nextActive = $('.carousell-item:eq('+ nextItem +')');

			lastActive.fadeOut(300, function(){
				$(this).removeClass('active');
				nextActive.fadeIn(300, function(){
					$(this).addClass('active');
				});
			});
		}
	});

	var blogCarPrev = $('#prev-blog');
	blogCarPrev.on('click', function(e){
		e.preventDefault();

		var current = $('.carousell-item.active').index(),
			nextItem = current - 1;

		if( current > 0 ) {

			var lastActive = $('.carousell-item.active'),
				nextActive = $('.carousell-item:eq('+ nextItem +')');

			lastActive.fadeOut(300, function(){
				$(this).removeClass('active');
				nextActive.fadeIn(300, function(){
					$(this).addClass('active');
				});
			});
		}
	});
	
	var x = $('#sidebar').parent('.row-fluid').height(),
		y = $(window);

	if( y.width() > 768 ){

		var sideBar = $('#sidebar');
		sideBar.css('min-height', x);		
	}

	/*-------------------------------------------------*/
	/* =  portfolio isotope
	/*-------------------------------------------------*/


	// Needed variables
		var $container=$('.portfolio-posts');
		var $filter=$('#filter');
		var $posts=$('ul.portfolio-posts');
		try{
			$container.imagesLoaded( function(){
			$posts.show();
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

		var winDow = $(window);
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

	var filterAnchors = $('ul#filter li a');

	filterAnchors.on('click', function(){
		if(!$(this).hasClass('active')) {
			var lastAnchorActive = $('ul#filter li a.active');
			lastAnchorActive.removeClass('active');
			$(this).addClass('active');
		}
	});

	/* ---------------------------------------------------------------------- */
	/*	accordion - about page
	/* ---------------------------------------------------------------------- */
	try{

		var accord = $( "#accordion" );
		var tab = $( "#tabs" );
		accord.accordion();
		tab.tabs();
	} catch(err) {

	}

	/* ---------------------------------------------------------------------- */
	/*	menu on responsive
	/* ---------------------------------------------------------------------- */

	var menurespons = $('.menu nav > ul');
	menurespons.on('click', function(){
		var $this = $(this);
		if( !$this.hasClass('active')) {
			$this.addClass('active');
		} else {
			$this.removeClass('active');
		}
	});

	winDow.bind('resize', function(){
		if( menurespons.hasClass('active')) {
			menurespons.removeClass('active');
		}
	});
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