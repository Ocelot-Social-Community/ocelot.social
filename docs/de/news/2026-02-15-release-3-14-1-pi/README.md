---
home: false
article: true
sidebar: false
lang: de-DE
date: 2026-02-15
category:
  - Releases
tag:
  - Releases
  - Vue 3
  - Groups
cover: /blog/ocelot-social-release-v3-14-1-pi.jpg
coverAlt: "Ocelot.social Version 3.14.1 – Pi"
title: "Ocelot.social Pi (3.14.1) ist da – Beiträge in Gruppen anheften"
description: "Mit ocelot.social Pi (3.14.1) können Inhaber und Administratoren Beiträge in Gruppen anheften. Dazu kommen Bugfixes und der Start der Vue 3 Migration."
---

<!-- markdownlint-disable no-inline-html first-line-heading -->

Ab nun trägt jede Version von *ocelot.social*, die wesentliche Änderungen enthält, einen Versionsnamen.
Wir starten mit einem Namen, der sich aus der aktuellen Versionsnummer ergibt.

## Neue Funktion

Mit *ocelot.social* Pi (3.14.1) erhalten Inhaber und Administratoren von Gruppen die Möglichkeit, Beiträge in ihren Gruppen anheften zu können.
Dadurch sehen die Gruppenmitglieder sofort die wichtigen Beiträge, wie Ankündigungen und Veranstaltungen.

Dies wurde dank der Spenden im Rahmen unseres [ersten Crowdfundings](/de/news/2025-11-05-crowdfunding-feature-pinned-posts-in-groups/) ermöglicht.
An dieser Stelle nochmals ein großes Dankeschön an unsere Spender. Ihr habt es möglich gemacht!

## Behobene Fehler

- Der Kategorien-Filter funktioniert nun wieder wie gewohnt.
- Anzeige der Benachrichtigungseinstellungen ist wieder korrekt.
- Fehlerhafte Links in Benachrichtigungs-E-Mails wurden korrigiert.
- Die Informationsseiten (Impressum, Datenschutzerklärung etc.) funktionieren nun wieder.

## Technisches unter der Haube

*Ocelot.social* nutzt als Frontend-Framework Vue.js in der Version 2, welche nicht mehr aktuell ist.
Der Umstieg auf Vue 3 ist aufgrund vieler Veränderungen im Versionsübergang sehr aufwendig, wurde nun aber mit *ocelot.social* Pi angegangen.

Aufgrund des Umfangs und der Komplexität wurde ein modularer Ansatz gewählt, der den schrittweisen Umstieg ermöglicht.
Im ersten Schritt wurden alle Buttons übernommen und dabei verbessert.

## Changelog-Zusammenfassung

KI-Zusammenfassung der Versionen [3.14.0](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.14.0) und [3.14.1](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.14.1):

### Features

- Group Pins — Beiträge können in Gruppen angepinnt werden (#9034)
- Admin-Erstellungsbefehl für Produktion (#9057)
- DB-Script zum Deaktivieren von Benachrichtigungen (#9131)
- CodeRabbit Integration für PR-Reviews (#9194)

### Vue 3 Migration

- Phase 2 — Setup: Grundlagen für die Migration vorbereitet (#9161)
- Phase 3 — Integration: UI-Library in Webapp integriert (#9180)
- Button Migration: Icon, Circle und Loading-States migriert (#9208)
- Vue auf 2.7.16 aktualisiert als Voraussetzung (#9160)

### UI Package (packages/ui)

- ESLint-Regeln in eslint-config-it4c extrahiert (#9198, #9233)
- os-button CSS-Klasse für Branding-Kompatibilität (#9211)

### Bug Fixes

- Backend: Kategorien-Filter repariert (#9209, #9123)
- Backend: Gepinnte Beiträge auch bei stummgeschalteten Nutzern sichtbar (#9200)
- Backend: Benachrichtigungseinstellungen für currentUser (#9130)
- Backend: E-Mail URL-Encoding (#9127)
- Backend: Berechtigungen für GroupInviteCodes (#9121)
- Backend: Group myRole-Feld Query (#9102)
- Webapp: Sprachwechsel auf statischen Seiten (#9202)
- Webapp: Statische Seiten auch ausgeloggt verfügbar (#9201)
- Webapp: Interner Pfad für Custom Button (#9129)
- Webapp: CTA-Join-Group Crash wenn Gruppe undefiniert (#9103)
- Webapp: Lokale Frontend-Tests (#9104, #9125)

### Refactoring

- Backend: Reports Query Parametrisierung + Resolver Cleanup (#9156)
- Backend: GraphQL Linting (#8473)
- Backend: Group-Membership Modell (#9124)
- Backend: Middleware before/after (#9128)
- Backend: Test-Rollen (#9157)

### Workflow/CI

- E2E-Tests laufen parallel (#9205)
- Package-Caching (#9206)
- Neuer PR-Scope package/ui (#9196)
- UI-Workflow-Fixes (#9204, #9207)
- Auto-Approve Workflow entfernt (#9197)
- Node.js Versionen konsolidiert (#9126)

~80 Dependency-Updates (Node, Nginx, AWS SDK, Cypress, etc.) ausgelassen.

## Spenden

Wenn dir *ocelot.social* gefällt, dann unterstütze die Entwicklung und Pflege dieser freien und Open-Source-Software mit einer Spende an den [busFaktor() e.V.](/de/donate/).

## Unterstütze *ocelot.social*

- [Mitmachen](/de/contribute/)
- [Spenden](/de/donate/)
