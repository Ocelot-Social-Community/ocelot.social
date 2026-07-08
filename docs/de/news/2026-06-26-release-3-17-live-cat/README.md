---
home: false
article: true
sidebar: false
lang: de-DE
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
title: "Ocelot.social 3.17 Live Cat ist da – Gruppen-Videokonferenzen & mehr Kontrolle"
description: "Mit *ocelot.social* 3.17 Live Cat könnt ihr in Gruppen gemeinsam per Video konferieren – und mit dem neuen Rollen- & Policy-System habt ihr mehr Kontrolle als je zuvor."
---

<!-- markdownlint-disable no-inline-html first-line-heading -->

Mit *ocelot.social* 3.17 Live Cat könnt ihr in Gruppen gemeinsam per Video konferieren.
Dazu kommt ein ausgebautes Rollen-, Berechtigungs- und Policy-System, das eurer Community mehr Kontrolle denn je gibt.

## Highlight: Rollen, Berechtigungen & Policies

Wer darf was? Ab v3.17 entscheidet ihr das genauer denn je.
Dieses Release dreht sich vor allem um ein ausgebautes Rollen-, Berechtigungs- und Policy-System – das Fundament für Communities, die fein abgestuft steuern wollen, wer welche Funktionen nutzen darf. 💚

- **Rollen & Berechtigungen als neues Fundament** – inklusive feiner abgestufter Permissions
- **Dynamische Netzwerk-Policies** – Einstellungen lassen sich Schritt für Schritt anpassen, ohne neuen Deploy
- **Policy-Gating direkt in der Oberfläche** – Funktionen erscheinen nur dort, wo sie erlaubt sind
- **Sauberere Fehlerbehandlung** – gesperrte Zugriffe melden jetzt korrekt „unauthorised" statt eines internen Serverfehlers

## Neue Funktionen

- 🎥 Öffentliche Gruppen-Videokonferenzen – gemeinsam per Video in öffentlichen Gruppen
- 🔄 Gruppentyp wechseln – Owner können den Typ ihrer Gruppe nachträglich ändern
- 📍 Vereinheitlichte Standort-Auswahl – eine konsistente, refaktorierte Location-Komponente
- ✉️ Email-Branding erweitert – jetzt auch anpassbares CSS für eure Mails

## Sicherheit & Privatsphäre

- 🕵️ Kein Referrer-Leak mehr – externe Links übertragen nicht länger die Herkunfts-URL
- 🔗 Korrektes URL-Encoding für Gruppen- und Benutzernamen, Post-Menü-Links und Redirects
- 🏷️ Serverseitige Slugs statt selbst zusammengebauter – inkl. sauberer Slugs ohne Apostroph oder Komma

## Behobene Fehler

- Pending-Mitglieder erscheinen nicht mehr im Gruppenprofil
- Badge-Admin-UI und Gruppen-Settings-Kategorien korrigiert
- Filter-Button im News-Feed und das Gruppen-Chat-Fenster gefixt
- Stabileres WebSocket-Verhalten beim Login (sauberer Reconnect)
- Heartbeat-Fix, doppelte Docker-Port-Definition entfernt
- Flaky-Test bei gepinnten Posts behoben

## Technisches unter der Haube

- Zahlreiche Dependency-Updates für Sicherheit und Stabilität

## Changelog

Version [3.17.0](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.17.0).

## Spenden

Wenn dir *ocelot.social* gefällt, dann unterstütze die Entwicklung und Pflege dieser freien und Open-Source-Software mit einer Spende an den [busFaktor() e.V.](/de/donate/).

## Unterstütze *ocelot.social*

- [Mitmachen](/de/contribute/)
- [Spenden](/de/donate/)
