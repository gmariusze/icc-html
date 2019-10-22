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
