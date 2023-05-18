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
          "developerLinkBlock__title",
          styles.developerLinkBlockTitle
        )}
      >
        {title}
        <span
          className={clsx(
            `developerLinkBlock__title-line ${
              isVisible ? "developerLinkBlock__title-line-animation" : ""
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
            className={clsx("developerLink__title", styles.developerLinkTitle)}
          >
            {title}
          </span>
          <div
            className={clsx(
              "developerLink__svg-container",
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
          className={clsx(
            "developerLinks__header",
            styles.developerLinksHeader
          )}
        >
          <div>
            <h3
              className={clsx(
                "developerLinks__title",
                styles.developerLinksTitle
              )}
            >
              Helpfull Links
            </h3>
            <p
              className={clsx(
                "developerLinks__description",
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
        <div className={clsx("developerLinks__body", styles.developerLinksBody)}>
          {DeveloperLinksList.map((props, idx) => (
            <DeveloperLink key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
