$(window).load(function () {

$('.flexslider').flexslider({
animation: "slide",
start: function(slider){
$('body').removeClass('loading');
}
});

});


$(document).ready(function(){

<!-- Function for ddsmoothmenu-->
ddsmoothmenu.init({
 mainmenuid: "smoothmenu1", //menu DIV id
 orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
 classname: 'ddsmoothmenu', //class added to menu's outer DIV
 //customtheme: ["#1c5a80", "#18374a"],
 contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
})

<!-- Function for mobilemenu-->
$('.ddsmoothmenu').mobileMenu({
	defaultText: 'Navigation',
	className: 'select-menu',
	subMenuDash: '&ndash;'
});

<!-- Function for flickrfeed -->
$('#flickr').jflickrfeed({
	limit: 9,
	qstrings: {
		id: '52617155@N08'
	},
	itemTemplate: '<li><a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
});

<!-- Function for Twitterfeed -->
$('.tweet').tweet({
	username: "envato",
	modpath: '../tfeed/',
	count: 2,
	loading_text: 'loading twitter feed...',
});

});



