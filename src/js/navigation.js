	;(function () {

		$(function() {

			$('.nav-toggle').click(function() {
				$(this).toggleClass('active');
				$('.header-nav').toggleClass('open');
				event.preventDefault();
			});
			/* When user clicks a link */
			$('.header-nav li a').click(function() {
				$('.nav-toggle').toggleClass('active');
				$('.header-nav').toggleClass('open');
			});

			$('.learn-more').click(function () {
				$('html, body').animate({
				        scrollTop: $("#portfolio").offset().top
				    }, 'slow');
				return false;

			});

			$('.go-top').click(function(e){ 
			    $('html,body').animate({ scrollTop: 0 }, 'slow');
			    return false; 
			});


			function makeDefault() {
				$('section.navigation').removeClass('fixed');
				$('.logo').removeClass('inactive');

				$('header').css({
					"border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
					"padding": "50px 0"
				});
				$('header .member-actions').css({
					"top": "41px",
				});
				$('header .navicon').css({
					"top": "48px",
				});
				$('.go-top').css({
					"display": "none",
				});
			} 

			function makeFolded() {
				$('section.navigation').addClass('fixed');
				$('.logo').addClass('inactive');
				$('header').css({
					"border-bottom": "none",
					"padding": "35px 0"
				});
				$('header .member-actions').css({
					"top": "26px",
				});
				$('header .navicon').css({
					"top": "34px",
				});
				$('.go-top').css({
					"display": "block",
				});
			}


			var scroll = $(window).scrollTop();
			if (scroll >= 100) {
				makeFolded();
			} else {
				makeDefault();
			}
			
			$(window).scroll(function() {
				var scroll = $(window).scrollTop();
				if (scroll >= 100) {
					makeFolded();
				} else {
					makeDefault();
				}
			});
		});


	})();
	