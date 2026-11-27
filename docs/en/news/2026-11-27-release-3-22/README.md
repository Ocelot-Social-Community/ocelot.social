---
home: false
article: true
sidebar: false
lang: en-US
date: 2026-11-27
category:
  - Releases
tag:
  - Releases
  - Dark Mode
  - Video
  - Chat
  - Privacy
cover: /blog/ocelot-social-release-v3-22.png
coverAlt: "Ocelot.social Version 3.22 Night Watch"
title: "Ocelot.social 3.22 “Night Watch” – Dark Mode, and Video Calls Grow Up 🌙"
description: "With ocelot.social 3.22 “Night Watch”, the network gets a dark mode, video calls get a participant list, their own chat and a place beside the feed – and closed groups and blocks are now enforced on the server."
---

<!-- markdownlint-disable no-inline-html first-line-heading -->

Ocelots are night owls – and with *ocelot.social* 3.22 “Night Watch”, your network can be one too: there is finally a dark mode. Video calls take a big step forward as well, and behind the scenes the server now keeps watch over closed groups and blocks, instead of leaving that to the forms. 💚

## Highlight: Dark Mode

<!-- TODO: screenshot dark mode: /blog/release-3.22-dark-mode--en.png -->

- The whole network – pages, chat, video calls and maps – now comes in a dark theme, with a switch to choose between light and dark.
- Older browsers get the dark theme too.
- Colored surfaces and ribbons are darkened just enough to stay easy to read.
- Every network decides for itself whether it offers the dark mode: a network with its own branding stays light until it switches the dark mode on.

## Video Calls

- The call takes much more of the screen, and can go fullscreen.
- A participant list, with a filter, shows who is in the call – and is where moderators moderate it.
- Each call has its own chat, shared only by the people in the call, which can be downloaded afterwards.
- Running calls are shown in a dock beside the feed, so you can see at a glance where people are talking.
- You choose the video quality a call sends and receives.
- When your computer can’t keep up, the cameras step back and tell you so – and you can undo that.
- The sound of a shared screen now plays, a speaker who stopped reaching one listener is reconnected, and the microphone now keeps sending during pauses in speech, which makes the sound more reliable (switchable per network and per call).

## Chat

- Every chat keeps the message you started but haven’t sent yet.
- A button takes you to the oldest unread message.
- A group chat message now reaches every member live – even two members who block or mute each other.

## Writing

- Ctrl+K (Cmd+K on a Mac) opens the link input – at the selected text, or at the cursor if nothing is selected.
- The editor’s menu bar stays in view while you write long texts.
- Unfinished mentions and hashtags are marked.
- The keyboard shortcut legend shows the keys of your system.

## Notifications

A new post, or a comment that mentions you on a post you observe, now shows up once – instead of once per reason.

## Rights and Roles

- A role holding `role.manage` can now shape every role except the owner freely.
- The network’s fixed roles are shown translated.
- The roles page can discard unsaved changes.
- Saving a group’s rights warns before it hands out – or gives up – the right to edit the roles.

## Privacy: Closed Groups and Blocks

- The content of a closed or hidden group could be reached around the group in a number of ways. These ten ways are closed now, and whoever leaves such a group no longer reads or is notified about its comments.
- A block now ends commenting and direct chat on the server, not only in the form.
- Live updates check your rights again after 30 seconds, and immediately when they change – so a right you lost no longer keeps delivering live updates.

## Fixes

- A group can be saved again on a network without categories.
- Avatars keep their initials legible while their image loads.
- Tooltips show their content as text.
- Smaller fixes to form spacing, field labels and what sticks below the header.

## Under the Hood

- The server’s tests now run on Redis, and a new test runs two servers against one Redis. It found three bugs, all fixed: a Redis outage ended the server, numbers were garbled on their way through Redis, and two servers starting at once could collide.
- A server instance that missed a change to the network’s policies or roles catches up within a minute.
- Comments and group lookups ask the database fewer times.
- The server now checks what only the forms checked before: categories, user slugs, group name lengths. Post title limits can be set per network.
- TypeScript 6 in the backend and the maintenance page.

## For Developers

- The ActivityPub fields `User.actorId`, `User.publicKey`, `Post.activityId`, `Post.objectId` and `Comment.activityId` are deprecated; the webapp’s `/.well-known/webfinger` and `/activitypub` proxies are gone
- Mutations refuse unknown categories, invalid user slugs and group names outside the brand’s length bounds
- Migrations run automatically on start: duplicate notifications are reduced to one per post or comment and recipient, and the `admin` role of every group and group role template gets the new right `group.videoCall.moderate`
- new policy `videoCallDtx`, default `false`
- `packages/ui` 0.0.9 (OsDrawer, confirm dialog, modal sizes), `packages/branding` 0.2.5

## For Network Operators

Two changes stop a deployment if you miss them:

- **`PRODUCTION_DB_CLEAN_ALLOW` is now `DB_WIPE_ALLOWED`.** Database reset and seed only wipe where `DB_WIPE_ALLOWED="true"`; `NODE_ENV` no longer decides. A staging that reseeds renames the variable, production simply drops it.
- **Brand repositories move from `branding/` to `brandings/<name>/`** (plus `overlays/` for code and data). A repository in the old layout no longer builds. A repository can now hold several brands; with more than one, set `OCELOT_ACTIVE_BRANDING`.

Also worth knowing:

- The dark mode is opt-in per brand: `theme.colorScheme: 'light dark'`. A brand can also set the map style for each theme.
- The webapp now runs two replicas with a PodDisruptionBudget, so a node drain no longer causes a short outage – at twice the webapp’s memory. `webapp.replicas: 1` keeps the old behaviour; a single-node cluster sets `webapp.podDisruptionBudget: false`.

All steps are described in [`deployment/TODO-next-update.md`](https://github.com/Ocelot-Social-Community/Ocelot-Social/blob/master/deployment/TODO-next-update.md).

## Full Changelog

You’ll find all the details in the [changelog](https://github.com/Ocelot-Social-Community/Ocelot-Social/blob/master/CHANGELOG.md), as well as in the release notes for [3.22.0](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.22.0).

## What’s Next?

As always, you can find the currently planned steps on our [roadmap](/en/roadmap/).

## Support ocelot.social

Open source thrives on you and the community. If you like *ocelot.social*, we’d appreciate your continued support:

- [Donate](/en/donate/)
- [Contribute](/en/contribute/)
- [Run your own network](/en/get-started/)
