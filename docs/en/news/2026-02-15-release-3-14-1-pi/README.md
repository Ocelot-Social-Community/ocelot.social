---
home: false
article: true
sidebar: false
lang: en-US
date: 2026-02-15
category:
  - Releases
tag:
  - Releases
  - Vue 3
  - Groups
cover: /blog/ocelot-social-release-v3-14-1-pi.jpg
coverAlt: "Ocelot.social Version 3.14.1 – Pi"
title: "Ocelot.social Pi (3.14.1) is here – Pin posts in groups"
description: "With ocelot.social Pi (3.14.1), group owners and administrators can pin posts in their groups. Plus bug fixes and the start of the Vue 3 migration."
---

<!-- markdownlint-disable no-inline-html first-line-heading -->

From now on, every version of *ocelot.social* that contains significant changes will carry a version name.
We start with a name derived from the current version number.

## New Feature

With *ocelot.social* Pi (3.14.1), group owners and administrators can now pin posts in their groups.
This allows group members to immediately see important posts such as announcements and events.

This was made possible thanks to donations from our [first crowdfunding campaign](/en/news/2025-11-05-crowdfunding-feature-pinned-posts-in-groups/).
A big thank you once again to our donors. You made it happen!

## Bug Fixes

- The category filter now works as expected again.
- The notification settings display is correct again.
- Broken links in notification emails have been fixed.
- Information pages (imprint, privacy policy, etc.) are working again.

## Under the Hood

*Ocelot.social* uses Vue.js version 2 as its frontend framework, which is no longer up to date.
The migration to Vue 3 is very complex due to many changes between versions, but it has now been started with *ocelot.social* Pi.

Due to the scope and complexity, a modular approach was chosen that allows for a gradual migration.
In the first step, all buttons were migrated and improved in the process.

## Changelog Summary

AI summary of versions [3.14.0](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.14.0) and [3.14.1](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.14.1):

### Features

- Group Pins — Posts can be pinned in groups (#9034)
- Admin creation command for production (#9057)
- DB script for disabling notifications (#9131)
- CodeRabbit integration for PR reviews (#9194)

### Vue 3 Migration

- Phase 2 — Setup: Prepared the groundwork for migration (#9161)
- Phase 3 — Integration: UI library integrated into webapp (#9180)
- Button migration: Icon, circle and loading states migrated (#9208)
- Vue updated to 2.7.16 as a prerequisite (#9160)

### UI Package (packages/ui)

- ESLint rules extracted to eslint-config-it4c (#9198, #9233)
- os-button CSS class for branding compatibility (#9211)

### Bug Fixes

- Backend: Category filter fixed (#9209, #9123)
- Backend: Pinned posts visible even for muted users (#9200)
- Backend: Notification settings for currentUser (#9130)
- Backend: Email URL encoding (#9127)
- Backend: Permissions for GroupInviteCodes (#9121)
- Backend: Group myRole field query (#9102)
- Webapp: Language switch on static pages (#9202)
- Webapp: Static pages available when logged out (#9201)
- Webapp: Internal path for custom button (#9129)
- Webapp: CTA-Join-Group crash when group is undefined (#9103)
- Webapp: Local frontend tests (#9104, #9125)

### Refactoring

- Backend: Reports query parameterization + resolver cleanup (#9156)
- Backend: GraphQL linting (#8473)
- Backend: Group membership model (#9124)
- Backend: Middleware before/after (#9128)
- Backend: Test roles (#9157)

### Workflow/CI

- E2E tests run in parallel (#9205)
- Package caching (#9206)
- New PR scope package/ui (#9196)
- UI workflow fixes (#9204, #9207)
- Auto-approve workflow removed (#9197)
- Node.js versions consolidated (#9126)

~80 dependency updates (Node, Nginx, AWS SDK, Cypress, etc.) omitted.

## Donations

If you like *ocelot.social*, please support the development and maintenance of this free and open-source software with a donation to [busFaktor() e.V.](/en/donate/).

## Support *ocelot.social*

- [Contribute](/en/contribute/)
- [Donate](/en/donate/)
