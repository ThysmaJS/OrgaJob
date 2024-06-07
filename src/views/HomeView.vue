<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <header class="mb-6">
        <h1 class="text-4xl font-bold text-gray-800">Bienvenue sur OrgaJob</h1>
        <p class="mt-2 text-lg text-gray-600">Votre outil ultime pour organiser vos recherches d'emploi, d'alternance et de stage.</p>
      </header>
      <main>
        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-700">Pourquoi OrgaJob ?</h2>
          <p class="mt-4 text-gray-600">
            OrgaJob vous aide à suivre vos candidatures, gérer vos entretiens et organiser vos recherches pour maximiser vos chances de succès.
          </p>
        </section>
        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-700">Fonctionnalités Clés</h2>
          <ul class="mt-4 space-y-2">
            <li class="flex items-center">
              <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-gray-600">Suivi des candidatures</span>
            </li>
            <li class="flex items-center">
              <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-gray-600">Gestion des entretiens</span>
            </li>
            <li class="flex items-center">
              <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-gray-600">Organisation des tâches</span>
            </li>
          </ul>
        </section>
        <section>
          <h2 class="text-2xl font-semibold text-gray-700">Commencez dès maintenant</h2>
          <p class="mt-4 text-gray-600">
            Créez un compte et commencez à organiser vos recherches d'emploi de manière efficace et productive.
          </p>
          <div class="mt-6">
            <a href="#" class="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              S'inscrire
            </a>
            <a href="#" class="ml-4 px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition duration-300">
              En savoir plus
            </a>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
/* Ajoutez vos styles personnalisés ici */
</style>
