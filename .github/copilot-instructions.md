1. For each .mdx document you create, follow this template:

```markdown
---
title: "Title of the document using this casing"
description: "Meta-description of the document, no more than 160 characters"
sidebar_label: "Short label"
slug: "/title-of-the-document"
---

import OutLink from "@site/src/components/OutLink";
import IdealImage from '@site/src/components/IdealImage';

(Here goes the content of your document)
```

2. Ensure that every .mdx is well-structured, uses appropriate headings, and includes any necessary code snippets or images. Use the `IdealImage` component for images to ensure they are displayed correctly in the documentation.


3. For each major change, update the `## [Unreleased]` section of the CHANGELOG.md file in the root directory. Use the following format:

```markdown
## [Unreleased]
### Added
- New feature X

### Changed
- Updated feature Y to improve performance

### Fixed
- Fixed bug Z that caused issues in feature A

### Removed
- Deprecated feature B, which will be removed in the next major release
```

4. For each new .mdx file, ensure that it is linked correctly in the sidebar of the documentation. This can be done by updating the `sidebars.ts` file in the root directory, ensuring that the new document appears under the appropriate section.