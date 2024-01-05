import { SwiperOptions } from "swiper/types";

export const SWIPER_CONTAINER_OPTIONS: SwiperOptions = {
  slidesPerView: "auto",
  pagination: true,
  autoHeight: true,
  grabCursor: true,
  resistanceRatio: 0.5,
  spaceBetween: 8,
  mousewheel: {
    forceToAxis: true,
  },
  edgeSwipeDetection: true,
  autoplay: false,
  freeMode: false,
  cssMode: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 5,
    scale: 0.98,
  },
};
