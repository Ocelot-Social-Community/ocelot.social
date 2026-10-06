---
home: false
article: true
sidebar: false
lang: fr-FR
date: 2026-10-06
category:
  - Releases
tag:
  - Releases
  - Cartes
  - Événements
  - Groupes
  - Vidéo
cover: /blog/ocelot-social-release-v3-19+20.png
coverAlt: "Ocelot.social version 3.19 Map Cat"
title: "Ocelot.social 3.19+20 « Map Cat » – Où se passe quoi ? Plus de cartes pour mieux s'orienter 🗺️"
description: "Avec ocelot.social 3.19 « Map Cat », tu vois sur plus de pages où se passe quoi : des cartes pour les événements, les utilisateurs et les groupes, un nouveau design pour les pop-ups et une légende pour la carte générale. Cet article résume aussi les améliorations plus modestes de la version 3.20."
---

<!-- markdownlint-disable no-inline-html first-line-heading -->

Avec *ocelot.social* 3.19 « Map Cat », tu vois sur plus de pages où se passe quoi. Cette version vise surtout à rendre les événements, les utilisateurs et les groupes visibles sur des cartes, et à les y modifier plus facilement. 💚

De nombreuses autres améliorations et modifications techniques ont également été apportées. Tu en trouveras le détail dans cet article, y compris les améliorations plus modestes de la version suivante, la 3.20.

## Cartes

### Événements

- Création et modification, désormais avec une carte : placer et déplacer l’emplacement exact avec la souris
- Vue de l’événement : carte avec l’emplacement pour la consultation, avec un lien vers la carte générale

<!-- TODO: capture d'écran événement avec carte : /blog/release-3.19-event-map--fr.png -->

### Utilisateurs et groupes

- Création et modification, désormais avec une carte : l’emplacement peut désormais être placé et déplacé à la souris, avec une précision au quartier près
- Carte avec l’emplacement sur le profil de l’utilisateur ou du groupe, avec un lien vers la carte générale

<!-- TODO: capture d'écran profil avec carte : /blog/release-3.19-profile-map--fr.png -->

### Carte générale

- Placer un pin d’événement directement sur la carte pour créer un événement
- Nouveau design pour les pop-ups
- Légende : afficher et masquer les calques, afficher les événements passés

<!-- TODO: capture d'écran carte générale avec légende : /blog/release-3.19-main-map-legend--fr.png -->

## Création et modification des publications et des profils

Pour les publications, les utilisateurs et les groupes :

- meilleure validation des données saisies, avec des retours compréhensibles
- avertissement en cas de modifications non enregistrées en quittant la page

## Appels vidéo

- icône de microphone sur les vignettes vidéo : qui est en sourdine se voit désormais clairement
- le son est conservé lors de la désactivation de la caméra : plus de perte de son pendant les appels vidéo

## Aperçu des publications – fil d’actualité

Affichage nettement plus rapide : le logiciel a été considérablement optimisé sur ce point.

## Sous le capot

### Une nouvelle fondation

Beaucoup de choses ont été rangées en coulisses dans cette version, ce qui se ressent sur la rapidité et la stabilité. Voici le détail pour les personnes intéressées par la technique :

- déclaration de schéma propre dans le backend : les anciennes bibliothèques de base de données (neode, neo4j-graphql-js) ont entièrement disparu
- backend migré vers des modules modernes : tests migrés de Jest vers Vitest et parallélisés
- migration de yarn vers npm, images Docker plus légères, compatibilité Node 26
- releases et changelog automatisés : les versions et notes de version sont désormais générées directement à partir des commits
- davantage de couverture de tests, et une vérification automatique des changements visuels non désirés de l’interface

## Corrections de bugs et nettoyage

- les notifications dans les groupes masqués fonctionnent de nouveau correctement
- l’aperçu de la description du groupe est corrigé
- les favicons sont servis correctement
- les liens vers les réseaux sociaux que le navigateur ne doit pas suivre ne sont plus du tout rendus
- des tests e2e plus stables
- des chaînes Docker et CI réparées
- ainsi que de nombreuses mises à jour de dépendances pour la sécurité et la stabilité

## En complément : la version 3.20 — des améliorations plus modestes

Peu après la 3.19, la version 3.20, plus modeste, a suivi : elle affine quelques points et pose les bases des futures permissions de groupe.

- *Créer un groupe* – le type de groupe se choisit désormais via des cartes plutôt qu’une liste déroulante ; les types non sélectionnables sont affichés avec leur raison, au lieu d’être simplement absents
- *Emplacements* – le profil affiche de nouveau l’endroit réellement sélectionné, au lieu du quartier où le pin se trouve par hasard ; le champ d’emplacement ne se vide plus lorsque les résultats de recherche arrivent en retard
- *Boutons* – les boutons primaires et de danger pleins s’assombrissent désormais au survol, au lieu de s’estomper vers une teinte claire à peine lisible
- *Traductions* – chaque langue utilise désormais ses propres guillemets, avec en plus diverses corrections de traduction et de grammaire
- également corrigé : le bouton cœur surdimensionné sur les commentaires et un tiret superflu en fin d’adresse des nouvelles publications

### Sécurité

Une faille dans `JoinGroup` permettait d’indiquer n’importe quel `userId` sans vérification : n’importe quelle personne connectée aurait pu ainsi ajouter quelqu’un d’autre à un groupe public, ou déposer en son nom une demande d’adhésion à un groupe fermé. Désormais, seuls l’administration ou le propriétaire du groupe peuvent le faire.

### Pour les administrateurs de réseau et les développeurs

- `Group.groupType` est désormais déprécié en tant que champ ; les nouvelles intégrations devraient utiliser `Group.visibility` (mêmes trois valeurs)
- l’image MinIO s’exécute désormais sans droits root en développement et en test (base Chainguard) ; les volumes de données locaux existants nécessitent un changement de propriétaire unique (chown)
- des sauts de version majeurs pour certaines dépendances, dont @sentry/node

## Journal des modifications complet

Tu trouveras tous les détails dans le [journal des modifications](https://github.com/Ocelot-Social-Community/Ocelot-Social/blob/master/CHANGELOG.md), ainsi que dans les notes de version de la [3.19.0](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.19.0) et de la [3.20.0](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.20.0).

## Et ensuite ?

Comme toujours, tu trouveras les prochaines étapes prévues sur notre [feuille de route](/fr/roadmap/).

## Soutenir ocelot.social

Le logiciel libre vit grâce à toi et à la communauté. Si tu apprécies *ocelot.social*, ton soutien continue de nous faire plaisir :

- [Faire un don](/fr/donate/)
- [Participer](/fr/contribute/)
- [Gérer ton propre réseau](/fr/get-started/)
