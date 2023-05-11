/* eslint-disable @typescript-eslint/no-var-requires */
import styles from "@site/src/components/HomepageLinks/styles.module.css";
import ArrowOutward from "@site/static/img/arrow_outward.svg";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
type LinkItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: string;
  url: string;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const LinksList: LinkItem[] = [
  {
    title: "Discord",
    Svg: require("@site/static/img/ri-discord-line.svg").default,
    description: "Make your engineering workflow more efficient",
    url: "https://discord.gg/cfrH3Fe7ke",
  },
  // TODO: add link to forum
  {
    title: "Forum",
    Svg: require("@site/static/img/forum.svg").default,
    description: "Discuss governance and more",
    url: "#",
  },
  {
    title: "Github",
    Svg: require("@site/static/img/ri-github-fill.svg").default,
    description: "View all Uniswap Responses",
    url: "https://github.com/rarimo",
  },
];
// const LinksListTablet: LinkItem[] = [
//   // TODO: add links
//   {
//     title: "Engineric Support",
//     Svg: require("@site/static/img/support_agent.svg").default,
//     description: "Make your engineering workflow more efficient",
//     url: "#",
//   },
//   {
//     title: "Additional Resources",
//     Svg: require("@site/static/img/monetization_on.svg").default,
//     description: "Coming soon",
//     url: "#",
//   },
//   {
//     title: "Social Links",
//     Svg: require("@site/static/img/ri-discord-line.svg").default,
//     description:
//       "Connect with like-minded community for support and inspiration",
//     url: "#",
//   },
// ];

function Link({ title, Svg, description, url }: LinkItem) {
  return (
    <a href={url} className={clsx("link", styles.link)}>
      <div className={clsx("linkWrapper", styles.linkWrapper)}>
        <div className="text--center">
          <Svg className={styles.linkSvg} role="img" />
        </div>
        <div className={clsx("linkText", styles.linkText)}>
          <div>
            <span className={clsx("linkTitle", styles.linkTitle)}>{title}</span>
          </div>
          <div className="text--left">
            <span className={clsx("linkDescription", styles.linkDescription)}>
              {description}
            </span>
          </div>
        </div>
      </div>
      <div className={clsx("linkSvgContainer", styles.linkSvgContainer)}>
        <ArrowOutward role="img" />
      </div>
    </a>
  );
}

export default function HomepageLinks(): JSX.Element {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  // const isTabletOrMobile = width <= 996;
  return (
    <div className={styles.links}>
      {LinksList.map((props, idx) => (
        <Link key={idx} {...props} />
      ))}
    </div>
  );
}
