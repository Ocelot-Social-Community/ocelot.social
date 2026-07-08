---
home: false
article: true
sidebar: false
lang: en-US
date: 2026-06-26
category:
  - Releases
tag:
  - Releases
  - Video
  - Groups
  - Permissions
cover: /blog/ocelot-social-release-v3-17.png
coverAlt: "Ocelot.social Version 3.17 – Live Cat"
title: "Ocelot.social 3.17 Live Cat is here – Group Video Conferences & More Control"
description: "With *ocelot.social* 3.17 Live Cat you can hold video conferences together in groups – and with the new roles & policy system you have more control than ever before."
---

<!-- markdownlint-disable no-inline-html first-line-heading -->

With *ocelot.social* 3.17 Live Cat you can hold video conferences together in groups.
On top of that comes an expanded roles, permissions and policy system that gives your community more control than ever before.

## Highlight: Roles, Permissions & Policies

Who can do what? From v3.17, you decide that more precisely than ever.
This release focuses primarily on an expanded roles, permissions and policy system – the foundation for communities that want fine-grained control over who can use which features. 💚

- **Roles & permissions as a new foundation** – including more fine-grained permissions
- **Dynamic network policies** – settings can be adjusted step by step without a new deployment
- **Policy gating directly in the interface** – features only appear where they are permitted
- **Cleaner error handling** – blocked access now correctly reports "unauthorised" instead of an internal server error

## New Features

- 🎥 Public group video conferences – video conferencing together in public groups
- 🔄 Change group type – owners can change the type of their group afterwards
- 📍 Unified location selection – a consistent, refactored location component
- ✉️ Extended email branding – now also customizable CSS for your emails

## Security & Privacy

- 🕵️ No more referrer leaks – external links no longer transmit the origin URL
- 🔗 Correct URL encoding for group and usernames, post menu links and redirects
- 🏷️ Server-side slugs instead of self-assembled – incl. clean slugs without apostrophes or commas

## Bug Fixes

- Pending members no longer appear in the group profile
- Badge admin UI and group settings categories corrected
- Filter button in the news feed and the group chat window fixed
- More stable WebSocket behavior on login (clean reconnect)
- Heartbeat fix, duplicate Docker port definition removed
- Flaky test for pinned posts fixed

## Under the Hood

- Numerous dependency updates for security and stability

## Changelog

Version [3.17.0](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.17.0).

## Donations

If you like *ocelot.social*, please support the development and maintenance of this free and open-source software with a donation to [busFaktor() e.V.](/en/donate/).

## Support *ocelot.social*

- [Contribute](/en/contribute/)
- [Donate](/en/donate/)
