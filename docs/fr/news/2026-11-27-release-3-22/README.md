---
home: false
article: true
sidebar: false
lang: fr-FR
date: 2026-11-27
category:
  - Releases
tag:
  - Releases
  - Mode sombre
  - Vidéo
  - Chat
  - Confidentialité
cover: /blog/ocelot-social-release-v3-22.png
coverAlt: "Ocelot.social version 3.22 Night Watch"
title: "Ocelot.social 3.22 « Night Watch » – Mode sombre, et les appels vidéo prennent de l’envergure 🌙"
description: "Avec ocelot.social 3.22 « Night Watch », le réseau reçoit un mode sombre, les appels vidéo reçoivent une liste des participants, leur propre chat et une place à côté du fil – et les groupes fermés et les blocages sont désormais appliqués côté serveur."
---

<!-- markdownlint-disable no-inline-html first-line-heading -->

Les ocelots sont des animaux nocturnes – et avec *ocelot.social* 3.22 « Night Watch », ton réseau peut l’être aussi : il y a enfin un mode sombre. Les appels vidéo font eux aussi un grand pas en avant, et en coulisses, c’est désormais le serveur qui veille sur les groupes fermés et les blocages, au lieu de laisser cela aux formulaires. 💚

## En vedette : le mode sombre

<!-- TODO: screenshot dark mode: /blog/release-3.22-dark-mode--fr.png -->

- Tout le réseau – pages, chat, appels vidéo et cartes – existe désormais dans un thème sombre, avec un interrupteur pour choisir entre clair et sombre.
- Les navigateurs plus anciens reçoivent eux aussi le thème sombre.
- Les surfaces et rubans colorés sont assombris juste assez pour rester faciles à lire.
- Chaque réseau décide lui-même s’il propose le mode sombre : un réseau avec sa propre image de marque reste clair jusqu’à ce qu’il active le mode sombre.

## Appels vidéo

- L’appel occupe beaucoup plus d’espace à l’écran et peut passer en plein écran.
- Une liste des participants, avec un filtre, montre qui est dans l’appel – et c’est là que l’appel est modéré.
- Chaque appel a son propre chat, partagé uniquement par les personnes présentes dans l’appel, et téléchargeable ensuite.
- Les appels en cours s’affichent dans un dock à côté du fil, pour voir d’un coup d’œil où l’on discute.
- Tu choisis la qualité vidéo qu’un appel envoie et reçoit.
- Quand ton ordinateur n’arrive plus à suivre, les caméras s’effacent et te le disent – et tu peux annuler cela.
- Le son d’un partage d’écran est désormais audible, une personne qui parle et n’atteignait plus une personne qui écoute est reconnectée, et le micro continue d’émettre pendant les pauses de parole, ce qui rend le son plus fiable (réglable par réseau et par appel).

## Chat

- Chaque chat conserve le message que tu as commencé sans l’envoyer.
- Un bouton t’amène au plus ancien message non lu.
- Un message dans le chat de groupe parvient désormais en direct à chaque membre – même à deux membres qui se bloquent ou se masquent mutuellement.

## Écriture

- Ctrl+K (Cmd+K sur Mac) ouvre la saisie de lien – au niveau du texte sélectionné ou, si rien n’est sélectionné, à la position du curseur.
- La barre de menu de l’éditeur reste visible pendant que tu écris de longs textes.
- Les mentions et hashtags inachevés sont signalés.
- La légende des raccourcis clavier affiche les touches de ton système.

## Notifications

Une nouvelle publication, ou un commentaire qui te mentionne dans une publication que tu suis, n’apparaît plus qu’une fois – au lieu d’une fois par motif.

## Droits et rôles

- Un rôle disposant de `role.manage` peut désormais façonner librement tous les rôles sauf celui de propriétaire.
- Les rôles fixes du réseau s’affichent traduits.
- La page des rôles peut abandonner les modifications non enregistrées.
- L’enregistrement des droits d’un groupe avertit avant d’accorder – ou d’abandonner – le droit de modifier les rôles.

## Confidentialité : groupes fermés et blocages

- Le contenu d’un groupe fermé ou caché pouvait être atteint en contournant le groupe de plusieurs façons. Ces dix chemins sont désormais fermés, et qui quitte un tel groupe ne lit plus ses commentaires et n’en est plus notifié.
- Un blocage met désormais fin aux commentaires et au chat direct côté serveur, et pas seulement dans le formulaire.
- Les mises à jour en direct revérifient tes droits au bout de 30 secondes, et immédiatement lorsqu’ils changent – un droit que tu as perdu ne continue donc plus à livrer des mises à jour en direct.

## Corrections

- Un groupe peut de nouveau être enregistré sur un réseau sans catégories.
- Les avatars gardent leurs initiales lisibles pendant le chargement de leur image.
- Les info-bulles affichent leur contenu sous forme de texte.
- De petites corrections sur les espacements des formulaires, les intitulés des champs et ce qui reste collé sous l’en-tête.

## Sous le capot

- Les tests du serveur tournent désormais sur Redis, et un nouveau test fait fonctionner deux serveurs avec un même Redis. Il a trouvé trois bugs, tous corrigés : une panne de Redis arrêtait le serveur, des nombres arrivaient déformés à travers Redis, et deux serveurs démarrant en même temps pouvaient entrer en collision.
- Une instance du serveur qui a manqué une modification des politiques ou des rôles du réseau la rattrape en moins d’une minute.
- Les commentaires et les requêtes de groupes interrogent moins souvent la base de données.
- Le serveur vérifie désormais ce que seuls les formulaires vérifiaient : catégories, slugs d’utilisateur et longueur des noms de groupe. Les limites des titres de publication se règlent par réseau.
- TypeScript 6 dans le backend et sur la page de maintenance.

## Pour les développeurs

- Les champs ActivityPub `User.actorId`, `User.publicKey`, `Post.activityId`, `Post.objectId` et `Comment.activityId` sont dépréciés ; les proxys `/.well-known/webfinger` et `/activitypub` de la webapp sont supprimés
- Les mutations refusent les catégories inconnues, les slugs d’utilisateur invalides et les noms de groupe hors des limites de longueur de la marque
- Les migrations s’exécutent automatiquement au lancement : les notifications en double sont réduites à une par publication ou commentaire et par destinataire, et le rôle `admin` de chaque groupe et de chaque modèle de rôles de groupe reçoit le nouveau droit `group.videoCall.moderate`
- nouvelle politique `videoCallDtx`, `false` par défaut
- `packages/ui` 0.0.9 (OsDrawer, boîte de dialogue de confirmation, tailles de modale), `packages/branding` 0.2.5

## Pour les administrateurs de réseau

Deux changements bloquent un déploiement si tu les manques :

- **`PRODUCTION_DB_CLEAN_ALLOW` s’appelle désormais `DB_WIPE_ALLOWED`.** La réinitialisation et le peuplement de la base de données n’effacent que là où `DB_WIPE_ALLOWED="true"` ; `NODE_ENV` ne décide plus. Un staging qui repeuple renomme la variable, la production la supprime simplement.
- **Les dépôts de marque passent de `branding/` à `brandings/<nom>/`** (plus `overlays/` pour le code et les données). Un dépôt dans l’ancienne structure ne se construit plus. Un dépôt peut désormais contenir plusieurs marques ; s’il y en a plus d’une, définis `OCELOT_ACTIVE_BRANDING`.

Bon à savoir également :

- Le mode sombre est optionnel par marque : `theme.colorScheme: 'light dark'`. Une marque peut aussi définir le style de carte pour chaque thème.
- La webapp tourne désormais avec deux réplicas et un PodDisruptionBudget, si bien que le drainage d’un nœud ne provoque plus de courte interruption – au prix du double de mémoire pour la webapp. `webapp.replicas: 1` conserve l’ancien comportement ; un cluster à un seul nœud définit `webapp.podDisruptionBudget: false`.

Toutes les étapes sont décrites dans [`deployment/TODO-next-update.md`](https://github.com/Ocelot-Social-Community/Ocelot-Social/blob/master/deployment/TODO-next-update.md).

## Journal des modifications complet

Tu trouveras tous les détails dans le [journal des modifications](https://github.com/Ocelot-Social-Community/Ocelot-Social/blob/master/CHANGELOG.md), ainsi que dans les notes de version de la [3.22.0](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.22.0).

## Et ensuite ?

Comme toujours, tu trouveras les prochaines étapes prévues sur notre [feuille de route](/fr/roadmap/).

## Soutenir ocelot.social

Le logiciel libre vit grâce à toi et à la communauté. Si tu apprécies *ocelot.social*, ton soutien continue de nous faire plaisir :

- [Faire un don](/fr/donate/)
- [Participer](/fr/contribute/)
- [Gérer ton propre réseau](/fr/get-started/)
