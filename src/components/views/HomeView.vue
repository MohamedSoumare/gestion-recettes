<template>
    <div class="container mt-5">
      <div class="jumbotron text-center">
        <h1 class="display-4">Bienvenue sur l'application de Gestion de Recettes</h1>
        <p class="lead">
          Cette application a été conçue pour vous permettre de gérer vos recettes de cuisine de manière simple et intuitive. 
          Grâce à une interface conviviale et facile à utiliser, vous pouvez organiser vos recettes en toute simplicité.
        </p>
        <hr class="my-4">
        <p>
          Que vous soyez un chef expérimenté ou un cuisinier amateur, notre application vous offre les outils nécessaires pour 
          stocker, modifier, et consulter vos recettes préférées en un seul endroit.
        </p>
        <router-link class="btn btn-primary btn-lg mt-3" to="/add" role="button">Commencez à ajouter vos recettes</router-link>
      </div>
  
      <div class="row mt-5">
        <div class="col-md-4">
          <h3>Ajouter des recettes</h3>
          <p>
            Ajoutez facilement de nouvelles recettes en spécifiant le titre, les ingrédients et le type de recette (entrée, plat, dessert).
          </p>
        </div>
        <div class="col-md-4">
          <h3>Modifier des recettes</h3>
          <p>
            Modifiez vos recettes existantes pour les améliorer ou mettre à jour les informations à tout moment.
          </p>
        </div>
        <div class="col-md-4">
          <h3>Supprimer des recettes</h3>
          <p>
            Supprimez les recettes que vous n'utilisez plus pour garder votre collection organisée.
          </p>
        </div>
      </div>
  
      <div class="row mt-5">
        <div class="col-md-12 text-center">
          <h3>Visualiser toutes les recettes</h3>
          <p>
            Accédez à toutes vos recettes en un coup d'œil avec la possibilité de voir les détails de chaque recette.
          </p>
          <router-link class="btn btn-secondary btn-lg" to="/list" role="button">Voir la liste des recettes</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

  </script>
  
  <style>
  
  .container {
    max-width: 800px;
  }
  .jumbotron {
    background-color: #f8f9fa;
    padding: 2rem 2rem;
    border-radius: 0.3rem;
  }
  </style>
  