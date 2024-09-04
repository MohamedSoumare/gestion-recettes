<template>
    <div class="container m-auto w-50">
          <h1 class="mt-3 text-center text-primary">Ajouter une recette</h1>
         <RecipeForm @submit="onSubmit" />
    </div>
</template>
  
<script setup>
  import { useRouter } from 'vue-router'
  import RecipeForm from '../recipe-item/RecipeForm.vue'
  
  const router = useRouter()
  
  const onSubmit = () => {
    router.push('/list')
}

</script>