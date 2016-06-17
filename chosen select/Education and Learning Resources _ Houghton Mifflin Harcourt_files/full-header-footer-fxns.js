$(document).ready(function () {
    if ($(".player-frame").length) {
        if ($(".tabs-content iframe.player-frame").length) {
            $(".tabs-content iframe.player-frame").wrap('<ul class="block-grid one-up row featured-content nine-column two-items widget-section"><li><section class="row blurb widget-with-description"><div class="six columns video-wrap"><div class="flex-video widescreen"></div></div></section></li></ul>');
        }
        if ($(".block-grid.one-up.featured-content .row.widget-with-description .six.columns.image-wrap iframe.player-frame").length) {
            $(".block-grid.one-up.featured-content .row.widget-with-description .six.columns.image-wrap iframe.player-frame").wrap('<div class="flex-video widescreen"></div>');
        }
        if ($(".row.article-widget iframe.player-frame").length) {
            if (!$(".row.article-widget.transparent iframe.player-frame").length) {
                $(".row.article-widget iframe.player-frame").wrap('<div class="flex-video widescreen"></div>');
            }
        }
    }
    $("#cartMini input.item-quantity").focus(function () {
        $(this).blur();
    });
    $("#cartMini .invoice-fields input").attr('readonly', 'readonly');
    $("#cartMini .invoice-fields select").attr('readonly', 'readonly');


    if ($("#emailAddressFooter").length) {
        $("#emailAddressFooter").blur(function () {
            if (!$("#frmMain").valid()) {
                $("#showform").removeAttr("data-reveal-id");
                $("#stayModal").trigger("reveal:close");
                $(".row.errors").removeClass("hide").addClass("show");
            } else {
                $("#showform").attr("data-reveal-id", "stayModal");
                $(".row.errors").removeClass("show").addClass("hide");
            }
        });
        $("#emailAddressFooter").keyup(function (e) {
            if (e.which === 13) {
                if (!$("#frmMain").valid()) {
                    $("#showform").removeAttr("data-reveal-id");
                    $("#stayModal").trigger("reveal:close");
                    $(".row.errors").removeClass("hide").addClass("show");
                } else {
                    $("#showform").attr("data-reveal-id", "stayModal");
                    $(".row.errors").removeClass("show").addClass("hide");
                }
            }
        });
        $("a#showform").on('click', function () {
            var sEmail = $('#emailAddressFooter').val();
            if ($("#frmMain").valid()) {
                var sourceURL = "/layouts/sites/hmh/sublayouts/subscribe/FooterSubscribe.aspx?email=" + sEmail + "";
                $("#frameID").attr("src", sourceURL);
                $("#stayModal").reveal({
                    closeOnBackgroundClick: true,
                    dismissModalClass: 'close-reveal-modal'
                });
            } else {
                $(".row.errors").removeClass("hide").addClass("show");
            }
            return false;
        });
        $('#emailAddressFooter').on('keydown', function (e) {
            if (e.which == 13) { // return                        
                e.preventDefault();
                $('a#showform').trigger('click');
                return false;
            }
        });
        $("#frmMain").validate({
            ignore: ".ignore",
            errorElement: "span",
            errorPlacement: function (error, element) {
                if (element.is(':checkbox')) {
                    $(element).next().after(error);
                }
                else {
                    $(element).parent().parent().siblings().children("div").html(error);
                }
            },
            invalidHandler: function (form, validator) {
                $(".row.errors").removeClass("hide").addClass("show");
            },
            rules: {
                emailAddressFooter: {
                    required: !$("#CommentsPanel").is(":visible"),
                    emailStrict: true,
                    minlength: 6
                }
            },
            messages: {
                emailAddressFooter: {
                    required: "Please enter a valid email address in the format account@domain.com.",
                    emailStrict: "Please enter a valid email address in the format account@domain.com.",
                    minlength: "Please enter a valid email address in the format account@domain.com."
                }
            }
        });
    }





    /*Start footer social icon hover effects*/
    var display_timeoutFacebook = 0;
    var socialHoverId;
    var socialContainerHoverId;

    $('#socialTwitter, #socialFacebook, #socialPinterest, #socialYouTube').hover(function () {

        socialHoverId = $(this).attr('id');

        clearTimeout(display_timeoutFacebook);

        display_timeoutFacebook = setTimeout(function () {
            display_timeoutFacebook = 0;

            if (socialHoverId == "socialFacebook") {
                if ($("#socialTwitterContainer").is(":visible")) {
                    $("#socialTwitterContainer").slideUp("slow");
                }
                if ($("#socialPinterestContainer").is(":visible")) {
                    $("#socialPinterestContainer").slideUp("slow");
                }
                if ($("#socialYouTubeContainer").is(":visible")) {
                    $("#socialYouTubeContainer").slideUp("slow");
                }
            }

            if (socialHoverId == "socialTwitter") {
                if ($("#socialFacebookContainer").is(":visible")) {
                    $("#socialFacebookContainer").slideUp("slow");
                }
                if ($("#socialPinterestContainer").is(":visible")) {
                    $("#socialPinterestContainer").slideUp("slow");
                }
                if ($("#socialYouTubeContainer").is(":visible")) {
                    $("#socialYouTubeContainer").slideUp("slow");
                }
            }

            if (socialHoverId == "socialPinterest") {
                if ($("#socialFacebookContainer").is(":visible")) {
                    $("#socialFacebookContainer").slideUp("slow");
                }
                if ($("#socialTwitterContainer").is(":visible")) {
                    $("#socialTwitterContainer").slideUp("slow");
                }
                if ($("#socialYouTubeContainer").is(":visible")) {
                    $("#socialYouTubeContainer").slideUp("slow");
                }
            }

            if (socialHoverId == "socialYouTube") {
                if ($("#socialTwitterContainer").is(":visible")) {
                    $("#socialTwitterContainer").slideUp("slow");
                }
                if ($("#socialFacebookContainer").is(":visible")) {
                    $("#socialFacebookContainer").slideUp("slow");
                }
                if ($("#socialPinterestContainer").is(":visible")) {
                    $("#socialPinterestContainer").slideUp("slow");
                }
            }

            $("#" + socialHoverId + "Container").slideDown("slow");
        }, 500);
    },
	function () {

	    if (display_timeoutFacebook != 0) {
	        clearTimeout(display_timeoutFacebook);
	    }

	    delayTimeoutFacebook = setTimeout(function () {
	        $("#" + socialHoverId + "Container").slideUp("slow");
	    }, 500);
	});


    $("#socialTwitterContainer, #socialFacebookContainer, #socialPinterestContainer, #socialYouTubeContainer").hoverIntent (function () {
        clearTimeout(delayTimeoutFacebook);
        socialContainerHoverId = $(this).attr('id');
    },
    function () {
        delayTimeoutFacebook = setTimeout(function () {
            $("#" + socialContainerHoverId).slideUp("slow");
        }, 500);
    });

    /*WP 576 Fix to make the video appear behind the super nav */

    

    /*var offset = 850;
    var duration = 500;
        $(window).scroll(function() {
            if ($(this).scrollTop() > offset) {
                $('.back-to-top').fadeIn(duration).addClass("show");
            } else {
                $('.back-to-top').fadeOut(duration).removeClass("show");
            }
        });
				
        $('.back-to-top').click(function (event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        });*/
});
/*Ends footer social icon hover effects*/