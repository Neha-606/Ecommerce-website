const swiper = new Swiper('.panelSwiper', {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  
  autoplay: {
    delay: 2000,
    disableOnInteraction: false 
   },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: { slidesPerView: 2 },
    640: { slidesPerView: 3 },
    992: { slidesPerView: 4 },
    1200: { slidesPerView: 5 }
  }
});

 var swiper1 = new Swiper(".kitchen", {
      slidesPerView: 5,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

var swiper2 = new Swiper(".indian_banner", {
      slidesPerView: 6,
      spaceBetween: 0,

      autoplay: {
        delay: 2000,          // 2 seconds
        disableOnInteraction: false, 
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

    breakpoints: {
    0: {
      slidesPerView: 1,   // Mobile
    },
    465: {
      slidesPerView: 2,   // Mobile
    },
    768: {
      slidesPerView: 3,   // iPad / Tablet
    },
    875: {
      slidesPerView: 4,   // iPad / Tablet
    },
    1099: {
      slidesPerView: 5,   // Desktop
    },
    1246: {
      slidesPerView: 6,   // Desktop
    }
  },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });



    