<template>
  <footer>
    <div class="footerContainer">
      <div class="newMovie">
        <p>جدید ترین فیلم ها :</p>
        <ul class="itemContainer">
          <li
            class="item"
            v-for="movie in newMovies.filter((newMovie) => {
              return newMovie.id > 245;
            })"
            :key="movie.id"
          >
            <a>{{ movie.title }}</a>
          </li>
        </ul>
      </div>
      <div class="social">
        <div class="socialItem">
          <font-awesome-icon icon="fa-brands fa-instagram" />
          <a href="#">instagram_ID</a>
        </div>
        <div class="socialItem">
          <font-awesome-icon icon="fa-brands fa-telegram" />
          <a href="#">telegram_ID</a>
        </div>
        <div class="socialItem">
          <font-awesome-icon icon="fa-brands fa-whatsapp" />
          <a href="#">+123456789</a>
        </div>
      </div>
      <div id="goUp" @click="scrollTop()">
        <font-awesome-icon icon="fa-solid fa-chevron-up" />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    scrollTop() {
      window.scrollTo(0, 0);
    },
  },
  computed: {
    newMovies() {
      return this.$store.getters.getNewMovies;
    },
  },
  created() {
    if (this.newMovies.length == 0) {
      this.$store.dispatch("getNewMoviesFromServer");
    }
  },
};
</script>

<style lang="scss">
@import "@/styles/footer.scss";
</style>
