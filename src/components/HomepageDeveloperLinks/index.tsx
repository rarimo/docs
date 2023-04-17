/* eslint-disable @typescript-eslint/no-var-requires */
import styles from "@site/src/components/HomepageDeveloperLinks/styles.module.css";
import ArrowOutward from "@site/static/img/arrow_outward.svg";
import clsx from "clsx";
import React from "react";
type LinkItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  url: string;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const DeveloperLinksList: LinkItem[] = [
  {
    title: "Uniswap-V3-core",
    Svg: require("@site/static/img/ri-github-fill.svg").default,
    url: "https://uniswap.org/whitepaper-v3.pdf",
  },
  {
    title: "Uniswap-V3-Sdk",
    Svg: require("@site/static/img/ri-github-fill.svg").default,
    url: "https://docs.uniswap.org/sdk/v3/overview",
  },
  {
    title: "Uniswap-V3-Periphery",
    Svg: require("@site/static/img/ri-github-fill.svg").default,
    url: "https://github.com/Uniswap/v3-periphery",
  },
  //TODO: add link
  {
    title: "Deployment Adress",
    Svg: require("@site/static/img/ri-github-fill.svg").default,
    url: "#",
  },
  //TODO: add link
  {
    title: "Widgets",
    Svg: require("@site/static/img/ri-github-fill.svg").default,
    url: "#",
  },
];

function DeveloperLink({ title, Svg, url }: LinkItem) {
  return (
    <a href={url} className={clsx("developerLink", styles.developerLink)}>
      <div className="text--left">
        <Svg className={styles.linkSvg} role="img" />
      </div>
      <span className={clsx("developerLinkTitle", styles.developerLinkTitle)}>
        {title}
      </span>
      <div
        className={clsx(
          "developerLinkSvgContainer",
          styles.developerLinkSvgContainer
        )}
      >
        <ArrowOutward role="img" />
      </div>
    </a>
  );
}

export default function HomepageDeveloperLinks(): JSX.Element {
  return (
    <section className={styles.developerLinks}>
      <div className="container">
        <h3 className={clsx("developerLinksTitle", styles.developerLinksTitle)}>
          Developer links
        </h3>
        <div>
          {DeveloperLinksList.map((props, idx) => (
            <DeveloperLink key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
