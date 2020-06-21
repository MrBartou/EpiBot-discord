# Epi-bot Discord

[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)  ![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/MrBartou/Epibot-discord?include_prereleases) ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/MrBartou/EpiBot-discord/discord.js) ![GitHub last commit](https://img.shields.io/github/last-commit/MrBartou/EpiBot-discord) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


Bot discord pour le serveur d'acceuil des Tek0 (promo 2025) à Epitech Toulouse

  - Language Javascripts
  - Configuration JSON
  - Utilisation de node JS

# Realease V1 (Mai 2020)

  - Bot 100% fonctionnel
  - Configurable à 100%
  - Auto role dès l'arrivé
  - Message de bienvenue
  - Events de base pour les logs du bot
  - Préfix configurable.

## Commandes

Les commandes implémenté sur le bot :

* [userinfo]() - Donne les infos sur l'utilisateur.
* [serverinfo]() - Donne les infos du serveur.
* [help]() - Envoi un message en DM avec les commandes du bot.
* [clear]() - Supprime le nombre de message écrit en argument.
* [ping]() - Donne le ping du serveur.
* [kick]() - Kick un utilisateur du serveur.
* [reload]() - Recharge la commande mise en argument.
* [uptime]() - Donne le temps de connexion du bot.
* [say]() - Éris le message donner en argument.
* [shutdown]() - Étein le bot completement.
* [rps]() - Jeu du Pierre, Feuille, Ciseaux.
* [quiz]() - Jeu de quiz avec une nombre de question variable.
* [myxp]() - Donne le nombre de xp de l'utilisateur.
* [addxp]() - Ajoute un nombre donné d'xp a un utilisateur.

## Configuration

Avant de démarer le bot il vous faut le configurer pour cela rendez vous dans ces fichiers et suivez les indications.

| Fichier | Action |
| ------ | ------ |
| main.js | [Changer l'ID de l'auto-role]() |
| config.json | [Changer le Token et le préfix]() |
| quiz.js | [Ajouez et créer les questions que vous voulais]() |
| reload.js | [Changer l'ID de la personne qui peut reload]() |
| shutdown.js | [Changer l'ID de la personne qui peut shutdown]() |

## Installation

Il est impératif d'installer [Node.js](https://nodejs.org/) pour lancer le bot.

Installer les indépendances pour utiliser le bot à 100%.

```sh
$ cd Epibot-discord
$ npm i
```

Pour lancer le bot il suffit ensuite de modifier les parties modifiables puis :

```sh
$ node main.js
```

## Todo

Le bot n'est pas encore fini.

Plusieurs Update sont encore prévue et plusieurs feature sont en cours de préparation.

Vous pouvais toujours nous contacter pour proposer des feature.

Feature 1:
```sh
Ajout des plugins de musique
```

Feature 2:
```sh
Systeme économie complet
```

Feature 3:
```sh
Auto bot de modération
```

## Contact

Vous avez des idées, faire remonté des bug, aider dans le développement ?

- [Github](https://github.com/MrBartou/)
- [linkedin](https://www.linkedin.com/in/anthony-denin/)


License
----

**Licence publique Creative Commons Attribution - Utilisation non commerciale - Partage dans les mêmes conditions 4.0 International**


Free Software, Hell Yeah!
