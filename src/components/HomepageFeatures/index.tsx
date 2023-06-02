import ArrowTopRightIcon from "@site/static/img/arrow_top_right.svg";
import ExtensionIcon from "@site/static/img/extension.svg";
import FlagIcon from "@site/static/img/flag.svg";
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
    title: "Getting started",
    Svg: FlagIcon,
    description: (
      <>
        Learn the basics of the protocol and create simple applications to
        connect to wallets and create cross-chain transactions.
      </>
    ),
    url: "./overview",
  },
  {
    title: "Architecture",
    Svg: ArrowTopRightIcon,
    description: (
      <>
        Read about how the protocol is structured, how its oracles and contracts
        work, and how it bundles different events into a single transaction to
        save fees.
      </>
    ),
    url: "./architecture",
  },
  {
    title: "API reference",
    Svg: ExtensionIcon,
    description: (
      <>
        Refer to information about the Rarimo API, which provides information
        about the protocol&apos;s smart contracts and its supported blockchains
        and tokens.
      </>
    ),
    url: "./api",
  },
  {
    title: "SDK",
    Svg: FlagIcon,
    description: (
      <>
        Use the Rarimo JavaScript/TypeScript SDK to simplify using the protocol
        from your applications.
      </>
    ),
    url: "./sdk",
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
