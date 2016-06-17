/* nav cart code - begin */

(function ($) {
    var delayTimeout;
    var delayAddToCartTimeout;
    var display_timeout = 0;
    var miniCartPathname = "/hmhstorefront/cart/miniCart/view";
    var date = new Date()
    var time = date.getTime();
    //var miniCartUrl = "http://hmhco-v1.dev.techspa.com/hmhstorefront/cart/miniCart/view?bustcache= "+ time; 
    var miniCartUrl = window.location.protocol + "//" + window.location.host + miniCartPathname + "?bustcache=" + time;
    var miniCartTotalItems = 0;

    /* Start - Code to set cartCount */
    miniCartTotalItems = parseInt($(".cartCount").text());

    if (miniCartTotalItems > 0) {
        $(".cartCount").removeClass("empty");
        $(".cartCount").text(miniCartTotalItems > 99 ? "99+" : miniCartTotalItems);
    }
    else {
        $(".cartCount").addClass("empty");
        $(".cartCount").html("&nbsp;");
    }

    /* End  - Code to set cartCount */




    $("#cartButton").hover(function () {
        clearTimeout(delayTimeout);
        clearTimeout(delayAddToCartTimeout);

        //Delays the slide down
        display_timeout = setTimeout(function () {
            display_timeout = 0;

            if ($("#cart").is(":hidden")) {
                $.ajax({
                    type: "GET",
                    url: miniCartUrl,
                    dataType: "html",
                    cache: false,
                    success: function (response) {
                        if (response != null) {
                            $('#cart').html(response);
                        }
                    }
                });
            }

            $('#cart').slideDown("slow");

        }, 100);    //RP:2013-04-01:: Reduced from 500 to 100

    },
    function () {

        if (display_timeout != 0) {
            clearTimeout(display_timeout);
        }

        delayTimeout = setTimeout(function () {
            if ($('#cart').is(':visible')) {
                $("#cart").slideUp("slow");
            }
        }, 3000);
    });

    /*
    $("#mobileHeader").live("#cartContent", "hover", function () {
    $("#mobileHeader").delegate("#cartContent", "hover", function () {
    $("#mobileHeader").on("mouseover", "#cartContent", function () {
        clearTimeout(delayTimeout);
        clearTimeout(delayAddToCartTimeout);
    }).on("mouseout", "#cartContent", function () {
        delayTimeout = setTimeout(function () {
            if ($('#cartContent').is(':visible')) {
                $("#cartContent").slideUp();
            }
        }, 2000);
    });
    */

    /*   $("#cart").hover(function () {
           clearTimeout(delayTimeout);
           clearTimeout(delayAddToCartTimeout);
       },
       function () {
           delayTimeout = setTimeout(function () {
               $("#cart").slideUp();
           }, 2000);
       });
   */

})(jQuery);
