$(document).ready(function () {
    const timeOuts = [800, 1000, 2200, 2400, 2600, 4600, 5300];

    //    Text Show and hide
    setTimeout(function () {
        $('.intro-text').addClass('opacityShow');
        setTimeout(function () {
            $('.intro-text1').addClass('opacityHide');
        }, timeOuts[2]);
        setTimeout(function () {
            $('.intro-text2').addClass('opacityHide');
        }, timeOuts[3]);
        setTimeout(function () {
            $('.intro-text3').addClass('opacityHide');
        }, timeOuts[4]);
    }, timeOuts[1]);

    // Curtain animation
    var introDivideLine = $('.intro-divide-line');
    setTimeout(function () {
        introDivideLine.addClass('divide-line-show');
        setTimeout(function () {
            introDivideLine.addClass('displayNone');
        }, timeOuts[0]);
    }, timeOuts[5]);
    setTimeout(function () {
        $('.introSlideLeft').addClass('leftHide');
    }, timeOuts[6]);
    setTimeout(function () {
        $('.introSlideRight').addClass('rightHide');
    }, timeOuts[6]);
});