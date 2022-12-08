/* eslint-disable @typescript-eslint/no-var-requires */

import clsx from "clsx";
import React from "react";

import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const FeatureList: FeatureItem[] = [
  {
    title: "NFT Settlement",
    Svg: require("@site/static/img/settlement.svg").default,
    description: (
      <>
        Users can buy NFTs using their token of choice from any supported
        blockchain in a single transaction — with the lowest fees.
      </>
    ),
  },
  {
    title: "Lending & Borrowing",
    Svg: require("@site/static/img/lend-borr.svg").default,
    description: (
      <>
        Rarimo integrates with lending platforms, enabling collateralized or
        uncollateralized lending across different blockchain.
      </>
    ),
  },
  {
    title: "Asset verification",
    Svg: require("@site/static/img/asset-verification.svg").default,
    description: (
      <>
        Allowing to retrieve and publish timestamped proofs about an NFT’s state
        and activities.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
