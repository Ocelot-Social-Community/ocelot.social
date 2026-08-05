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
  - Profil
  - Groupes
  - Administration
cover: /blog/ocelot-social-release-v3-18.png
coverAlt: "Ocelot.social Version 3.18.0"
title: "Nouvelle version – Ocelot.Social v3.18.0"
description: "La version 3.18.0 apporte des améliorations et des nouveautés pour les utilisateurs et les opérateurs de réseaux ocelot.social. Les utilisateurs obtiennent une liste de leurs groupes sur leur page de profil et de meilleures indications pour créer des publications. Les opérateurs peuvent désormais configurer des fonctionnalités et des aspects de l'apparence de leur réseau directement."
---

<!-- markdownlint-disable no-inline-html first-line-heading -->

La version 3.18.0 apporte des améliorations et des nouveautés pour les utilisateurs et les opérateurs de réseaux ocelot.social. Les utilisateurs obtiennent une liste de leurs groupes sur leur page de profil et de meilleures indications pour créer des publications. Les opérateurs peuvent désormais configurer des fonctionnalités et des aspects de l’apparence de leur réseau directement.

Vous trouverez ici plus d’informations sur les nouveautés, avec un point fort pour les opérateurs de réseau.

## Liste des groupes sur le profil utilisateur

<figure class="blog-post-image">
  <img src="/blog/release-3.18-user-profile-group-list--en.png" alt="Liste des groupes sur le profil utilisateur" />
  <figcaption class="blog-post-image-capture">
    En bas à gauche de la page de profil utilisateur : la nouvelle liste des groupes.
  </figcaption>
</figure>

Sur la page de profil de l’utilisateur, une liste de ses groupes est désormais visible (peut être désactivée).
La conception et le fonctionnement de ces listes, y compris sur les profils de groupe, ont également été améliorés.

## Aperçu du profil

<figure class="blog-post-image">
  <img src="/blog/release-3.18-user-profile-group-overlay--en.png" alt="Aperçu du profil de groupe" />
  <figcaption class="blog-post-image-capture">
    Aperçu d'un profil de groupe.
  </figcaption>
</figure>

En survolant un nom d’utilisateur ou de groupe, un aperçu remanié du profil apparaît désormais – désormais aussi pour les groupes.

## Point fort : le nouveau système de branding

Jusqu’ici, les opérateurs ne pouvaient pas personnaliser eux-mêmes l’apparence d’un réseau.
Pour toute modification, ils dépendaient d’un administrateur de serveur.
Avec cette nouvelle version, la première grande pierre a été posée pour modifier le design et d’autres paramètres en direct par ses propres moyens. 💚

<figure class="blog-post-image">
  <img src="/blog/release-3.18-settings-branding--en.png" alt="Paramètres de branding" />
  <figcaption class="blog-post-image-capture">
    Dans les paramètres, les brandings disponibles peuvent être sélectionnés et à l'avenir aussi modifiés directement.
  </figcaption>
</figure>

Description détaillée pour les personnes intéressées par les aspects techniques :

- *Le branding comme paquet à part entière* – le schéma, les valeurs par défaut et leur résolution vivent au même endroit, partagé par le backend et la webapp. Des valeurs comme les limites de groupe, les métadonnées, les logos, les menus ou les couleurs du thème ne peuvent plus diverger.
- *Des paquets de branding au lieu d’une configuration figée* – une marque est compilée en archive puis chargée dans le réseau en fonctionnement.
- *Composition dans l’administration* – un paquet complet sert de base, tandis que des zones individuelles (logos, thème, menu, textes …) peuvent être surchargées indépendamment ou réinitialisées aux valeurs par défaut du framework.
- *Traductions propres à chaque marque* – des fichiers de langue entiers ou des zones fonctionnelles précises peuvent être surchargés.
- *Vérification du schéma* – si un paquet de branding ne correspond pas à la version en cours, vous en êtes averti au lieu d’une rupture silencieuse.
- *La page de maintenance et les e-mails* utilisent désormais le même branding que le reste du réseau.

## Pour les opérateurs de réseau

- 🚫 *Les groupes peuvent être désactivés* – les réseaux sans fonctionnalité de groupes la masquent désormais entièrement
- 🔗 *Les liens vers les réseaux sociaux peuvent être désactivés* – lier des profils externes est optionnel
- 🏷️ *Renommer les rôles* – les rôles peuvent être adaptés au vocabulaire de votre propre communauté
- ⚠️ *Conflits d’édition* – les modifications simultanées des rôles et des politiques sont détectées et résolues proprement au lieu de s’écraser mutuellement
- 🔧 L’onglet de configuration système fonctionne à nouveau correctement

## Pour les développeurs

- 📖 *Documentation de l’API* – l’interface GraphQL est désormais documentée
- 🧪 Une meilleure couverture de tests dans la webapp et une chaîne de CI dédiée au paquet de branding

## Corrections de bugs

- Les avatars vidéo s’affichent correctement, leur navigation est corrigée
- Champs de localisation et leurs menus corrigés, textes d’aide en double supprimés
- Les listes sur les pages de profil sont filtrées correctement
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
