$(document).ready(function () {
    var introText = $('.intro-text');
    var introText1 = $('.intro-text1');
    var introText2 = $('.intro-text2');
    var introText3 = $('.intro-text3');
    var timeOuts = [700, 1000, 2200, 2400, 2600, 4600, 5300];

    //    Text Show and hide
    setTimeout(function () {
        introText.addClass('opacityShow');
        setTimeout(function () {
            introText1.addClass('opacityHide');
        }, timeOuts[2]);
        setTimeout(function () {
            introText2.addClass('opacityHide');
        }, timeOuts[3]);
        setTimeout(function () {
            introText3.addClass('opacityHide');
        }, timeOuts[4]);
    }, timeOuts[1]);

    // Curtain animation
    var introDivideLine = $('.intro-divide-line');
    var introSlideLeft = $('.introSlideLeft');
    var introSlideRight = $('.introSlideRight');
    setTimeout(function () {
        introDivideLine.addClass('divide-line-show');
        setTimeout(function () {
            introDivideLine.addClass('displayNone');
        }, 800);
    }, timeOuts[5]);
    setTimeout(function () {
        introSlideLeft.addClass('leftHide');
    }, timeOuts[6]);
    setTimeout(function () {
        introSlideRight.addClass('rightHide');
    }, timeOuts[6]);
});