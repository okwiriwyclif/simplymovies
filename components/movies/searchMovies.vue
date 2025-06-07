<template>
  <div class="search-functionality pt-16">
    <div class="max-width-wrapper">
      <div class="search-section">
        <div class="search-bar">
          <div class="input">
            <input type="text" placeholder="Search for movies..." />
          </div>
        </div>
      </div>

      <div class="filters-section flex flex-wrap pt-8">
        <div class="mr-2 mb-2" v-for="(filter, index) in filters" :key="index">
          <div class="button secondary-button small-button">
            {{ filter }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showSearchbar: true,
        searchWord: "",
        filter: "Filter by",
        filters: [
          "Action",
          "Comedy",
          "Drama",
          "Horror",
          "Romance",
          "Sci-Fi",
          "Thriller",
        ],
      };
    },
  };
</script>

<style lang="scss" scoped></style>
