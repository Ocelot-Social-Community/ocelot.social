---
home: false
article: true
sidebar: false
lang: de-DE
date: 2026-10-06
category:
  - Releases
tag:
  - Releases
  - Karten
  - Veranstaltungen
  - Gruppen
  - Video
cover: /blog/ocelot-social-release-v3-19+20.png
coverAlt: "Ocelot.social Version 3.19 Map Cat"
title: "Ocelot.social 3.19+20 „Map Cat” – Wo passiert was? Mehr Karten für bessere Orientierung 🗺️"
description: "Mit ocelot.social 3.19 „Map Cat” siehst du auf mehr Seiten, wo was passiert: Karten für Veranstaltungen, Nutzer und Gruppen, ein neues Popup-Design und eine Legende für die Gesamtkarte. Dieser Beitrag fasst außerdem die kleineren Verbesserungen aus Version 3.20 zusammen."
---

<!-- markdownlint-disable no-inline-html first-line-heading -->

Mit *ocelot.social* 3.19 „Map Cat” siehst du auf mehr Seiten, wo was passiert. In dieser Version geht es vor allem darum, Veranstaltungen, Nutzer und Gruppen auf Karten sichtbar zu machen und komfortabler bearbeiten zu können. 💚

Zudem wurde vieles an der Software verbessert und unter der Haube verändert. Die Details findest du in diesem Beitrag, inklusive der kleineren Verbesserungen aus dem nachfolgenden Release 3.20.

## Karten

### Veranstaltungen

- Erstellen und Verändern, jetzt mit Karte: den exakten Ort mit der Maus setzen und verschieben
- Veranstaltungsansicht: Karte mit Ort zur Ansicht, mit Link zur Gesamtkarte

<!-- TODO: Screenshot Veranstaltung mit Karte: /blog/release-3.19-event-map--de.png -->

### Nutzer und Gruppen

- Erstellen und Verändern, jetzt mit Karte: den Ort jetzt neu auf den Stadtteil genau mit der Maus setzen und verschieben
- Karte mit Ort auf dem Nutzer- oder Gruppenprofil, mit Link zur Gesamtkarte

<!-- TODO: Screenshot Profil mit Karte: /blog/release-3.19-profile-map--de.png -->

### Gesamtkarte

- Veranstaltungs-Pin direkt auf der Karte setzen, um eine Veranstaltung anzulegen
- neues Design für Popups
- Legende: Ebenen ein- und ausblenden, alte Veranstaltungen einblenden

<!-- TODO: Screenshot Gesamtkarte mit Legende: /blog/release-3.19-main-map-legend--de.png -->

## Erstellen und Ändern von Beiträgen und Profilen

Für Beiträge, Nutzer und Gruppen:

- bessere Überprüfung der eingegebenen Daten mit verständlichen Rückmeldungen
- Hinweis beim Verlassen der Seite auf ungespeicherte Änderungen

## Video-Konferenzen

- Mikrofon-Symbol auf den Video-Kacheln: wer stumm ist, ist jetzt auch sichtbar stumm
- Ton bleibt beim Kamera-Ausschalten erhalten: kein Audio-Verlust mehr in Videokonferenzen

## Beitragsübersicht – Newsfeed

Spürbar schnellere Anzeige – die Software wurde diesbezüglich deutlich optimiert.

## Unter der Haube

### Ein neues Fundament

In dieser Version wurde vieles hinter den Kulissen aufgeräumt, was du am Tempo und der Stabilität merken kannst. Hier im Einzelnen für Technikinteressierte:

- eigene Schema-Deklaration im Backend: die alten Datenbank-Bibliotheken (neode, neo4j-graphql-js) sind vollständig raus
- Backend auf moderne Module umgestellt: Tests von Jest auf Vitest migriert und parallelisiert
- von yarn auf npm umgezogen, kleinere Docker-Images, Node-26-Kompatibilität
- automatisierte Releases & Changelog: Versionen und Release-Notes entstehen jetzt direkt aus den Commits
- mehr Testabdeckung und eine automatische Prüfung auf ungewollte optische Änderungen der Oberfläche

## Bugfixes & Aufräumarbeiten

- Benachrichtigungen in versteckten Gruppen funktionieren wieder korrekt
- die Vorschau der Gruppenbeschreibung ist repariert
- Favicons werden richtig ausgeliefert
- Social-Media-Links, denen der Browser nicht folgen soll, werden gar nicht erst gerendert
- dazu stabilere e2e-Tests
- reparierte Docker- und CI-Strecken
- sowie zahlreiche Dependency-Updates für Sicherheit und Stabilität

## Dazu: Release 3.20 — kleinere Verbesserungen

Kurz nach 3.19 folgte mit 3.20 ein kleineres Release, das einige Punkte nachschärft und erste Vorarbeiten für kommende Gruppenrechte legt.

- *Gruppe erstellen* – der Gruppentyp wird jetzt über Karten statt über ein Dropdown gewählt; nicht wählbare Typen werden mit Begründung angezeigt, statt einfach zu fehlen
- *Standorte* – das Profil zeigt wieder den tatsächlich gewählten Ort statt des Stadtteils, in dem der Pin zufällig liegt; das Standortfeld leert sich nicht mehr, wenn Suchergebnisse verspätet eintreffen
- *Buttons* – gefüllte Primär- und Gefahren-Buttons werden beim Hover dunkler, statt zu einem kaum lesbaren helleren Ton zu verblassen
- *Übersetzungen* – jede Sprache nutzt jetzt ihre eigenen Anführungszeichen, dazu diverse Übersetzungs- und Grammatikkorrekturen
- außerdem behoben: der überdimensionierte Herz-Button bei Kommentaren und ein überflüssiger Bindestrich am Ende neuer Beitrags-Adressen

### Sicherheit

Eine Lücke in `JoinGroup` erlaubte es, ohne Prüfung eine beliebige `userId` anzugeben: Jede angemeldete Person hätte dadurch jemand anderen in eine öffentliche Gruppe aufnehmen oder in dessen Namen eine Beitrittsanfrage für eine geschlossene Gruppe stellen können. Ab sofort darf das nur noch die Gruppenleitung.

### Für Netzwerk-Betreiber und Entwickler

- `Group.groupType` ist als Feld veraltet, neue Integrationen sollten `Group.visibility` nutzen (gleiche drei Werte)
- das MinIO-Image läuft in Entwicklung und Tests jetzt rootless (Chainguard-Basis); bestehende lokale Daten-Volumes benötigen einmalig einen Rechte-Wechsel (chown)
- größere Versionssprünge bei Abhängigkeiten, unter anderem bei @sentry/node

## Vollständiges Änderungsprotokoll

Alle Details findest du im [Changelog](https://github.com/Ocelot-Social-Community/Ocelot-Social/blob/master/CHANGELOG.md) sowie in den Release-Notes zu [3.19.0](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.19.0) und [3.20.0](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.20.0).

## Was kommt als Nächstes?

Die aktuell geplanten Schritte findest du wie immer auf unserer [Roadmap](/de/roadmap/).

## Fördern und Unterstützen

Open Source lebt von dir und der Gemeinschaft. Sollte dir *ocelot.social* gefallen, freuen wir uns weiterhin über jede Unterstützung:

- [Spenden](/de/donate/)
- [Mitmachen](/de/contribute/)
- [Eigenes Netzwerk betreiben](/de/get-started/)
