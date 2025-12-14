const bWorkSwiper = new Swiper(".h-tolls-swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  autoHeight: true,

  navigation: {
    nextEl: ".h-tolls-next",
    prevEl: ".h-tolls-prev",
  },
  loop: true,

  breakpoints: {
    320: { slidesPerView: 1.2, spaceBetween: 10 },
    500: { slidesPerView: 1.5 , spaceBetween: 10},
    626: { slidesPerView: 2 },
    830: { slidesPerView: 2.3 },
    1000: { slidesPerView: 3.5 },
    1200: { slidesPerView: 4 },
  },
});
const bPossibilitiesSwiper = new Swiper(".h-possibilities-swiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  autoHeight: true,
  loop: true,

  breakpoints: {
    320: { slidesPerView: 1.2,},
    500: { slidesPerView: 1.5 },
    626: { slidesPerView: 1.7 },
    830: { slidesPerView: 2 },
   
  },
});




const hTrustSwiper = new Swiper(".h-trust-swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  autoHeight: true,
  loop: true,

  breakpoints: {
    320: { slidesPerView: 1.2 ,spaceBetween: 10},
    500: { slidesPerView: 1.5 , spaceBetween: 10},
    626: { slidesPerView: 2 },
    830: { slidesPerView: 2.3 },
    1000: { slidesPerView: 3.5 },
    1200: { slidesPerView: 4 },
  },
});
