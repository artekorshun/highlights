$(document).ready(function () {
	$('.inner-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		dotsClass: 'slick-dots',
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 700,
		vertical: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		cssEase: 'cubic-bezier(0.265, 1.24, 0.64, 1.0)'
	});
});

$('.header__burger').click(function () {
	$('.header__burger,.menu-header__list').toggleClass('active');
});

$(window).scroll(function () {
	var height = $(window).scrollTop();
	if (height > 50) {
		$('.header').addClass('_bg');
	}
	else {
		$('.header').removeClass('_bg');
	}
});