import Link from '@docusaurus/Link'
import DiscordIcon from '@site/static/img/discord-icon.svg'
import TelegramIcon from '@site/static/img/telegram-icon.svg'
import XIcon from '@site/static/img/x-icon.svg'
import clsx from 'clsx'
import React from 'react'

import styles from './styles.module.css'

export default function Links(): JSX.Element {
  return (
    <div className={clsx('links', styles.links)}>
      <p className={clsx('links__title', styles.linksTitle)} data-aos="fade-up">
        Join the community
      </p>
      <div
        className={clsx('links__content', styles.linksContent)}
        data-aos="fade-up"
      >
        <Link
          className={clsx('links__item', styles.linksItem)}
          href="https://discord.gg/cfrH3Fe7ke"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <DiscordIcon />
          Discord
        </Link>
        <Link
          className={clsx('links__item', styles.linksItem)}
          href="https://t.me/rarimoprotocol"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <TelegramIcon />
          Telegram
        </Link>
        <Link
          className={clsx('links__item', styles.linksItem)}
          href="https://twitter.com/Rarimo_protocol"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <XIcon />Х
        </Link>
      </div>
    </div>
  )
}
