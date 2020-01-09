$(document).ready(function () {
    // $('.intro-text').delay(500).animate({
    //     opacity: 1
    // }, 1000, "linear", function () {
    //     $('.intro-text1').delay(2000).fadeOut(400, 0);
    //     $('.intro-text2').delay(2200).fadeOut(400, 0);
    //     $('.intro-text3').delay(2400).fadeOut(400, 0);
    // });
    var timeOuts = [500, 1000, 1200, 1400, 1600, 2000, 2600, 3400, 4300];
    $('.intro-text').addClass('opacityShow').delay(timeOuts[1]).queue(function () {
        setTimeout(function () {
            $('.intro-text1').addClass('opacityHide');
        }, timeOuts[2]);
        setTimeout(function () {
            $('.intro-text2').addClass('opacityHide');
        }, timeOuts[3]);
        setTimeout(function () {
            $('.intro-text3').addClass('opacityHide');
        }, timeOuts[4]);
    });

    // $('.intro-divide-line').delay(4300).animate({
    //     bottom: 0
    // }, 500, "linear", function () {
    //     $(this).css('bottom', '-100%');
    //     $('.introSlideLeft').css('left', '-100%');
    //     $('.introSlideRight').css('right', '-100%');
    // });
    setTimeout(function () {
        $('.intro-divide-line').addClass('divide-line-show');
    }, timeOuts[7]);
    setTimeout(function () {
        $('.intro-divide-line').removeClass('divide-line-show');
    }, timeOuts[8]);
    setTimeout(function () {
        $('.introSlideLeft').addClass('leftHide');
    }, timeOuts[8]);
    setTimeout(function () {
        $('.introSlideRight').addClass('rightHide');
    }, timeOuts[8]);





});