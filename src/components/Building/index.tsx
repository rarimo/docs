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
          alt="Developer Console"
          data-aos="fade-up"
        />
        <div
          className={clsx("building__description", styles.buildingDescription)}
          data-aos="fade-up"
        >
          <h2 className={clsx("building__title", styles.buildingTitle)}>
            Build Fast With Developer Dashboard
          </h2>
          <p className={clsx("building__text", styles.buildingText)}>
            {
              "Build no-code and low-code identity enabled dApps with \nRarimo Developer Dashboard"
            }
          </p>
          <Link
            className={clsx("heroButtonSecondary", styles.heroButtonSecondary)}
            // TODO: dummy link
            to="#"
            target="_blank"
            rel="nofollow noreferrer noopener"
          >
            LAUNCH
          </Link>
        </div>
      </div>
    </div>
  );
}
