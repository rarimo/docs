import { HomeCard as HomeCardType } from '@site/src/types'
import clsx from 'clsx'
import React, { CSSProperties } from 'react'

import styles from './styles.module.css'

export default function HomeCard(card: HomeCardType) {
  return (
    <div
      className={clsx('home-card', styles.homeCard, card.className)}
      data-aos="fade-up"
      style={
        {
          '--home-card-grid-area': card.id,
        } as CSSProperties
      }
    >
      <div
        className={clsx('home-card__heading-wrp', styles.homeCardHeadingWrp)}
      >
        <h3 className={clsx('home-card__title', styles.homeCardTitle)}>
          {card.title}
        </h3>
        <div className={clsx('home-card__icon-wrp', styles.homeCardIconWrp)}>
          <card.IconName className={styles.homeCardSvg} role="img" />
        </div>
      </div>
      <div
        className={clsx(
          'home-card__description-wrp',
          styles.homeCardDescriptionWrp
        )}
      >
        {card.list.map((innerList, idx) => (
          <ul key={idx}>
            {innerList.map((item, idx) =>
              typeof item === 'string' ? (
                <li
                  key={idx}
                  className={clsx(
                    'home-card__description',
                    styles.homeCardDescription
                  )}
                >
                  {item}
                </li>
              ) : (
                item
              )
            )}
          </ul>
        ))}
      </div>
      <div className={clsx('home-card__button-wrp', styles.homeCardButtonWrp)}>
        <a
          href={card.url}
          className={clsx('heroButtonSecondary', styles.heroButtonSecondary)}
        >
          Explore
        </a>
        {card.after}
      </div>
    </div>
  )
}
