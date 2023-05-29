import ArrowForward from "@site/static/img/arrow_forward.svg";
import ForumIcon from "@site/static/img/forum.svg";
import DiscordIcon from "@site/static/img/ri-discord-line.svg";
import GithubIcon from "@site/static/img/ri-github-fill.svg";
import clsx from "clsx";
import React from "react";

import styles from "./styles.module.css";

type LinkItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: string;
  url: string;
};
const LinksList: LinkItem[] = [
  {
    title: "Discord",
    Svg: DiscordIcon,
    description: "Join the Developer Community",
    url: "https://discord.gg/cfrH3Fe7ke",
  },
  {
    title: "Forum",
    Svg: ForumIcon,
    description: "Discuss governance and more",
    url: "https://scan.testnet.rarimo.com/proposals",
  },
  {
    title: "Github",
    Svg: GithubIcon,
    description: "View all Rarimo repositories",
    url: "https://github.com/rarimo",
  },
];

function Link({ title, Svg, description, url }: LinkItem) {
  return (
    <a href={url} className={clsx("link", styles.link)}>
      <div className={clsx("link__wrapper", styles.linkWrapper)}>
        <div>
          <Svg className={styles.linkSvg} role="img" />
        </div>
        <div className={clsx("link__text", styles.linkText)}>
          <div>
            <span className={clsx("link__title", styles.linkTitle)}>
              {title}
            </span>
          </div>
          <div className="text--left">
            <span className={clsx("link__description", styles.linkDescription)}>
              {description}
            </span>
          </div>
        </div>
      </div>
      <div className={clsx("link__svg-container", styles.linkSvgContainer)}>
        <ArrowForward
          className={clsx("link__svg", styles.link__svg)}
          role="img"
        />
      </div>
    </a>
  );
}

export default function HomepageLinks(): JSX.Element {
  return (
    <div className={styles.links} data-aos="fade-up">
      {LinksList.map((props, idx) => (
        <Link key={idx} {...props} />
      ))}
      <div className={clsx("bgImageSeventh", styles.bgImageSeventh)} />
      <div className={clsx("bgImageEighth", styles.bgImageEighth)} />
      <div className={clsx("bgImageNinth", styles.bgImageNinth)} />
      <div className={clsx("bgImageNinth", styles.bgImageTenth)} />
    </div>
  );
}
