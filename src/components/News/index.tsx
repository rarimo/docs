import { SWIPER_CONTAINER_OPTIONS } from "@site/src/const";
import Link from "@site/static/img/link-icon.svg";
import clsx from "clsx";
import React, { useEffect, useRef } from "react";

import styles from "./styles.module.css";

const news = [
  {
    title: "Indisputably Wise Insights into the Future of Digital",
    url: "https://google.com/",
  },
  {
    title: "worldcoin community on the successful launch of WorldID 2.0!",
    url: "https://google.com/",
  },
  {
    title: "All WorldID-verified users can now claim their credentials",
    url: "https://google.com/",
  },
  {
    title:
      "roof of Humanity flow and gain access to exclusive humanity Discord channel",
    url: "https://google.com/",
  },
];

export default function News(): JSX.Element {
  const swiperRef = useRef(null);

  useEffect(() => {
    Object.assign(swiperRef.current, SWIPER_CONTAINER_OPTIONS);

    swiperRef.current.initialize();
  }, [swiperRef.current]);

  return (
    <div className={clsx("news", styles.news)}>
      <p className={clsx("news__title", styles.newsTitle)} data-aos="fade-up">
        Latest news
      </p>
      <a
        className={clsx("news__view-all", styles.newsViewAll)}
        href="https://google.com/"
        data-aos="fade-up"
      >
        View all
      </a>
      <div className={clsx("news__content", styles.newsContent)}>
        {news.map((item, idx) => (
          <a
            className={clsx("news__item", styles.newsItem)}
            href={item.url}
            key={idx}
            data-aos="fade-up"
          >
            <Link />
            {item.title}
          </a>
        ))}
      </div>
      <swiper-container
        ref={swiperRef}
        // should use class here, instead of className
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        class={clsx("news__swiper", styles.newsSwiper)}
        init={false}
        data-aos="fade-up"
      >
        {news.map((item, idx) => (
          <swiper-slide
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            class={clsx("news__swiper-slide", styles.newsSwiperSlide)}
            key={idx}
          >
            <a className={clsx("news__item", styles.newsItem)} href={item.url}>
              <Link />
              {item.title}
            </a>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}
