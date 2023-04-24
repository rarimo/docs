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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const FeatureList: FeatureItem[] = [
  {
    title: "Core Concepts",
    Svg: require("@site/static/img/arrow_top_right.svg").default,
    description: (
      <>
        Read about how the protocol is structured, how its oracles and contracts
        work, and how it bundles different events into a single transaction to
        save fees.
      </>
    ),
    url: "/docs/docs/overview/design",
  },
  {
    title: "Oracles",
    Svg: require("@site/static/img/flag.svg").default,
    description: (
      <>
        Learn the basics of the protocol and create simple applications to
        connect to wallets and create cross-chain transactions.
      </>
    ),
    url: "/docs/docs/overview",
  },
  {
    title: "Api refference",
    Svg: require("@site/static/img/extension.svg").default,
    description: (
      <>
        Refer to information about the Rarimo API, which provides information
        about the protocol's contracts and its supported blockchains and tokens.
      </>
    ),
    url: "/docs/docs/api",
  },
  {
    title: "SDK",
    Svg: require("@site/static/img/question_mark.svg").default,
    description: (
      <>
        Use the Rarimo JavaScript/TypeScript SDK to simplify using the protocol
        from your applications.
      </>
    ),
    url: "/docs/docs/sdk",
  },
  {
    title: "Tutorials & Guides",
    Svg: require("@site/static/img/question_mark.svg").default,
    description: (
      <>
        Use the Rarimo JavaScript/TypeScript SDK to simplify using the protocol
        from your applications.
      </>
    ),
    url: "/docs/docs/sdk",
  },
  {
    title: "FAQ",
    Svg: require("@site/static/img/question_mark.svg").default,
    description: (
      <>
        Use the Rarimo JavaScript/TypeScript SDK to simplify using the protocol
        from your applications.
      </>
    ),
    url: "/docs/docs/sdk",
  },
];

function Feature({ title, Svg, description, url }: FeatureItem) {
  return (
    <a href={url} className={clsx("feature", styles.feature)}>
      <div className="text--left padding--md">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--left padding-horiz--md padding-top--lg">
        <h3 className={clsx("featureTittle", styles.featureTittle)}>{title}</h3>
        <p className={clsx("featureDescription", styles.featureDescription)}>
          {description}
        </p>
      </div>
    </a>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div
          className={clsx(
            "featuresGridContainer",
            styles.featuresGridContainer
          )}
        >
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
