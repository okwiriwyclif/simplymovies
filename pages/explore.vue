<template>
  <div class="explore-page py-16">
    <div>
      <SearchMovies />
    </div>
    <div>
      <MoviesList title="Latest Movies" />
    </div>
  </div>
</template>

<script>
  import HeroSection from "~/components/landing/heroSection.vue";
  import MoviesList from "~/components/movies/moviesList.vue";
  import SearchMovies from "~/components/movies/searchMovies.vue";

  export default {
    components: {
      MoviesList,
      HeroSection,
      SearchMovies,
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
