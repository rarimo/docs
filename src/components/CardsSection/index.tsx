import Card from "@site/src/components/HomeCard";
import { SWIPER_CONTAINER_OPTIONS } from "@site/src/const";
import { HomeCard } from "@site/src/types";
import clsx from "clsx";
import React, { useEffect, useRef } from "react";

import styles from "./styles.module.css";

type Props = {
  cards: HomeCard[];
  title: string;
  isSwiperOnMobile?: boolean;
};

export default function CardsSection({
  cards,
  title,
  isSwiperOnMobile,
}: Props) {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!isSwiperOnMobile) return;

    Object.assign(swiperRef.current, SWIPER_CONTAINER_OPTIONS);

    swiperRef.current.initialize();
  }, [swiperRef.current, isSwiperOnMobile]);

  return (
    <section>
      <p
        className={clsx("cards-section__title", styles.cardsSectionTitle)}
        data-aos="fade-up"
      >
        {title}
      </p>
      <section
        className={
          (styles.cardsSection, isSwiperOnMobile && styles.cardsSectionMobile)
        }
      >
        <div
          className={clsx(
            "cardsSectionContainer container",
            styles.cardsSectionContainer
          )}
        >
          {cards.map((props, idx) => (
            <Card
              className={clsx("cards-section__card", styles.cardsSectionCard)}
              key={idx}
              {...props}
            />
          ))}
        </div>
      </section>
      {isSwiperOnMobile && (
        <swiper-container
          ref={swiperRef}
          class={clsx("cards-section__swiper", styles.cardsSectionSwiper)}
          init={false}
          data-aos="fade-up"
        >
          {cards.map((props, idx) => (
            <swiper-slide
              class={clsx(
                "cards-section__swiper-slide",
                styles.cardsSectionSwiperSlide
              )}
              key={idx}
            >
              <Card
                className={clsx("cards-section__card", styles.cardsSectionCard)}
                key={idx}
                {...props}
              />
            </swiper-slide>
          ))}
        </swiper-container>
      )}
    </section>
  );
}
