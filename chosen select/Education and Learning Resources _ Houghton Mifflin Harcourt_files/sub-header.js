(function ($) {
    $(".search-toggle").click(function() {
        $('.search-bar .search-form').toggleClass("active");
        $('.search-bar .search-toggle').toggleClass("active");
    });
    $(window).resize(function () {
        var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (w >= 641) {
	        $('.search-bar .search-form').removeClass("active");
	        $('.search-bar .search-toggle').removeClass("active");
            $('input#searchEntry').on('keypress',function(){
                var searchEntry = $("input#searchEntry").width();
                $('.ui-autocomplete').css('width', searchEntry + 'px !important');
            });
        }
    });
})(jQuery);