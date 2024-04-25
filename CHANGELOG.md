## Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.4.1] - 25-04-2024

### Fixed

- Typos in Polygon ID State Replication chart;


## [3.4.0] - 24-04-2024

### Changed

- Restyled charts in "Overview";

## [3.3.0] - 22-04-2024

### Changed

- "Use cases/Passport-enabled airdrops": emphasized proofs of citizenship and age.

## [3.2.0] - 19-04-2024

### Changed
- Simplified the "Overview" doc;
- Updated diagrams;

## [3.1.0] - 15-04-2024


### Changed

- Hero block design;

### Removed
- "Twitter" label from X social media links;

## [3.0.0] - 12-04-2024

### Added

- Products/Rarime:
  - Added the "interoperability with external credentials" page;
- Use-cases:
  - Added the "Age restricted content" page;
  - Added the "Passport-enabled airdrops" page;
- Ecosystem/Freedom Tool:
  - Added "Overview" page;
  - Added "Smart contracts reference" page;

### Changed

- Products/WorldCoin State Replication:
  - Updated the relayer version in the replication guide;
- Used `@docusaurus/plugin-ideal-image` for image optimization;
- Used `react-medium-image-zoom` to zoom images;
- Updated "Overview" doc;

### Removed

- Old whitepaper;
- Products/Bridging;
- Ecosystem/Token Agnostic Payments;
- "Mutlichain mints", "Cross-chain proofs" use cases;

## [2.0.6] - 04-04-2024

### Added

- Whitepaper v3;

## [2.0.5] - 23-02-2024

### Fixed

- OpenGraph metadata generation;

## [2.0.4] - 23-02-2024

### Fixed

- Prod deployment pipeline;

## [2.0.3] - 23-02-2024

### Added

- `robots.txt` file;

### Changed

- Embedded promising SEO keywords;

### Fixed

- `noindex` directive for staging;

## [2.0.2] - 21-02-2024

### Added

- Ecosystem/Polygon ID State Replication:
  - Added information about the `verify-proxy` service;
  - Information about `Query-based request` that we use and fixed flow logic a bit;
- Use-cases:
  - Added the "Organizational access control" page;

### Changed

- Ecosystem/Polygon ID State Replication:
  - Updated the relayer version in the state replication guide;
- Tweaked meta titles, description, H1s and outlinks for SEO performance;

## [2.0.1] - 05-02-2024

### Changed

- Hidden the blog section on landing;

## [2.0.0] - 02-02-2024

### Added

- Themes (light and dark);
- Reference:
  - Added the "Polygon ID State Replication" page;
  - Added the "World ID State Replication" page;
- Use Cases:
  - Added the "Identity State Replication" doc;
- How-to-Guides:
  - Added the Collab.Land integration doc;
  - Added RariMe guide for issuers;
  - World ID State Replication setup guide;
- Contribution guide to the README;
- Tutorials:
  - Added the World ID Integration usage page;
  - Added the Polygon ID Integration usage page;
- Subscription form (w/o functionality)
- Mobile sliders;
- Redirects from old navigation links to new;
- Syntax highlights for TSX and bash;
- Added the "World Coin state replication overview" page;
- Added the "Rarimo protocol overview" page;

### Changed

- Design:
  - Header
  - Fonts and texts (where needed)
  - All sections:
    - Base Layer Section;
    - Ecosystem Section;
    - Use Cases Section;
    - Build Section;
    - Community (Links) Section;
    - News Section;
  - Footer
  - Docs page design (product based navigation)
- Updated links from gitlab to github in the whole documentation;
- Updated the "Overview" doc;
- Transferred the project to GitHub;
- Navigation system to product-based;
- Docusaurus version to 3.1.0 (and all packages);
- Color of highlighted line in <code> block;
- Moved `/whitepaper` to `/resources/whitepaper`;

### Fixed

- Minor markup fix in Proof of Humanity tech reference;
- Minor markup fix in "Setting up validator" guide;

## [1.6.0] - 28-11-2023

### Added

- Technical Reference:
  - audits page;
  - fungible and non-fungible token documentation for the Near bridge;
  - fungible and non-fungible token documentation for the Solana bridge;
- How-to-Guides:
  - added Zealy demo video;

### Changed

- Unify chart styles;
- Technical Reference:
  - Updated Goerli Proof of Humanity SBT contract's address;
  - Streamlined the bridge contracts reference;
  - Refactored Near Bridge Contract reference;
  - Refactored and updated Solana bridge program reference;

## [1.5.1] - 16-11-2023

### Changed

- Issuer github link;
- Updated screenshots in how-to/setup-issuer;

## [1.5.0] - 15-11-2023

### Added

- Technical Reference: contract deployments near the definitions;

### Removed

- Technical Reference: smart contract addresses page;

### Fixed

- Polygon ID spelling;
- Typos in Polygon ID integration charts;
- Rust syntax highlight;

### Changed

- Reordered how-to guides by priority;

## [1.4.3] - 09-11-2023

### Added

- Cache headers for static assets;

### Changed

- Use updated CCTP use case charts;
- Minor wording changes in CCTP and Token-Agnostic Payments use cases;


## [1.4.2] - 09-11-2023

### Changed

- Use new video in the Identity Protocol overview;

## [1.4.1] - 08-11-2023

### Fixed

- Build errors caused by the Solidity syntax fix;


## [1.4.0] - 08-11-2023

### Added

- API Reference;
- OpenGraph thumbnails for PoH how-to guides;

### Changed

- Identity Contracts reference: added `ZKPQueriesStorage`, `QueryValidator` and `PoseidonFacade` contracts;

### Removed

- PoH subgraph reference;

### Fixed

- Solidity syntax highlight;
- Used docusaurus admonitions;

## [1.3.1] - 08-11-2023

### Changed

- How-to-Guides:
  - Use the new template name in the QuestN guide;

## [1.3.0] - 07-11-2023

### Changed

- How-to-Guides:
  - Updated the QuestN x PoH integration guide;
  - Updated the Zealy x PoH integration guide;

### Removed

- Whitepaper link from technical reference;

## [1.2.1] - 03-11-2023

### Fixed

- Minor wording tweaks.

## [1.2.0] - 02-11-2023

### Added

- How-to-Guides:
  - Mention the issuer allowlist;

### Changed

- Reference:
  - Grouped smart contract deployments by the product and contract;
  - Consolidated Proof of Humanity references into a single page;
- Used new Proof of Humanity demo videos;


## [1.1.0] - 27-10-2023

### Added

- Technical Reference:
  - Identity contracts reference;
  - Proof of Humanity SBT;
  - Identity Protocol contract addresses;
  - PoH subgraph reference;
  - Added "Snap", "Slashing", "Jailing", "Tendermint", and "PoH" terms to the glossary;

### Fixed

- Invalid links in the Glossary;

### Changed

- Technical Rererence:
  - Improved bridge contracts reference structure;
- How-to-Guides:
  - User Rarimo's verifier contracts in the on-chain ZKP verification guide;
- Used re-designed charts;

## [1.0.0] - 2023-10-24

### Changed

- Adopted [divio documentation system](https://documentation.divio.com/);
- Meta description;
- Rewritten "Overview" section;

### Added

- How-to guides for identity protocol and Proof of Humanity;
- Reference for identity protocol JS libraries;
- Proof of Humanity use case doc;

### Removed

- Outdated API and smart contract references;
- Inaccurate descriptions of identity and bridging protocols;

### Fixed

- `Not Found` page returning HTTP status `200`;
- Broken logo link in the footer;

[Unreleased]: https://github.com/rarimo/docs/compare/v3.4.1...HEAD
[3.4.1]: https://github.com/rarimo/docs/releases/tag/v3.4.0...v3.4.1
[3.4.0]: https://github.com/rarimo/docs/releases/tag/v3.3.0...v3.4.0
[3.3.0]: https://github.com/rarimo/docs/releases/tag/v3.2.0...v3.3.0
[3.2.0]: https://github.com/rarimo/docs/releases/tag/v3.1.0...v3.2.0
[3.1.0]: https://github.com/rarimo/docs/releases/tag/v3.0.0...v3.1.0
[3.0.0]: https://github.com/rarimo/docs/releases/tag/v2.0.6...v3.0.0
[2.0.6]: https://github.com/rarimo/docs/releases/tag/v2.0.5...v2.0.6
[2.0.5]: https://github.com/rarimo/docs/releases/tag/v2.0.4...v2.0.5
[2.0.4]: https://github.com/rarimo/docs/releases/tag/v2.0.3...v2.0.4
[2.0.3]: https://github.com/rarimo/docs/releases/tag/v2.0.2...v2.0.3
[2.0.2]: https://github.com/rarimo/docs/releases/tag/v2.0.1...v2.0.2
[2.0.1]: https://github.com/rarimo/docs/releases/tag/v2.0.0...v2.0.1
[2.0.0]: https://github.com/rarimo/docs/releases/tag/v1.6.0...v2.0.0
[1.6.0]: https://github.com/rarimo/docs/releases/tag/v1.5.1...v1.6.0
[1.5.1]: https://github.com/rarimo/docs/releases/tag/v1.5.0...v1.5.1
[1.5.0]: https://github.com/rarimo/docs/releases/tag/v1.4.3...v1.5.0
[1.4.3]: https://github.com/rarimo/docs/releases/tag/v1.4.2...v1.4.3
[1.4.2]: https://github.com/rarimo/docs/releases/tag/v1.4.1...v1.4.2
[1.4.1]: https://github.com/rarimo/docs/releases/tag/v1.4.0...v1.4.1
[1.4.0]: https://github.com/rarimo/docs/releases/tag/v1.3.1...v1.4.0
[1.3.1]: https://github.com/rarimo/docs/releases/tag/v1.3.0...v1.3.1
[1.3.0]: https://github.com/rarimo/docs/releases/tag/v1.2.0...v1.3.0
[1.2.0]: https://github.com/rarimo/docs/releases/tag/v1.1.0...v1.2.0
[1.1.0]: https://github.com/rarimo/docs/releases/tag/v1.0.0...v1.1.0
[1.0.0]: https://github.com/rarimo/docs/releases/tag/v1.0.0
