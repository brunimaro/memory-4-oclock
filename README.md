# Jeu Memory 4 o'Clock

> Jeu de memory réalisé en HTML / CSS /JS
> BackEnd PHP pour enregistrement du score en base de donnée MySQL

- Au commencement du jeu, des cartes sont disposées face cachée à l'écran.
- Le joueur doit cliquer sur deux cartes. Si celles-ci sont identiques, la paire est validée. Sinon, les cartes sont retournées face cachée, et le joueur doit sélectionner une nouvelle paire de cartes.
- Un compteur de temps, avec une barre de progression, s’affiche en dessous du plateau.
- Le joueur gagne s'il arrive à découvrir toutes les paires avant la fin du temps imparti.
- Chaque temps de partie effectuée doit être sauvegardée en base de données.
- Avant le début du jeu, les meilleurs temps s’affichent à l’écran.

une démo est [disponible ici](https://memory.brunimaro.tk/)

## Installation

### 🧐 y'a quoi dedans ?

    .
    ├── src
    ├──── assets
    ├──────── css
    ├──────────── ajstyle.css
    ├──────────── style.scss
    ├──────── images
    ├──────────── cards.png
    ├──────── js
    ├──────────── ajax.js
    ├──────────── main.js
    ├──────── scss
    ├──── inc
    ├──────── create.php
    ├──────── functions.php
    ├──────── read.php
    ├──── favicon.ico
    ├──── index.php  
    ├──── score.sql
    ├── docker-compose.yml
    └── README.md

1. Installation de la base de données

Les infos de création de la table score sont disponiblles dans le fichier score.sql

```bash
CREATE TABLE `score` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `score` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

La configuration de la base de données est dans le fichier :

```bash
src/inc/functions.php
```

2. Fichiers du jeu

Toutes les sources du jeu se trouvent dans le dossier /src et doivent être installé dans un environnement LEMP pour fonctionner

*DOCKER*

Le fichier docker-compose.yml permet la configuration d'un environnement de développement Nginx, MySQL et PHP (LEMP) simple qui a été utilisé pour le développement de ce Memory.
