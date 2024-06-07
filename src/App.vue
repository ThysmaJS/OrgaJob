<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-white shadow">
    <div class="container mx-auto px-6 py-3">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
          <h1 class="ml-4 text-xl font-bold text-gray-800">OrgaJob</h1>
        </div>

        <nav class="flex space-x-4">
          <RouterLink class="text-gray-800 hover:text-gray-600" to="/">Accueil</RouterLink>
          <RouterLink class="text-gray-800 hover:text-gray-600" to="/dashboard">Mon tableau</RouterLink>
          <RouterLink class="text-gray-800 hover:text-gray-600" to="/profile">Mon profil</RouterLink>
          <RouterLink class="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded" to="/signup">S'inscrire</RouterLink>
        </nav>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.logo {
  display: block;
}
</style>
