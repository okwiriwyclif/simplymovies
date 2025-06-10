<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div>
      <LoginForm />
    </div>
  </div>
</template>

<script>
  import LoginForm from "~/components/forms/loginForm.vue";

  export default {
    components: {
      LoginForm,
    },
  };
</script>

<style lang="scss" scoped></style>
