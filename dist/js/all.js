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

    // check for touch
    if (Modernizr.touch) {

        // run the forEach on each figure element
        [].slice.call(document.querySelectorAll("figure")).forEach(function(el,i){

            // check if the user moves a finger
            var fingerMove = false;
            el.addEventListener("touchmove",function(e){
                e.stopPropagation();
                fingerMove = true;
            });

            // always reset fingerMove to false on touch start
            el.addEventListener("touchstart",function(e){
                e.stopPropagation();
                fingerMove = false;
            });

            // add hover class if figure touchend and fingerMove is false
            el.addEventListener("touchend",function(e){
                e.stopPropagation();
                if (fingerMove === false) {
                    classie.toggle(el,"hover");
                }
            });

        });

    }

})(window);
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
