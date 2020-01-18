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


    /* ------- Hover efect on projects ------- */
    $('.project').hover(function () {
        var classOfHoveredLink = $(this).attr('class').replace('project project-', '');
        var imgClassToShow = $('.project-img').hasClass(`project-img-${classOfHoveredLink}`);
        if (imgClassToShow) {
            $('.project-img-' + classOfHoveredLink).toggleClass('projectBG-active');
            $('.menu-icon').toggleClass('hideItem');
            $('.logo-img').toggleClass('hideItem');
            $('.project').toggleClass('hideItem');
            $('.portfolio-title').toggleClass('hideItem');
            $('.portfolio-context').toggleClass('hideItem');
            $('.portfolio-projects-title').toggleClass('hideItem');
            $('.portfolio-connect').toggleClass('hideItem');
            $('.footer').toggleClass('hideItem');
            $(this).removeClass('hideItem');
        }
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

    /* ------- PrecNext Project Hovers ------- */
    $('.project-prevNext div').hover(function () {
        var classOfHoveredLinkPrev = $(this).attr('class').replace('project_prevProject-link-wrap ', '');
        var classOfHoveredLinkNext = $(this).attr('class').replace('project_nextProject-link-wrap ', '');
        var imgClassToShowPrev = $('.prev-nextProject-window div').hasClass(`project-${classOfHoveredLinkPrev}`);
        var imgClassToShowNext = $('.prev-nextProject-window div').hasClass(`project-${classOfHoveredLinkNext}`);
        if (imgClassToShowPrev || imgClassToShowNext) {
            $('.project-' + classOfHoveredLinkPrev).toggleClass('projectBG-active');
            $('.project-' + classOfHoveredLinkNext).toggleClass('projectBG-active');
            $('.menu-icon').toggleClass('hideItem');
            $('.logo-img').toggleClass('hideItem');
            $('.project-prevNext div').toggleClass('hideItem');
            $(this).removeClass('hideItem');
        }
    });

});