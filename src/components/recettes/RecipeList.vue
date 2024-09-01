<template>
    <div>
      <h2 class="recipe-list-title">Liste des recettes</h2>
    <div class="d-flex justify-content-start mb-3">
      <router-link to="/add" class="btn btn-primary">
        Ajouter une recette
      </router-link>
    </div>
      <div class="contact-list-table">
        <table class="table table-hover table-bordered">
          <thead>
            <th scope="col">Identifiant</th>
            <th scope="col">Titre</th>
            <th scope="col">Ingrédients</th>
            <th scope="col">Type</th>
            <th scope="col">Action</th>
          </thead>
          <tbody>
            <tr v-if="recipes.length === 0">
              <td colspan="5">Pas de donnees</td>
            </tr>
            <tr v-for="recipe in recipes" :key="recipe.id">
              <td scope="row">{{ ` ${recipe.id}` }}</td>
              <td>{{ recipe.title }}</td>
              <td>{{ recipe.ingredients }}</td>
              <td>{{ recipe.type }}</td>
              <td>
                <router-link :to="{ name: 'recipe-details', params: { id: recipe.id } }" class="btn btn-sm btn-primary me-2">
                  <font-awesome-icon icon="eye" />
                </router-link>
                <router-link :to="{ name: 'recipe-edit', params: { id: recipe.id } }" class="btn btn-sm btn-secondary me-2">
                  <font-awesome-icon icon="edit" />
                </router-link>
                <button @click="deleteRecipe(recipe.id)" class="btn btn-sm btn-outline-danger">
                  <font-awesome-icon icon="trash" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRecipeStore } from '../store/recipeStore';
  import { storeToRefs } from 'pinia';
  
  const store = useRecipeStore();
  const { recipes } = storeToRefs(store);
  
  const deleteRecipe = (id) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette recette ?')) {
      store.deleteRecipe(id);
    }
  }
  </script>
  
  <style scoped>
  .recipe-list-title {
    margin-top: 80px;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center; 
  }
  </style>
  