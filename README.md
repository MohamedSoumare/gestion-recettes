# Gestionnaire de Recettes

## Table des matières
1. [Description](#description)
2. [Fonctionnalités](#fonctionnalités)
3. [Technologies utilisées](#technologies-utilisées)
4. [Prérequis](#prérequis)
5. [Installation](#installation)
6. [Utilisation](#utilisation)
7. [Déploiement](#déploiement)
8. [Docker](#docker)
9. [Contribution](#contribution)
10. [Licence](#licence)
11. [Auteur](#auteur)
12. [Contact](#contact)




## Description

Cette application de gestion de recettes permet aux utilisateurs d'ajouter, modifier, supprimer et visualiser des recettes de cuisine.

## Fonctionnalités

- Ajout de nouvelles recettes
- Modification de recettes existantes
- Suppression de recettes
- Affichage de la liste des recettes

## Technologies utilisées

- Vue.js 3 avec Composition API
- Pinia pour la gestion d'état
- Bootstrap pour le style
- Vite comme outil de build
- Node.js
- Vercel pour le déploiement
- Docker et Docker Hub pour la conteneurisation et la publication de l'image

## Prérequis

- Node.js installé sur votre machine
- Compte Vercel pour le déploiement
- Compte Docker Hub pour la publication de l'image Docker



## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/MohamedSoumare/gestion-recettes.git
   ```

2. Naviguez jusqu'au répertoire du projet :
   ```bash
   cd gestion-recettes
   ```
3. Installez les dépendances :

   ```bash
    npm install            
   ```
   
   ```bash
     npm install vue-router@4              
   ```
   
   ```bash
    npm install bootstrap@5                 
   ```

   ```bash
    npm pinia                 
   ```

4. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```

## Utilisation

- Accédez à l'application via l'URL fournie après le déploiement sur Vercel.
- Utilisez l'interface pour ajouter, modifier, supprimer et visualiser vos recettes.


## Déploiement

L'application est déployée sur Vercel. Pour déployer vos propres modifications :

1. Créez un compte sur Vercel si ce n'est pas déjà fait
2. Connectez votre dépôt GitHub à Vercel
3. Suivez les instructions fournies par Vercel pour déployer l'application

## Docker

Pour exécuter l'application dans un conteneur Docker :

1. Construisez l'image :
   ```bash
   docker build -t med4949/gestion-recettes .
   ```

2. Lancez le conteneur :
   ```bash
   docker run -p 8080:80 med4949/gestion-recettes
   ```

L'application sera accessible à l'adresse `http://localhost:8080`.

## Contribution

Les contributions sont les bienvenues ! Voici comment procéder :

1. Forkez le dépôt
2. Créez une branche pour votre fonctionnalité ou correctif (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commitez vos changements (`git commit -m 'Ajout de nouvelle fonctionnalité'`)
4. Poussez votre branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Créez une Pull Request

## Licence

Ce projet est sous licence [MIT](https://choosealicense.com/licenses/mit/).

## Auteur

[MohamedSoumare](https://github.com/MohamedSoumare)

## Contact

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue sur le dépôt GitHub du projet.
