<template>
  <div class="search-functionality pt-16">
    <div class="max-width-wrapper">
      <div class="filters-section flex justify-center flex-wrap pb-8">
        <div class="mr-2 mb-2" v-for="(filter, index) in filters" :key="index">
          <div class="button secondary-button small-button">
            {{ filter }}
          </div>
        </div>

        <div class="p-1">
          <SearchIcon
            class="search-icon"
            @click="showSearchbar = !showSearchbar"
          ></SearchIcon>
        </div>
      </div>

      <div class="search-section" v-if="showSearchbar">
        <div class="search-bar">
          <div class="input">
            <input type="text" placeholder="Search for movies..." />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SearchIcon from "~/components/icons/searchIcon.vue";
  export default {
    components: {
      SearchIcon,
    },
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
