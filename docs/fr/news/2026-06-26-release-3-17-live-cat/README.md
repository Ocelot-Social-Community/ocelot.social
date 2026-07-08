---
home: false
article: true
sidebar: false
lang: fr-FR
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
title: "Ocelot.social 3.17 Live Cat est là – Vidéoconférences en groupe & plus de contrôle"
description: "Avec *ocelot.social* 3.17 Live Cat, vous pouvez faire des vidéoconférences ensemble dans des groupes – et avec le nouveau système de rôles & politiques, vous avez plus de contrôle que jamais."
---

<!-- markdownlint-disable no-inline-html first-line-heading -->

Avec *ocelot.social* 3.17 Live Cat, vous pouvez faire des vidéoconférences ensemble dans des groupes.
S'y ajoute un système étendu de rôles, permissions et politiques qui donne à votre communauté plus de contrôle que jamais.

## Point fort : Rôles, permissions et politiques

Qui peut faire quoi ? À partir de la v3.17, vous le décidez plus précisément que jamais.
Cette version tourne principalement autour d'un système étendu de rôles, permissions et politiques – la base pour les communautés qui souhaitent contrôler finement qui peut utiliser quelles fonctionnalités. 💚

- **Rôles & permissions comme nouvelle base** – avec des permissions plus granulaires
- **Politiques réseau dynamiques** – les paramètres peuvent être ajustés étape par étape sans nouveau déploiement
- **Contrôle des politiques directement dans l'interface** – les fonctionnalités n'apparaissent que là où elles sont autorisées
- **Gestion des erreurs plus propre** – les accès bloqués signalent maintenant correctement « non autorisé » au lieu d'une erreur interne du serveur

## Nouvelles fonctionnalités

- 🎥 Vidéoconférences de groupe publiques – vidéoconférence ensemble dans des groupes publics
- 🔄 Changer le type de groupe – les propriétaires peuvent changer le type de leur groupe ultérieurement
- 📍 Sélection de localisation unifiée – un composant de localisation cohérent et refactorisé
- ✉️ Branding des e-mails étendu – désormais aussi du CSS personnalisable pour vos e-mails

## Sécurité & vie privée

- 🕵️ Plus de fuite de référent – les liens externes ne transmettent plus l'URL d'origine
- 🔗 Encodage d'URL correct pour les noms de groupes et d'utilisateurs, les liens du menu de publication et les redirections
- 🏷️ Slugs côté serveur au lieu d'auto-assemblés – incl. des slugs propres sans apostrophe ni virgule

## Corrections de bugs

- Les membres en attente n'apparaissent plus dans le profil du groupe
- Interface d'administration des badges et catégories des paramètres de groupe corrigées
- Bouton de filtre dans le fil d'actualité et fenêtre de chat de groupe réparés
- Comportement WebSocket plus stable lors de la connexion (reconnexion propre)
- Correction du heartbeat, définition de port Docker en double supprimée
- Test instable pour les publications épinglées corrigé

## Sous le capot

- De nombreuses mises à jour de dépendances pour la sécurité et la stabilité

## Changelog

Version [3.17.0](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.17.0).

## Dons

Si vous aimez *ocelot.social*, soutenez le développement et la maintenance de ce logiciel libre et open-source par un don à [busFaktor() e.V.](/fr/donate/).

## Soutenez *ocelot.social*

- [Contribuer](/fr/contribute/)
- [Faire un don](/fr/donate/)
