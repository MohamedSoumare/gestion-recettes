# Gestionnaire de Recettes

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
- Node.js installé
- Compte Vercel pour le déploiement
- Compte Docker Hub pour la publication de l'image Docker

## Installation

```bash
       git clone https://github.com/MohamedSoumare/gestion-recettes.git
```

- Naviguez jusqu'au répertoire du projet :

```bash
cd gestion-recettes
```
2. Installez les dépendances : `npm install`
3. Lancez le serveur de développement : `npm run dev`

## Déploiement

L'application est déployée sur Vercel. Pour déployer vos propres modifications, suivez ces étapes :

1. Créez un compte sur Vercel
2. Connectez votre dépôt GitHub à Vercel
3. Suivez les instructions pour déployer l'application

## Docker

Pour exécuter l'application dans un conteneur Docker :

1. Construisez l'image : `docker build -t recipe-manager .`
2. Lancez le conteneur : `docker run -p 8080:80 recipe-manager`

L'application sera accessible à l'adresse `http://localhost:8080`.

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.