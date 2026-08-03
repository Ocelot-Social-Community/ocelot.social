---
home: false
article: true
sidebar: false
lang: de-DE
date: 2026-08-03
category:
  - Releases
tag:
  - Releases
  - Branding
  - Profil
  - Gruppen
  - Administration
cover: /blog/ocelot-social-release-v3-18.png
coverAlt: "Ocelot.social Version 3.18.0"
title: "Neuer Release – Ocelot.Social v3.18.0"
description: "Version 3.18.0 bringt ein komplett neues Branding-System: Netzwerk-Betreiber stellen ihr Erscheinungsbild jetzt direkt in der Administration zusammen – ohne neues Deployment. Dazu kommen überarbeitete Profile mit Gruppenliste und Filtern sowie abschaltbare Funktionen."
---

<!-- markdownlint-disable no-inline-html first-line-heading -->

Version 3.18.0 bringt ein komplett neues Branding-System: Netzwerk-Betreiber stellen ihr Erscheinungsbild jetzt direkt in der Administration zusammen – ohne neues Deployment.
Dazu kommen überarbeitete Nutzerprofile mit Gruppenliste und Filtern sowie Funktionen, die sich pro Netzwerk abschalten lassen.

## Highlight: Das neue Branding-System

Bisher war das Erscheinungsbild eines Netzwerks fest in dessen Konfiguration eingebaut – jede Änderung bedeutete einen neuen Build. Ab v3.18.0 ist Branding ein eigenständiges Paket und wird zur Laufzeit aufgelöst. 💚

- **Branding als eigenes Paket** – Schema, Standardwerte und Auflösung liegen an einer Stelle, die Backend und Webapp gemeinsam nutzen. Werte wie Gruppen-Limits, Metadaten, Logos, Menüs oder Theme-Farben können nicht mehr auseinanderlaufen.
- **Branding-Pakete statt fester Konfiguration** – ein Brand wird zu einem Archiv gebaut und ins laufende Netzwerk eingespielt.
- **Zusammenstellen in der Administration** – ein komplettes Paket dient als Basis, einzelne Bereiche (Logos, Theme, Menü, Texte …) lassen sich unabhängig davon überschreiben oder auf die Framework-Standards zurücksetzen.
- **Eigene Übersetzungen pro Brand** – ganze Sprachdateien oder einzelne Feature-Bereiche können überschrieben werden.
- **Schema-Prüfung** – passt ein Branding-Paket nicht zur laufenden Version, wird das gemeldet, statt still zu brechen.
- **Wartungsseite und E-Mails** nutzen jetzt dasselbe Branding wie der Rest des Netzwerks.

## Profile & Gruppen

- 👥 **Gruppenliste im Nutzerprofil** – sichtbar wird nur, was die Privatsphäre-Einstellungen erlauben
- 🔍 **Filter für Folge- und Gruppenlisten** – auch bei vielen Einträgen schnell finden, wen oder was man sucht
- ✨ **Überarbeitetes Nutzerprofil** – aufgeräumte Darstellung von Profil und Folgelisten
- 💬 **Gruppen-Popover am Nutzer-Teaser** – Gruppenzugehörigkeit direkt im Vorbeigehen sehen

## Für Netzwerk-Betreiber

- 🚫 **Gruppen abschaltbar** – Netzwerke ohne Gruppenfunktion blenden sie jetzt vollständig aus
- 🔗 **Social-Media-Links abschaltbar** – die Verlinkung externer Profile ist optional
- 🏷️ **Rollen umbenennen** – Rollen lassen sich an die Sprache der eigenen Community anpassen
- ⚠️ **Konflikte beim Bearbeiten** – gleichzeitige Änderungen an Rollen und Policies werden erkannt und sauber aufgelöst, statt sich gegenseitig zu überschreiben
- 🔧 Der System-Konfigurations-Tab funktioniert wieder korrekt

## Für Entwickler

- 📖 **API-Dokumentation** – die GraphQL-Schnittstelle ist jetzt dokumentiert
- 🧪 Höhere Testabdeckung in der Webapp und eine eigene CI-Strecke für das Branding-Paket

## Behobene Fehler

- Video-Avatare werden korrekt dargestellt, Navigation dazu gefixt
- Standortfelder und deren Menüs korrigiert, doppelte Hinweistexte entfernt
- SSR-Timeouts ergänzt und Brand-IDs werden validiert
- Docker-Datei der Webapp und Cache-Auflösung repariert

## Technisches unter der Haube

- Zahlreiche Dependency-Updates für Sicherheit und Stabilität, inklusive Node-26-Kompatibilität

## Changelog

Version [3.18.0](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.18.0).

## Spenden

Wenn dir *ocelot.social* gefällt, dann unterstütze die Entwicklung und Pflege dieser freien und Open-Source-Software mit einer Spende an den [busFaktor() e.V.](/de/donate/).

## Unterstütze *ocelot.social*

- [Mitmachen](/de/contribute/)
- [Spenden](/de/donate/)
