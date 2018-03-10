$(document).ready(function() {

    //variable caching----------------------------------------------------------------------

    var triangleMediumUp = $('.triangle-medium-up');
    var bigTriangleLeft = $('.big-triangle-left');
    var bigTriangleLeftTop = $('.big-triangle-left-top');
    var triangleSubMedium = $('.triangle-sub-medium');
    var smallTriangleBottomLeft = $('.triangle-small');
    var square = $('.square');
    var diamond = $('.diamond-wrapper');
    var diamondImage = $('.diamond');
    var bottomSectionArrow = $('.bottom-section-arrow');
    var horseContainer = $('.horse-animation-wrapper');
    var animationDelay = 1;
    var opacityDuration = 0.2;
    var animationDuration = 1;
    var preloader = $('.pre-loader');
    var rotated;
    var tl1 = new TimelineMax({
        immediateRender: true
    });
    var rotateTl = new TimelineMax();
    var ease = Power0.easeNone;
    var intervalId;
    var gallopCounter = 0;

    //animation data objects
    var hoofAnimationObject = {
        top: '41.7%',
        right: '21.5%',
        transform: 'rotate(20deg)'
    };
    console.log(hoofAnimationObject.top);

    var tailAnimationObject = {
        transform: 'rotate(-4deg)',
        left: '20.4%',
        bottom: '17.9%'
    };

    var backHoofAnimationObject = {
        transform: 'rotate(-18deg)',
        bottom: '21%',
        right: '48%'
    };

    var horseHeadAnimationObject = {
        transform: 'rotate(8deg)',
        left: '44%',
        top: '17%'
    };


    // -------------------------------------------------------------------------------------

    //function call area -------------------------------------------------------------------


    animateHorse();
    // -------------------------------------------------------------------------------------

    //function declaration area ------------------------------------------------------------

    //horse animation initializer function
    function animateHorse() {
        var horseHeadImage = $('.triangle-medium-up img');
        var hoofSideBigTriangle = $('.big-triangle-left-top img');
        var hoofImage = $('.hoof-image');

        //GSAP Timeline handling

        tl1
        //pieces combination animating sequence
        // --------------------------------------------
            .to(preloader, opacityDuration, {
                opacity: 0
            }, 0.4)
            .to(preloader, 0.0001, {
                visibility: 'hidden'
            }, 0.5)
            .to(square, animationDuration, {
                ease: ease,
                left: '42.9%',
                top: '27.3%'
            }, animationDelay)
            .to(triangleMediumUp, animationDuration, {
                ease: ease,
                left: '42.899%',
                top: '13.85%'
            }, animationDelay)
            .to(horseHeadImage, 0.0001, {
                marginLeft: '-3%'
            }, animationDelay + animationDuration + 0.3)
            .to(bigTriangleLeft, animationDuration, {
                ease: ease,
                left: '24%',
                top: '40.9%'
            }, animationDelay)
            .to(bigTriangleLeftTop, animationDuration, {
                ease: ease,
                top: '29%',
                left: '40%'
            }, animationDelay)
            .to(triangleSubMedium, animationDuration, {
                ease: ease,
                top: '41.81%',
                right: '20%'
            }, animationDelay)
            .to(hoofImage, animationDuration, {
                marginTop: '-3%'
            }, animationDelay + 1)
            .to(smallTriangleBottomLeft, animationDuration, {
                ease: ease,
                right: '47%',
                bottom: '15%'
            }, animationDelay)
            .to(diamond, animationDuration, {
                ease: ease,
                left: '19%',
                bottom: '15.8%'
            }, animationDelay)
            .to(bottomSectionArrow, animationDuration, {
                ease: ease,
                opacity: 1
            }, animationDelay)
            // --------------------------------------------

            //gallop sequence preparation
            .to(diamondImage, 0.01, {
                marginTop: '-44%'
            }, animationDuration + 1.9)
            .to(hoofImage, 0.01, {
                marginTop: '-4%'
            }, animationDuration + 2.8)
            .to(hoofSideBigTriangle, 0.01, {
                marginLeft: '1.2%'
            }, animationDuration + 2.8)
            .to(triangleSubMedium, 0.01, {
                transform: hoofAnimationObject.transform,
                top: hoofAnimationObject.top,
                right: hoofAnimationObject.right
            }, animationDuration + 2)
            .to(diamond, 0.01, {
                transform: 'rotate(-20deg)',
                left: '23.3%',
                bottom: '20.4%'
            }, animationDuration + 1.9)
            .to(triangleSubMedium, 0.1, {
                ease: ease,
                top: '42.2%',
                right: '20.2%',
                transform: 'unset'
            }, animationDuration + 1.9)
            .to(smallTriangleBottomLeft, 0.1, {
                bottom: backHoofAnimationObject.bottom,
                transform: backHoofAnimationObject.transform,
                right: backHoofAnimationObject.right
            }, animationDuration + 1.9)
            .to(triangleMediumUp, 0.1, {
                top: '14.9%'
            }, animationDuration + 1.9)
            .fromTo(horseContainer, 0.5, {
                transform: 'rotate(0deg)'
            }, {
                transform: 'rotate(65deg)'
            }, animationDuration + 2.2)
            .to(square, 0.01, {
                top: '28.3%'
            }, animationDuration + 2.2)
            //-----------------------------------------------
            //callback with the gallop intervals
            .add(horseGallop);
    }

    //gallop interval setup
    function horseGallop() {

        rotated = false;

        rotateTl


            .fromTo(diamond, 0.15, {
                transform: tailAnimationObject.transform,
                left: tailAnimationObject.left,
                bottom: tailAnimationObject.bottom
            }, {
                transform: 'rotate(-28deg)',
                bottom: '18.6%',
                left: '24%'
            }, 0.1)
            .fromTo(diamondImage, 0.1, {
                marginTop: '-35%'
            }, {
                marginTop: '-21.8%'
            }, 0.1);
        //IE rules (percentages are interpreted differently)
        if (bowser.msie) {
            rotateTl
                .fromTo(triangleSubMedium, 0.1, {
                    transform: 'rotate(40deg)',
                    top: '42.6%',
                    right: '22.3%'
                }, {
                    transform: 'rotate(10deg)',
                    top: '42%',
                    right: '20.19%'
                }, 0.1);
        } else {
            rotateTl
                .fromTo(triangleSubMedium, 0.1, {
                    transform: hoofAnimationObject.transform,
                    top: hoofAnimationObject.top,
                    right: hoofAnimationObject.right
                }, {
                    transform: 'rotate(1deg)',
                    top: '42.3%',
                    right: '20%'
                }, 0.1);
        }

        //IE rules (percentages are interpreted differently)
        if (bowser.msie) {
            rotateTl
                .fromTo(triangleMediumUp, 0.1, {
                    transform: 'rotate(5deg)',
                    left: horseHeadAnimationObject.left,
                    top: '15.5%'
                }, {
                    left: '43.4%',
                    top: '16.4%',
                    transform: 'rotate(7deg)'
                }, 0.1);
        } else {
            rotateTl
                .fromTo(triangleMediumUp, 0.1, {
                    transform: horseHeadAnimationObject.transform,
                    left: horseHeadAnimationObject.left,
                    top: horseHeadAnimationObject.top
                }, {
                    left: '43.1%',
                    top: '14.9%',
                    transform: 'unset'
                }, 0.1);
        }
        rotateTl
            .fromTo(smallTriangleBottomLeft, 0.1, {
                bottom: backHoofAnimationObject.bottom,
                transform: backHoofAnimationObject.transform,
                right: backHoofAnimationObject.right
            }, {
                right: '47%',
                bottom: '15%',
                transform: 'unset'
            }, 0.1)
            .fromTo(horseContainer, 0.38, {
                transform: 'rotate(65deg)'
            }, {
                transform: 'rotate(10deg)'
            }, 0.13);

        //call the gallop intervals
        intervalId = setInterval(gallopInterval, 600);

    }

    //store the function inside a variable to be able to clear it afterwards
    var gallopInterval = function() {
        gallopCounter++;

        //get the horses position when it is upright after 7 counts
        //recheck if the counter is divisble by  7
        if (gallopCounter % 7 === 0 && gallopCounter > 0) {
            //clear the previous interval and stop the horse in an upright position
            clearInterval(intervalId);

            //set a new interval with a timeout of 2 seconds before the horse starts to gallop again
            setTimeout(function() {
                intervalId = setInterval(gallopInterval, 600);
            }, 1000);
        } else {
            if (!rotated) {
                rotateTl.reverse();
                rotated = true;
            } else {
                rotateTl.restart();
                rotated = false;
            }
        }
    };

});
