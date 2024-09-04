<template>
  <div class="recipe-form-container d-flex flex-column justify-content-center align-items-center min-vh-100">
    <div class="form-card shadow-lg p-5 rounded">
      <form @submit.prevent="onSubmit" class="w-100">
        <div class="mb-4">
          <label for="title" class="form-label fw-bold">Titre</label>
          <input
            v-model="recipe.title"
            type="text"
            class="form-control form-control-lg"
            id="title"
            placeholder="Entrez le nom de la recette"
            required
          />
        </div>
        <div class="mb-4">
          <label for="ingredients" class="form-label fw-bold">Ingrédients</label>
          <textarea
            v-model="recipe.ingredients"
            class="form-control form-control-lg"
            id="ingredients"
            rows="5"
            placeholder="Listez les ingrédients séparés par des virgules"
            required
          ></textarea>
        </div>
        <div class="mb-4">
          <label for="type" class="form-label fw-bold">Type</label>
          <select
            v-model="recipe.type"
            class="form-select form-select-lg"
            id="type"
            required
          >
            <option value="entrée">Entrée</option>
            <option value="plat">Plat</option>
            <option value="dessert">Dessert</option>
          </select>
        </div>
        <button type="submit" class="btn btn-lg btn-primary w-100">
          {{ recipe.id ? 'Modifier recette' : 'Ajouter reccette' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRecipeStore } from '../../store/recipeStore';

const props = defineProps({
  initialRecipe: {
    type: Object,
    default: () => ({ title: '', ingredients: '', type: 'plat' }),
  },
});

const recipe = ref({ ...props.initialRecipe });
const store = useRecipeStore();

const emit = defineEmits(['submit']);

const onSubmit = () => {
  if (recipe.value.id) {
    // Si un ID est présent, on est en mode édition
    store.updateRecipe(recipe.value.id, recipe.value);
  } else {
    // Sinon, on ajoute une nouvelle recette
    store.addRecipe(recipe.value);
  }
  emit('submit');
};
</script>

<style scoped>
.recipe-form-container {
  background: linear-gradient(to right, #151514, #f4f2f2);
  padding: 2rem;
}

.form-card {
  background: #fff;
  max-width: 600px;
  width: 100%;
  border-radius: 15px;
}

.form-label {
  color: #6c757d;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #22ff00;
  border-color: #004085;
}
</style>
