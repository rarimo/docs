import "aos/dist/aos.css";

import BrowserOnly from "@docusaurus/BrowserOnly";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageDeveloperLinks from "@site/src/components/HomepageDeveloperLinks";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageHeader from "@site/src/components/HomepageHeader";
import HomepageLinks from "@site/src/components/HomepageLinks";
import ArrowSvg from "@site/static/img/arrow_forward.svg";
import Layout from "@theme/Layout";
import aos from "AOS";
import clsx from "clsx";
import React, { useRef } from "react";

import styles from "./index.module.css";

function HomepageStartBuilding() {
  return (
    <div className={clsx("startBuildingSection", styles.startBuildingSection)}>
      <h1 className={clsx("second__title", styles.secondTitle)}>
        Start Building with rarimo
      </h1>
      <p className={clsx("second__subtitle", styles.secondSubtitle)}>
        Our community is here to help! Enjoy support tailored to the unique
        needs of your project
      </p>
      <div
        className={clsx("secondButtonContainer", styles.secondButtonContainer)}
      >
        <button
          onClick={() => window.open("https://rarimo.com/testnet/sign-up")}
          className={clsx(
            "heroButton svgContainer",
            styles.heroButton,
            styles.svgContainer
          )}
        >
          Join Testnet
          <ArrowSvg />
        </button>
        <button
          className={clsx("heroButtonSecondary", styles.heroButtonSecondary)}
          onClick={() =>
            window.open("https://rarimo.gitlab.io/docs/docs/whitepaper")
          }
        >
          Whitepaper
        </button>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  aos.init({
    duration: 900,
    easing: "ease",
    offset: 0,
    once: true,
    mirror: false,
    anchorPlacement: "center-bottom",
  });
  const light = useRef(null);
  document.addEventListener("mousemove", function (e) {
    const x = e.pageX;
    const y = e.pageY;
    const spotlightSize = "transparent 80px, rgba(0, 0, 0, 0.6) 200px)";
    if (light.current) {
      light.current.style.background = `radial-gradient(circle at ${
        x
      }px ${y}px, ${spotlightSize}`;
    }
  });
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <div className={clsx("bgImage1", styles.bgImage1)} />
      <div className={clsx("bgImage2", styles.bgImage2)} ref={light} />
      <div
        data-aos="fade-up"
        className={clsx("bgImage3 squareWaveAnimationDown", styles.bgImage3)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        data-aos="fade-up"
        className={clsx("bgImage4 squareWaveAnimationUp", styles.bgImage4)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        data-aos="fade-up"
        className={clsx("bgImage5 squareWaveAnimationUp", styles.bgImage5)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        data-aos="fade-up"
        className={clsx("bgImage6 squareWaveAnimationDown", styles.bgImage6)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <main>
        <BrowserOnly>
          {() => (
            <>
              <HomepageFeatures />
              <HomepageDeveloperLinks />
              <div className="container">
                <div className={clsx("bottomContent", styles.bottomContent)}>
                  <HomepageStartBuilding />
                  <HomepageLinks />
                </div>
              </div>
            </>
          )}
        </BrowserOnly>
      </main>
    </Layout>
  );
}
