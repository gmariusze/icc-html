'use strict';
var outdatedbrowser;


/* Create carousel */
window.Swiper = require('swiper');

var swiper = new Swiper('.continuous-carousel.swiper-container', {
   spaceBetween: 15,
   slidesPerGroup:1,
   loop: true,
   loopFillGroupWithBlank: false,
   freeMode:true,
   preventInteractionOnTransition:true,
   allowTouchMove:true,
   loopAdditionalSlides:3,
   preventClicks:false,
   preventClicksPropagation:false,
   autoplay: {
     delay:1,
     stopOnLastSlide:false,
     disableOnInteraction: false,
     reverseDirection: false,
     waitForTransition:false
   },
   freeModeSticky:false,
   speed:110000,
   breakpoints: {
      320: {
        speed:5000,
        slidesPerView: 'auto',
        preventInteractionOnTransition:false,
        freeModeMomentumRatio:0.5,
        freeModeMomentumVelocityRatio:0.8,
        //freeModeSticky:true
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
        preventInteractionOnTransition:false,
        freeModeMomentumRatio:0.5,
        freeModeMomentumVelocityRatio:0.8,
        //freeModeSticky:true
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30,
        preventInteractionOnTransition:true,
        //freeModeSticky:false,
      },
      1600: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        speed:40000
      },
      1900: {
        slidesPerView: 6,
        slidesPerGroup: 6,
        speed:30000
      },
      2200: {
        slidesPerView: 7,
        slidesPerGroup: 7,
        speed:30000
      }
   }
 });
  if(swiper) {
    var swiperMain = document.getElementsByClassName("continuous-carousel");
    if(window.innerWidth > 991) {
      if (typeof swiperMain !== 'undefined' && typeof swiperMain[0] !== 'undefined') {
       swiperMain[0].onmouseover = function() {
          swiper.changeDirection('vertical');
          swiper.changeDirection('horizontal');
       }

       swiperMain[0].onmouseout = function() {
          swiper.changeDirection('vertical');
          swiper.changeDirection('horizontal');
       }
      }
    }
    timeout()
    var lastpos = 0
    function timeout() {
        setTimeout(function () {
            if (typeof swiper !== 'undefined') {
              if(lastpos==swiper.getTranslate()) {
                swiper.autoplay.stop();
                swiper.autoplay.start();
              }else{
                lastpos = swiper.getTranslate();
              }
            }

            timeout();
        }, 500);
    }
  }



var statsSlider = new Swiper('.stats-slider.swiper-container', {
    loop: true,
    speed: 400,
    spaceBetween: 100,
    navigation: {
      nextEl: '.stats-slider .swiper-button-next',
      prevEl: '.stats-slider .swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
});

var videoPlaylistSlider = new Swiper('.videoPlaylistSlider.swiper-container', {
    slidesPerView: 'auto',
    loop: false,
    speed: 400,
    freeMode: true,
    freeModeSticky:false,
    spaceBetween: 20,
    navigation: {
      nextEl: '.videoPlaylistSlider .swiper-button-next',
      prevEl: '.videoPlaylistSlider .swiper-button-prev',
    }
});


/* Sticky sidebar */
var stickVarTop = getStickOffset();
function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
function getStickOffset() {
  var offsetTOP = null;
  var sticky = document.getElementsByClassName("sticky-here");
  if (typeof sticky !== 'undefined' && typeof sticky[0] !== 'undefined') {
    var offsetTOP = offset(sticky[0]).top;
  }

  return offsetTOP;
}

function stickySidebar() {
  var stickySidebar = document.getElementsByClassName('sticky-here')[0];
  if(typeof stickySidebar !== 'undefined') {
    if(typeof stickySidebar !== 'undefined') {
      var sticky = stickySidebar.offsetTop;
    }
    if (window.pageYOffset > 60 ) {
      stickySidebar.classList.add("doStick");
    } else {
      stickySidebar.classList.remove("doStick");
    }
  }
}
/* Sticky sidebar */

/* Animate handler range input */
var inputRange = document.getElementsByClassName('rangefinder')[0],
    maxValue = 100, // the higher the smoother when dragging
    speed = 1,
    currValue, rafID;

    if (typeof inputRange !== 'undefined') {
      // set min/max value
      inputRange.min = 0;
      inputRange.max = maxValue;
      // bind events
      inputRange.addEventListener('mousedown', unlockStartHandler, false);
      inputRange.addEventListener('mousestart', unlockStartHandler, false);
      inputRange.addEventListener('mouseup', unlockEndHandler, false);
      inputRange.addEventListener('touchend', unlockEndHandler, false);
    }



function unlockStartHandler() {
    // clear raf if trying again
    window.cancelAnimationFrame(rafID);

    // set to desired value
    currValue = +this.value;
}
function unlockEndHandler() {

    // store current value
    currValue = +this.value;

    // determine if we have reached success or not
    if(currValue >= maxValue) {
        //successHandler();
    }
    else {
        rafID = window.requestAnimationFrame(animateHandler);
    }
}
function animateHandler() {

    // calculate gradient transition
    var transX = currValue - maxValue;

    // update input range
    inputRange.value = currValue;

    // determine if we need to continue

    if(currValue > -1 && currValue != 25 && currValue != 50 && currValue != 75 && currValue != 100) {
      window.requestAnimationFrame(animateHandler);
    }
    // decrement value
    if(currValue > 0 && currValue < 12) {
      currValue = currValue - speed;
    }else if (currValue >= 12 && currValue < 25) {
      currValue = currValue + speed;
    }else if (currValue >= 25 && currValue < 37) {
      currValue = currValue - speed;
    }else if (currValue >= 37 && currValue < 50) {
      currValue = currValue + speed;
    }else if (currValue >= 50 && currValue < 62) {
      currValue = currValue - speed;
    }else if (currValue >= 62 && currValue < 75) {
      currValue = currValue + speed;
    }else if (currValue >= 75 && currValue < 87) {
      currValue = currValue - speed;
    }else if (currValue >= 87 && currValue < 100) {
      currValue = currValue + speed;
    }else{
      currValue = currValue - speed;
    }
}
/* Animate handler range input */

/* Sticky header */
var windowWidth = window.innerWidth;
var header = document.getElementsByClassName("toolbar")[0];


function scroll() {
  stickySidebar();
  stickyHeader();
}
function resize() {
  windowWidth = window.innerWidth;
  if(typeof header !== 'undefined') {
    sticky = header.offsetTop;
  }
}

// Get the header
// Get the offset position of the navbar
if(typeof header !== 'undefined') {
  var sticky = header.offsetTop;
}
var body = document.body;
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
  //windowWidth = window.innerWidth;
  if(typeof header !== 'undefined') {
    if(windowWidth<=991) {
      header.classList.remove("sticky");
      body.classList.remove("stickyHeader");
    }else{
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        body.classList.add("stickyHeader");
      } else {
        header.classList.remove("sticky");
        body.classList.remove("stickyHeader");
      }
    }
  }
}

var submenu_li = document.getElementsByClassName("has-submenu")[0];
/* Sidemenu hover blackout */
if(typeof submenu_li !== 'undefined') {
  submenu_li.onmouseover = function() {
    body.classList.add("faded");
  }
  submenu_li.onmouseout = function() {
    body.classList.remove("faded");
  }
}

window.onresize = function() {resize()};
window.onscroll = function() {scroll()};
