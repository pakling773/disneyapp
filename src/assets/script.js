setTimeout(() => {
  // ready();
}, 200);

function ready() {
  const heroswiper = new Swiper(".hero-swiper", {
    loop: false,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const continueWatchingSwiper = new Swiper(".continue-watching-swiper", {
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: ".movie-swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });

  // Select all Swipers on the page
  document.querySelectorAll(".swiper").forEach(function (swiperElement) {
    const swiperInstance = new Swiper(swiperElement, {
      loop: true,
      spaceBetween: 20,
      pagination: {
        el: swiperElement.querySelector(".movie-swiper-pagination"),
        clickable: true,
      },
      speed: 800,
      breakpoints: {
        0: {
          slidesPerView: 1.5,
          // slidesPerGroup: 1,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: 2,
          // slidesPerGroup: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          // slidesPerGroup: 3,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          // slidesPerGroup: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 5,
          // slidesPerGroup: 5,
          spaceBetween: 20,
        },
      },
      on: {
        init: function () {
          applyActiveClass(this);
        },
        slideChange: function () {
          applyActiveClass(this);
        },
        transitionEnd: function () {
          applyActiveClass(this);
        },
      },
    });

    function applyActiveClass(swiper) {
      swiper.slides.forEach((slide) => {
        slide.classList.remove("active-slide", "inactive-slide");
      });

      let start = swiper.activeIndex;
      let end = start + swiper.params.slidesPerView;

      for (let i = start; i < end; i++) {
        let realIndex = i % swiper.slides.length;
        swiper.slides[realIndex].classList.add("active-slide");
      }

      swiper.slides.forEach((slide, index) => {
        if (index < start || index >= end) {
          slide.classList.add("inactive-slide");
        }
      });
    }
  });

  const trendingVideoCarousel = new Swiper(".trending-video-carousel", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    spaceBetween: 20,
    // If we need pagination
    pagination: {
      el: ".movie-swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 5.2,
        spaceBetween: 20,
      },
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  const disneyoriginalsswiper = new Swiper(".disneyoriginalsswiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    spaceBetween: 20,
    // If we need pagination
    pagination: {
      el: ".movie-swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
}
