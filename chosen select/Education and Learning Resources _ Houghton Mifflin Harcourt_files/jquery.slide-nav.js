;(function (window, document, $) {
    $slideNavs = $('.slide-nav');
    $slideNavs.each(function(index, slideNav) {
        var $slideNav = $(slideNav);
        $slideNav.attr('data-slide-nav-active', 1);

        var level = 1;
        var activeItems = [];
        var transitionTime = 300;
        var inTransition = false;

        var itemClickHandler = function(event) {
            event.preventDefault();
            if (inTransition) {
                return;
            }
            var a = event.currentTarget;
            stepForward($(a));
        };

        $('.back-button a').click(function(event) {
            event.preventDefault();
            if (inTransition) {
                return;
            }
            stepBackward();
        });

        var stepForward = function($activeItem) {
            level = level + 1;
            activeItems.push($activeItem);
            $levelItems.unbind("click");
            updateSlideNav();
        };

        var stepBackward = function() {
            level = level - 1;
            activeItems.pop();
            $levelItems.unbind("click");
            updateSlideNav();
        };

        var updateSlideNav = function() {
            $level = $('ul[data-slide-nav-step=' + level + ']', $slideNav);
            $levelItems = $('li[data-slide-nav-id] > a', $level);
            $levelItems.click(itemClickHandler);
            if (activeItems.length > 0) {
                var $activeItem = activeItems[activeItems.length - 1];
                $('li[data-slide-nav-show!="' + $($activeItem.parent()).attr('data-slide-nav-id') + '"]', $level).removeClass('show');
                $('li[data-slide-nav-show="' + $($activeItem.parent()).attr('data-slide-nav-id') + '"]', $level).addClass('show');
            }
            inTransition = true;
            $slideNav.attr('data-slide-nav-active', level);
            setTimeout(function() {
                inTransition = false;
            }, transitionTime)
        };
        var $level = $('ul[data-slide-nav-step=' + level + ']', $slideNav);
        var $levelItems = $('li[data-slide-nav-id] > a', $level);
        $levelItems.click(itemClickHandler);

        var setSize = function () {
            $slideNav.css("height", $(window).height() - $("#top-header").height());
        };
        setSize();
        $(window).resize(setSize);
    });
}(this, document, jQuery));