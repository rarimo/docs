import clsx from "clsx";
import React from "react";

import styles from "./styles.module.css";

type UseCase = {
  img: string;
  modifier: string;
  title: string;
  text: string;
  isBig?: boolean;
  isYellow?: boolean;
  path: string;
};

export const useCasesList = [
  {
    img: "img/homepage-use-cases/mints.webp",
    modifier: "mints",
    title: "Multi-Chain Mints",
    text: "Issue non-fungible tokens (NFTs) or SBTs on any chain",
    path: "https://google.com/",
  },
  {
    img: "img/homepage-use-cases/gaming-profiles.webp",
    modifier: "gaming-profiles",
    title: "Gaming Profiles",
    text: "Build out player profile that can be used by third-party dApps",
    path: "https://google.com/",
  },
  {
    img: "img/homepage-use-cases/ssi.webp",
    modifier: "ssi",
    title: "Self-Sovereign Identities (SSI)",
    text: "Use data in the web3 world using ZK-proofs for identity verification",
    isBig: true,
    isYellow: true,
    path: "https://google.com/",
  },
  {
    img: "img/homepage-use-cases/social-graphs.webp",
    modifier: "social-graphs",
    title: "Social Graphs",
    text: "Use data in the web3 world using ZK-proofs for identity verification",
    isYellow: true,
    path: "https://google.com/",
  },
  {
    img: "img/homepage-use-cases/token-agnostic.webp",
    modifier: "token-agnostic",
    title: "Token-Agnostic Payments",
    text: "Users can pay for transactions with their preferred tokens",
    path: "https://google.com/",
  },
  {
    img: "img/homepage-use-cases/name-servers.webp",
    modifier: "name-servers",
    title: "Name Servers",
    text: "Issue credentials for the users and build their social identity",
    isYellow: true,
    path: "https://google.com/",
  },
] as UseCase[];

export default function HomepageUseCases() {
  return (
    <>
      <p
        className={clsx(
          "homepage-use-cases__title",
          styles.homepageUseCasesTitle
        )}
        data-aos="fade-up"
      >
        Browse the Use Cases
      </p>
      <section className={styles.homepageUseCases}>
        <div
          className={clsx(
            "homepageUseCasesContainer container",
            styles.homepageUseCasesContainer
          )}
        >
          {useCasesList.map((item, idx) => (
            <div
              className={clsx(
                "homepage-use-cases__card",
                styles.homepageUseCasesCard
              )}
              key={idx}
              data-aos="fade-up"
            >
              <div
                className={clsx(
                  "homepage-use-cases__card-inner",
                  styles.homepageUseCasesCardInner
                )}
              >
                <div
                  className={clsx(
                    "homepage-use-cases__card-content",
                    styles.homepageUseCasesCardContent
                  )}
                >
                  <img
                    className={clsx(
                      "homepage-use-cases__case-item-img",
                      styles.homepageUseCasesCaseItemImg
                    )}
                    src={item.img}
                    alt=""
                  />
                  <div
                    className={clsx(
                      "homepage-use-cases__case-item-content",
                      styles.homepageUserCasesCaseItemContent
                    )}
                  >
                    <h6
                      className={clsx({
                        [styles.homepageUseCasesCaseItemTitle]: true,
                        [styles.homepageUseCasesCaseItemTitleYellow]:
                          item.isYellow,
                      })}
                    >
                      {item.title}
                    </h6>
                    <p
                      className={clsx(
                        "homepage-use-cases__case-item-text",
                        styles.homepageUseCasesCaseItemText
                      )}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
