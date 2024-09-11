

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 'auto',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

if (window.matchMedia("(min-width: 768px)").matches) {
  swiper.destroy()
  document.querySelector('.mySwiper').classList.remove('swiper')
} else {
  /* the viewport is less than 400 pixels wide */
}