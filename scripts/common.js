$(function() {
    // Apply `Slick` slider
    $('.slider').slick({
        dots: true,
    });

    // Handle slider with menu
    (function() {
        var $slider = $('.slider.with-menu');

        // Add `before-active` class on load
        $slider.parent().find('.slider-menu:first').children('.active').prev().addClass('before-active');

        // Add `before-active` class on slide change
        $slider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $menu = $(this).parent().find('.slider-menu:first');

            $menu.children('.active').removeClass('active before-active');
            $menu.children().eq(nextSlide).addClass('active');

            if (nextSlide > 0) {
                $menu.children().eq(nextSlide - 1).addClass('before-active');
            }
        });
    })();

    // Handle side menu
    (function() {
        var $menu = $('.side-menu');

        updateMenuPosition();

        // Show side menu button
        setTimeout(function() {
            $menu.addClass('loaded');
        }, 200);

        $menu.find('.side-menu-trigger').on('click', function() {
            $menu.toggleClass('open');
            updateMenuPosition();
        });

        $(window).on('scroll resize', updateMenuPosition);

        function updateMenuPosition() {
            var top = 0;

            if ($menu.hasClass('open')) {
                top += $(window).height() / 2 - $menu.height() / 2;
            } else {
                top += $(window).height() / 2 - $menu.find('.side-menu-trigger').height() / 2;
            }

            $menu.css({
                top: top
            });
        }
    })();
});