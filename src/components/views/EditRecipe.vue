<template>
    <div class="container m-auto w-50">
      <h1 class="mt-3 text-center text-primary">Modifier la recette</h1>
      <RecipeForm :initial-recipe="recipe" @submit="onSubmit" v-if="recipe" />
    </div>
  </template>
  
  <script setup>

  import { useRoute, useRouter } from 'vue-router';
  import { useRecipeStore } from '../store/recipeStore';
  import RecipeForm from '../recettes/RecipeForm.vue';
  
  const route = useRoute();
  const router = useRouter();
  const store = useRecipeStore();
  
  const recipe = store.getRecipeById(parseInt(route.params.id)); 
  
  const onSubmit = () => {
    router.push('/');
  }
  </script>

