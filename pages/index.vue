<template>
  <div>
    <div>
      <HeroSection />
    </div>
    <div>
      <MoviesList title="Latest Movies" />
    </div>
  </div>
</template>

<script>
  import HeroSection from "~/components/landing/heroSection.vue";
  import MoviesList from "~/components/movies/moviesList.vue";

  export default {
    components: {
      MoviesList,
      HeroSection,
    },
    methods: {
      // This is a placeholder for any methods you might want to add
      async getMovies() {
        try {
          const res = await this.$axios.get("/");

          const movies = res.data;

          console.log("Movies fetched successfully:", movies);
        } catch (error) {}
      },
    },

    mounted() {
      this.getMovies();
    },
  };
</script>

<style lang="scss" scoped></style>
