# Étape 1: Construire l'application Vue.js avec Node.js
FROM node:16-alpine AS build-stage

# Définir le répertoire de travail à l'intérieur du conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du projet
COPY . .

# Construire l'application pour la production
RUN npm run build

# Étape 2: Servir les fichiers statiques avec NGINX
FROM nginx:alpine AS production-stage

# Copier les fichiers construits depuis l'étape précédente dans le répertoire de NGINX
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Exposer le port 80 pour le serveur NGINX
EXPOSE 80

# Lancer NGINX
CMD ["nginx", "-g", "daemon off;"]
