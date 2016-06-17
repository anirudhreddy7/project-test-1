(function ($) {
    var openedTime = 1000;
    var openedTimeout;
    var explicitClose = false;

    var $all = $(".header-top-bar .more-link, .header-top-bar .account-link, .header-top-bar .cart");
    var $allLink = $(".header-top-bar .more-link > a, .header-top-bar .account-link > a, .header-top-bar .cart > a");
    $all.hover(function (event) {
        setTimeout(function () {
            explicitClose = false;
        });
        if (openedTimeout) {
            clearTimeout(openedTimeout);
            $all.removeClass("active");
        }
        $(event.currentTarget).addClass("active");
    }, function (event) {
        if (explicitClose) {
            explicitClose = false;
            return;
        }
        openedTimeout = setTimeout(function () {
            openedTimeout = null;
            $(event.currentTarget).removeClass("active");
        }, openedTime);
    });


     

     if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
         $('.header-top-bar .account-link > a').on('tapstart', function (event) {
             event.preventDefault();
             if (openedTimeout) {
                 clearTimeout(openedTimeout);
             }
             if ($(event.currentTarget.parentNode).hasClass("active")) {
                 explicitClose = true;
                 $all.removeClass("active");
             } else {
                 explicitClose = false;
                 $(event.currentTarget.parentNode).addClass("active");
             }
         });


     } else {
         $('.header-top-bar .account-link > a').on('click', function (event) {
             //event.preventDefault();
             if (openedTimeout) {
                 clearTimeout(openedTimeout);
             }
             if ($(event.currentTarget.parentNode).hasClass("active")) {
                 explicitClose = true;
                 $all.removeClass("active");
             } else {
                 explicitClose = false;
                 $(event.currentTarget.parentNode).addClass("active");
             }
         });
     }

})(jQuery);

$(document).ready(function() {

    $('a.icon-cart').on('click touchend', function (e) {
      var el = $(this);
      var link = el.attr('href');
      window.location = link;
   });

});

$(function () {
    var windowsize = $(window).width();
    $(window).resize(function () {
        if (windowsize < 1024) {
            $("#cartButton").removeClass("has-dropdown");
            $("#cartButton > .mini-cart").css("display", "none");
        } else {
            $("#cartButton").addClass("has-dropdown");
            $("#cartButton > .mini-cart").css("display", "none");
        }
    });
    $("#cartButton").click(function () {
        if (windowsize < 1024) {
            $("#cartButton").removeClass("has-dropdown");
            $("#cartButton > .mini-cart").css("display", "none");
        } else {
            $("#cartButton").addClass("has-dropdown");
            $("#cartButton > .mini-cart").css("display", "none");
        }
    });
});