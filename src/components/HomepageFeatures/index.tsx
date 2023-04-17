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
    title: "Getting started",
    Svg: require("@site/static/img/flag.svg").default,
    description: (
      <>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </>
    ),
    url: "/docs/docs/overview",
  },
  //TODO: add link to Tutorials
  {
    title: "Tutorials",
    Svg: require("@site/static/img/layers.svg").default,
    description: (
      <>
        It is a long established fact that a reader will be distracted by the
        readable conten
      </>
    ),
    url: "/docs/overview",
  },
  {
    title: "Core Concepts",
    Svg: require("@site/static/img/arrow_top_right.svg").default,
    description: (
      <>
        Morbi mattis risus in orci porta facilisis. Praesent tempus pharetra
        tellus. Mauris elementum sapien in orci blandit aliquam
      </>
    ),
    url: "/docs/docs/overview/design",
  },
  //TODO: add link to validator guide
  {
    title: "Validator guide",
    Svg: require("@site/static/img/flag.svg").default,
    description: (
      <>Praesent sollicitudin vestibulum nibh, eget dictum quam facilisis id</>
    ),
    url: "/docs/overview",
  },
  {
    title: "Api refference",
    Svg: require("@site/static/img/extension.svg").default,
    description: (
      <>
        Morbi mattis risus in orci porta facilisis. Praesent tempus pharetra
        tellus. Mauris elementum sapien in orci blandit aliquam
      </>
    ),
    url: "/docs/docs/api",
  },
  {
    title: "SDKS & inteegrations",
    Svg: require("@site/static/img/question_mark.svg").default,
    description: (
      <>Praesent in sodales odio. Donec facilisis, dolor ut gravida finibus</>
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
