---
home: false
article: true
sidebar: false
lang: de-DE
date: 2026-10-13
category:
  - Releases
tag:
  - Releases
  - Gruppen
  - Berechtigungen
  - Datenschutz
  - Video
cover: /blog/ocelot-social-release-v3-21.png
coverAlt: "Ocelot.social Version 3.21 Pack Leader"
title: "Ocelot.social 3.21 „Pack Leader” – Gruppenrechte: Wer darf was in deiner Gruppe? 🐾"
description: "Mit ocelot.social 3.21 „Pack Leader” bekommt jede Gruppe ein eigenes Rechtesystem: Rollen aus Vorlagen entscheiden, wer eine Gruppe finden, lesen, betreten, posten oder einladen darf. Dazu Verbesserungen bei Videotelefonie und Erwähnungen, sowie ein wichtiger Datenschutz-Hinweis zu Shouts."
---

<!-- markdownlint-disable no-inline-html first-line-heading -->

Mit *ocelot.social* 3.21 „Pack Leader” wird aus losen Rollen-Namen ein echtes Rechtesystem für Gruppen. Was die Version 3.20 bereits vorbereitet hat, ist jetzt vollständig verdrahtet: In jeder Gruppe entscheiden nicht mehr Rollen-Namen oder der Gruppentyp, sondern konkrete, einzeln vergebene Rechte. 💚

Die Details findest du in diesem Beitrag, inklusive der Korrekturen aus dem direkt nachgeschobenen Release 3.21.1.

## Highlight: Gruppenrechteverwaltung

Jede Gruppe hat jetzt Rollen mit eigenen Rechten, eingerichtet aus einer Vorlage, die das Netzwerk bereitstellt.

<!-- TODO: Screenshot Rechte-Tab einer Gruppe: /blog/release-3.21-group-rights-tab--de.png -->

- Im neuen Bereich *Rechte* in den Einstellungen der Gruppen kann festgelegt werden, welche Rollen was tun dürfen: Gruppe finden, lesen, betreten, posten, einladen … – eine umfangreiche Liste pro Rolle, in einer einfachen Übersicht.
- Rollen der Mitglieder können geändert werden.
- Ein Netzwerk-Admin kann mit angegebenem Grund in eine Gruppe „einsteigen”, um eine Gruppe ohne Eigentümer zu administrieren.
- Gruppen-Admins erhalten netzwerkweite Rollenvorlagen und eine Liste aller Gruppen, die sie verwalten dürfen.
- Beim Verlassen von Seiten mit ungespeicherten Änderungen an Rechten, Rollen und Konfigurationen wird jetzt nachgefragt, ob diese verworfen werden sollen.

## Video-Chat

- Kamera, Mikrofon und Lautsprecher lassen sich während eines Anrufs nun wechseln.
- Der Beitritt ist schneller, jede Kachel zeigt die Verbindungsqualität, und bei einer schwachen Leitung fällt der Anruf auf reinen Ton zurück, statt abzubrechen.
- Ein Browser, der den Ton blockiert, oder ein Mikrofon, das nur Stille liefert, wird jetzt angezeigt – mit einem Knopf zum direkten Beheben.

## Schreiben: Erwähnungen und Hashtags

- Erwähnungen und Hashtags die während des Tippens vorgeschlagen werden, sind jetzt danach gruppiert, wie sie mit dir zusammenhängen (am Beitrag beteiligt, Gruppenmitglieder, gefolgte Personen … eigene, beliebte, neue Hashtags).

## Fehlermeldungen in deiner Sprache

Fehler, die der Server meldet, werden jetzt übersetzt und mit dem tatsächlichen Grund angezeigt.

## Datenschutz: öffentliche Shouts

⚠️ **Wichtiger Hinweis für Netzwerk-Betreiber:** Die Einstellung `showShoutsPublicly` wurde seit 2021 zwar gespeichert, aber nie durchgesetzt – die Shouts aller Nutzer waren für alle sichtbar, unabhängig von der Einstellung. Das wird jetzt korrigiert, allerdings ist der neue Standard **öffentlich**, und eine Migration setzt alle bestehenden Nutzer auf „öffentlich”, auch jene, die die Einstellung zuvor ausgeschaltet hatten.

Bitte kündige das deiner Community an und verweise auf *Einstellungen → Datenschutz*, falls Nutzer ihre Shouts wieder einschränken möchten.

Außerdem: Eine benutzerdefinierte Admin-Rolle ohne die Teilnahme-Rechte eines gewöhnlichen Nutzers (zum Beispiel eine, die nur Konten löschen darf) konnte bisher gegen niemanden mehr etwas tun. Die Rangfolge zwischen Nutzern richtet sich jetzt ausschließlich nach Befugnis, und eine Ablehnung nennt den Grund.

## Fehlerkorrekturen in 3.20.0 bis 3.21.1

- Orte mit übersetztem Namen wurden in einer nicht-englischen Oberfläche fälschlich abgelehnt.
- Linkvorschauen ohne Bild funktionieren wieder.
- Diverse Störungen beim Erwähnen und Kommentieren wurden behoben.
- Fälschlich angezeigter Server-Fehler beim Besuch von Seiten bei fehlender Berechtigung.
- Der Hinweis zu einem vom Netzwerk begrenzten Gruppenrecht nennt jetzt das fehlende Netzwerkrecht.
- Eine Gruppenseite reagiert jetzt ohne Neuladen auf eine Änderung der Netzwerkrechte des Betrachters.

## Unter der Haube

- Gruppenzugriff: früher nur Gruppentypen und Rollen-Namen, jetzt detaillierte Rechte- und Rollenverwaltung, basierend auf Vorlagen.
- Gruppen-Auffindbarkeit wird jetzt davon abgeleitet, was die Nicht-Mitglied-Rolle darf, statt aus einem gespeicherten Gruppentyp.
- Übersetzte Fehlermeldungen: ein zentrales Register sprechender Codes auf dem Server wird im Browser übersetzt.
- Erwähnungs- und Hashtag-Vorschläge werden während des Tippens abgefragt statt vorab komplett geladen zu werden.
- Continuous Integration (CI) auf `master` wird übersprungen, wo die Merge-Queue denselben Commit bereits getestet hat.
- Docker-Hub-Basis-Images laufen jetzt über `mirror.gcr.io` statt direkt.

## Für Entwickler

- `groupType` ist vollständig entfernt: `Group.groupType`, das `GroupType`-Enum und die `groupType`-Argumente von `CreateGroup`/`UpdateGroup` sind weg. Stattdessen beim Erstellen `template` und beim Aktualisieren `visibility` verwenden. Neu veraltet: `Group.myRole` → `myGroupRole`, `ChangeGroupMemberRole` → `setGroupMemberRole`
- Migrationen laufen beim Start automatisch: bestehende Gruppen bekommen Rollen aus Vorlagen, gespeicherte Netzwerkrollen erhalten die neuen Gruppenrechte, und die typabhängigen `videoCall.create_*`-Rechte werden zu `create_open` / `create_restricted`. Shouts werden dabei für alle Nutzer öffentlich (siehe Datenschutz-Hinweis oben)
- Fehler-Vertrag: nutzerseitige Fehler tragen jetzt `extensions.errorCode` (und `params`), `message` bleibt englisch. `PASSWORD_CHANGE_*`-Fehler sind jetzt `BAD_USER_INPUT` statt `UNAUTHENTICATED`. Jede Veranstaltung braucht einen Ort mit 3–100 Zeichen, und das Melden des eigenen Beitrags oder Kommentars wird abgelehnt
- `CLIENT_URI` für Webapp und Wartungsseite macht `og:image` absolut; das Helm-Chart setzt es aus `domain`, andere Deployments sollten es auf den Origin der eigenen Instanz setzen
- `CreateGroup`, `UpdateGroup` und `UpdateUser` akzeptieren jetzt optional eine `locationId`
- Video-Beitritts-Tokens laufen nach 10 Minuten statt 2 Stunden ab
- größere Versionssprünge: dotenv 17 → 18, tslog 4 → 5, vue-apollo 3.0.2 → 3.1.2
- neu in 3.21.1: `Group.networkPrerequisites` als zusätzliches Feld, nichts wurde entfernt oder geändert

## Für Netzwerkbetreiber

Wenn du einen eigenen Client gegen die API betreibst, sind die Entfernung von `groupType` und die neuen Fehlercodes die Punkte, die du zuerst prüfen solltest. Wenn du ein eigenes Netzwerk betreibst, ist die Shouts-Migration der Punkt, über den du deine Nutzer informieren solltest.

## Vollständiges Änderungsprotokoll

Alle Details findest du im [Changelog](https://github.com/Ocelot-Social-Community/Ocelot-Social/blob/master/CHANGELOG.md) sowie in den Release-Notes zu [3.21.0](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.21.0) und [3.21.1](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.21.1).

## Was kommt als Nächstes?

Die aktuell geplanten Schritte findest du wie immer auf unserer [Roadmap](/de/roadmap/).

## Fördern und Unterstützen

Open Source lebt von dir und der Gemeinschaft. Sollte dir *ocelot.social* gefallen, freuen wir uns weiterhin über jede Unterstützung:

- [Spenden](/de/donate/)
- [Mitmachen](/de/contribute/)
- [Eigenes Netzwerk betreiben](/de/get-started/)
