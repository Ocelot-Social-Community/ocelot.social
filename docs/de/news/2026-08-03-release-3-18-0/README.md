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
title: "Neues Release – Ocelot.Social v3.18.0"
description: "Die Version 3.18.0 bringt Verbesserungen und Erleichterungen für Nutzer und Betreiber von ocelot.social-Netzwerken. Nutzer erhalten eine Liste ihrer Gruppen auf ihrer Profilseite und bessere Hinweise, um das Erstellen von Beiträgen zu erleichtern. Betreiber können nun Funktionen und Teile des Erscheinungsbildes ihres Netzwerks direkt konfigurieren."
---

<!-- markdownlint-disable no-inline-html first-line-heading -->

Die Version 3.18.0 bringt Verbesserungen und Erleichterungen für Nutzer und Betreiber von ocelot.social-Netzwerken. Nutzer erhalten eine Liste ihrer Gruppen auf ihrer Profilseite und bessere Hinweise, um das Erstellen von Beiträgen zu erleichtern. Betreiber können nun Funktionen und Teile des Erscheinungsbildes ihres Netzwerks direkt konfigurieren.

Hier erfährst du mehr zu den Neuerungen mit einem [Highlight](#highlight-einfuhrung-des-neuen-branding-systems) für Netzwerkbetreiber.

## Liste der Gruppen des Nutzers auf seiner Profilseite

<figure class="blog-post-image">
  <img src="/blog/release-3.18-user-profile-group-list--de.png" alt="Nutzerprofil-Gruppenliste" />
  <figcaption class="blog-post-image-capture">
    Unten links auf der Nutzerprofileseite die neue Gruppenliste.
  </figcaption>
</figure>

Auf der Profilseite des Nutzers ist nun eine Liste seiner Gruppen sichtbar (kann ausgeschaltet werden).
Zudem wurde das Design und die Funktion dieser Listen, auch auf den Gruppenprofilen, optimiert.

## Profilvorschau

<figure class="blog-post-image">
  <img src="/blog/release-3.18-user-profile-group-overlay--de.png" alt="Gruppenprofilvorschau" />
  <figcaption class="blog-post-image-capture">
    Vorschau eines Gruppenprofils.
  </figcaption>
</figure>

Beim Drüberhalten des Mauszeigers über einen Nutzer- oder Gruppennamen erscheint eine überarbeitete Vorschau des Profils, neu auch bei Gruppen.

## Highlight: Einführung des neuen Branding-Systems

Bisher konnten Betreiber das Erscheinungsbild eines Netzwerks nicht selber anpassen.
Für Änderungen waren sie auf einen Server-Administrator angewiesen.
Mit der neuen Version ist der erste große Stein gelegt, um das Design und weitere Einstellungen selber live zu verändern. 💚

<figure class="blog-post-image">
  <img src="/blog/release-3.18-settings-branding--de.png" alt="Branding-Einstellung" />
  <figcaption class="blog-post-image-capture">
    In der Einstellung können Verfügbaren Brandings ausgewählt und in Zukunft angepasst werden.
  </figcaption>
</figure>

Detailbeschreibung für technisch Interessierte:

- *Branding als eigenes Paket* – Schema, Standardwerte und Auflösung liegen an einer Stelle, die Backend und Webapp gemeinsam nutzen. Werte wie Gruppen-Limits, Metadaten, Logos, Menüs oder Theme-Farben können nicht mehr auseinanderlaufen.
- *Branding-Pakete statt fester Konfiguration* – ein Brand wird zu einem Archiv gebaut und ins laufende Netzwerk eingespielt.
- *Zusammenstellen in der Administration* – ein komplettes Paket dient als Basis, einzelne Bereiche (Logos, Theme, Menü, Texte …) lassen sich unabhängig davon überschreiben oder auf die Framework-Standards zurücksetzen.
- *Eigene Übersetzungen pro Brand* – ganze Sprachdateien oder einzelne Feature-Bereiche können überschrieben werden.
- *Schema-Prüfung* – passt ein Branding-Paket nicht zur laufenden Version, wird das gemeldet, statt still zu brechen.
- *Wartungsseite und E-Mails* nutzen jetzt dasselbe Branding wie der Rest des Netzwerks.

## Für Netzwerk-Betreiber

- 🚫 *Gruppen abschaltbar* – Netzwerke ohne Gruppenfunktion blenden sie jetzt vollständig aus
- 🔗 *Social-Media-Links abschaltbar* – die Verlinkung externer Profile ist optional
- 🏷️ *Rollen umbenennen* – Rollen lassen sich an die Sprache der eigenen Community anpassen
- ⚠️ *Konflikte beim Bearbeiten* – gleichzeitige Änderungen an Rollen und Policies werden erkannt und sauber aufgelöst, statt sich gegenseitig zu überschreiben
- 🔧 Der System-Konfigurations-Tab funktioniert wieder korrekt

## Für Entwickler

- 📖 *API-Dokumentation* – die GraphQL-Schnittstelle ist jetzt dokumentiert
- 🧪 Höhere Testabdeckung in der Webapp und eine eigene CI-Strecke für das Branding-Paket

## Behobene Fehler

- Video-Avatare werden korrekt dargestellt, Navigation dazu gefixt
- Standortfelder und deren Menüs korrigiert, doppelte Hinweistexte entfernt
- Listen auf Profilseiten werden richtig gefiltert.
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
