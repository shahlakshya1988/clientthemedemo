window.jQuery(document).ready(function($){
//-------------------- Flickr integration with an image gallery --------------------//
	
	$('.nd_flickr_widget').jflickrfeed({
		limit:6,
		qstrings: {
			id:'122316648@N03' // Your flickr id
		},
		useTemplate: false,
		itemCallback: function(item){
			$(this).append('<a href="' + item.image + '" target="_blank"><figure><div class="figure-overlay"></div><img src="' + item.image_m + '" alt="' + item.title + '"/></figure></a>');
		}
	});
	
	//-------------------- End flickr integration with an image gallery --------------------//
});