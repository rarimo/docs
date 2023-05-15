import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ArrowSvg from "@site/static/img/arrow_forward.svg";
import clsx from "clsx";
import React from "react";

import styles from "./styles.module.css";

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      data-aos="fade-up"
      className={clsx("heroBanner hero--primary", styles.heroBanner)}
    >
      <div className={clsx("heroContent container", styles.heroContent)}>
        <h1 className={clsx("hero__title", styles.heroTitle)}>
          <div>
            <span
              style={{ display: "inline-block" }}
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="400"
            >
              R
            </span>
            <span
              style={{ display: "inline-block" }}
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="400"
            >
              A
            </span>
            <span
              style={{ display: "inline-block" }}
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="400"
            >
              R
            </span>
            <span
              style={{ display: "inline-block" }}
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="400"
            >
              I
            </span>
            <span
              style={{ display: "inline-block" }}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="400"
            >
              M
            </span>
            <span
              style={{ display: "inline-block" }}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="400"
            >
              O
            </span>
            <span data-aos="fade-up" data-aos-delay="700">
              {" "}
            </span>
            <span
              style={{ display: "inline-block" }}
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="400"
            >
              D
            </span>
            <span
              style={{ display: "inline-block" }}
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="400"
            >
              E
            </span>
            <span
              style={{ display: "inline-block" }}
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="400"
            >
              V
            </span>
            <span
              style={{ display: "inline-block" }}
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="400"
            >
              E
            </span>
            <span
              style={{ display: "inline-block" }}
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="400"
            >
              L
            </span>
            <span
              style={{ display: "inline-block" }}
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="400"
            >
              O
            </span>
            <span
              style={{ display: "inline-block" }}
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="400"
            >
              P
            </span>
            <span
              style={{ display: "inline-block" }}
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="400"
            >
              E
            </span>
            <span
              style={{ display: "inline-block" }}
              data-aos="fade-up"
              data-aos-delay="350"
              data-aos-duration="400"
            >
              R
            </span>
          </div>
          <div>
            <span
              style={{ display: "inline-block" }}
              data-aos="fade-up"
              data-aos-delay="350"
              data-aos-duration="400"
            >
              D
            </span>
            <span
              style={{ display: "inline-block" }}
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="400"
            >
              O
            </span>
            <span
              style={{ display: "inline-block" }}
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="400"
            >
              C
            </span>
            <span
              style={{ display: "inline-block" }}
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="400"
            >
              U
            </span>
            <span
              style={{ display: "inline-block" }}
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="400"
            >
              M
            </span>
            <span
              style={{ display: "inline-block" }}
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="400"
            >
              E
            </span>
            <span
              style={{ display: "inline-block" }}
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="400"
            >
              N
            </span>
            <span
              style={{ display: "inline-block" }}
              data-aos="fade-up"
              data-aos-delay="550"
              data-aos-duration="400"
            >
              T
            </span>
            <span
              style={{ display: "inline-block" }}
              data-aos="fade-up"
              data-aos-delay="550"
              data-aos-duration="400"
            >
              A
            </span>
            <span
              style={{ display: "inline-block" }}
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="400"
            >
              T
            </span>
            <span
              style={{ display: "inline-block" }}
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="400"
            >
              I
            </span>
            <span
              style={{ display: "inline-block" }}
              data-aos="fade-up"
              data-aos-delay="650"
              data-aos-duration="400"
            >
              O
            </span>
            <span
              style={{ display: "inline-block" }}
              data-aos="fade-up"
              data-aos-delay="650"
              data-aos-duration="400"
            >
              N
            </span>
          </div>
        </h1>
        <p className={clsx("hero__subtitle", styles.heroSubtitle)}>
          {siteConfig.tagline}
        </p>
        <div className={clsx("buttonContainer", styles.buttonContainer)}>
          <a
            href="/docs/docs/overview"
            className={clsx(
              "heroButton svgContainer",
              styles.heroButton,
              styles.svgContainer
            )}
          >
            Getting Started <ArrowSvg />
          </a>
          {/*//Todo: add link to explore features*/}
          <button
            className={clsx("heroButtonSecondary", styles.heroButtonSecondary)}
          >
            Explore Features
          </button>
        </div>
      </div>
    </header>
  );
}
