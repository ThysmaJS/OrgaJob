<template>
  <div class="container mx-auto px-4 py-8 bg-white min-h-screen flex items-center justify-center">
    <div class="max-w-md w-full bg-gray-100 p-6 rounded-lg shadow-md">
      <h1 class="text-2xl font-bold text-center mb-6">Inscription</h1>
      <form @submit.prevent="register">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Nom
          </label>
          <input v-model="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Votre nom" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Votre email" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Mot de passe
          </label>
          <input v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Votre mot de passe" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="confirmPassword">
            Confirmation du mot de passe
          </label>
          <input v-model="confirmPassword" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="confirmPassword" type="password" placeholder="Confirmez votre mot de passe" required>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            S'inscrire
          </button>
        </div>
        <div v-if="errorMessage" class="text-red-500 mt-4">
          {{ errorMessage }}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignupView',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: ''
    }
  },
  methods: {
    async register() {
      if (this.password !== this.confirmPassword) {
        this.errorMessage = "Les mots de passe ne correspondent pas.";
        return;
      }

      try {
        const response = await fetch('http://localhost:3000/api/register', { // Assurez-vous que l'URL correspond à votre serveur backend
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            password: this.password
          })
        });

        if (!response.ok) {
          const error = await response.text();
          throw new Error(error);
        }

        alert('Inscription réussie !');
        this.name = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.errorMessage = '';
      } catch (error) {
        this.errorMessage = error.message;
      }
    }
  }
}
</script>

<style scoped>
/* Vos styles ici */
</style>
