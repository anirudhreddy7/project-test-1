(function (window, document, $) {
    // Set the negative margin on the top menu for slide-menu pages
    var $selector1 = $('#topMenu'),
        events = 'click.fndtn';
    if ($selector1.length > 0) $selector1.css("margin-top", $selector1.height() * -1);

    // Watch for clicks to show the sidebar
    var $selector2 = $('#sidebarButton');
    if ($selector2.length > 0) {
        $('#sidebarButton').on(events, function (e) {
            e.preventDefault();
            $('body').toggleClass('active');
           if ($('#sidebar-other-brands').hasClass('active')) {
                $('#sidebar-other-brands').find('*').each(function () {
                    $(this).removeClass('active');
                })
                $('#sidebar-other-brands').removeClass('active')
                $('#sidebar-other-brands').parents().removeClass('parent-active active');
            }
        });
    }
    $('#sidebar .accordion').on('click', 'li', function(event) {
        event.stopPropagation();
        var dataid = $(this).attr("id");
        var dataparentid = $(this).data("parent-id");
        var datalevel = $(this).data("level");
        var childs = $('li[id="' + dataid + '"]').find($('[data-parent-id="' + dataid + '"]'));
        $(childs).each(function(i) {
            $(childs[i]).find('li[data-parent-id]').hide();
            $(childs[i]).parents('li[data-parent-id]').removeClass('active');
            /*if ($(childs[i]).find('li').length > 0){
                $('<i class="icon-caret_down"></i>').appendTo($(this)).children().css('color', 'red');
            } else {
                $(childs[i]).css('background', '#F1A901');
            }*/
        });
        $('li[id="' + dataid + '"]').removeClass('parent-active').parents('li[data-parent-id]').addClass('parent-active active');
        $('li[id="' + dataid + '"]').addClass('active').slideDown('slow').siblings().removeClass('active parent-active').hide();
        $('li[id="' + dataid + '"]').addClass('active').find($('[data-parent-id="' + dataid + '"]')).hide().removeClass('active parent-active').slideDown('slow');
        //$('li[id="' + dataid + '"]').find($('[data-parent-id="' + dataid + '"]')).removeClass('parent-active active').parents('li[data-parent-id]').removeClass('parent-active');
        //setTimeout ( function() { $('li[id="' + dataparentid + '"]').has('div.content>ul.accordion').parents('body').removeClass('active') }, 1000 );
        if (dataid !== 'sidebar-menu') {
            $('#sidebar-menu').show();
            $('#sidebar-menu').addClass('parent-active');
        } else {
            $('#sidebar-menu').removeClass('parent-active').siblings().slideDown('slow').removeClass('active');
        setTimeout ( function() { $('li[id="' + dataid + '"]').not(':has(ul.accordion)').parents('body').addClass('active') }, 0 );       
        }

        if (dataid !== 'sidebar-other-brands') {
            $('#sidebar-menu').addClass('active');
        } else {
            $(this).slideDown('slow').addClass('active').removeClass('parent-active').siblings().removeClass('active');
            $('.brandssubmenu').find('li').slideDown('slow');
            $('#sidebar-menu').addClass('active parent-active');
        }

        if (dataparentid !== 'sidebar-other-brands') {
            $('#sidebar-menu').show();
        } else {
            $(this).removeClass('parent-active').show().siblings().hide().parents('li[data-parent-id]').removeClass('parent-active');
            $('#sidebar-menu').show();
            $('#sidebar-other-brands').find('li').show().siblings().show().removeClass('active parent-active');
            $('.icon-hamburger').click(function () {
                if (($('li[id="sidebar-other-brands"]').hasClass('active'))) {
                    $('#sidebar-menu').addClass('active').removeClass('parent-active').siblings().slideDown('slow').removeClass('active parent-active');
                } else {
                    return;
                }
            });
        }
    });

    $(window).resize(function () {
        var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (w >= 1150) {
            $("body").removeClass("active");
        }
    });
    $('.icon-hamburger').click(function(){
        if (!($('body').hasClass('active'))){
            $('body').css({
                'overflow': 'hidden',
                'height': '100%'
            });
        } else {
            $('body').css({
                'overflow': 'auto',
                'height': 'none'
            });                                
        }
    });        

}(this, document, jQuery));

