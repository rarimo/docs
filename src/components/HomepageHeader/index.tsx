import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import ArrowSvg from '@site/static/img/arrow_forward.svg'
import clsx from 'clsx'
import React from 'react'

import styles from './styles.module.css'

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero__banner hero--primary', styles.heroBanner)}>
      <div className={clsx('hero__content container', styles.heroContent)}>
        <h1
          className={clsx('hero__title', styles.heroTitle)}
          data-aos="fade-up"
        >
          Rarimo Developer Documentation
        </h1>
        <p
          className={clsx('hero__subtitle', styles.heroSubtitle)}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {siteConfig.tagline}
        </p>
        <div
          className={clsx('buttonContainer', styles.buttonContainer)}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Link
            href="/overview/"
            type="doc"
            id="overview"
            className={clsx(
              'heroButton svgContainer',
              styles.heroButton,
              styles.svgContainer
            )}
          >
            Getting Started{' '}
            <ArrowSvg
              className={clsx('heroButton__svg', styles.heroButton__svg)}
            />
          </Link>
        </div>
      </div>
    </header>
  )
}
