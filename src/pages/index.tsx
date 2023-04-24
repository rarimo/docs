import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageDeveloperLinks from "@site/src/components/HomepageDeveloperLinks";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageLinks from "@site/src/components/HomepageLinks";
import ArrowSvg from "@site/static/img/arrow-forward.svg";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("heroBanner hero--primary", styles.heroBanner)}>
      <div className={clsx("heroContent container", styles.heroContent)}>
        <h1 className={clsx("hero__title", styles.heroTitle)}>
          {siteConfig.title}
        </h1>
        <p className={clsx("hero__subtitle", styles.heroSubtitle)}>
          {siteConfig.tagline}
        </p>
        <div className={clsx("buttonContainer", styles.buttonContainer)}>
          <a
            href="/docs/docs/overview"
            className={clsx(
              "heroButton svgContainer",
              styles.heroButton,
              styles.svgContainer
            )}
          >
            Getting Started <ArrowSvg />
          </a>
          {/*//Todo: add link to explore features*/}
          <button
            style={{
              border: "none",
              background: "none",
              fontSize: "16px",
              color: "rgba(255, 255, 255, 0.84)",
              fontWeight: "600",
            }}
          >
            Explore Features
          </button>
        </div>
      </div>
    </header>
  );
}
function HomepageStartBuilding() {
  return (
    <div className={clsx("startBuildingSection", styles.startBuildingSection)}>
      <h1
        className={clsx("hero__title", styles.heroTitle)}
        style={{ fontSize: "3.5rem" }}
      >
        Start Building with rarimo
      </h1>
      <p
        className={clsx("hero__subtitle", styles.heroSubtitle)}
        style={{ fontSize: "0.875rem" }}
      >
        Our community is here to help! Enjoy support tailored to the unique
        needs of your project
      </p>
      <div className={clsx("buttonContainer", styles.buttonContainer)}>
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
          onClick={() =>
            window.open("https://rarimo.gitlab.io/docs/docs/whitepaper")
          }
          style={{
            border: "none",
            background: "none",
            fontSize: "16px",
            color: "rgba(255, 255, 255, 0.84)",
            fontWeight: "600",
          }}
        >
          Whitepaper
        </button>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <div className={clsx("bgImage1", styles.bgImage1)} />
      <div className={clsx("bgImage2", styles.bgImage2)} />
      <div className={clsx("bgImage3", styles.bgImage3)} />
      <div className={clsx("bgImage4", styles.bgImage4)} />
      <div className={clsx("bgImage5", styles.bgImage5)} />
      <div className={clsx("bgImage6", styles.bgImage6)} />
      <div className={clsx("bgImage7", styles.bgImage7)} />
      <div className={clsx("bgImage8", styles.bgImage8)} />
      <div className={clsx("bgImage9", styles.bgImage9)} />

      <main>
        <HomepageFeatures />
        <div className={clsx("bottomContent container", styles.bottomContent)}>
          <HomepageStartBuilding />
          <HomepageDeveloperLinks />
        </div>
        <HomepageLinks />
      </main>
    </Layout>
  );
}
