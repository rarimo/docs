import { Card } from "@site/src/types";
import clsx from "clsx";
import React from "react";

import styles from "./styles.module.css";

export default function CardWithList(card: Card) {
  return (
    <div
      className={clsx("card-with-list", styles.cardWithList, card.className)}
      data-aos="fade-up"
    >
      <div
        className={clsx(
          "card-with-list__heading-wrp",
          styles.cardWithListHeadingWrp
        )}
      >
        <h3
          className={clsx("card-with-list__title", styles.cardWithListTittle)}
        >
          {card.title}
        </h3>
        <div
          className={clsx(
            "card-with-list__icon-wrp",
            styles.cardWithListIconWrp
          )}
        >
          <card.Svg className={styles.cardWithListSvg} role="img" />
        </div>
      </div>
      <div
        className={clsx(
          "card-with-list__description-wrp",
          styles.cardWithListDescriptionWrp
        )}
      >
        {card.list.map((innerList, idx) => (
          <p key={idx}>
            {innerList.map((item, idx) =>
              typeof item === "string" ? (
                <li
                  key={idx}
                  className={clsx(
                    "card-with-list__description",
                    styles.cardWithListDescription
                  )}
                >
                  {item}
                </li>
              ) : (
                item
              )
            )}
          </p>
        ))}
      </div>
      <div
        className={clsx(
          "card-with-list__button-wrp",
          styles.cardWithListButtonWrp
        )}
      >
        <a
          href={card.url}
          rel="noopener"
          className={clsx("heroButtonSecondary", styles.heroButtonSecondary)}
        >
          Explore
        </a>
        {card.after}
      </div>
    </div>
  );
}
