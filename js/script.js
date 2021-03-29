$(document).ready(function() {

/* waypoints snippet for sticky navigation using http://imakewebthings.com/waypoints/guides/jquery-zepto/ */	
	$('.js--sticky-start').waypoint(function(direction) {
		if (direction == "down") {
			$('nav').addClass('sticky')
		} else {
			$('nav').removeClass('sticky');
		}
	});
	
//smooth scrolling button -> contact section
	$('.js--scroll-contact').click(function(){
		$('html, body').animate({scrollTop:$('.js--nav-contact').offset().top}, 1000);
	});
	
//scrolling to all elements in navigation
/* snippet from 
https://css-tricks.com/snippets/jquery/smooth-scrolling/
*/	
	$('a[href*="#"]')
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000, function () {
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) {
							return false;
						} else {
							$target.attr('tabindex', '-1');
							$target.focus();
						};
					});
				}
			}
		});
	
/*animation on scroll using waypoints and https://daneden.github.io/animate.css*/
	$('.js--animation1').waypoint(function(direction) {
		$('.js--animation1').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	
	$('.js--animation2').waypoint(function(direction) {
		$('.js--animation2').addClass('animated fadeInDown');
	}, {
		offset: '50%'
	});
	
	$('.js--animation3').waypoint(function(direction) {
		$('.js--animation3').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	
//mobile navigation	
    


	$('.js--nav-icon').click(function() {
		var nav = $('.js--nav');
		var icon = $('.js--nav-icon i');
		
		nav.slideToggle(200);
		if(icon.hasClass('fa-times-circle')) {
			icon.addClass('fa-bars');	
			icon.removeClass('fa-times-circle');
		} else {
			icon.addClass('fa-times-circle');	
			icon.removeClass('fa-bars');
		}       


	});
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 768 && $('.js--nav').is(':hidden')) {  
        	$('.js--nav').removeAttr('style');  
  		}  
	});  

});


/* from https://hpneo.github.io/gmaps 
for contact section */
var map = new GMaps({
    div: '.map',
	lat: 53.44636041933073,
	lng: 26.940343415381044,
	zoom: 15
});
map.addMarker({
  lat: 53.44636041933073,
  lng: 26.940343415381044,
  title: 'Неманский куток',
	infoWindow: {
		content: '<p>Добро пожаловать!</p>'
	}
});
