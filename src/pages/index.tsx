import "aos/dist/aos.css";
import "swiper/css";

import BrowserOnly from "@docusaurus/BrowserOnly";
import Building from "@site/src/components/Building";
// import HomepageDeveloperLinks from "@site/src/components/HomepageDeveloperLinks";
import CardsSection from "@site/src/components/CardsSection";
import HomepageHeader from "@site/src/components/HomepageHeader";
import HomepageUseCases from "@site/src/components/HomepageUseCases";
import Links from "@site/src/components/Links";
import News from "@site/src/components/News";
import Subscribe from "@site/src/components/Subscribe";
import { blockchains } from "@site/src/const";
import { HomeCard } from "@site/src/types";
import BadgeIcon from "@site/static/img/Badge.svg";
import BracketsIcon from "@site/static/img/brackets-icon.svg";
import ForEveryHumanIcon from "@site/static/img/for-every-human.svg";
import LayersIcon from "@site/static/img/layers.svg";
import PolygonWhiteIcon from "@site/static/img/PolygonWhite.svg";
import ShieldIcon from "@site/static/img/Shield.svg";
import UserIcon from "@site/static/img/user-icon.svg";
import Layout from "@theme/Layout";
import aos from "aos";
import clsx from "clsx";
import React, { useRef } from "react";
import { register } from "swiper/element/bundle";

import styles from "./index.module.css";

register();

const baseLayerCards: HomeCard[] = [
  {
    title: "Indentity Protocol",
    IconName: UserIcon,
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
    IconName: BracketsIcon,
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
    IconName: LayersIcon,
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
        <span
          className={clsx(
            "homepage-base-layer__text",
            styles.homepageBaseLayerText
          )}
          key={0}
        >
          Supported Blockchain
        </span>,
        <span
          className={clsx(
            "homepage-base-layer__blockchains",
            styles.homepageBaseLayerBlockchains
          )}
          key={1}
        >
          {blockchains.map((Blockchain, idx) => (
            <Blockchain key={idx} className={styles.homeCardSvg} role="img" />
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
];

const ecosystemCards: HomeCard[] = [
  {
    title: "RariMe",
    IconName: ShieldIcon,
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
    IconName: BadgeIcon,
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
    IconName: ForEveryHumanIcon,
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
    IconName: PolygonWhiteIcon,
    list: [
      [
        "Prove your identity on any EVM-compatible chain;",
        "Compatible with Polygon ID Wallet;",
        "Cost-efficient scalability with on-demand state replication;",
      ],
    ],
    url: "https://google.com",
  },
];

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
                <CardsSection
                  cards={baseLayerCards}
                  title="Learn The Base Layer"
                />
                <CardsSection
                  cards={ecosystemCards}
                  title="Explore The Ecosystem"
                  isSwiperOnMobile={true}
                />
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
