import "aos/dist/aos.css";

import BrowserOnly from "@docusaurus/BrowserOnly";
import Link from "@docusaurus/Link";
// import HomepageDeveloperLinks from "@site/src/components/HomepageDeveloperLinks";
import CardsTable from "@site/src/components/CardsTable";
import HomepageHeader from "@site/src/components/HomepageHeader";
import HomepageLinks from "@site/src/components/HomepageLinks";
import Avalanche from "@site/static/img/avalanche-avax-logo.svg";
import Badge from "@site/static/img/Badge.svg";
import BNB from "@site/static/img/bnb-logo.svg";
import Chain from "@site/static/img/chain.svg";
import Ethereum from "@site/static/img/ethereum-classic-logo.svg";
import ForEveryHuman from "@site/static/img/for-every-human.svg";
import Layers from "@site/static/img/layers.svg";
import Near from "@site/static/img/near-protocol-near-logo.svg";
import Polygon from "@site/static/img/polygon-matic-logo.svg";
import PolygonWhite from "@site/static/img/PolygonWhite.svg";
import Shield from "@site/static/img/Shield.svg";
import Solana from "@site/static/img/solana-sol-logo.svg";
import Layout from "@theme/Layout";
import aos from "aos";
import clsx from "clsx";
import React, { useRef } from "react";

import { Card } from "../types";
import styles from "./index.module.css";

const blockchains = [Ethereum, BNB, Solana, Near, Avalanche, Polygon];

const firstCards = [
  {
    title: "Indentity Protocol",
    Svg: Layers,
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
    Svg: Chain,
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
          className={clsx("heroButtonSecondary", styles.heroButtonSecondary)}
        >
          Whitepaper
        </a>
        <a
          href={"https://google.com/"}
          rel="noopener"
          className={clsx("heroButtonSecondary", styles.heroButtonSecondary)}
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
  },
] as Card[];

function HomepageStartBuilding() {
  return (
    <div className={clsx("startBuildingSection", styles.startBuildingSection)}>
      <h1 className={clsx("second__title", styles.secondTitle)}>
        Start Building with rarimo
      </h1>
      <p className={clsx("second__subtitle", styles.secondSubtitle)}>
        Our community is here to help! Enjoy support tailored to the unique
        needs of your project
      </p>
      <div
        className={clsx("secondButtonContainer", styles.secondButtonContainer)}
      >
        <Link
          className={clsx("heroButtonSecondary", styles.heroButtonSecondary)}
          href="whitepaper"
          type="doc"
          id="whitepaper"
        >
          Whitepaper
        </Link>
      </div>
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
                {/*Todo: Show developer links */}
                {/*<HomepageDeveloperLinks />*/}
                <div className="container">
                  <div className={clsx("bottomContent", styles.bottomContent)}>
                    <HomepageStartBuilding />
                    <HomepageLinks />
                  </div>
                </div>
              </main>
            </>
          );
        }}
      </BrowserOnly>
    </Layout>
  );
}
