$(document).ready(function () {
    $('.intro-text').delay(500).animate({
        opacity: 1
    }, 1000, "linear", function () {
        $('.intro-text1').delay(2000).fadeOut(400, 0);
        $('.intro-text2').delay(2200).fadeOut(400, 0);
        $('.intro-text3').delay(2400).fadeOut(400, 0);
    });

    $('.intro-divide-line').delay(4300).animate({
        bottom: 0
    }, 500, "linear", function () {
        $(this).css('bottom', '-100%');
        $('.introSlideLeft').css('left', '-100%');
        $('.introSlideRight').css('right', '-100%');
    });

});