/* eslint-disable @typescript-eslint/no-var-requires */

import clsx from "clsx";
import React from "react";

import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  url: string;
};
const FeatureList: FeatureItem[] = [
  {
    title: "Getting Started",
    Svg : require("@site/static/img/extension.svg").default,
    description: (
      <>
        Discover the fundamentals of Rarimo Protocol, its architecture, applications, and advantages. Get familiar with cross-chain identity and bridging capabilities.
      </>
    ),
    url: "./overview",
  },
  {
    title: "Tutorials",
    Svg: require("@site/static/img/arrow_top_right.svg").default,
    description: (
      <>
        Learn the ropes of identity protocol, zero-knowledge proofs, cross-chain token bridging, and other tech by building real DApps from scratch.
      </>
    ),
    url: "./tutorials",
  },
  {
    title: "How-To Guides",
    Svg: require("@site/static/img/flag.svg").default,
    description: (
      <>
        Integrate Rarimo products into your DApps, solve typical tasks, and troubleshoot common problems by following step-by-step instructions.
      </>
    ),
    url: "./how-to-guides",
  },
  {
    title: "Technical Reference",
    Svg: require("@site/static/img/arrow_top_right.svg").default,
    description: (
      <>
        Look up Rarimo's APIs, JavaScript libraries, and smart contracts. Dive deeper into the inner workings of the protocol.
      </>
    ),
    url: "./reference",
  },
];

function Feature({ title, Svg, description, url }: FeatureItem) {
  return (
    <a
      href={url}
      rel="noopener"
      className={clsx("feature", styles.feature)}
      data-aos="fade-up"
    >
      <div className="text--left padding--md">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--left padding-horiz--md padding-top--sm">
        <h3 className={clsx("feature__tittle", styles.featureTittle)}>
          {title}
        </h3>
        <p className={clsx("feature__description", styles.featureDescription)}>
          {description}
        </p>
      </div>
    </a>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div
        className={clsx(
          "featuresGridContainer container",
          styles.featuresGridContainer
        )}
      >
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
