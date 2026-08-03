---
home: false
article: true
sidebar: false
lang: fr-FR
date: 2026-08-03
category:
  - Releases
tag:
  - Releases
  - Branding
  - Profile
  - Groups
  - Administration
cover: /blog/ocelot-social-release-v3-18.png
coverAlt: "Ocelot.social Version 3.18.0"
title: "Nouvelle version – Ocelot.Social v3.18.0"
description: "La version 3.18.0 apporte un tout nouveau système de branding : les opérateurs de réseau composent désormais leur apparence directement dans l’administration, sans nouveau déploiement. S’y ajoutent des profils remaniés avec liste de groupes et filtres, ainsi que des fonctionnalités désactivables."
---

<!-- markdownlint-disable no-inline-html first-line-heading -->

La version 3.18.0 apporte un tout nouveau système de branding : les opérateurs de réseau composent désormais leur apparence directement dans l’administration, sans nouveau déploiement.
S’y ajoutent des profils utilisateur remaniés avec liste de groupes et filtres, ainsi que des fonctionnalités désactivables par réseau.

## Point fort : le nouveau système de branding

Jusqu’ici, l’apparence d’un réseau était figée dans sa configuration – chaque modification impliquait une nouvelle compilation. À partir de la v3.18.0, le branding est un paquet à part entière, résolu à l’exécution. 💚

- **Le branding comme paquet à part entière** – le schéma, les valeurs par défaut et leur résolution vivent au même endroit, partagé par le backend et la webapp. Des valeurs comme les limites de groupe, les métadonnées, les logos, les menus ou les couleurs du thème ne peuvent plus diverger.
- **Des paquets de branding au lieu d’une configuration figée** – une marque est compilée en archive puis chargée dans le réseau en fonctionnement.
- **Composition dans l’administration** – un paquet complet sert de base, tandis que des zones individuelles (logos, thème, menu, textes …) peuvent être surchargées indépendamment ou réinitialisées aux valeurs par défaut du framework.
- **Traductions propres à chaque marque** – des fichiers de langue entiers ou des zones fonctionnelles précises peuvent être surchargés.
- **Vérification du schéma** – si un paquet de branding ne correspond pas à la version en cours, vous en êtes averti au lieu d’une rupture silencieuse.
- **La page de maintenance et les e-mails** utilisent désormais le même branding que le reste du réseau.

## Profils et groupes

- 👥 **Liste des groupes sur le profil utilisateur** – seul ce que les paramètres de confidentialité autorisent est affiché
- 🔍 **Filtres pour les listes d’abonnements et la liste des groupes** – retrouvez qui ou ce que vous cherchez, même dans de longues listes
- ✨ **Profil utilisateur remanié** – une présentation plus claire du profil et de ses listes d’abonnements
- 💬 **Popover de groupes sur le teaser utilisateur** – voir l’appartenance aux groupes au passage

## Pour les opérateurs de réseau

- 🚫 **Les groupes peuvent être désactivés** – les réseaux sans fonctionnalité de groupes la masquent désormais entièrement
- 🔗 **Les liens vers les réseaux sociaux peuvent être désactivés** – lier des profils externes est optionnel
- 🏷️ **Renommer les rôles** – les rôles peuvent être adaptés au vocabulaire de votre propre communauté
- ⚠️ **Conflits d’édition** – les modifications simultanées des rôles et des politiques sont détectées et résolues proprement au lieu de s’écraser mutuellement
- 🔧 L’onglet de configuration système fonctionne à nouveau correctement

## Pour les développeurs

- 📖 **Documentation de l’API** – l’interface GraphQL est désormais documentée
- 🧪 Une meilleure couverture de tests dans la webapp et une chaîne de CI dédiée au paquet de branding

## Corrections de bugs

- Les avatars vidéo s’affichent correctement, leur navigation est corrigée
- Champs de localisation et leurs menus corrigés, textes d’aide en double supprimés
- Ajout de délais d’attente en SSR et validation des identifiants de marque
- Fichier Docker de la webapp et résolution du cache réparés

## Sous le capot

- De nombreuses mises à jour de dépendances pour la sécurité et la stabilité, y compris la compatibilité Node 26

## Changelog

Version [3.18.0](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.18.0).

## Dons

Si vous aimez *ocelot.social*, soutenez le développement et la maintenance de ce logiciel libre et open-source par un don à [busFaktor() e.V.](/fr/donate/).

## Soutenez *ocelot.social*

- [Contribuer](/fr/contribute/)
- [Faire un don](/fr/donate/)
