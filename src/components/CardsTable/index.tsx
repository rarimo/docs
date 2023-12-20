import CardWithList from "@site/src/components/CardWithList";
import { Card } from "@site/src/types";
import clsx from "clsx";
import React from "react";

import styles from "./styles.module.css";

type Props = {
  cards: Card[];
  title: string;
};

export default function CardsTable({ cards, title }: Props) {
  return (
    <>
      <p
        className={clsx("cards-table__title", styles.cardsTableTitle)}
        data-aos="fade-up"
      >
        {title}
      </p>
      <section className={styles.cardsTable}>
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
    </>
  );
}
