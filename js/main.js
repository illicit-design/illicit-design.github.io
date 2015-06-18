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
	setTimeout(function() {
		$('.preloader').addClass('hidden');
	}, 1000);
});

(function(window){
    if (Modernizr.touch) {
        [].slice.call(document.querySelectorAll("figure")).forEach(function(el,i){
            var fingerMove = false;
            el.addEventListener("touchmove",function(e){
                e.stopPropagation();
                fingerMove = true;
            });
            el.addEventListener("touchstart",function(e){
                e.stopPropagation();
                fingerMove = false;
            });
            el.addEventListener("touchend",function(e){
                e.stopPropagation();
                if (fingerMove === false) {
                    classie.toggle(el,"hover");
                }
            });

        });

    }

})(window);