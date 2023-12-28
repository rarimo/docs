import CardWithList from "@site/src/components/CardWithList";
import { SWIPER_CONTAINER_OPTIONS } from "@site/src/const";
import { Card } from "@site/src/types";
import clsx from "clsx";
import React, { useEffect, useRef } from "react";

import styles from "./styles.module.css";

type Props = {
  cards: Card[];
  title: string;
  isSwiperOnMobile?: boolean;
};

export default function CardsTable({ cards, title, isSwiperOnMobile }: Props) {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!isSwiperOnMobile) return;

    Object.assign(swiperRef.current, SWIPER_CONTAINER_OPTIONS);

    swiperRef.current.initialize();
  }, [swiperRef.current]);

  return (
    <>
      <p
        className={clsx("cards-table__title", styles.cardsTableTitle)}
        data-aos="fade-up"
      >
        {title}
      </p>
      <section
        className={
          (styles.cardsTable, isSwiperOnMobile && styles.cardsTableMobile)
        }
      >
        <div
          className={clsx(
            "cardsTableContainer container",
            styles.cardsTableContainer
          )}
        >
          {cards.map((props, idx) => (
            <CardWithList
              className={clsx("cards-table__card", styles.cardsTableCard)}
              key={idx}
              {...props}
            />
          ))}
        </div>
      </section>
      {isSwiperOnMobile && (
        <swiper-container
          ref={swiperRef}
          // should use class here, instead of className
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          class={clsx("cards-table__swiper", styles.cardsTableSwiper)}
          init={false}
          data-aos="fade-up"
        >
          {cards.map((props, idx) => (
            <swiper-slide
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              class={clsx(
                "cards-table__swiper-slide",
                styles.cardsTableSwiperSlide
              )}
              key={idx}
            >
              <CardWithList
                className={clsx("cards-table__card", styles.cardsTableCard)}
                key={idx}
                {...props}
              />
            </swiper-slide>
          ))}
        </swiper-container>
      )}
    </>
  );
}
