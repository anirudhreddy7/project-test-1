// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () { };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
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
var delay = (function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    }
})();

fixFlexsliderHeight = function () {
    $('.flexslider').each(function () {
        var sliderHeight = 0;
        var totalHeight = 0;
        var initialCircleHeight = $('ol.flex-control-nav.flex-control-paging li a').height();
        var finalCircleHeight = initialCircleHeight + 20;
        $(this).find('.slides > li.flex-active-slide img, .slides > li.flex-active-slide video').each(function () {
            slideHeight = $(this).height();
            if (sliderHeight < slideHeight) {
                sliderHeight = slideHeight;
            }
            totalHeight = sliderHeight + finalCircleHeight;
        });
        $(this).find('ul.slides').css({ 'height': sliderHeight });
        $('.flexslider').css({ 'height': totalHeight });
        $('.carousel-container > .row').css({ 'height': totalHeight });
    });
}

$(document).ready(fixFlexsliderHeight);
$(window).resize(function () {
    delay(function () {
        fixFlexsliderHeight();
    }, 100)
});
$(document).ready(function () {
    var player;
    if (!(typeof videojs === 'undefined')) {
        videojs("carousel-video").ready(function () {
            player = this;
            player.on('play', function (data) {
                $('#slider').flexslider("pause");
                console.log("carousel playing");
                $('#slider .flex-control-nav').css('display', 'none');
                $('#slider .flex-next').css('display', 'none');
                $('#slider .flex-prev').css('display', 'none');
            });
            player.on('pause', function (data) {
                $('#slider').flexslider("play");
                console.log("carousel stopped");
                $('#slider .flex-control-nav').css('display', 'block');
                $('#slider .flex-next').css('display', 'block');
                $('#slider .flex-prev').css('display', 'block');
            });
        });
    }
});
$(window).load(function () {
    $('.flexslider').flexslider({
        animation: "slide",
        easing: "swing",
        direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
        reverse: false,                 //{NEW} Boolean: Reverse the animation direction
        animationLoop: true,            //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
        smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
        //itemWidth: 100%,
        itemMargin: 0,
        minItems: 1,
        maxItems: 8,
        prevText: "",
        nextText: "",
        touch: true,
        video: true,
        startAt: 0,
        slideshow: true,
        slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
        animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
        initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
        move: 1,
        video: true,
        allowOneSlide: true,
        start: function (slider) {
            fixFlexsliderHeight();
            if (slider.count <= 1) {
                $('.flex-direction-nav').css('display', 'none');
                $('.flexslider').flexslider("pause");
            };
            $('.flexslider li').addClass('flex-inactive-slide');
        }
    });
});