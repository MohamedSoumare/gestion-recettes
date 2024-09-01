import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"; 
import AddRecipe from "../views/AddRecipe.vue";
import EditRecipe from "../views/EditRecipe.vue";
import RecipeDetails from "../views/RecipeDetails.vue";
import NotFound from "../views/NotFound.vue"; 
import RecipeList from "../recettes/RecipeList.vue"

const routes = [
    { path: "/", name: "home", component: HomeView },
    { path: "/list", name: "recipe-list", component: RecipeList },
    { path: "/add", name: "recipe-add", component: AddRecipe },
    { path: "/edit/:id", name: "recipe-edit", component: EditRecipe, props: true },
    { path: "/recipe/:id", name: "recipe-details", component: RecipeDetails, props: true }, 
    { path: "/:pathMatch(.*)*", component: NotFound }
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
