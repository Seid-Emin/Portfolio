$(document).ready(function () {

    //Landing Animation

    var introSlideLeft = $('.introSlideLeft');
    var introSlideRight = $('.introSlideRight');
    var introWindow = $('.intro-window');
    var mainContent = $('.content');
    var body = $('.body');
    var scrollBar = $('.scroll-bar');

    setTimeout(function () {
        introSlideLeft.addClass('leftShow');
        setTimeout(function () {
            introSlideLeft.removeClass('leftShow');
        }, 2000);
    }, 200);

    setTimeout(function () {
        introSlideRight.addClass('rightShow');
        setTimeout(function () {
            introSlideRight.removeClass('rightShow');
        }, 2000);
    }, 200);
    setTimeout(function () {
        mainContent.addClass('opacityShow');
        body.addClass('overFlow');
        // scrollBar.addClass('opacityShow');
    }, 2000);
    setTimeout(function () {
        introWindow.addClass('displayNone');
    }, 3400);

    // hover efect on projects
    $('.projects-list .project a').hover(function () {
        var classOfHoveredLink = $(this).attr('class').replace('project-link ', '');
        var imgClassForShow = $('.window-wrap .window div').hasClass(classOfHoveredLink);
        if (imgClassForShow) {
            $('.window-wrap .window div').addClass('opacityImgOnHover');
        }
    }, function () {
        $('.window-wrap .window div').removeClass('opacityImgOnHover');
    });


    // Nav button actvation
    $('.menu-icon-wrap').click(function () {
        var navClass = $('.nav').hasClass('opacityShow');
        if (navClass) {
            $('.nav-divide-line').removeClass('topZero');
            $('.nav-wrap').removeClass('opacityShow');
            setTimeout(function () {
                $('.nav').removeClass('z-index550 opacityShow');
                $('.menu-icon-bar').removeClass('top50');
            }, 500);
        } else {
            $('.nav').addClass('z-index550 opacityShow');
            $('.menu-icon-bar').addClass('top50');
            setTimeout(function () {
                $('.nav-divide-line').addClass('topZero');
                $('.nav-wrap').addClass('opacityShow');
            }, 500);
        }
    });


    // nav projects list

    //show
    $('.nav-link-projects').click(function () {
        $('.nav-list').toggleClass('opacityHide');
        setTimeout(function () {
            $('.nav-projects-list').toggleClass('z-index550 opacityShow');
            $('.nav-projects-close').toggleClass('z-index550 opacityShow');
            $('.nav-projects-list-item').toggleClass('transformMatrix opacityShow');
        }, 800);
    });

    //hide
    $('.nav-projects-close').click(function () {
        $('.nav-projects-list').toggleClass('z-index550 opacityShow');
        $('.nav-projects-close').toggleClass('z-index550 opacityShow');
        $('.nav-projects-list-item').toggleClass('transformMatrix opacityShow');
        setTimeout(function () {
            $('.nav-list').toggleClass('opacityHide');
        }, 600);
    });
});