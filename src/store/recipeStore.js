import { defineStore } from "pinia";
import { reactive } from "vue"; 

export const useRecipeStore = defineStore('recipe', {
  state: () => ({
    recipes: [
      {
        id: 1,
        title: "Quiche Lorraine",
        ingredients: "Pâte brisée, Lardons , Crème fraîche ,OEufs, Fromage râpé, Sel, poivre et Puscade",
        type: "Plat",
      },
      {
        id: 2,
        title: "Crêpes Sucrées",
        ingredients: "Farine, Œufs, Lait, Beurre fondu et Une pincée de sel",
        type: "Dessert",
      },
      {
        id: 3,
        title: "Soupe à l'Oignon",
        ingredients: "Oignons, Bouillon de bœuf, Beurre, Farine, Pain grillé, Fromage râpé, Sel et Poivre",
        type: "plat",
      },
    ],  
  }),
  actions: {
    generateUniqueId() {
      return this.recipes.length ? Math.max(...this.recipes.map(r => r.id)) + 1 : 1;
    },
  
    addRecipe(recipe) {
      const newId = this.generateUniqueId();
      this.recipes.push({ ...recipe, id: newId });
    },
  
    updateRecipe(id, updatedRecipe) {
      const index = this.recipes.findIndex(r => r.id === id);
      if (index !== -1) {
        this.recipes[index] = { ...updatedRecipe, id };
      }
    },
  
    deleteRecipe(id) {
      this.recipes = this.recipes.filter(r => r.id !== id);
    },
  },
  
  getters: {
    getRecipeById: (state) => (id) => state.recipes.find(r => r.id === id),
  },
});