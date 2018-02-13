'use strict';

$(window).on('load', function () {

    setTimeout(function () {
        $('.btn__buy').animate({
            opacity: 1,
            top: 0
        }, 1000);

        $('.form__elem').animate({
            opacity: 1
        }, 1000);

        $('.navbar').animate({
            opacity: 1
        }, 1000);
    }, 650, function () {
        $('.border-blik').css({
            opacity: 1
        });
    });

    // SOCIAL

    setTimeout(function () {

        $('.link--1').css({
            opacity: 1,
            transform: 'scale(' + 1 + ')'
        });
    }, 1400);

    setTimeout(function () {
        $('.link--2').css({
            opacity: 1,
            transform: 'scale(' + 1 + ')'
        });
    }, 1500);

    setTimeout(function () {
        $('.link--3').css({
            opacity: 1,
            transform: 'scale(' + 1 + ')'
        });
    }, 1600);

    setTimeout(function () {
        $('.link--4').css({
            opacity: 1,
            transform: 'scale(' + 1 + ')'
        });
    }, 1700);

    setTimeout(function () {
        $('.link--5').css({
            opacity: 1,
            transform: 'scale(' + 1 + ')'
        });
    }, 1800);

    setTimeout(function () {
        $('.link--6').css({
            opacity: 1,
            transform: 'scale(' + 1 + ')'
        });
    }, 1900);

    // setTimeout(function(){
    //         $('.subscribe__overlay').fadeIn(400);
    //     },1000);


    // if (cookie == null || cookie == undefined) {


    //     setTimeout(function(){
    //         $('.subscribe__overlay').fadeIn(400);
    //     },5000);

    //     setCookie('subscribe', '1', {expires:0});

    // }

    $(".navbar-desktop, .navbar-collapse").on('click', 'a:not(a[href="blog.html"])', function (e) {
        e.preventDefault();

        var hash = $(this).attr("href");
        var target = $(hash);

        $("html, body").animate({
            scrollTop: target.offset().top - 100
        }, 1000);
    });
});

$(window).scroll(function () {

    var scroll = $(window).scrollTop();
    var body = $('body').height();
    var body_ = Math.round(body) / 100;

    var items = $('.section__animated');

    for (var i = 0; i < items.length; i++) {
        if ($('.section__animated:eq(' + i + ')').offset().top - scroll <= $(window).height() / 1.2) {
            $('.section__animated:eq(' + i + ')').animate({
                opacity: 1
            }, 1000);

            if ($(window).width() <= 575) {
                $('.section__animated:eq(' + i + ') .section__title').animate({
                    opacity: .4,
                    left: '15'
                });
            } else if ($(window).width() <= 992) {
                $('.section__animated:eq(' + i + ') .section__title').animate({
                    opacity: .4,
                    left: '30'
                });
            } else {
                $('.section__animated:eq(' + i + ') .section__title').animate({
                    opacity: .4,
                    left: '100'
                });
            }
        }
    }

    $('.body__bg').css({
        'top': -(scroll / body_) + '%'
    });

    if (scroll >= 20) {
        $('#navigation').addClass('fixed');
    } else {
        $('#navigation').removeClass('fixed');
    }
});
var scroll = $(window).scrollTop();
    if (scroll >= 20) {
        $('#navigation').addClass('fixed');
    } else {
        $('#navigation').removeClass('fixed');
    }

//


// console.log($('.cases__text').length);

// $.each($('.cases__text'), function(i,val) {
//     $(this).text($(this).text().substr(0, 200) + '...')
// })