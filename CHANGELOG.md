## Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Reference:
  - Added the "Polygon ID State Replication" page;
- Use Cases:
  - Added the "Identity State Replication" doc;
- How-to-Guides:
  - Added the Collab.Land integration doc;

### Changed

- Updated links from gitlab to github in the whole documentation;
- Updated the "Overview" doc;
- Transferred the project to GitHub;

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

[Unreleased]: https://github.com/rarimo/docs/compare/v1.5.1...HEAD
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
