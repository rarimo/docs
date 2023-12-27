import "aos/dist/aos.css";
import "swiper/css";

import BrowserOnly from "@docusaurus/BrowserOnly";
import Link from "@docusaurus/Link";
// import HomepageDeveloperLinks from "@site/src/components/HomepageDeveloperLinks";
import CardsTable from "@site/src/components/CardsTable";
import HomepageHeader from "@site/src/components/HomepageHeader";
import HomepageUseCases from "@site/src/components/HomepageUseCases";
import { paramsMobile } from "@site/src/const";
import Avalanche from "@site/static/img/avalanche-avax-logo.svg";
import Badge from "@site/static/img/Badge.svg";
import BNB from "@site/static/img/bnb-logo.svg";
import Brackets from "@site/static/img/brackets-icon.svg";
import Discord from "@site/static/img/discord-icon.svg";
import Ethereum from "@site/static/img/ethereum-classic-logo.svg";
import ForEveryHuman from "@site/static/img/for-every-human.svg";
import Layers from "@site/static/img/layers.svg";
import LinkIcon from "@site/static/img/link-icon.svg";
import Near from "@site/static/img/near-protocol-near-logo.svg";
import Polygon from "@site/static/img/polygon-matic-logo.svg";
import PolygonWhite from "@site/static/img/PolygonWhite.svg";
import Shield from "@site/static/img/Shield.svg";
import Solana from "@site/static/img/solana-sol-logo.svg";
import Telegram from "@site/static/img/telegram-icon.svg";
import User from "@site/static/img/user-icon.svg";
import Layout from "@theme/Layout";
import aos from "aos";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { register } from "swiper/element";

import { Card } from "../types";
import styles from "./index.module.css";

register();

const blockchains = [Ethereum, BNB, Solana, Near, Avalanche, Polygon];

const firstCards = [
  {
    title: "Indentity Protocol",
    Svg: User,
    list: [
      [
        "Implements W3C DID standard;",
        "Enhanced privacy with zero-knowledge proofs;",
        "On-chain ZKPs available on any supported EVM chain;",
        "Timed SBTs for interoperability with existing platforms;",
        "Monetization for identity providers (coming soon);",
      ],
    ],
    url: "https://google.com/",
  },
  {
    title: "Bridging Protocol",
    Svg: Brackets,
    list: [
      [
        "Cross-chain transfers of NFTs, FTs, native coins;",
        "Cross-chain SBT ownership proofs;",
        "Available on EVM-compatible chains, Solana and Near;",
        "EVM transactions bundling;",
        "Low gas fees;",
        "CCTP integrations (coming soon);",
      ],
    ],
    url: "https://google.com/",
  },
  {
    title: "Rarimo Protocol",
    Svg: Layers,
    list: [
      [
        "Base layer for cross-chain applications;",
        "Decentralized Oracles;",
        "Proof of Stake Consensus;",
      ],
      [
        "EVM-compatible smart contracts;",
        "Instant finality;",
        "Cost-efficient signature scheme (TSS);",
      ],
      [
        "Supported Blockchain",
        <span
          className={clsx(
            "homepage-base-layer__blockchains",
            styles.homepageBaseLayerBlockchains
          )}
          key={1}
        >
          {blockchains.map((Blockchain, idx) => (
            <Blockchain
              key={idx}
              className={styles.cardWithListSvg}
              role="img"
            />
          ))}
        </span>,
      ],
    ],
    url: "https://google.com/",
    after: (
      <>
        <a
          href={"https://google.com/"}
          rel="noopener"
          className={clsx("heroButtonSecondary", styles.linksButton)}
        >
          Whitepaper
        </a>
        <a
          href={"https://google.com/"}
          rel="noopener"
          className={clsx("heroButtonSecondary", styles.linksButton)}
        >
          Protocol Proposals
        </a>
      </>
    ),
  },
] as Card[];

const secondCards = [
  {
    title: "RariMe",
    Svg: Shield,
    list: [
      [
        "Universal wallet for digital indentites;",
        "Lives in your MetaMask;",
        "Zero-Knowledge proofs of identity;",
        "Dashboard for managing your credentials, SBTs and more;",
        "Split identity for added privacy;",
      ],
    ],
    url: "https://google.com/",
  },
  {
    title: "Proof Of Humanity",
    Svg: Badge,
    list: [
      [
        "Aggregates five identy providers;",
        "Secured by zero-knowledge proof technology;",
        "DApp developers can verify humanity both off-chain and on-chain;",
        "Seamless integration with major community building platforms;",
        "Protect your discord server with Collab.Land plugin;",
      ],
    ],
    url: "https://google.com/",
  },
  {
    title: "WorldCoin Cross-Chain ZKP Solution",
    Svg: ForEveryHuman,
    list: [
      [
        "Use your World ID on any EVM-compatible chain;",
        "Cost-efficient scalability with on-demand state replication;",
      ],
    ],
    url: "https://google.com/",
  },
  {
    title: "Polygon ID Cross-Chain ZKP Solution",
    Svg: PolygonWhite,
    list: [
      [
        "Prove your identity on any EVM-compatible chain;",
        "Compatible with Polygon ID Wallet;",
        "Cost-efficient scalability with on-demand state replication;",
      ],
    ],
    url: "https://google.com",
  },
] as Card[];

const news = [
  {
    title: "Indisputably Wise Insights into the Future of Digital",
    url: "https://google.com/",
  },
  {
    title: "worldcoin community on the successful launch of WorldID 2.0!",
    url: "https://google.com/",
  },
  {
    title: "All WorldID-verified users can now claim their credentials",
    url: "https://google.com/",
  },
  {
    title:
      "roof of Humanity flow and gain access to exclusive humanity Discord channel",
    url: "https://google.com/",
  },
];

const submitFormSubscription = (
  e: React.FormEvent<HTMLFormElement>,
  email: string
) => {
  e.preventDefault();
  console.log(email);
};

function Building(): JSX.Element {
  return (
    <div className={clsx("container building__wrp", styles.buildingWrp)}>
      <div className={clsx("building", styles.building)}>
        <img
          className={clsx("building__img", styles.buildingImg)}
          src="img/building-image.png"
          data-aos="fade-up"
        />
        <div
          className={clsx("building__description", styles.buildingDescription)}
        >
          <h2
            className={clsx("building__title", styles.buildingTitle)}
            data-aos="fade-up"
          >
            Build fast with developer dashboard
          </h2>
          <p
            className={clsx("building__text", styles.buildingText)}
            data-aos="fade-up"
          >
            Build no-code and low-code identity enabled dApps with Rarimo
            Developer Dashboard
          </p>
          <Link
            className={clsx("heroButtonSecondary", styles.heroButtonSecondary)}
            to="https://google.com/"
            data-aos="fade-up"
          >
            LAUNCH
          </Link>
        </div>
      </div>
    </div>
  );
}

function Links(): JSX.Element {
  return (
    <div className={clsx("links", styles.links)}>
      <p className={clsx("links__title", styles.linksTitle)} data-aos="fade-up">
        Join the community
      </p>
      <div className={clsx("links__content", styles.linksContent)}>
        <a
          className={clsx("links__item", styles.linksItem)}
          href="https://google.com/"
        >
          <Discord />
          Discord
        </a>
        <a
          className={clsx("links__item", styles.linksItem)}
          href="https://google.com/"
        >
          <Telegram />
          Telegram
        </a>
      </div>
    </div>
  );
}

function News(): JSX.Element {
  const swiperRef = useRef(null);

  useEffect(() => {
    Object.assign(swiperRef.current, paramsMobile);

    swiperRef.current.initialize();
  }, [swiperRef.current]);

  return (
    <div className={clsx("news", styles.news)}>
      <p className={clsx("news__title", styles.newsTitle)} data-aos="fade-up">
        Latest news
      </p>
      <a
        className={clsx("news__view-all", styles.newsViewAll)}
        href="https://google.com/"
        data-aos="fade-up"
      >
        View all
      </a>
      <div className={clsx("news__content", styles.newsContent)}>
        {news.map((item, idx) => (
          <a
            className={clsx("news__item", styles.newsItem)}
            href={item.url}
            key={idx}
            data-aos="fade-up"
          >
            <LinkIcon />
            {item.title}
          </a>
        ))}
      </div>
      <swiper-container
        ref={swiperRef}
        // should use class here, instead of className
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        class={clsx("news__swiper", styles.newsSwiper)}
        init={false}
        data-aos="fade-up"
      >
        {news.map((item, idx) => (
          <swiper-slide
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            class={clsx("news__swiper-slide", styles.newsSwiperSlide)}
            key={idx}
          >
            <a className={clsx("news__item", styles.newsItem)} href={item.url}>
              <LinkIcon />
              {item.title}
            </a>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}

function Subscribe(): JSX.Element {
  const [email, setEmail] = useState("");

  return (
    <div className={clsx("subscribe", styles.subscribe)}>
      <div className={clsx("subscribe__text", styles.subscribeText)}>
        <p
          className={clsx("subscribe__title", styles.subscribeTitle)}
          data-aos="fade-up"
        >
          Subscribe to our newsletter
        </p>
        <p
          className={clsx(
            "subscribe__description",
            styles.subscribeDescription
          )}
          data-aos="fade-up"
        >
          Stay up-to-date about new features and supported apps
        </p>
      </div>
      <form
        onSubmit={(e) => submitFormSubscription(e, email)}
        className={clsx("subscribe__input-wrp", styles.subscribeInputWrp)}
        data-aos="fade-up"
      >
        <input
          onInput={(e) => setEmail(e.currentTarget.value)}
          className={clsx("subscribe__input", styles.subscribeInput)}
          placeholder="Email"
        />
        <button
          className={clsx(
            "subscribe__button heroButton",
            styles.subscribeButton
          )}
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default function Home(): JSX.Element {
  const light = useRef(null);
  return (
    <Layout>
      <BrowserOnly>
        {() => {
          aos.init({
            duration: 900,
            easing: "ease",
            offset: 0,
            once: true,
            mirror: false,
            anchorPlacement: "center-bottom",
          });
          document.addEventListener("mousemove", function ({ pageX, pageY }) {
            const x = pageX;
            const y = pageY;
            const spotlightSize = "transparent 80px, rgba(0, 0, 0, 0.6) 200px)";
            if (light.current) {
              light.current.style.background = `radial-gradient(circle at ${x}px ${y}px, ${spotlightSize}`;
            }
          });
          return (
            <>
              <HomepageHeader />
              <div className={clsx("bgImageFirst", styles.bgImageFirst)} />
              <div
                className={clsx("bgImageSecond", styles.bgImageSecond)}
                ref={light}
              />
              <div
                data-aos="fade-up"
                className={clsx(
                  "bgImageThird squareWaveAnimationDown",
                  styles.bgImageThird
                )}
              />
              <div
                data-aos="fade-up"
                className={clsx(
                  "bgImageFourth squareWaveAnimationUp",
                  styles.bgImageFourth
                )}
              />
              <div
                data-aos="fade-up"
                className={clsx(
                  "bgImageFifth squareWaveAnimationUp",
                  styles.bgImageFifth
                )}
              />
              <div
                data-aos="fade-up"
                className={clsx(
                  "bgImageSixth squareWaveAnimationDown",
                  styles.bgImageSixth
                )}
              />
              <main>
                <CardsTable cards={firstCards} title="Learn The Base Layer" />
                <CardsTable cards={secondCards} title="Explore Ecosystem" />
                <HomepageUseCases />
                {/*Todo: Show developer links*/}
                {/*<HomepageDeveloperLinks />*/}
                <Building />
                <Links />
                <News />
                <Subscribe />
              </main>
            </>
          );
        }}
      </BrowserOnly>
    </Layout>
  );
}
