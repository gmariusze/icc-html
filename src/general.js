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
   slidesPerView: 4,
   spaceBetween: 30,
   slidesPerGroup: 4,
   loop: true,
   loopFillGroupWithBlank: true,
   autoplay: {
     delay: 1,
     disableOnInteraction: false,
   },
   speed:15000
 });
