; (function ($, window, undefined) {
    'use strict';

    var $doc = $(document),
        Modernizr = window.Modernizr;

    $(document).ready(function () {
        $.fn.foundationAlerts ? $doc.foundationAlerts() : null;
        $.fn.foundationButtons ? $doc.foundationButtons() : null;
        $.fn.foundationAccordion ? $doc.foundationAccordion() : null;
        $.fn.foundationNavigation ? $doc.foundationNavigation() : null;
        $.fn.foundationTopBar ? $doc.foundationTopBar() : null;
        $.fn.foundationCustomForms ? $doc.foundationCustomForms() : null;
        $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
        $.fn.foundationTabs ? $doc.foundationTabs({ callback: $.foundation.customForms.appendCustomMarkup }) : null;
        $.fn.foundationTooltips ? $doc.foundationTooltips() : null;
        $.fn.foundationMagellan ? $doc.foundationMagellan() : null;
        $.fn.foundationClearing ? $doc.foundationClearing() : null;

        $.fn.placeholder ? $('input, textarea').placeholder() : null;
    });
	

    // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
    // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
    // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
    // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
    // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

    // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
    if (Modernizr.touch && !window.location.hash) {
        $(window).load(function () {
            setTimeout(function () {
                window.scrollTo(0, 1);
            }, 0);
        });
    }

})(jQuery, this);
/*************************************************************
    ** More/Less Product Detail
    **************************************************************/
(function (d) {
    function g(c, a) {
        this.element = c; this.options = d.extend({}, h, a); d(this.element).data("max-height", this.options.maxHeight); delete this.options.maxHeight; if (this.options.embedCSS && !k) {
            var b = ".readmore-js-toggle, .readmore-js-section { " + this.options.sectionCSS + " } .readmore-js-section { overflow: hidden; }", e = document.createElement("style"); e.type = "text/css"; e.styleSheet ? e.styleSheet.cssText = b : e.appendChild(document.createTextNode(b)); document.getElementsByTagName("head")[0].appendChild(e);
            k = !0
        } this._defaults = h; this._name = f; this.init()
    } var f = "readmore", h = { speed: 100, maxHeight: 200, moreLink: '<a href="#">Read More</a>', lessLink: '<a href="#">Close</a>', embedCSS: !0, sectionCSS: "display: block; width: 100%;", beforeToggle: function () { }, afterToggle: function () { } }, k = !1; g.prototype = {
        init: function () {
            var c = this; d(this.element).each(function () {
                var a = d(this), b = a.css("max-height").replace(/[^-\d\.]/g, "") > a.data("max-height") ? a.css("max-height").replace(/[^-\d\.]/g, "") : a.data("max-height"); a.addClass("readmore-js-section");
                "none" != a.css("max-height") && a.css("max-height", "none"); a.data("boxHeight", a.outerHeight(!0)); if (a.outerHeight(!0) < b) return !0; a.after(d(c.options.moreLink).on("click", function (b) { c.toggleSlider(this, a, b) }).addClass("readmore-js-toggle")); a.data("sliderHeight", b); a.css({ height: b })
            })
        }, toggleSlider: function (c, a, b) {
            b.preventDefault(); var e = this, f = newLink = ""; b = !1; f = d(a).data("sliderHeight"); d(a).height() == f ? (f = d(a).data().boxHeight + "px", newLink = "lessLink", b = !0) : newLink = "moreLink";

            //Omniture - read more/less
            if (typeof Om_ReadMoreOrLess == 'function') {
                Om_ReadMoreOrLess(newLink);
            }

            e.options.beforeToggle(c, a, b); d(a).animate({ height: f }, { duration: e.options.speed }); d(c).replaceWith(d(e.options[newLink]).on("click", function (b) { e.toggleSlider(this, a, b) }).addClass("readmore-js-toggle")); e.options.afterToggle(c, a, b)
        }
    }; d.fn[f] = function (c) {
        var a = arguments; if (void 0 === c || "object" === typeof c) return this.each(function () { d.data(this, "plugin_" + f) || d.data(this, "plugin_" + f, new g(this, c)) }); if ("string" === typeof c && "_" !== c[0] && "init" !== c) return this.each(function () {
            var b = d.data(this, "plugin_" + f); b instanceof g && "function" ===
            typeof b[c] && b[c].apply(b, Array.prototype.slice.call(a, 1))
        })
    }
})(jQuery);




$(document).ready(function () {
    if ($(".player-frame").length) {
        $(".player-frame").each(function () {
            var iframeURL = $('.player-frame').attr('src');
            var newiFrameURLItem = iframeURL.split('&')[0];
            var newiFrameURLID = iframeURL.split('&')[1];
            var newiFrameURL = newiFrameURLItem + "&" + newiFrameURLID;
            $('.player-frame').attr('src', newiFrameURL);
            $('.player-frame').attr('width', 640);
            $('.player-frame').attr('height', 360);
        });
    }
    $('iframe[src*="youtube.com"]').each(function() {
            if ($(this).parent().is("center")) {
                $(this).unwrap();
                $(this).wrap("<div class=\"flex-video widescreen\">");
            }             
    });
});

var min_width;
if (Modernizr.mq('(min-width: 0px)')) {
    // Browsers that support media queries
    min_width = function (width) {
        return Modernizr.mq('(min-width: ' + width + ')');
    };
}
else {
    // Fallback for browsers that does not support media queries
    min_width = function (width) {
        return $(window).width() >= width;
    };
}


$(function () {
    $('.more-block').append("<div class=\"fade\"></div>");
    $('<p class="read-more"><a class="readmoreless">Read More</a></p>').insertAfter(".more-block");
    
   var $el, $ps, $up, totalHeight;

   $(".readmoreless").click(function () {
       totalHeight = 0;
       $el = $(this);
        $p = $el.parent().siblings('.more-block');
        $up = $p;
        

       if ($el.text() == 'Read More') {
           // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
          $up
             .css({
                   // Set height to prevent instant jumpdown when max height is removed
                   "height": "inherit",
                  "max-height": "100%"
               })
               .animate({ height: "inherit" }, 200);

           // fade out read-more
           $el.text('Read Less');
           $('.fade').remove();
           //$p.fadeOut();

        } else {
           
          // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)

            $up
                .css({
                   // Set height to prevent instant jumpdown when max height is removed
                   //"height": 300,
                   "max-height": 300
            })
               .animate({ height: 300 }, 200);

           // fade out read-more
           $el.text('Read More');
           $('.more-block').append("<div class=\"fade\"></div>");
          //$p.fadeOut();

           // prevent jump-down

       }
       // prevent jump-down
        return false;
   });

});
$(document).ready(function () {
    /*if ($('.author-bio').length) {
        $('.author-bio').readmore({
            maxHeight: 180,
            moreLink: '...<a href="#" class="moreLessLink">read more</a>',
            lessLink: '...<a href="#" class="moreLessLink">read less</a>'
        });
            $('.product_name_desc').readmore({
        maxHeight: 180,
        moreLink: '...<a href="#" class="moreLessLink">read more</a>',
        lessLink: '...<a href="#" class="moreLessLink">read less</a>'
    });
    ////Added by CTS OffShore Release 2.7
    $('.item-description span').readmore({
        maxHeight: 48,
        moreLink: '',
        lessLink: ''
    });
    }*/

    /*if ($('.accordion-tab.active .content.accordion-tab-content.active').length) {
        $('.accordion-tab.active .content.accordion-tab-content.active').readmore({
            maxHeight: 600,
            moreLink: '<p class="read-more"><a href="#" class="button">read more</a></p>',
            lessLink: '<p class="read-more"><a href="#" class="button">read less</a></p>'
        });
    }*/
    

	
	$(".reveal-modal").on("reveal:open", function (e) {
		if ($('.chosen-container').length > 0) {
		    $('.chosen-container').on('touchstart', function (e) {
		        e.stopPropagation(); e.preventDefault();
		        // Trigger the mousedown event.
		        $(this).trigger('mousedown');
		    });
		}
});
$(".accordion.faq > li > .title, .accordion.tabs-content.centered > li > .title").click(function () {
    var self = this;
    setTimeout(function () {
        theOffset = $(self).offset();
        $('body,html').animate({ scrollTop: theOffset.top - 100 });
    	}, 310);
	});
});

$(".accordion.faq > li").click(function () {
    var self = this;
    setTimeout(function () {
        theOffset = $(self).offset();
        $('body,html').animate({ scrollTop: theOffset.top - 100 });
    }, 310);
});

$(document).ready(function () {
	
	function cloneInfo() {
			$( "#authorBio" ).clone().appendTo( "#authorBioDup" );
			$( "#productDataListing" ).clone().appendTo( ".productDataListingContDup" );
			$( "#productDescrip" ).clone().appendTo( "#productDescripDup" );
			$( "#prodAlsoAvailable" ).clone().appendTo( "#prodAlsoAvailableDup" );
		}

	$(window).load(function() {
		cloneInfo();
		});
});


$(document).ready(function () {
    $(".has-tooltip").tooltip({
        position: {
            my: "center bottom-20",
            at: "center bottom",
            collision: "fit",
            using: function (position, feedback) {
                $(this).css(position);
                $("<div>")
                    .addClass("arrow")
                    .addClass(feedback.vertical)
                    .addClass(feedback.horizontal)
                    .appendTo(this);
            }
        }
    });
    $('body').on("touchend", function(event){
        $(".has-tooltip").each(function(){
            if ($(event.target).closest($(this)).length) {
                return;
            }
            if (typeof $(this).data("tooltip") !== "undefined") {
                $(this).tooltip("close");
            }
        });
    });
});

    $(".mobile_filters").hide();
	$("#filter_show").click(function(){
    $(".mobile_filters").toggle(1000);
});