$(function() {
	$('#rworks').carouFredSel({
		responsive: true,
			circular: false,
			infinite: false,
			prev	: {	
			button	: "#prev2",
			key		: "left"
			},
			next	: { 
				button	: "#next2",
				key		: "right"
			},
			width: '100%',
				auto: false,
				scroll: 1,
				items: {
					width: 400,
				//	height: '30%',	//	optionally resize item-height
					visible: {
						min: 1,
						max: 3
					}
				}
			});


			$('#testimonial').carouFredSel({
				responsive: true,
				prev: '#prev3',
				next: '#next3',
				width: '100%',
				auto: false,
				scroll		: {
					items			: 1,		//	items.visible
					fx				: "crossfade",
				},
				items: {
					width: 400,
				//	height: '30%',	//	optionally resize item-height
					visible: {
						min: 1,
						max: 1
					}
				}
			});


			$('#clients').carouFredSel({
			responsive: true,
				prev: '#prev4',
				next: '#next4',
				width: '100%',
				auto: false,
				scroll: 1,
					items: {
					width: 150,
				//	height: '30%',	//	optionally resize item-height
					visible: {
						min: 2,
						max: 5
				}
			}
	});
});