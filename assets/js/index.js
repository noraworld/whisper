/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        $(".scroll-down").arctic_scroll();

        $(".menu-button, .nav-cover, .nav-close").on("click", function(e){
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });

    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        },

        allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });

    };

    // Customize options here

    // Change Twitter link (nora20120808 -> noraworlds)
    //var oldTwitterLinks = $('a[href^="https://twitter.com/nora20120808"]');
    //for (var i = 0; i < oldTwitterLinks.length; i++) {
    //    oldTwitterLinks.eq(i).attr('href', 'https://twitter.com/noraworlds');
    //    oldTwitterLinks.eq(i).text('@noraworlds');
    //}

    // Add button to scroll to top
    if (!navigator.userAgent.match(/(iPhone|android)/)) {
        $('.scroll-top').hide();
        $(window).scroll(function() {
            if ($(this).scrollTop() > 800) {
                $('.scroll-top').fadeIn();
            } else {
                $('.scroll-top').fadeOut();
            }
        });
        $('.scroll-top').on('click', function() {
            $('html body').animate({
                scrollTop: 0
            }, 500);
        });
    }

})(jQuery);
