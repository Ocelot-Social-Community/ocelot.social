---
home: false
article: true
sidebar: false
lang: fr-FR
date: 2026-10-13
category:
  - Releases
tag:
  - Releases
  - Groupes
  - Permissions
  - Confidentialité
  - Vidéo
cover: /blog/ocelot-social-release-v3-21.png
coverAlt: "Ocelot.social version 3.21 Pack Leader"
title: "Ocelot.social 3.21 « Pack Leader » – Droits de groupe : qui peut faire quoi dans ton groupe ? 🐾"
description: "Avec ocelot.social 3.21 « Pack Leader », chaque groupe reçoit son propre système de droits : des rôles configurés à partir de modèles décident qui peut trouver, lire, rejoindre, publier dans ou inviter vers un groupe. S'y ajoutent des améliorations des appels vidéo et des mentions, ainsi qu'un avis important sur la confidentialité des cris (shouts)."
---

<!-- markdownlint-disable no-inline-html first-line-heading -->

Avec *ocelot.social* 3.21 « Pack Leader », de simples noms de rôles deviennent un véritable système de droits pour les groupes. Ce que la version 3.20 avait déjà préparé est désormais entièrement câblé : dans chaque groupe, ce ne sont plus les noms de rôles ou le type de groupe qui décident, mais des droits concrets, attribués individuellement. 💚

Tu trouveras le détail dans cet article, y compris les corrections de la version 3.21.1, sortie juste après.

## En vedette : la gestion des droits de groupe

Chaque groupe dispose désormais de rôles avec leurs propres droits, configurés à partir d’un modèle fourni par le réseau.

<!-- TODO: capture d'écran onglet droits d'un groupe : /blog/release-3.21-group-rights-tab--fr.png -->

- Dans le nouvel espace *Droits* des paramètres du groupe, tu peux définir ce que chaque rôle a le droit de faire : trouver le groupe, le lire, le rejoindre, y publier, y inviter… une liste détaillée par rôle, présentée dans une vue simple
- Les rôles des membres peuvent être modifiés
- Un administrateur du réseau peut entrer dans un groupe en indiquant un motif, pour administrer un groupe qui a perdu son propriétaire
- Les administrateurs de groupe obtiennent des modèles de rôles valables pour tout le réseau, ainsi qu’une liste de tous les groupes qu’ils peuvent gérer
- Quitter une page avec des modifications non enregistrées de droits, de rôles ou de configuration demande désormais si tu veux les abandonner

## Appels vidéo

- La caméra, le microphone et le haut-parleur peuvent désormais être changés en cours d’appel
- Rejoindre un appel est plus rapide, chaque vignette affiche la qualité de connexion, et sur une liaison faible, l’appel bascule sur le son seul plutôt que de se couper
- Un navigateur qui bloque le son, ou un microphone qui ne délivre que du silence, est désormais signalé, avec un bouton pour corriger directement le problème

## Écriture : mentions et hashtags

- Les mentions et hashtags suggérés pendant la saisie sont désormais regroupés selon leur lien avec toi (impliqués dans la publication, membres du groupe, personnes suivies… tes propres hashtags, les populaires, les nouveaux)

## Des erreurs dans ta langue

Les erreurs remontées par le serveur s’affichent désormais traduites, avec la raison réelle.

## Confidentialité : cris (shouts) publics

⚠️ **Avis important pour les administrateurs de réseau :** le réglage `showShoutsPublicly` était enregistré depuis 2021 mais jamais réellement appliqué : les cris de tout le monde étaient visibles par tout le monde, quel que soit le réglage. C’est désormais corrigé, mais la nouvelle valeur par défaut est **publique**, et une migration passe toutes les personnes utilisatrices existantes en public, y compris celles qui avaient désactivé cette option.

Merci d’annoncer ce changement à ta communauté et d’orienter les personnes utilisatrices vers *Paramètres → Confidentialité* si elles souhaitent de nouveau restreindre leurs cris.

Par ailleurs : un rôle d’administration personnalisé sans les droits de participation d’une personne utilisatrice ordinaire (par exemple, un rôle qui ne peut que supprimer des comptes) ne pouvait auparavant agir sur personne. La hiérarchie entre personnes utilisatrices est désormais classée uniquement selon le niveau d’autorité, et un refus en indique la raison.

## Corrections de la 3.20.0 à la 3.21.1

- Les lieux au nom traduit n’étaient à tort plus acceptés dans une interface non anglaise
- Les aperçus de liens sans image fonctionnent de nouveau
- Divers dysfonctionnements autour des mentions et des commentaires ont été corrigés
- Une erreur serveur s’affichait à tort en visitant des pages sans le droit nécessaire
- L’indication concernant un droit de groupe plafonné par le réseau nomme désormais le droit réseau manquant
- Une page de groupe suit désormais un changement des droits réseau de la personne qui la consulte, sans rechargement

## Sous le capot

- Accès aux groupes : auparavant seulement les types de groupe et les noms de rôles, désormais une gestion détaillée des droits et des rôles, basée sur des modèles
- La possibilité de trouver un groupe se déduit désormais de ce que peut faire le rôle non-membre, au lieu d’un type de groupe enregistré
- Erreurs traduites : un registre central de codes explicites sur le serveur est traduit dans le navigateur
- Les suggestions de mentions et de hashtags sont interrogées pendant la saisie, au lieu d’être toutes chargées à l’avance
- La CI sur master est ignorée lorsque la file de fusion a déjà testé ce même commit
- Les images de base Docker Hub passent désormais par `mirror.gcr.io` au lieu d’être récupérées directement

## Pour les développeurs

- `groupType` disparaît entièrement : `Group.groupType`, l’énumération `GroupType` et les arguments `groupType` de `CreateGroup`/`UpdateGroup` sont supprimés. Utilise `template` à la création et `visibility` à la mise à jour. Nouvellement dépréciés : `Group.myRole` → `myGroupRole`, `ChangeGroupMemberRole` → `setGroupMemberRole`
- Des migrations s’exécutent automatiquement au lancement : les groupes existants passent sur des modèles de rôles et obtiennent leurs rôles, les rôles réseau enregistrés reçoivent les nouveaux droits de groupe, et les droits `videoCall.create_*` selon le type deviennent `videoCall.create_open` / `create_restricted`. Les cris deviennent publics pour toutes les personnes utilisatrices à cette occasion (voir l’avis de confidentialité ci-dessus)
- Contrat d’erreurs : les erreurs côté utilisateur portent désormais `extensions.errorCode` (et `params`) ; `message` reste en anglais. Les erreurs `PASSWORD_CHANGE_*` sont désormais `BAD_USER_INPUT` au lieu de `UNAUTHENTICATED`. Chaque événement nécessite un lieu de 3 à 100 caractères, et signaler sa propre publication ou son propre commentaire est refusé
- `CLIENT_URI` pour la webapp et la page de maintenance rend `og:image` absolue ; le chart Helm le définit à partir de `domain`, les autres déploiements devraient le régler sur l’origine propre de leur instance
- `CreateGroup`, `UpdateGroup` et `UpdateUser` acceptent désormais un `locationId` optionnel
- les jetons de participation aux appels vidéo expirent désormais au bout de 10 minutes au lieu de 2 heures
- des sauts de version majeurs : dotenv 17 → 18, tslog 4 → 5, vue-apollo 3.0.2 → 3.1.2
- nouveauté en 3.21.1 : `Group.networkPrerequisites` comme champ supplémentaire ; rien n’a été supprimé ni modifié

## Pour les administrateurs de réseau

Si tu fais tourner ton propre client contre l’API, la suppression de `groupType` et les nouveaux codes d’erreur sont les points à vérifier en premier. Si tu gères ton propre réseau, la migration des cris est le point à communiquer à tes utilisateurs.

## Journal des modifications complet

Tu trouveras tous les détails dans le [journal des modifications](https://github.com/Ocelot-Social-Community/Ocelot-Social/blob/master/CHANGELOG.md), ainsi que dans les notes de version de la [3.21.0](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.21.0) et de la [3.21.1](https://github.com/Ocelot-Social-Community/Ocelot-Social/releases/tag/3.21.1).

## Et ensuite ?

Comme toujours, tu trouveras les prochaines étapes prévues sur notre [feuille de route](/fr/roadmap/).

## Soutenir ocelot.social

Le logiciel libre vit grâce à toi et à la communauté. Si tu apprécies *ocelot.social*, ton soutien continue de nous faire plaisir :

- [Faire un don](/fr/donate/)
- [Participer](/fr/contribute/)
- [Gérer ton propre réseau](/fr/get-started/)
