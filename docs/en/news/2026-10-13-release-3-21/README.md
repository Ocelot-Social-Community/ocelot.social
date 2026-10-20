---
home: false
article: true
sidebar: false
lang: en-US
date: 2026-10-13
category:
  - Releases
tag:
  - Releases
  - Groups
  - Permissions
  - Privacy
  - Video
cover: /blog/ocelot-social-release-v3-21.png
coverAlt: "Ocelot.social Version 3.21 Pack Leader"
title: "Ocelot.social 3.21 “Pack Leader” – Group Rights: Who Can Do What in Your Group? 🐾"
description: "With ocelot.social 3.21 “Pack Leader”, every group gets its own rights system: roles set up from templates decide who can find, read, join, post in, or invite to a group. Plus improvements to video calls and mentions, and an important privacy notice about shouts."
---

<!-- markdownlint-disable no-inline-html first-line-heading -->

With *ocelot.social* 3.21 “Pack Leader”, loose role names become an actual rights system for groups. What version 3.20 already prepared is now fully wired up: inside every group, it’s no longer role names or the group type that decide what you can do, but concrete, individually granted rights. 💚

You’ll find the details in this post, including the fixes from the follow-up releases 3.21.1 and 3.21.2, which landed right after.

## Highlight: Group Rights Management

Every group now has roles with their own rights, set up from a template provided by the network.

<!-- TODO: screenshot group rights tab: /blog/release-3.21-group-rights-tab--en.png -->

- In the new *Rights* area of a group’s settings, you can define what each role may do: find the group, read it, join it, post, invite … – a detailed list per role, shown in a simple overview.
- Members’ roles can be changed.
- A network admin can step into a group with a stated reason, to administer a group that has lost its owner.
- Group admins get network-wide role templates and a list of every group they may manage.
- Leaving a page with unsaved changes to rights, roles or configuration now asks whether to discard them.

## Video Chat

- Camera, microphone and speaker can now be switched during a call.
- Joining is faster, every tile shows the connection quality, and on a weak line the call falls back to sound only instead of breaking off.
- A browser that blocks the sound, or a microphone that delivers only silence, is now pointed out – with a button to fix it directly.

## Writing: Mentions and Hashtags

- Mentions and hashtags suggested while typing are now grouped by how they relate to you (involved in the post, group members, people you follow … your own, popular, new hashtags).

## Errors in Your Language

Errors reported by the server are now shown translated, with the actual reason.

## Privacy: Public Shouts

⚠️ **Important notice for network operators:** the `showShoutsPublicly` setting had been stored since 2021 but never enforced – everybody’s shouts were visible to everybody, whatever the setting said. This is now corrected, but the new default is **public**, and a migration sets every existing user to public, including those who had switched it off.

Please announce this to your community and point users to *Settings → Privacy* if they want to restrict their shouts again.

Also: a custom admin role without the participation rights of a plain user (say, one that may only delete accounts) could previously act on nobody. The hierarchy between users is now ranked by authority only, and a refusal now says why.

## Fixes in 3.20.0 through 3.21.2

- Places with a translated name were wrongly refused in a non-English UI.
- Link previews without an image work again.
- Various glitches around mentioning and commenting were fixed.
- A server error wrongly shown when visiting pages without the required permission.
- The hint for a group right the network caps now names the missing network right.
- A group page now follows a change to the viewer’s network rights without a reload.
- Two fixes to the new group rights: network rights now only take effect in a group after “stepping into” it, and a role holding `role.manage` can now only manage roles it outranks or owns.
- Several notification gaps closed: members and chat partners without an e-mail address get their notifications again, a post author who stopped observing their own post still hears about mentions in its comments, and new posts in a group and from people you follow now reach the notification menu live.
- Blocking is now more reliable: it ends following in both directions automatically, blocked people no longer get notified about new posts, and following again waits for an unblock.
- Registration and events now store the place you actually picked, instead of automatically taking Mapbox’s top search result.
- A video call that everybody has left now correctly stays at 0 participants.
- A few smaller fixes: “show more” on group descriptions, the notifications filter starts on the first page again, and a newly uploaded avatar shows up in the menu right away.

## Under the Hood

- Group access: previously just group types and role names, now detailed rights and role management, based on templates.
- Group findability is now derived from what the non-member role may do, instead of from a stored group type.
- Translated errors: a central registry of speaking codes on the server is translated in the browser.
- Mention and hashtag suggestions are queried while typing instead of being fully loaded up front.
- Continuous integration (CI) on `master` is skipped where the merge queue already tested the same commit.
- Docker Hub base images now go through `mirror.gcr.io` instead of being pulled directly.
- The webapp now serves CSS as cacheable files instead of inlining it on every page – shortening load times.
- The service worker now loads Workbox from the instance’s own origin instead of jsdelivr, and production no longer serves a GraphQL landing page – both load less from third parties.

## For Developers

- `groupType` is completely gone: `Group.groupType`, the `GroupType` enum and the `groupType` arguments of `CreateGroup` / `UpdateGroup` are removed. Use `template` when creating and `visibility` when updating instead. Newly deprecated: `Group.myRole` → `myGroupRole`, `ChangeGroupMemberRole` → `setGroupMemberRole`
- Migrations run automatically on start: existing groups move onto role templates and get their roles, stored network roles receive the new group rights, and the per-type `videoCall.create_*` rights become `videoCall.create_open` / `create_restricted`. Shouts become public for every user in the process (see the privacy notice above)
- Error contract: user-facing errors now carry `extensions.errorCode` (and `params`); `message` stays English. `PASSWORD_CHANGE_*` errors are now `BAD_USER_INPUT` instead of `UNAUTHENTICATED`. Every event needs a venue of 3–100 characters, and reporting one’s own post or comment is refused
- `CLIENT_URI` for webapp and maintenance makes `og:image` absolute; the Helm chart sets it from `domain`, other deployments should set it to their instance’s own origin
- `CreateGroup`, `UpdateGroup` and `UpdateUser` now accept an optional `locationId`
- video call join tokens now expire after 10 minutes instead of 2 hours
- larger version jumps: dotenv 17 → 18, tslog 4 → 5, vue-apollo 3.0.2 → 3.1.2
- new in 3.21.1: `Group.networkPrerequisites` as an additional field; nothing was removed or changed

## For Network Operators

If you run your own client against the API, the removal of `groupType` and the new error codes are the ones to check first. If you run your own network, the shouts migration is the one to tell your users about.

## Full Changelog

You’ll find all the details in the [changelog](https://github.com/Ocelot-Social-Community/Ocelot-Social/blob/master/CHANGELOG.md), as well as in the release notes for [3.21.0](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.21.0), [3.21.1](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.21.1) and [3.21.2](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.21.2).

## What’s Next?

As always, you can find the currently planned steps on our [roadmap](/en/roadmap/).

## Support ocelot.social

Open source thrives on you and the community. If you like *ocelot.social*, we’d appreciate your continued support:

- [Donate](/en/donate/)
- [Contribute](/en/contribute/)
- [Run your own network](/en/get-started/)
