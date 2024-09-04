export function applyActiveClass(swiper: any) {
  swiper.slides.forEach((slide: HTMLElement) => {
    slide.classList.remove('active-slide', 'inactive-slide');
  });
  let start = swiper.activeIndex;
  let end = start + swiper.params.slidesPerView;
  for (let i = start; i < end; i++) {
    let realIndex = i % swiper.slides.length;
    swiper.slides[realIndex].classList.add('active-slide');
  }
  swiper.slides.forEach((slide, index) => {
    if (index < start || index >= end) {
      slide.classList.add('inactive-slide');
    }
  });
}
