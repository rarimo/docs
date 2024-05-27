# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.7.5] - 2024-05-27
### Fixed
- Subscribe block padding on the landing page;

## [3.7.4] - 2024-05-25
### Added
- `@napalmpapalam/rlx` package for changelog automation;

### Changed
- Format changelog to match `Keep a Changelog` format

## [3.7.3] - 2024-05-23
### Added
- Updated whitepaper;

## [3.7.2] - 2024-05-22
### Fixed
- Markup in the "Passport-enabled aridrops" use case;

## [3.7.1] - 2024-05-13
### Added
- Sepolia deployments for the Identity Protocol and Proof of Humanity smart contracts;

## [3.7.0] - 2024-05-10
### Added
- Freedom Tool audits;

## [3.6.1] - 2024-05-10
### Changed
- Updated charts in passporot-derived profiles overview;

## [3.6.0] - 2024-05-10
### Added
- Passport-derived profiles smart contracts reference;

### Fixed
- Expired EVM bridge audit link;

## [3.5.2] - 2024-05-08
### Added
- OG image for "Passport-enabled airdrops" use case;

## [3.5.1] - 2024-05-07
### Changed
- Proof of Humanity: renamed "KYC service" to "HumanOrNot service";

## [3.5.0] - 2024-05-06
### Added
- Passport-derived profiles overview doc;
- Passport related terms to the glossary;

### Removed
- Old whitepaper;

## [3.4.1] - 2024-04-25
### Fixed
- Typos in Polygon ID State Replication chart;

## [3.4.0] - 2024-04-24
### Changed
- Restyled charts in "Overview";

## [3.3.0] - 2024-04-22
### Changed
- "Use cases/Passport-enabled airdrops": emphasized proofs of citizenship and age.

## [3.2.0] - 2024-04-19
### Changed
- Simplified the "Overview" doc;
- Updated diagrams;

## [3.1.0] - 2024-04-15
### Changed
- Hero block design;

### Removed
- "Twitter" label from X social media links;

## [3.0.0] - 2024-04-12
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

## [2.0.6] - 2024-04-04
### Added
- Whitepaper v3;

## [2.0.5] - 2024-02-23
### Fixed
- OpenGraph metadata generation;

## [2.0.4] - 2024-02-23
### Fixed
- Prod deployment pipeline;

## [2.0.3] - 2024-02-23
### Added
- `robots.txt` file;

### Changed
- Embedded promising SEO keywords;

### Fixed
- `noindex` directive for staging;

## [2.0.2] - 2024-02-21
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

## [2.0.1] - 2024-02-05
### Changed
- Hidden the blog section on landing;

## [2.0.0] - 2024-02-02
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

### Fixed
- Minor markup fix in Proof of Humanity tech reference;
- Minor markup fix in "Setting up validator" guide;

## [1.6.0] - 2023-11-28
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

## [1.5.1] - 2023-11-16
### Changed
- Issuer github link;
- Updated screenshots in how-to/setup-issuer;

## [1.5.0] - 2023-11-15
### Added
- Technical Reference: contract deployments near the definitions;

### Changed
- Reordered how-to guides by priority;

### Removed
- Technical Reference: smart contract addresses page;

### Fixed
- Polygon ID spelling;
- Typos in Polygon ID integration charts;
- Rust syntax highlight;

## [1.4.3] - 2023-11-09
### Added
- Cache headers for static assets;

### Changed
- Use updated CCTP use case charts;
- Minor wording changes in CCTP and Token-Agnostic Payments use cases;

## [1.4.2] - 2023-11-09
### Changed
- Use new video in the Identity Protocol overview;

## [1.4.1] - 2023-11-08
### Fixed
- Build errors caused by the Solidity syntax fix;

## [1.4.0] - 2023-11-08
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

## [1.3.1] - 2023-11-08
### Changed
- How-to-Guides:
  - Use the new template name in the QuestN guide;

## [1.3.0] - 2023-11-07
### Changed
- How-to-Guides:
  - Updated the QuestN x PoH integration guide;
  - Updated the Zealy x PoH integration guide;

### Removed
- Whitepaper link from technical reference;

## [1.2.1] - 2023-11-03
### Fixed
- Minor wording tweaks.

## [1.2.0] - 2023-11-02
### Added
- How-to-Guides:
  - Mention the issuer allowlist;

### Changed
- Reference:
  - Grouped smart contract deployments by the product and contract;
  - Consolidated Proof

   of Humanity references into a single page;
- Used new Proof of Humanity demo videos;

## [1.1.0] - 2023-10-27
### Added
- Technical Reference:
  - Identity contracts reference;
  - Proof of Humanity SBT;
  - Identity Protocol contract addresses;
  - PoH subgraph reference;
  - Added "Snap", "Slashing", "Jailing", "Tendermint", and "PoH" terms to the glossary;

### Changed
- Technical Rererence:
  - Improved bridge contracts reference structure;
- How-to-Guides:
  - User Rarimo's verifier contracts in the on-chain ZKP verification guide;
- Used re-designed charts;

### Fixed
- Invalid links in the Glossary;

## [1.0.0] - 2023-10-24
### Added
- How-to guides for identity protocol and Proof of Humanity;
- Reference for identity protocol JS libraries;
- Proof of Humanity use case doc;

### Changed
- Adopted [divio documentation system](https://documentation.divio.com/);
- Meta description;
- Rewritten "Overview" section;

### Removed
- Outdated API and smart contract references;
- Inaccurate descriptions of identity and bridging protocols;

### Fixed
- `Not Found` page returning HTTP status `200`;
- Broken logo link in the footer;


[Unreleased]: https://github.com/rarimo/docs/compare/3.7.5...HEAD
[3.7.5]: https://github.com/rarimo/docs/compare/3.7.4...3.7.5
[3.7.4]: https://github.com/rarimo/docs/compare/3.7.3...3.7.4
[3.7.3]: https://github.com/rarimo/docs/compare/3.7.2...3.7.3
[3.7.2]: https://github.com/rarimo/docs/compare/3.7.1...3.7.2
[3.7.1]: https://github.com/rarimo/docs/compare/3.7.0...3.7.1
[3.7.0]: https://github.com/rarimo/docs/compare/3.6.1...3.7.0
[3.6.1]: https://github.com/rarimo/docs/compare/3.6.0...3.6.1
[3.6.0]: https://github.com/rarimo/docs/compare/3.5.2...3.6.0
[3.5.2]: https://github.com/rarimo/docs/compare/3.5.1...3.5.2
[3.5.1]: https://github.com/rarimo/docs/compare/3.5.0...3.5.1
[3.5.0]: https://github.com/rarimo/docs/compare/3.4.1...3.5.0
[3.4.1]: https://github.com/rarimo/docs/compare/3.4.0...3.4.1
[3.4.0]: https://github.com/rarimo/docs/compare/3.3.0...3.4.0
[3.3.0]: https://github.com/rarimo/docs/compare/3.2.0...3.3.0
[3.2.0]: https://github.com/rarimo/docs/compare/3.1.0...3.2.0
[3.1.0]: https://github.com/rarimo/docs/compare/3.0.0...3.1.0
[3.0.0]: https://github.com/rarimo/docs/compare/2.0.6...3.0.0
[2.0.6]: https://github.com/rarimo/docs/compare/2.0.5...2.0.6
[2.0.5]: https://github.com/rarimo/docs/compare/2.0.4...2.0.5
[2.0.4]: https://github.com/rarimo/docs/compare/2.0.3...2.0.4
[2.0.3]: https://github.com/rarimo/docs/compare/2.0.2...2.0.3
[2.0.2]: https://github.com/rarimo/docs/compare/2.0.1...2.0.2
[2.0.1]: https://github.com/rarimo/docs/compare/2.0.0...2.0.1
[2.0.0]: https://github.com/rarimo/docs/compare/1.6.0...2.0.0
[1.6.0]: https://github.com/rarimo/docs/compare/1.5.1...1.6.0
[1.5.1]: https://github.com/rarimo/docs/compare/1.5.0...1.5.1
[1.5.0]: https://github.com/rarimo/docs/compare/1.4.3...1.5.0
[1.4.3]: https://github.com/rarimo/docs/compare/1.4.2...1.4.3
[1.4.2]: https://github.com/rarimo/docs/compare/1.4.1...1.4.2
[1.4.1]: https://github.com/rarimo/docs/compare/1.4.0...1.4.1
[1.4.0]: https://github.com/rarimo/docs/compare/1.3.1...1.4.0
[1.3.1]: https://github.com/rarimo/docs/compare/1.3.0...1.3.1
[1.3.0]: https://github.com/rarimo/docs/compare/1.2.1...1.3.0
[1.2.1]: https://github.com/rarimo/docs/compare/1.2.0...1.2.1
[1.2.0]: https://github.com/rarimo/docs/compare/1.1.0...1.2.0
[1.1.0]: https://github.com/rarimo/docs/compare/1.0.0...1.1.0
[1.0.0]: https://github.com/rarimo/docs/releases/tag/1.0.0
