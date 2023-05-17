/* eslint-disable @typescript-eslint/no-var-requires */
import styles from "@site/src/components/HomepageDeveloperLinks/styles.module.css";
import ArrowSvg from "@site/static/img/arrow_forward.svg";
import ArrowOutward from "@site/static/img/arrow_outward.svg";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
type LinkItem = {
  title: string;
  items: { title: string; url: string }[];
};
//todo: Add links
const DeveloperLinksList: LinkItem[] = [
  {
    title: "Integrate your dapp",
    items: [
      { title: "Fetch token prices", url: "#" },
      { title: "Create a trade", url: "#" },
      { title: "Route Trades", url: "#" },
      { title: "Provide Liquidity", url: "#" },
      { title: "UI Components", url: "#" },
      { title: "Self Contract", url: "#" },
    ],
  },
  {
    title: "Integrate your smart contract",
    items: [
      { title: "Self Contract", url: "#" },
      { title: "Uniswap-v3-core", url: "#" },
      { title: "Provide Liquidity", url: "#" },
      { title: "UI Components", url: "#" },
      { title: "Create a trade", url: "#" },
      { title: "Route Trades", url: "#" },
    ],
  },
  {
    title: "Links for develoeprs",
    items: [
      { title: "Uniswap-v3-core", url: "#" },
      { title: "Uniswap-v3-sdk", url: "#" },
      { title: "Uniswap-v3-periphery", url: "#" },
      { title: "Deployment adress", url: "#" },
      { title: "Widgets", url: "#" },
    ],
  },
];

function DeveloperLink({ title, items }: LinkItem) {
  const animationLine = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(entry.isIntersecting);
        observer.disconnect();
      }
    });
  });
  useEffect(() => {
    if (animationLine.current) {
      observer.observe(animationLine.current);
    }
  }, [animationLine]);

  return (
    <div className={clsx("developerLinkBlock", styles.developerLinkBlock)}>
      <h3
        className={clsx(
          "developerLinkBlockTitle",
          styles.developerLinkBlockTitle
        )}
      >
        {title}
        <div
          className={clsx(
            `developerLinkBlockTitleLine ${
              isVisible ? "developerLinkBlockTitleLineAnimation" : ""
            }`,
            styles.developerLinkBlockTitleLine
          )}
          ref={animationLine}
        />
      </h3>
      {items.map(({ url, title }, idx) => (
        <a
          key={idx}
          href={url}
          className={clsx("developerLink", styles.developerLink)}
        >
          <span
            className={clsx("developerLinkTitle", styles.developerLinkTitle)}
          >
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
      ))}
    </div>
  );
}

export default function HomepageDeveloperLinks(): JSX.Element {
  return (
    <section className={clsx("developerLinks", styles.developerLinks)}>
      <div className="container">
        <div
          className={clsx("developerLinksHeader", styles.developerLinksHeader)}
        >
          <div>
            <h3
              className={clsx(
                "developerLinksTitle",
                styles.developerLinksTitle
              )}
            >
              Helpfull Links
            </h3>
            <p
              className={clsx(
                "developerLinksDescription",
                styles.developerLinksDescription
              )}
            >
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
          <button className={clsx("heroButton svgContainer")}>
            Documentation
            <ArrowSvg />
          </button>
        </div>
        <div className={clsx("developerLinksBody", styles.developerLinksBody)}>
          {DeveloperLinksList.map((props, idx) => (
            <DeveloperLink key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
