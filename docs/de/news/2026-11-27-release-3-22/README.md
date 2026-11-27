---
home: false
article: true
sidebar: false
lang: de-DE
date: 2026-11-27
category:
  - Releases
tag:
  - Releases
  - Dark Mode
  - Video
  - Chat
  - Datenschutz
cover: /blog/ocelot-social-release-v3-22.png
coverAlt: "Ocelot.social Version 3.22 Night Watch"
title: "Ocelot.social 3.22 „Night Watch” – Dark Mode, und Videoanrufe werden erwachsen 🌙"
description: "Mit ocelot.social 3.22 „Night Watch” bekommt das Netzwerk einen Dark Mode, Videoanrufe bekommen eine Teilnehmerliste, einen eigenen Chat und einen Platz neben dem Feed – und geschlossene Gruppen und Blockierungen werden jetzt auf dem Server durchgesetzt."
---

<!-- markdownlint-disable no-inline-html first-line-heading -->

Ozelots sind nachtaktiv – und mit *ocelot.social* 3.22 „Night Watch” kann es dein Netzwerk jetzt auch sein: Endlich gibt es einen Dark Mode. Auch Videoanrufe machen einen großen Schritt nach vorn, und im Hintergrund hält jetzt der Server Wache über geschlossene Gruppen und Blockierungen, statt das den Formularen zu überlassen. 💚

## Highlight: Dark Mode

<!-- TODO: screenshot dark mode: /blog/release-3.22-dark-mode--de.png -->

- Das ganze Netzwerk – Seiten, Chat, Videoanrufe und Karten – gibt es jetzt in einem dunklen Design, mit einem Schalter, um zwischen hell und dunkel zu wählen.
- Auch ältere Browser bekommen das dunkle Design.
- Farbige Flächen und Bänder sind gerade so weit abgedunkelt, dass sie gut lesbar bleiben.
- Jedes Netzwerk entscheidet selbst, ob es den Dark Mode anbietet: Ein Netzwerk mit eigenem Branding bleibt hell, bis es den Dark Mode einschaltet.

## Videoanrufe

- Der Anruf bekommt deutlich mehr Platz auf dem Bildschirm und kann in den Vollbildmodus wechseln.
- Eine Teilnehmerliste mit Filter zeigt, wer im Anruf ist – und dort wird der Anruf auch moderiert.
- Jeder Anruf hat seinen eigenen Chat, den nur die Teilnehmer des Anrufs teilen und der sich danach herunterladen lässt.
- Laufende Anrufe werden in einem Dock neben dem Feed angezeigt, so siehst du auf einen Blick, wo gerade gesprochen wird.
- Du wählst selbst, in welcher Videoqualität ein Anruf sendet und empfängt.
- Kommt dein Computer nicht mehr hinterher, treten die Kameras zurück und sagen dir das – und du kannst es rückgängig machen.
- Der Ton einer Bildschirmfreigabe ist jetzt zu hören, ein Sprecher, der bei einem Zuhörer nicht mehr ankam, wird wieder verbunden, und das Mikrofon sendet jetzt auch in Sprechpausen weiter, was den Ton zuverlässiger macht (umschaltbar pro Netzwerk und pro Anruf).

## Chat

- Jeder Chat behält die Nachricht, die du angefangen, aber noch nicht abgeschickt hast.
- Ein Knopf bringt dich zur ältesten ungelesenen Nachricht.
- Eine Nachricht im Gruppenchat erreicht jetzt jedes Mitglied live – auch zwei Mitglieder, die einander blockieren oder stummschalten.

## Schreiben

- Strg+K (Cmd+K auf dem Mac) öffnet die Link-Eingabe – am markierten Text oder, wenn nichts markiert ist, an der Schreibmarke.
- Die Menüleiste des Editors bleibt beim Schreiben langer Texte sichtbar.
- Unfertige Erwähnungen und Hashtags werden markiert.
- Die Übersicht der Tastenkürzel zeigt die Tasten deines Systems.

## Benachrichtigungen

Ein neuer Beitrag oder ein Kommentar, der dich in einem beobachteten Beitrag erwähnt, erscheint jetzt einmal – statt einmal pro Grund.

## Rechte und Rollen

- Eine Rolle mit `role.manage` kann jetzt jede Rolle außer dem Inhaber frei gestalten.
- Die festen Rollen des Netzwerks werden übersetzt angezeigt.
- Die Rollen-Seite kann ungespeicherte Änderungen verwerfen.
- Beim Speichern der Rechte einer Gruppe gibt es eine Warnung, bevor das Recht, die Rollen zu bearbeiten, vergeben – oder aufgegeben – wird.

## Datenschutz: geschlossene Gruppen und Blockierungen

- Der Inhalt einer geschlossenen oder versteckten Gruppe ließ sich auf mehreren Wegen an der Gruppe vorbei erreichen. Diese zehn Wege sind jetzt geschlossen, und wer eine solche Gruppe verlässt, liest ihre Kommentare nicht mehr und wird nicht mehr darüber benachrichtigt.
- Eine Blockierung beendet Kommentieren und Direktchat jetzt auf dem Server, nicht nur im Formular.
- Live-Aktualisierungen prüfen deine Rechte nach 30 Sekunden erneut und sofort, wenn sie sich ändern – ein entzogenes Recht liefert also keine Live-Aktualisierungen mehr.

## Fehlerkorrekturen

- Eine Gruppe lässt sich in einem Netzwerk ohne Kategorien wieder speichern.
- Avatare zeigen ihre Initialen gut lesbar, solange ihr Bild lädt.
- Tooltips zeigen ihren Inhalt als Text.
- Kleinere Korrekturen an Abständen in Formularen, Feldbeschriftungen und allem, was unter der Kopfzeile haftet.

## Unter der Haube

- Die Tests des Servers laufen jetzt auf Redis, und ein neuer Test lässt zwei Server gegen ein Redis laufen. Er hat drei Fehler gefunden, alle behoben: Ein Redis-Ausfall beendete den Server, Zahlen kamen verstümmelt durch Redis, und zwei gleichzeitig startende Server konnten kollidieren.
- Eine Server-Instanz, die eine Änderung an den Richtlinien oder Rollen des Netzwerks verpasst hat, holt sie innerhalb einer Minute nach.
- Kommentare und Gruppenabfragen fragen die Datenbank seltener.
- Der Server prüft jetzt, was bisher nur die Formulare geprüft haben: Kategorien, Nutzer-Slugs, Länge von Gruppennamen. Die Grenzen für Beitragstitel lassen sich pro Netzwerk festlegen.
- TypeScript 6 im Backend und auf der Wartungsseite.

## Für Entwickler

- Die ActivityPub-Felder `User.actorId`, `User.publicKey`, `Post.activityId`, `Post.objectId` und `Comment.activityId` sind abgekündigt; die Proxies `/.well-known/webfinger` und `/activitypub` der Webapp sind entfernt
- Mutationen lehnen unbekannte Kategorien, ungültige Nutzer-Slugs und Gruppennamen außerhalb der Längengrenzen des Brandings ab
- Migrationen laufen beim Start automatisch: Doppelte Benachrichtigungen werden auf eine pro Beitrag bzw. Kommentar und Empfänger reduziert, und die Rolle `admin` jeder Gruppe und jeder Gruppenrollen-Vorlage erhält das neue Recht `group.videoCall.moderate`
- neue Richtlinie `videoCallDtx`, Standard `false`
- `packages/ui` 0.0.9 (OsDrawer, Bestätigungsdialog, Modalgrößen), `packages/branding` 0.2.5

## Für Netzwerkbetreiber

Zwei Änderungen halten ein Deployment auf, wenn du sie übersiehst:

- **`PRODUCTION_DB_CLEAN_ALLOW` heißt jetzt `DB_WIPE_ALLOWED`.** Zurücksetzen und Seeden der Datenbank löschen nur dort, wo `DB_WIPE_ALLOWED="true"` gesetzt ist; `NODE_ENV` entscheidet nicht mehr. Ein Staging, das neu seedet, benennt die Variable um, Produktion lässt sie einfach weg.
- **Branding-Repositories ziehen von `branding/` nach `brandings/<name>/` um** (plus `overlays/` für Code und Daten). Ein Repository im alten Aufbau baut nicht mehr. Ein Repository kann jetzt mehrere Brands enthalten; bei mehr als einem setze `OCELOT_ACTIVE_BRANDING`.

Außerdem gut zu wissen:

- Der Dark Mode ist pro Brand freiwillig: `theme.colorScheme: 'light dark'`. Ein Brand kann außerdem den Kartenstil für jedes Design festlegen.
- Die Webapp läuft jetzt mit zwei Replicas und einem PodDisruptionBudget, sodass ein Node-Drain keinen kurzen Ausfall mehr verursacht – bei doppeltem Speicherbedarf der Webapp. `webapp.replicas: 1` behält das alte Verhalten; ein Cluster mit nur einem Node setzt `webapp.podDisruptionBudget: false`.

Alle Schritte stehen in [`deployment/TODO-next-update.md`](https://github.com/Ocelot-Social-Community/Ocelot-Social/blob/master/deployment/TODO-next-update.md).

## Vollständiges Änderungsprotokoll

Alle Details findest du im [Changelog](https://github.com/Ocelot-Social-Community/Ocelot-Social/blob/master/CHANGELOG.md) sowie in den Release-Notes zu [3.22.0](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.22.0).

## Was kommt als Nächstes?

Die aktuell geplanten Schritte findest du wie immer auf unserer [Roadmap](/de/roadmap/).

## Fördern und Unterstützen

Open Source lebt von dir und der Gemeinschaft. Sollte dir *ocelot.social* gefallen, freuen wir uns weiterhin über jede Unterstützung:

- [Spenden](/de/donate/)
- [Mitmachen](/de/contribute/)
- [Eigenes Netzwerk betreiben](/de/get-started/)
