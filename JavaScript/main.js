$(document).ready(function () {
    $('.introSlideLeft').animate({
        left: 0
    }, 1500, 'easeInOutQuint');
    $('.introSlideLeft').delay(200).animate({
        left: "-100%"
    }, 1500, 'easeInOutQuint');

    $('.introSlideRight').animate({
        right: 0
    }, 1500, 'easeInOutQuint', function () {
        $('.content').css('opacity', 1);
    });
    $('.introSlideRight').delay(200).animate({
        right: "-100%"
    }, 1500, 'easeInOutQuint', function () {
        $('.intro-window').css('display', 'none');
    });
});