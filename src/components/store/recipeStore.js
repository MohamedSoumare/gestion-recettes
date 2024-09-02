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
      
      // Vérifie si la liste de recettes n'est pas vide
      let newId = this.recipes.length ? Math.max(...this.recipes.map(r => r.id)) + 1 : 1;
      // Si la liste est vide, le premier identifiant sera 1
      // Si la liste n'est pas vide, on trouve l'identifiant maximal existant et on ajoute 1
  
      // Boucle pour s'assurer que l'identifiant généré est unique
      while (this.recipes.some(r => r.id === newId)) {
          newId += 1;
      }
      // Retourne l'identifiant unique généré
      return newId;
  },
  
  addRecipe(recipe) {
    // Génère un identifiant unique pour la nouvelle recette
    const newId = this.generateUniqueId();

    // Ajoute la nouvelle recette à la liste des recettes avec l'identifiant généré
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
  }
  
});
