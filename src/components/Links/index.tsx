import Discord from "@site/static/img/discord-icon.svg";
import Telegram from "@site/static/img/telegram-icon.svg";
import clsx from "clsx";
import React from "react";

import styles from "./styles.module.css";

export default function Links(): JSX.Element {
  return (
    <div className={clsx("links", styles.links)}>
      <p className={clsx("links__title", styles.linksTitle)} data-aos="fade-up">
        Join the community
      </p>
      <div className={clsx("links__content", styles.linksContent)}>
        <a
          className={clsx("links__item", styles.linksItem)}
          href="https://google.com/"
        >
          <Discord />
          Discord
        </a>
        <a
          className={clsx("links__item", styles.linksItem)}
          href="https://google.com/"
        >
          <Telegram />
          Telegram
        </a>
      </div>
    </div>
  );
}
