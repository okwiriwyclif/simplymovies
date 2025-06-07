<template>
  <div
    class="hero-section"
    :style="{ 'background-image': 'url(' + heroImage + ')' }"
  >
    <div class="overlay">
      <div class="max-width-wrapper">
        <div class="hero-content py-12 pt-32">
          <div class="py-16"></div>
          <h2 class="hero-title md:w-1/2">Movie night menia</h2>
          <p class="hero-description">
            Discover the latest movies, explore genres, and find your next
            favorite film.
          </p>
          <div class="flex">
            <button class="button primary-button">Explore Now</button>
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
        heroImage:
          "https://images.unsplash.com/photo-1694705268819-80fcf37e35ac?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //   "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      };
    },
  };
</script>

<style lang="scss" scoped>
  .hero-section {
    background-size: cover;
    background-position: center;
    height: 60vh;

    .overlay {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      //gradient overlay fade effect

      //   background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
      background-image: linear-gradient(
        180deg,
        hsla(0, 0%, 100%, 0) 30%,
        rgba(0, 0, 0, 0.72) 49%
      );
      //   background-color: rgba(0, 0, 0, 0.5);
      height: 100%;
      width: 100%;
    }
    .hero-content {
      .hero-description {
        font-size: 1.25rem;
        margin-bottom: 2rem;
      }

      .hero-button {
        padding: 0.75rem 1.5rem;
        background-color: #ff4757;
        color: white;
        border: none;
        border-radius: 0.375rem;
        cursor: pointer;

        &:hover {
          background-color: #e84118;
        }
      }
    }
  }
</style>
