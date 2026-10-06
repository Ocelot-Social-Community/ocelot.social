---
home: false
article: true
sidebar: false
lang: en-US
date: 2026-10-06
category:
  - Releases
tag:
  - Releases
  - Maps
  - Events
  - Groups
  - Video
cover: /blog/ocelot-social-release-v3-19+20.png
coverAlt: "Ocelot.social Version 3.19 Map Cat"
title: "Ocelot.social 3.19+20 “Map Cat” – Where is it happening? More maps for better orientation 🗺️"
description: "With ocelot.social 3.19 “Map Cat” you can see where things are happening on more pages: maps for events, users and groups, a new popup design and a legend for the main map. This post also summarises the smaller improvements from version 3.20."
---

<!-- markdownlint-disable no-inline-html first-line-heading -->

With *ocelot.social* 3.19 “Map Cat” you can see where things are happening on more pages. This version is mainly about making events, users and groups visible on maps, and easier to edit there. 💚

On top of that, a lot has been improved and changed under the hood. You’ll find the details in this post, including the smaller improvements from the follow-up release 3.20.

## Maps

### Events

- Creating and editing, now with a map: set the exact location with the mouse and move it
- Event view: map with location for viewing, with a link to the full map

<!-- TODO: screenshot event with map: /blog/release-3.19-event-map--en.png -->

### Users and Groups

- Creating and editing, now with a map: the location can now be set and moved with the mouse, accurate to the district
- Map with location on the user or group profile, with a link to the full map

<!-- TODO: screenshot profile with map: /blog/release-3.19-profile-map--en.png -->

### Full Map

- Place an event pin directly on the map to create an event
- New design for popups
- Legend: show and hide layers, show past events

<!-- TODO: screenshot full map with legend: /blog/release-3.19-main-map-legend--en.png -->

## Creating and Editing Posts and Profiles

For posts, users and groups:

- better validation of entered data, with clear feedback
- a warning about unsaved changes when leaving the page

## Video Calls

- microphone icon on the video tiles: who’s muted is now visibly muted
- audio is kept when switching off the camera: no more audio loss during video calls

## Post Overview – Newsfeed

Noticeably faster loading – the software was significantly optimised for this.

## Under the Hood

### A New Foundation

A lot was tidied up behind the scenes in this version, which you’ll notice in speed and stability. Here are the details for the technically curious:

- own schema declaration in the backend: the old database libraries (neode, neo4j-graphql-js) are completely gone
- backend moved to modern modules: tests migrated from Jest to Vitest and parallelised
- moved from yarn to npm, smaller Docker images, Node 26 compatibility
- automated releases & changelog: versions and release notes are now generated directly from commits
- more test coverage, and an automated check for unwanted visual changes to the UI

## Bug Fixes & Cleanup

- notifications in hidden groups work correctly again
- the group description preview is fixed
- favicons are served correctly
- social media links the browser shouldn’t follow are no longer rendered at all
- plus more stable e2e tests
- repaired Docker and CI pipelines
- as well as numerous dependency updates for security and stability

## Also: Release 3.20 — smaller improvements

Shortly after 3.19, the smaller release 3.20 followed, sharpening a few things and laying the groundwork for upcoming group permissions.

- *Creating a group* – the group type is now picked from cards instead of a dropdown; types you can’t choose are shown with a reason instead of simply being left out
- *Locations* – a profile now shows the place you actually selected again, instead of the district your pin happens to sit in; the location field no longer empties itself when search results arrive late
- *Buttons* – filled primary and danger buttons now darken on hover instead of fading to a barely readable lighter shade
- *Translations* – every language now uses its own quote characters, alongside various translation and grammar fixes
- also fixed: the oversized heart button on comments, and a stray trailing dash at the end of new post addresses

### Security

A gap in `JoinGroup` allowed any `userId` to be supplied without checking who was asking: any signed-in user could have used this to add someone else to a public group, or file a join request in their name for a closed one. From now on, only the group’s admin or owner may do this.

### For Network Operators and Developers

- `Group.groupType` is deprecated as a field; new integrations should use `Group.visibility` instead (same three values)
- the MinIO image now runs rootless in development and testing (Chainguard base); existing local data volumes need a one-time ownership change (chown)
- larger version jumps for some dependencies, including @sentry/node

## Full Changelog

You’ll find all the details in the [changelog](https://github.com/Ocelot-Social-Community/Ocelot-Social/blob/master/CHANGELOG.md), as well as in the release notes for [3.19.0](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.19.0) and [3.20.0](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.20.0).

## What’s Next?

As always, you can find the currently planned steps on our [roadmap](/en/roadmap/).

## Support ocelot.social

Open source thrives on you and the community. If you like *ocelot.social*, we’d appreciate your continued support:

- [Donate](/en/donate/)
- [Contribute](/en/contribute/)
- [Run your own network](/en/get-started/)
