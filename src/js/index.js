//Swiper
// import Swiper bundle 
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,

    breakpoints: {
      780: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
    },
      

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
	clickable: true,
  },
});



// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

//accordeon mobile nav
import acordeon from './modules/acordeon.js';
acordeon();
