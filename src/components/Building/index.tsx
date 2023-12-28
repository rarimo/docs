import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";

import styles from "./styles.module.css";

export default function Building(): JSX.Element {
  return (
    <div className={clsx("building__wrp", styles.buildingWrp)}>
      <div className={clsx("building container", styles.building)}>
        <img
          className={clsx("building__img", styles.buildingImg)}
          src="img/building-image.png"
          data-aos="fade-up"
        />
        <div
          className={clsx("building__description", styles.buildingDescription)}
        >
          <h2
            className={clsx("building__title", styles.buildingTitle)}
            data-aos="fade-up"
          >
            Build Fast With Developer Dashboard
          </h2>
          <p
            className={clsx("building__text", styles.buildingText)}
            data-aos="fade-up"
          >
            {
              "Build no-code and low-code identity enabled dApps with \nRarimo Developer Dashboard"
            }
          </p>
          <Link
            className={clsx("heroButtonSecondary", styles.heroButtonSecondary)}
            to="https://google.com/"
            data-aos="fade-up"
          >
            LAUNCH
          </Link>
        </div>
      </div>
    </div>
  );
}
