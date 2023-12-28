import clsx from "clsx";
import React, { useState } from "react";

import styles from "./styles.module.css";

export default function Subscribe(): JSX.Element {
  const [email, setEmail] = useState("");

  const submitFormSubscription = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: implement
    e.preventDefault();
  };

  return (
    <div className={clsx("subscribe", styles.subscribe)}>
      <div className={clsx("subscribe__text", styles.subscribeText)}>
        <p
          className={clsx("subscribe__title", styles.subscribeTitle)}
          data-aos="fade-up"
        >
          Subscribe to our newsletter
        </p>
        <p
          className={clsx(
            "subscribe__description",
            styles.subscribeDescription
          )}
          data-aos="fade-up"
        >
          Stay up-to-date about new features and supported apps
        </p>
      </div>
      <form
        onSubmit={(e) => submitFormSubscription(e)}
        className={clsx("subscribe__form", styles.subscribeForm)}
        data-aos="fade-up"
      >
        <input
          onInput={(e) => setEmail(e.currentTarget.value)}
          value={email}
          className={clsx("subscribe__input", styles.subscribeInput)}
          placeholder="Email"
        />
        <button
          className={clsx(
            "subscribe__button heroButton",
            styles.subscribeButton
          )}
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
