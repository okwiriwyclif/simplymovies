<template>
  <div>
    <div>
      <TopNav />
    </div>
    <NuxtPage />
  </div>
</template>

<script>
  import TopNav from "./components/navs/topNav.vue";

  export default {
    name: "App",

    components: {
      TopNav,
    },
    mounted() {
      // This is a placeholder for any methods you might want to add
      this.getMovies();
    },
    methods: {
      async getMovies() {
        try {
          const res = await this.$axios.get("/");

          const movies = res.data;

          console.log("Movies fetched successfully:", movies);
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      },
    },
  };
</script>
