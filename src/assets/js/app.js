//=require jquery.min.js

// to inlude bootstrap plugins add "=" sign below
//=require javascripts/bootstrap/transition.js
//=require javascripts/bootstrap/collapse.js
//=require javascripts/bootstrap/tab.js


// require javascripts/bootstrap/*.*
//=require javascripts/bootstrap.min.js /* for meny work*/

//=require slick.min.js

//=require isotope.pkgd.min.js
//=require map.js

;(function($){

	$(document).ready(function(){




		//var $slider = $('.ba-slider');

		// $slider.slick({
		// 	dots: true,
		// 	infinite: false
		// });
		var teamSlider = $('.ba-team-slider');
		teamSlider.slick({
			dots: true,
			slide: '.ba-slide',
			prevArrow: '.ba-slider-prev',
			nextArrow: '.ba-slider-next',
			slidesToShow: 1
		});


	});

	var worksGrid = $('.ba-portfolio');

	$(window).on('load', function(){


	    worksGrid.isotope({
	        // options
	        itemSelector: '.ba-portfolio__item',
	        percentPosition: true,
	       /* masonry:{
	        	columnWidth: '.g',
	        }*/

	    });
	    $('.ba-portfolio-filter').on( 'click', '[data-filter]', function(e) {
	        e.preventDefault();
	        var filterValue = $(this).data('filter');
	        worksGrid.isotope({ filter: filterValue });
	        $('.ba-active[data-filter]').removeClass('ba-active');
	        $(this).addClass('ba-active');
	    });
	});
})(jQuery);






















