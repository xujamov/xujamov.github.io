$(function() {
    var worksgrid = $('#portfolio-grid');
    $('a', filters).on('click', function() {
        var selector = $(this).attr('data-filter');
        $('.current', filters).removeClass('current');
        $(this).addClass('current');
        worksgrid.isotope({
            filter: selector
        });
        return false;
    });
    $(window).on('resize', function() {
        var windowWidth = Math.max($(window).width(), window.innerWidth),
            itemWidht = $('.grid-sizer').width(),
            itemHeight = Math.floor(itemWidht * 0.95),
            itemTallHeight = itemHeight * 2;
        if (windowWidth > 500) {
            $('.portfolio-item', worksgrid).each(function() {
                if ($(this).hasClass('tall')) {
                    $(this).css({
                        height: itemTallHeight
                    });
                } else if ($(this).hasClass('wide')) {
                    $(this).css({
                        height: itemHeight
                    });
                } else if ($(this).hasClass('wide-tall')) {
                    $(this).css({
                        height: itemTallHeight
                    });
                } else {
                    $(this).css({
                        height: itemHeight
                    });
                }
            });
        } else {
            $('.portfolio-item', worksgrid).each(function() {
                if ($(this).hasClass('tall')) {
                    $(this).css({
                        height: itemTallHeight
                    });
                } else if ($(this).hasClass('wide')) {
                    $(this).css({
                        height: itemHeight / 2
                    });
                } else if ($(this).hasClass('wide-tall')) {
                    $(this).css({
                        height: itemHeight
                    });
                } else {
                    $(this).css({
                        height: itemHeight
                    });
                }
            });
        }
        worksgrid.isotope();
    }).resize();
    $('.popup-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        image: {
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Doniyor Khujamov</small>';
            }
        }
    });
    $('.popup-youtube, .popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});
$(document).ready(function () {
    new LazyLoad();
});