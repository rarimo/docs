import 'aos/dist/aos.css'
import 'swiper/css'

import BrowserOnly from '@docusaurus/BrowserOnly'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Building from '@site/src/components/Building'
import CardsSection from '@site/src/components/CardsSection'
import HomepageHeader from '@site/src/components/HomepageHeader'
import HomepageUseCases from '@site/src/components/HomepageUseCases'
import Links from '@site/src/components/Links'
import News from '@site/src/components/News'
import Subscribe from '@site/src/components/Subscribe'
import { blockchains } from '@site/src/const'
import { HomeCard } from '@site/src/types'
import BadgeIcon from '@site/static/img/Badge.svg'
import BracketsIcon from '@site/static/img/brackets-icon.svg'
import ForEveryHumanIcon from '@site/static/img/for-every-human.svg'
import LayersIcon from '@site/static/img/layers.svg'
import PolygonIcon from '@site/static/img/Polygon.svg'
import ShieldIcon from '@site/static/img/Shield.svg'
import UserIcon from '@site/static/img/user-icon.svg'
import Layout from '@theme/Layout'
import aos from 'aos'
import clsx from 'clsx'
import React, { useRef } from 'react'
import { register } from 'swiper/element/bundle'

import styles from './index.module.css'

register()

function makeBaseLayerCards(whitepaperUrl: string): HomeCard[] {
  return [
    {
      id: 'identity-protocol',
      title: 'Identity Protocol',
      IconName: UserIcon,
      list: [
        [
          'Implements W3C DID standard',
          'Enhanced privacy with zero-knowledge proofs',
          'On-chain ZKPs available on any supported EVM chain',
          'Timed SBTs for interoperability with existing platforms',
        ],
      ],
      url: '/products/identity-protocol/',
    },
    {
      id: 'rarime',
      title: 'RariMe',
      IconName: ShieldIcon,
      list: [
        [
          'Universal wallet for digital indentites',
          'Lives in your MetaMask',
          'Zero-Knowledge proofs of identity',
          'Dashboard for managing your credentials, SBTs and more',
        ],
      ],
      url: '/products/rarime/',
    },
    {
      id: 'base-layer',
      title: 'Base Layer',
      IconName: LayersIcon,
      list: [
        [
          'Efficient cross-chain messaging',
          'Decentralized Oracles',
          'Proof of Stake Consensus',
        ],
        [
          'EVM-compatible smart contracts',
          'Instant finality',
          'Cost-efficient signature scheme (TSS)',
        ],
        [
          <span
            className={clsx(
              'homepage-base-layer__text',
              styles.homepageBaseLayerText
            )}
            key={0}
          >
            Supported chains
          </span>,
          <span
            className={clsx(
              'homepage-base-layer__blockchains',
              styles.homepageBaseLayerBlockchains
            )}
            key={1}
          >
            {blockchains.map(({ IconComponent, alt }, idx) => (
              <IconComponent
                key={idx}
                className={styles.homeCardSvg}
                role="img"
                aria-label={alt}
              />
            ))}
          </span>,
        ],
      ],
      url: '/products/base-layer/',
      after: (
        <>
          <a
            href={whitepaperUrl}
            className={clsx('heroButtonSecondary', styles.linksButton)}
          >
            Whitepaper
          </a>
          <a
            href={'https://scan.rarimo.com/proposals'}
            rel="nofollow noopener noreferrer"
            className={clsx('heroButtonSecondary', styles.linksButton)}
            target="_blank"
          >
            Protocol Proposals
          </a>
        </>
      ),
    },
  ]
}

const ecosystemCards: HomeCard[] = [
  {
    title: 'Freedom Tool',
    IconName: PolygonIcon,
    list: [
      [
        'Transparent and secure online voting',
        'Onboard with a biometric passport',
        'Privacy ensured by zero-knowledge proof technology',
      ],
    ],
    url: '/ecosystem/freedom-tool/',
  },
  {
    title: 'Proof Of Humanity',
    IconName: BadgeIcon,
    list: [
      [
        'Aggregates five identy providers',
        'Secured by zero-knowledge proof technology',
        'DApp developers can verify humanity both off-chain and on-chain',
        'Seamless integration with major community building platforms',
        'Protect your discord server with Collab.Land plugin',
      ],
    ],
    url: '/ecosystem/proof-of-humanity/',
  },
  {
    title: 'WorldCoin Cross-Chain State Replication',
    IconName: ForEveryHumanIcon,
    list: [
      [
        'Use your World ID on any EVM-compatible chain',
        'Cost-efficient scalability with on-demand state replication',
      ],
    ],
    url: '/ecosystem/worldcoin-state-replication/',
  },
  {
    title: 'Polygon ID Cross-Chain State Replication',
    IconName: PolygonIcon,
    list: [
      [
        'Prove your identity on any EVM-compatible chain',
        'Compatible with Polygon ID Wallet',
        'Cost-efficient scalability with on-demand state replication',
      ],
    ],
    url: '/ecosystem/polygon-id-state-replication/',
  },
]

export default function Home(): JSX.Element {
  const light = useRef(null)
  const { siteConfig } = useDocusaurusContext()
  const whitepaperUrl: string =
    typeof siteConfig.customFields?.whitepaperUrl === 'string'
      ? siteConfig.customFields?.whitepaperUrl
      : '#'
  const baseLayerCards = makeBaseLayerCards(whitepaperUrl)

  return (
    <Layout>
      <HomepageHeader />

      <main>
        <CardsSection
          cards={baseLayerCards}
          columns={2}
          gridTemplate={`"${baseLayerCards[0].id} ${baseLayerCards[1].id}" "${baseLayerCards[2].id} ${baseLayerCards[2].id}"`}
          title="Learn The Core Products"
        />
        <CardsSection
          cards={ecosystemCards}
          title="Explore The Ecosystem"
          isSwiperOnMobile={true}
        />
        <HomepageUseCases />
        {/*Todo: Show developer links*/}
        {/*<HomepageDeveloperLinks />*/}
        {/* TODO: uncomment when developer dashboard is ready */}
        {/* <Building /> */}
        <Links />
        {/* TODO: uncomment when blog content ready */}
        {/* <News /> */}
        <Subscribe />
      </main>

      <BrowserOnly>
        {() => {
          aos.init({
            duration: 900,
            easing: 'ease',
            offset: 0,
            once: true,
            mirror: false,
            anchorPlacement: 'center-bottom',
          })

          return null
        }}
      </BrowserOnly>
    </Layout>
  )
}
