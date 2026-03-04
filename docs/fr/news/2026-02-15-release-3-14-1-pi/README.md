---
home: false
article: true
sidebar: false
lang: fr-FR
date: 2026-02-15
category:
  - Releases
tag:
  - Releases
  - Vue 3
  - Groupes
cover: /blog/ocelot-social-release-v3-14-1-pi.jpg
coverAlt: "Ocelot.social Version 3.14.1 – Pi"
title: "Ocelot.social Pi (3.14.1) est là – Épingler des publications dans les groupes"
description: "Avec ocelot.social Pi (3.14.1), les propriétaires et administrateurs de groupes peuvent épingler des publications. En plus, des corrections de bugs et le début de la migration vers Vue 3."
---

<!-- markdownlint-disable no-inline-html first-line-heading -->

Désormais, chaque version d'*ocelot.social* contenant des changements significatifs portera un nom de version.
Nous commençons par un nom dérivé du numéro de version actuel.

## Nouvelle fonctionnalité

Avec *ocelot.social* Pi (3.14.1), les propriétaires et administrateurs de groupes peuvent désormais épingler des publications dans leurs groupes.
Cela permet aux membres du groupe de voir immédiatement les publications importantes, comme les annonces et les événements.

Cela a été rendu possible grâce aux dons de notre [première campagne de financement participatif](/fr/news/2025-11-05-crowdfunding-feature-pinned-posts-in-groups/).
Un grand merci encore une fois à nos donateurs. C'est vous qui l'avez rendu possible !

## Corrections de bugs

- Le filtre de catégories fonctionne à nouveau correctement.
- L'affichage des paramètres de notification est de nouveau correct.
- Les liens erronés dans les e-mails de notification ont été corrigés.
- Les pages d'information (mentions légales, politique de confidentialité, etc.) fonctionnent à nouveau.

## Sous le capot

*Ocelot.social* utilise Vue.js en version 2 comme framework frontend, qui n'est plus à jour.
La migration vers Vue 3 est très complexe en raison des nombreux changements entre les versions, mais elle a été lancée avec *ocelot.social* Pi.

En raison de l'ampleur et de la complexité, une approche modulaire a été choisie permettant une migration progressive.
Dans un premier temps, tous les boutons ont été migrés et améliorés.

## Résumé du changelog

Résumé généré par IA des versions [3.14.0](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.14.0) et [3.14.1](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.14.1) :

### Features

- Group Pins — Les publications peuvent être épinglées dans les groupes (#9034)
- Commande de création d'administrateur pour la production (#9057)
- Script BD pour désactiver les notifications (#9131)
- Intégration de CodeRabbit pour les revues de PR (#9194)

### Migration Vue 3

- Phase 2 — Setup : Préparation des bases pour la migration (#9161)
- Phase 3 — Intégration : Bibliothèque UI intégrée dans la webapp (#9180)
- Migration des boutons : États icône, cercle et chargement migrés (#9208)
- Vue mis à jour vers 2.7.16 comme prérequis (#9160)

### UI Package (packages/ui)

- Règles ESLint extraites dans eslint-config-it4c (#9198, #9233)
- Classe CSS os-button pour la compatibilité de marque (#9211)

### Corrections de bugs

- Backend : Filtre de catégories réparé (#9209, #9123)
- Backend : Publications épinglées visibles même pour les utilisateurs masqués (#9200)
- Backend : Paramètres de notification pour currentUser (#9130)
- Backend : Encodage d'URL des e-mails (#9127)
- Backend : Permissions pour GroupInviteCodes (#9121)
- Backend : Requête du champ myRole de groupe (#9102)
- Webapp : Changement de langue sur les pages statiques (#9202)
- Webapp : Pages statiques disponibles sans connexion (#9201)
- Webapp : Chemin interne pour le bouton personnalisé (#9129)
- Webapp : Crash CTA-Join-Group lorsque le groupe n'est pas défini (#9103)
- Webapp : Tests frontend locaux (#9104, #9125)

### Refactoring

- Backend : Paramétrage de la requête de rapports + nettoyage du résolveur (#9156)
- Backend : Linting GraphQL (#8473)
- Backend : Modèle d'adhésion au groupe (#9124)
- Backend : Middleware before/after (#9128)
- Backend : Rôles de test (#9157)

### Workflow/CI

- Tests E2E exécutés en parallèle (#9205)
- Mise en cache des paquets (#9206)
- Nouveau scope PR package/ui (#9196)
- Corrections du workflow UI (#9204, #9207)
- Workflow d'approbation automatique supprimé (#9197)
- Versions Node.js consolidées (#9126)

~80 mises à jour de dépendances (Node, Nginx, AWS SDK, Cypress, etc.) omises.

## Dons

Si vous aimez *ocelot.social*, soutenez le développement et la maintenance de ce logiciel libre et open-source par un don à [busFaktor() e.V.](/fr/donate/).

## Soutenez *ocelot.social*

- [Contribuer](/fr/contribute/)
- [Faire un don](/fr/donate/)
