$(document).ready(function () {

    // Wave animation
    var introSlideDown1 = $('.projects-introSlide1');
    var introSlideDown2 = $('.projects-introSlide2');
    setTimeout(function () {
        introSlideDown1.addClass('top0');
        setTimeout(function () {
            introSlideDown2.addClass('top0');
            setTimeout(function () {
                introSlideDown2.addClass('top100');
                setTimeout(function () {
                    introSlideDown1.addClass('top100');
                }, 70);
            }, 2070);
        }, 70);
    }, 500);
});