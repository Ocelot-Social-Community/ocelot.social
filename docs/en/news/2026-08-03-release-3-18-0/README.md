---
home: false
article: true
sidebar: false
lang: en-US
date: 2026-08-03
category:
  - Releases
tag:
  - Releases
  - Branding
  - Profile
  - Groups
  - Administration
cover: /blog/ocelot-social-release-v3-18.png
coverAlt: "Ocelot.social Version 3.18.0"
title: "New Release – Ocelot.Social v3.18.0"
description: "Version 3.18.0 brings a completely new branding system: network operators now compose their look and feel directly in the administration – without a new deployment. On top of that come reworked profiles with a group list and filters, plus features that can be switched off."
---

<!-- markdownlint-disable no-inline-html first-line-heading -->

Version 3.18.0 brings a completely new branding system: network operators now compose their look and feel directly in the administration – without a new deployment.
On top of that come reworked user profiles with a group list and filters, as well as features that can be switched off per network.

## Highlight: The New Branding System

Until now, a network’s appearance was baked into its configuration – every change meant a new build. From v3.18.0, branding is a package of its own and is resolved at runtime. 💚

- **Branding as its own package** – schema, defaults and resolution live in one place shared by backend and webapp. Values such as group limits, metadata, logos, menus or theme colours can no longer drift apart.
- **Branding packages instead of fixed configuration** – a brand is built into an archive and loaded into the running network.
- **Compose it in the administration** – a complete package serves as the base, while individual areas (logos, theme, menu, texts …) can be overridden independently or reset to the framework defaults.
- **Per-brand translations** – whole locale files or individual feature areas can be overridden.
- **Schema check** – if a branding package doesn’t match the running version, you get told instead of it silently breaking.
- **Maintenance page and emails** now use the same branding as the rest of the network.

## Profiles & Groups

- 👥 **Group list on the user profile** – showing only what the privacy settings allow
- 🔍 **Filters for follow lists and the group list** – find who or what you’re looking for even in long lists
- ✨ **Reworked user profile** – a tidied-up presentation of the profile and its follow lists
- 💬 **Group popover on the user teaser** – see group membership in passing

## For Network Operators

- 🚫 **Groups can be disabled** – networks without a group feature now hide it completely
- 🔗 **Social media links can be disabled** – linking external profiles is optional
- 🏷️ **Rename roles** – roles can be adapted to your own community’s wording
- ⚠️ **Edit conflicts** – simultaneous changes to roles and policies are detected and resolved cleanly instead of overwriting each other
- 🔧 The system configuration tab works correctly again

## For Developers

- 📖 **API documentation** – the GraphQL interface is now documented
- 🧪 Higher test coverage in the webapp and a dedicated CI pipeline for the branding package

## Bug Fixes

- Video avatars are displayed correctly, navigation around them fixed
- Location fields and their menus corrected, duplicate text hints removed
- SSR timeouts added and brand IDs are validated
- Webapp Docker file and cache resolution repaired

## Under the Hood

- Numerous dependency updates for security and stability, including Node 26 compatibility

## Changelog

Version [3.18.0](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.18.0).

## Donations

If you like *ocelot.social*, please support the development and maintenance of this free and open-source software with a donation to [busFaktor() e.V.](/en/donate/).

## Support *ocelot.social*

- [Contribute](/en/contribute/)
- [Donate](/en/donate/)
