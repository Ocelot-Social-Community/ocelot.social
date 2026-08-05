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
description: "Version 3.18.0 brings improvements and new features for users and operators of ocelot.social networks. Users get a list of their groups on their profile page and better hints for creating posts. Operators can now configure features and parts of their network's look and feel directly."
---

<!-- markdownlint-disable no-inline-html first-line-heading -->

Version 3.18.0 brings improvements and new features for users and operators of ocelot.social networks. Users get a list of their groups on their profile page and better hints for creating posts. Operators can now configure features and parts of their network’s look and feel directly.

Here you can find out more about the new features, with a [highlight](#highlight-introduction-of-the-new-branding-system) for network operators.

## Group List on the User Profile

<figure class="blog-post-image">
  <img src="/blog/release-3.18-user-profile-group-list--en.png" alt="User profile group list" />
  <figcaption class="blog-post-image-capture">
    Bottom left on the user profile page: the new group list.
  </figcaption>
</figure>

A list of the user’s groups is now visible on their profile page (can be turned off).
The design and functionality of these lists, including on group profiles, has also been improved.

## Profile Preview

<figure class="blog-post-image">
  <img src="/blog/release-3.18-user-profile-group-overlay--en.png" alt="Group profile preview" />
  <figcaption class="blog-post-image-capture">
    Preview of a group profile.
  </figcaption>
</figure>

Hovering over a user or group name now shows a reworked profile preview – newly also for groups.

## Highlight: Introduction of the New Branding System

Until now, operators could not customise the appearance of a network themselves.
For changes they depended on a server administrator.
With this new version, the first major foundation has been laid for changing the design and other settings live on your own. 💚

<figure class="blog-post-image">
  <img src="/blog/release-3.18-settings-branding--en.png" alt="Branding settings" />
  <figcaption class="blog-post-image-capture">
    In the settings, available brandings can be selected and in future adjusted directly.
  </figcaption>
</figure>

Detailed description for the technically curious:

- *Branding as its own package* – schema, defaults and resolution live in one place shared by backend and webapp. Values such as group limits, metadata, logos, menus or theme colours can no longer drift apart.
- *Branding packages instead of fixed configuration* – a brand is built into an archive and loaded into the running network.
- *Compose it in the administration* – a complete package serves as the base, while individual areas (logos, theme, menu, texts …) can be overridden independently or reset to the framework defaults.
- *Per-brand translations* – whole locale files or individual feature areas can be overridden.
- *Schema check* – if a branding package doesn’t match the running version, you get told instead of it silently breaking.
- *Maintenance page and emails* now use the same branding as the rest of the network.

## For Network Operators

- 🚫 *Groups can be disabled* – networks without a group feature now hide it completely
- 🔗 *Social media links can be disabled* – linking external profiles is optional
- 🏷️ *Rename roles* – roles can be adapted to your own community’s wording
- ⚠️ *Edit conflicts* – simultaneous changes to roles and policies are detected and resolved cleanly instead of overwriting each other
- 🔧 The system configuration tab works correctly again

## For Developers

- 📖 *API documentation* – the GraphQL interface is now documented
- 🧪 Higher test coverage in the webapp and a dedicated CI pipeline for the branding package

## Bug Fixes

- Video avatars are displayed correctly, navigation around them fixed
- Location fields and their menus corrected, duplicate text hints removed
- Lists on profile pages are filtered correctly
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
