<template>
    <div class="container mx-auto px-4 py-8 bg-white min-h-screen">
      <div class="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
        <div class="flex items-center space-x-6">
          <img class="w-24 h-24 rounded-full" src="https://via.placeholder.com/150" alt="Photo de profil">
          <div>
            <h1 class="text-2xl font-bold text-black">{{ profile.name }}</h1>
            <p class="text-black">{{ profile.email }}</p>
            <p class="text-black">{{ profile.phone }}</p>
          </div>
        </div>
        <div class="mt-6">
          <h2 class="text-xl font-semibold text-black">Biographie</h2>
          <p class="text-black mt-2">{{ profile.bio }}</p>
        </div>
        <div class="mt-6">
          <h2 class="text-xl font-semibold text-black">Compétences</h2>
          <ul class="list-disc list-inside text-black mt-2">
            <li v-for="(skill, index) in profile.skills" :key="index">{{ skill }}</li>
          </ul>
        </div>
        <div class="mt-6">
          <h2 class="text-xl font-semibold text-black">Expériences professionnelles</h2>
          <ul class="mt-2 space-y-2">
            <li v-for="(experience, index) in profile.experiences" :key="index" class="bg-white p-4 rounded-lg shadow">
              <h3 class="text-lg font-semibold text-black">{{ experience.company }}</h3>
              <p class="text-black">{{ experience.role }}</p>
              <p class="text-black text-sm">{{ experience.duration }}</p>
            </li>
          </ul>
        </div>
        <div class="mt-6">
          <h2 class="text-xl font-semibold text-black">Mes tableaux</h2>
          <ul class="mt-2 space-y-2">
            <li v-for="(board, index) in profile.boards" :key="index" class="bg-white p-4 rounded-lg shadow">
              <h3 class="text-lg font-semibold text-black">{{ board.title }}</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProfileView',
    data() {
      return {
        profile: {
          name: "John Doe",
          email: "john.doe@example.com",
          phone: "+1 234 567 890",
          bio: "Développeur passionné avec plus de 5 ans d'expérience dans la création d'applications web et mobiles. Toujours à la recherche de nouveaux défis et d'opportunités d'apprendre.",
          skills: ["JavaScript", "Vue.js", "Node.js", "CSS", "HTML"],
          experiences: [
            {
              company: "Entreprise A",
              role: "Développeur Frontend",
              duration: "Janvier 2020 - Présent"
            },
            {
              company: "Entreprise B",
              role: "Développeur Backend",
              duration: "Juin 2018 - Décembre 2019"
            }
          ],
          boards: [
            {
              title: "Tableau Emplois Développement Web"
            },
            {
              title: "Tableau Emplois Design UX/UI"
            }
            // Ajoutez d'autres tableaux ici
          ]
        }
      };
    }
  }
  </script>
  
  <style scoped>
  /* Vos styles ici */
  </style>
  