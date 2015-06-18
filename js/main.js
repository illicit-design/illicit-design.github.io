$('nav span').mouseenter(function() {
	$('nav').removeClass('closed');
});

$('nav').mouseleave(function() {
	$('nav').addClass('closed');
});

$('nav a').click(function() {
	var page = $(this).parent().index();
	$('html,body').animate({
      	scrollTop: $('.section-container > section').eq(page).offset().top
    }, 500);
});

$(window).scroll(function() {
	var bottom = $(window).scrollTop() + window.innerHeight,
		contentBottom = $('.keywords').offset().top,
		footerTop = $('footer').offset().top;

	if (bottom < contentBottom || bottom > footerTop) {
		$('.arrow').removeClass('black');
	} else {
		$('.arrow').addClass('black');
	}
});

$('.section-container').imagesLoaded().always(function() {
	console.log('images have loaded');

	$('.preloader').addClass('loaded');
});