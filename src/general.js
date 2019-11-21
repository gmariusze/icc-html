'use strict';
var outdatedbrowser;


/* Create carousel */
window.Swiper = require('swiper');
/*
var swiper = new Swiper('.continuous-carousel', {
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 24,
  loop: true,
  loopFillGroupWithBlank: false,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  speed: 5000,
  freeMode: true
});
*/
var swiper = new Swiper('.continuous-carousel.swiper-container', {
   slidesPerView: 1,
   spaceBetween: 15,
   slidesPerGroup: 1,
   loop: true,
   loopFillGroupWithBlank: true,
   autoplay: {
     delay: 1,
     disableOnInteraction: false,
   },
   speed:15000,
   breakpoints: {
      320: {
        slidesPerView: 'auto',
        speed:10000,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30
      }
   }
 });

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
  if (typeof div !== 'undefined' && typeof div[0] !== 'undefined') {
    var offsetTOP = offset(sticky[0]).top;
  }

  return offsetTOP;
}
window.onscroll = function() {stickySidebar()};
function stickySidebar() {
  var doc = document.documentElement;
  var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
  var div = document.getElementsByClassName("sticky-here");
  if (typeof div !== 'undefined' && typeof div[0] !== 'undefined' && window.innerWidth > 991) {
    var transY = top;
    div[0].style.transform = "translateY("+transY+"px)";
  }

}
/* Sticky sidebar */

/* Animate handler range input */
var inputRange = document.getElementsByClassName('rangefinder')[0],
    maxValue = 100, // the higher the smoother when dragging
    speed = 1,
    currValue, rafID;
    // set min/max value
    inputRange.min = 0;
    inputRange.max = maxValue;
    // bind events
    inputRange.addEventListener('mousedown', unlockStartHandler, false);
    inputRange.addEventListener('mousestart', unlockStartHandler, false);
    inputRange.addEventListener('mouseup', unlockEndHandler, false);
    inputRange.addEventListener('touchend', unlockEndHandler, false);


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

/*Scrollbar*/
