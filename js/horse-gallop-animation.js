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
    var horseContainer = $('.horse-animation-wrapper');
    var animationDelay = 1;
    var opacityDuration = 0.2;
    var animationDuration = 1;
    var preLoader = $('.pre-loader');
    var rotated;
    var tl1 = new TimelineMax();
    var rotateTl = new TimelineMax();
    var ease = Power0.easeNone;
    var viewPortWidth = $(window).innerWidth();
    var horseContainerDimension = 30/100 * viewPortWidth;
    var intervalId;

    //animation data objects
    var hoofAnimationObject = {
        top: '41.2%',
        right: '21.7%',
        transform: 'rotate(30deg)'
    }

    var tailAnimationObject = {
        transform: 'rotate(50deg)',
        left: '15%',
        bottom:'23%',
    }

    var backHoofAnimationObject = {
        transform: 'rotate(-18deg)',
        bottom: '21%',
        right: '48%'
    }

    var horseHeadAnimationObject = {
        transform: 'rotate(10deg)',
        left: '43.7%',
        top: '17%'
    }

    //set the height and width of the horse container in relation with the screen of the device
    horseContainer.css({
        height:horseContainerDimension,
        width: horseContainerDimension
    });

  //call our main function
    animateHorse();

    // -------------------------------------------------------------------------------------
    //declare our main function ------------------------------------------------------------

    //horse animation initializer function
    function animateHorse() {

        //GSAP Timeline handling

        tl1

        //pieces combination animating sequence
        // --------------------------------------------
        .to(preLoader, opacityDuration, {opacity: 0}, 0.4)
        .to(preLoader, 0.0001, {visibility: 'hidden'}, 0.5)
        .to(square, animationDuration, {ease: ease, left: '42.9%', top: '27.3%'}, animationDelay)
        .to(triangleMediumUp, animationDuration, {ease: ease, left: '42.899%', top: '13.69%'}, animationDelay)
        .to(bigTriangleLeft, animationDuration, {ease: ease, left: '24%', top: '40.9%'}, animationDelay)
        .to(bigTriangleLeftTop, animationDuration, {ease: ease, top: '29%', left: '40%'}, animationDelay)
        .to(triangleSubMedium, animationDuration, {ease: ease, top: '41.8%', right: '19.9%'}, animationDelay)
        .to(smallTriangleBottomLeft, animationDuration, {ease: ease, right: '47%', bottom: '15%'}, animationDelay)
        .to(diamond, animationDuration, {ease: ease, left: '19%', bottom: '16%'}, animationDelay)

        // --------------------------------------------

        //gallop sequence preparation
        .to(diamondImage, 0.01, {marginTop:'-42%'}, animationDuration + 2.39)
        .to(triangleSubMedium, 0.01, {transform:hoofAnimationObject.transform, top: hoofAnimationObject.top, right:hoofAnimationObject.right}, animationDuration + 2)
        .to(diamond, 0.01 , {transform:'rotate(-20deg)', left: '23%', bottom: '20%'}, animationDuration + 1.9)
        .to(triangleSubMedium, 0.1, {ease: ease, top: '41.8%', right: '19.9%', transform:'unset'}, animationDuration + 1.9)
        .to(smallTriangleBottomLeft, 0.1 , {bottom: backHoofAnimationObject.bottom, transform: backHoofAnimationObject.transform, right:backHoofAnimationObject.right}, animationDuration + 1.9)
        .to(triangleMediumUp, 0.1 , {transform:horseHeadAnimationObject.transform, left:horseHeadAnimationObject.left, top:horseHeadAnimationObject.top}, animationDuration + 1.9)
        .fromTo(horseContainer, 0.5, {transform: 'rotate(0deg)'},{transform: 'rotate(65deg)'}, animationDuration + 2.2)
        .to(square,0.01, {top:'28.3%'}, animationDuration + 2.2)
        //-----------------------------------------------
        //callback with the gallop intervals
        .add(horseGallop)
    }


    //gallop interval setup
    function horseGallop(){

        rotated = false;

        rotateTl
        .fromTo(diamond, 0.1, {transform:tailAnimationObject.transform, bottom:tailAnimationObject.bottom, left:tailAnimationObject.left}, {transform:'rotate(0deg)', bottom:'20%', left:'18.3%'},0.1)

        //IE rules (percentages are interpreted differently)
        if(bowser.msie){
            rotateTl
                .fromTo(triangleSubMedium, 0.1 , {transform: 'rotate(40deg)', top: '40.8%', right:'22.3%'},{transform:'rotate(10deg)', top:'41.5%', right:'20.19%'},0.1)
        } else {
            rotateTl
            .fromTo(triangleSubMedium, 0.1, {transform:hoofAnimationObject.transform, top: hoofAnimationObject.top, right:hoofAnimationObject.right},{transform:'unset', top: '41.5%', right: '20%'},0.1)
        }

        //IE rules (percentages are interpreted differently)
        if(bowser.msie){
            rotateTl
                .fromTo(triangleMediumUp, 0.1, {transform:'rotate(5deg)',left: horseHeadAnimationObject.left, top: '15.5%'}, {left: '43.4%', top: '16.4%', transform:'rotate(7deg)'}, 0.1)
        } else {
            rotateTl
                .fromTo(triangleMediumUp, 0.1, {transform:horseHeadAnimationObject.transform, left:horseHeadAnimationObject.left, top:horseHeadAnimationObject.top}, {left: '42.899%', top: '15%', transform:'unset'},0.1)
        }
        rotateTl
            .fromTo(smallTriangleBottomLeft, 0.1, {bottom: backHoofAnimationObject.bottom, transform: backHoofAnimationObject.transform, right:backHoofAnimationObject.right}, {right: '47%', bottom: '15%', transform: 'unset'},0.1)
            .fromTo(horseContainer, 0.4 , {transform:'rotate(65deg)'}, {transform:'rotate(25deg)'},0.1)

        //call the gallop intervals
            intervalId = setInterval(gallopInterval, 600);

    }

    var gallopInterval = function(){
        if(!rotated){
            rotateTl.reverse();
            rotated = true;
        } else {
            rotateTl.restart();
            rotated = false;
        }
    }

    // -------------------------------------------------------------------------------------
});
