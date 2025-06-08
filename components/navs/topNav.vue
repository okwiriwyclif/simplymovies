<template>
  <div class="top-nav py-4" :class="{ 'scroll-on': scrollOn }">
    <div class="max-width-wrapper">
      <div class="container flex justify-between items-center">
        <div class="logo">
          <nuxt-link to="/"> <h5 class="logo">SimplyMovies</h5> </nuxt-link>
        </div>
        <nav>
          <ul>
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/explore">Explore</nuxt-link></li>

            <li><nuxt-link to="/favorites">Favorites</nuxt-link></li>
          </ul>
        </nav>

        <div>
          <nuxt-link to="/signin">
            <div class="button primary-button small-button">Sign in</div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        scrollOn: false,
      };
    },

    methods: {
      handleScroll() {
        this.scrollOn = window.scrollY > 0;
      },
    },

    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
  };
</script>

<style lang="scss" scoped>
  .top-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    color: #f4f4f4;

    transition: background-color 0.3s ease-in-out;

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      nav ul {
        list-style-type: none;
        display: flex;
        gap: 20px;

        li a {
          color: #f4f4f4;

          &:hover {
            color: #ffaaf5;
          }
        }
      }
    }
  }
  .scroll-on {
    background-color: rgba(0, 0, 0, 0.8);
  }
</style>
