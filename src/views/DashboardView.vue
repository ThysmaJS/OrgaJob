<template>
  <div class="container mx-auto px-4 py-8 bg-white min-h-screen">
    <h1 class="text-3xl font-bold mb-6 text-black">Mon Tableau</h1>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-300">
        <thead class="bg-gray-100">
          <tr>
            <th class="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-black">Nom de l'entreprise</th>
            <th class="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-black">Fiche d'emploi</th>
            <th class="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-black">Lien de la candidature</th>
            <th class="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-black">Date de la candidature</th>
            <th class="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-black">Statut de la candidature</th>
            <th class="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-black">Date de l'entretien</th>
            <th class="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-black">Commentaires</th>
            <th class="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-black">Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(job, index) in jobs" :key="index" class="hover:bg-gray-50">
            <td class="py-2 px-4 border-b border-gray-300 text-black">{{ job.company }}</td>
            <td class="py-2 px-4 border-b border-gray-300 text-black">{{ job.jobDescription }}</td>
            <td class="py-2 px-4 border-b border-gray-300">
              <a :href="job.applicationLink" class="text-blue-600 hover:text-blue-800" target="_blank">Voir la candidature</a>
            </td>
            <td class="py-2 px-4 border-b border-gray-300 text-black">{{ job.applicationDate }}</td>
            <td class="py-2 px-4 border-b border-gray-300 text-black">{{ job.status }}</td>
            <td class="py-2 px-4 border-b border-gray-300 text-black">{{ job.interviewDate }}</td>
            <td class="py-2 px-4 border-b border-gray-300 text-black">{{ job.comments }}</td>
            <td class="py-2 px-4 border-b border-gray-300 text-black">{{ job.contact }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardView',
  data() {
    return {
      jobs: [
        {
          company: "Entreprise A",
          applicationDate: "2023-06-01",
          jobDescription: "Développeur Frontend",
          applicationLink: "https://example.com/application/1",
          status: "En attente",
          interviewDate: "2023-06-10",
          comments: "Entretien prévu, réviser les bases de React.",
          contact: "contact@entrepriseA.com"
        },
        {
          company: "Entreprise B",
          applicationDate: "2023-06-05",
          jobDescription: "Développeur Backend",
          applicationLink: "https://example.com/application/2",
          status: "Acceptée",
          interviewDate: "2023-06-12",
          comments: "Entretien technique, préparer des exemples de projets.",
          contact: "hr@entrepriseB.com"
        },
        // Ajoutez d'autres candidatures ici
      ]
    };
  }
}
</script>

<style scoped>
/* Vos styles ici */
</style>
