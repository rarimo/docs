import "swiper/css";

import { SWIPER_CONTAINER_OPTIONS } from "@site/src/const";
import clsx from "clsx";
import React, { useEffect, useRef } from "react";

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

const useCasesList: UseCase[] = [
  {
    img: "img/homepage-use-cases/mints.webp",
    modifier: "mints",
    title: "Multi-Chain Mints",
    text: "Issue non-fungible tokens (NFTs) or SBTs on any chain",
    path: "/use-cases/multi-chain-mints",
  },
  {
    img: "img/homepage-use-cases/gaming-profiles.webp",
    modifier: "gaming-profiles",
    title: "Gaming Profiles",
    text: "Build out player profile that can be used by third-party dApps",
    path: "/use-cases/gaming-profiles",
  },
  {
    img: "img/homepage-use-cases/ssi.webp",
    modifier: "ssi",
    title: "Self-Sovereign Identities (SSI)",
    text: "Use data in the web3 world using ZK-proofs for identity verification",
    isBig: true,
    path: "/use-cases/self-sovereign-identities",
  },
  {
    img: "img/homepage-use-cases/social-graphs.webp",
    modifier: "social-graphs",
    title: "Social Graphs",
    text: "Use data in the web3 world using ZK-proofs for identity verification",
    isYellow: true,
    path: "/use-cases/social-graphs",
  },
  {
    img: "img/homepage-use-cases/token-agnostic.webp",
    modifier: "token-agnostic", // TODO: change image
    title: "Cross-Chain Proofs",
    text: "Prove ownership of non-fungible tokens on any chain",
    path: "/use-cases/cross-chain-proofs",
    isYellow: true,
  },
  {
    img: "img/homepage-use-cases/name-servers.webp",
    modifier: "name-servers", // TODO: change image
    title: "Identity Protocol State Replication",
    text: "Make your ZKP-based identity protocol available on any chain",
    isYellow: true,
    path: "/use-cases/identity-protocol-state-replication",
  },
];

export default function HomepageUseCases() {
  const swiperRef = useRef(null);

  useEffect(() => {
    Object.assign(swiperRef.current, SWIPER_CONTAINER_OPTIONS);

    swiperRef.current.initialize();
  }, [swiperRef.current]);

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
            <a
              className={clsx(
                "homepage-use-cases__card",
                styles.homepageUseCasesCard
              )}
              key={idx}
              data-aos="fade-up"
              href={item.path}
              target="_blank"
              rel="nofollow noopener noreferrer"
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
            </a>
          ))}
        </div>
        <swiper-container
          ref={swiperRef}
          class={clsx(
            "homepage-use-cases__swiper",
            styles.homepageUseCasesSwiper
          )}
          init={false}
          data-aos="fade-up"
        >
          {useCasesList.map((item, idx) => (
            <swiper-slide
              class={clsx(
                "homepage-use-cases__swiper-slide",
                styles.homepageUseCasesSwiperSlide
              )}
              key={idx}
            >
              <a
                className={clsx(
                  "homepage-use-cases__card",
                  styles.homepageUseCasesCard
                )}
                key={idx}
                data-aos="fade-up"
                href={item.path}
                target="_blank"
                rel="nofollow noopener noreferrer"
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
              </a>
            </swiper-slide>
          ))}
        </swiper-container>
      </section>
    </>
  );
}
