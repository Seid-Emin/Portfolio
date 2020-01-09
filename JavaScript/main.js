$(document).ready(function () {
    var introSlideLeft = $('.introSlideLeft');
    var introSlideRight = $('.introSlideRight');
    var introWindow = $('.intro-window');
    var mainContent = $('.content');

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
    }, 2000);
    setTimeout(function () {
        introWindow.addClass('displayNone');
    }, 3400);
});