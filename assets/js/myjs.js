jQuery(function($) {
    $.fn.revolution && $(".revolution-slider").revolution({
        delay: 6000,
        startwidth: 1130,
        startheight: 500,
        hideThumbs: 10,
        fullWidth: "on",
        forceFullWidth: "off",
        hideTimerBar: "on"
    })
});

$('.images').mousemove(function(e) {
    $('.cloud1').parallax(40, e);
    $('.cloud2').parallax(-100, e);
    $('.honeymoon-img').parallax(-30, e);
    $('.international-img').parallax(30, e);
    $('.hajj-umrah-img').parallax(15, e);
    $('.north-indian-img').parallax(-30, e);
    $('.south-indian-img').parallax(50, e);
    $('.express-tours-img').parallax(-30, e);
    $('.cloud9').parallax(30, e);
    $('.cloud10').parallax(-30, e);
});

// tour-package
jQuery(function($) {
    var allDiv = $('.accordion .accordion-inner');
    allDiv.hide();
    allDiv.first().slideDown();

    $('.accordion h4').click(function(e) {
        $('.accordion h4 .fa').removeClass('fa-chevron-up');
        $('.accordion h4 .fa').addClass('fa-chevron-down');
        $(this).children().next().removeClass('fa-chevron-down');
        $(this).children().next().addClass('fa-chevron-up');
        allDiv.slideUp();
        $(this).next().slideDown();
        return false;
    });

    $('.fly-nav-tabs li').click(function() {
        $('.fly-nav-tabs').children().removeClass('active');
        $('.tab-content').children().removeClass('active');
        $(this).addClass('active');
        $('#' + $(this).attr('data-toggle')).addClass('active');
    });
});


$('.product').hover(function() {
    if ($(window).width() > 600) {
        var cls = $(this).attr('data-product');
        $('.products3').toggleClass(cls)
    }
});

/* Scroll to Top */
$(".totop").hide();

$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $('.totop').fadeIn();
    } else {
        $('.totop').fadeOut();
    }
    if ($(window).width() > 600) {
        if ($(this).scrollTop() > 350) {
            $('.tour-package').fadeIn();
        } else {
            $('.tour-package').fadeOut();
        }
    }
});
$(".totop a").click(function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1200);
    return false;
});

jQuery(function($) {
    $('.fancybox-thumbs').fancybox({
        helpers: {
            title: {
                type: 'outside'
            },
            thumbs: {
                width: 50,
                height: 50
            }
        }
    });
});

// fly-nav

$('.package-ul-mobile').click(function() {
    $('.package-ul').toggleClass('show');
});


$(document).ready(function() {
    var flyNavOffset = $('.fly-nav').offset().top;

    $(window).scroll(function() {
        var pos = $(window).scrollTop();

        if (pos >= flyNavOffset) {
            $('.fly-nav').addClass('fly-nav-fixed');
            $('.fly-nav .fly-outer>li').addClass('no-margin');
            $('.fly-logo').show();
        } else {
            $('.fly-nav').removeClass('fly-nav-fixed');
            $('.fly-nav .fly-outer>li').removeClass('no-margin');
            $('.fly-logo').hide();
        }
    });
});


