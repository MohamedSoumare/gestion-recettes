<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid justify-content-center">
        <router-link class="navbar-brand" to="/">Gestion de Recettes</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item mx-4">
              <router-link class="nav-link" to="/" active-class="active">Accueil</router-link>
            </li>
            <li class="nav-item mx-4">
              <router-link class="nav-link" to="/about" active-class="active">A propos</router-link>
            </li>
            <li class="nav-item mx-4">
              <router-link class="nav-link" to="/contact" active-class="active">Contact</router-link>
            </li>
            <li class="nav-item mx-4">
              <router-link class="nav-link" to="/list" active-class="active">Liste des recettes</router-link>
            </li>
            <li class="nav-item mx-4">
              <router-link class="nav-link" to="/add" active-class="active">Ajouter une recette</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  </script>
  
  