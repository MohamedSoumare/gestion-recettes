<template>
  <div class="recipe-details-container d-flex flex-column align-items-center min-vh-100 p-4">
    <div class="recipe-card bg-white shadow-lg rounded p-5 w-100">
      <h1 class="text-center text-primary mb-4">{{ recipe.title }}</h1>
      <p class="lead"><strong>Ingrédients :</strong> {{ recipe.ingredients }}</p>
      <p class="lead"><strong>Type :</strong> {{ recipe.type }}</p>
      
      <div class="d-flex justify-content-between mt-5">
        <router-link :to="{ name: 'recipe-edit', params: { id: recipe.id } }" class="btn btn-lg btn-secondary">
          Modifier
        </router-link>
        <router-link :to="{ name: 'recipe-list' }" class="btn btn-lg btn-outline-primary">
          Retour à la liste
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useRecipeStore } from '../store/recipeStore';

const route = useRoute();
const store = useRecipeStore();

const recipe = store.getRecipeById(parseInt(route.params.id)); // Charger la recette pour afficher les détails
</script>

<style scoped>
.recipe-details-container {
  background: linear-gradient(to right, #ffffff, #2e2b2b);
}

.recipe-card {
  max-width: 700px;
}

.lead {
  font-size: 1.25rem;
  color: #6c757d;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-outline-primary {
  color: #007bff;
  border-color: #007bff;
}

.btn-outline-primary:hover {
  background-color: #007bff;
  color: #fff;
}
</style>
