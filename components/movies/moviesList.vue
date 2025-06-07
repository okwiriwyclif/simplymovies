<template>
  <div class="movies-list py-16">
    <div class="max-width-wrapper">
      <div class="header flex justify-between">
        <div>
          <div class="title">
            <h4>
              {{ title || "Movies" }}
            </h4>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-5 gap-4">
        <div
          class="movie-item relative"
          v-for="(movie, index) in movies"
          :key="index"
        >
          <div class="image"></div>

          <div class="movie-information absolute bottom-0 left-0 right-0">
            <div class="information">
              <h5 class="title">
                {{ movie.title || "Movie Title" }}
              </h5>
              <p class="description">
                {{ movie.description }}
              </p>
              <div class="ratings">
                <span class="rating">
                  {{ movie.rating }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: "",
      },
      movies: {
        typeof: Array,
        default: [{}, {}, {}, {}, {}],
      },
    },
  };
</script>

<style scoped>
  .movies-list .movie-item .image {
    background-color: #f8f9fa1a;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;
    height: 18rem;
  }

  .movies-list .movie-information {
    padding: 0 16px;
    background: linear-gradient(
      180deg,
      transparent 0,
      rgba(0, 0, 0, 0.65) 48%,
      rgba(0, 0, 0, 0.65)
    );
    bottom: 0;
    height: auto;
    left: 0;
    padding: 5px;
    position: absolute;
    text-align: center;
    width: 100%;
    z-index: 5;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    .movies-list .movie-item .image {
      height: 24rem;
    }
  }
</style>
