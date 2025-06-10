<template>
  <div>
    <div class="login-form">
      <h4>Welcome back</h4>

      <p class="mb-6">
        Please enter your email and password to login to your account.
      </p>

      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="email" class="block text-sm">Email</label>
          <input type="email" id="email" v-model="user.email" required />
        </div>
        <div class="mb-6">
          <label for="password" class="block">Password</label>
          <input
            type="password"
            id="password"
            v-model="user.password"
            required
          />
        </div>
        <button class="button primary-button w-full" type="submit ">
          Login to account
        </button>
      </form>
      <div class="message">
        <p v-if="errorMessage" class="text-red-600 bg-red-100 p-2 rounded-sm">
          {{ errorMessage }}
        </p>
        <p
          v-if="successMessage"
          class="text-green-500 bg-green-100 p-2 rounded-2xl"
        >
          {{ successMessage }}
        </p>
      </div>

      <p class="py-6">
        Don't have an account? <nuxt-link to="/signup">Sign up</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          email: "",
          password: "",
        },
        errorMessage: "",
        successMessage: "",
      };
    },
    methods: {
      async loginUser() {
        // Logic to handle user login
        console.log("User logged in:", this.user);
        try {
          const response = await this.auth.signInWithPassword({
            email: this.user.email,
            password: this.user.password,
          });
          if (response) {
            this.$router.push("/favorites"); // Redirect to dashboard on successful login
          }
        } catch (error) {
          console.error("Login failed:", error);
          // Handle login error (e.g., show a notification)
        }
      },
      registerUser() {
        // Logic to handle user registration
        console.log("User registered:", this.user);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .login-form {
    max-width: 400px;
    min-width: 420px;
    width: 100%;
    margin: 0 auto;
    padding: 20px;

    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
</style>
