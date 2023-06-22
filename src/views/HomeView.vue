<template>
  <div>
    <home-slider />
    <section class="homeContainer">
      <div class="postContainer">
        <h2 class="title">لیست فیلم‌ها</h2>
        <div class="post" v-for="post in movieList" :key="post.id">
          <div class="postImg">
            <img :src="post.poster" :alt="post.title" />
          </div>
          <div class="description">
            <h2>{{ post.title }}</h2>
            <p>محصول کشور : {{ post.country }}</p>
            <p>سال تولید : {{ post.year }}</p>
            <p>ژانر : {{ post.genres.join(" , ") }}</p>
            <!-- there is no data to bind so i have to use lorem -->
            <p>
              خلاصه : لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
              و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
              مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
              مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
              باشد.
            </p>
          </div>
          <div class="imdb">
            {{ post.imdb_rating }}
          </div>
          <router-link
            :to="{ name: 'movies', params: { id: post.id } }"
            class="download"
          >
            دانلود فیلم
            <font-awesome-icon icon="fa-solid fa-download" />
          </router-link>
        </div>
      </div>
      <ul class="pagination">
        <li class="paginationItem" @click="goTop">
          <router-link :to="{ query: { page: getMetaData.page_count } }"
            ><font-awesome-icon icon="fa-solid fa-chevron-right"
          /></router-link>
        </li>
        <li
          class="paginationItem"
          v-for="n in 2"
          :key="n"
          :class="{
            active: getMetaData.current_page == getMetaData.page_count - n + 1,
          }"
          @click="goTop"
        >
          <router-link
            :to="{ query: { page: getMetaData.page_count - n + 1 } }"
            >{{ getMetaData.page_count - n + 1 }}</router-link
          >
        </li>
        <li
          class="paginationItem"
          v-if="this.lastPage < getMetaData.page_count - 2"
        >
          . . .
        </li>
        <li
          class="paginationItem"
          v-for="n in 3"
          :key="n"
          :class="{ active: getMetaData.current_page == lastPage - n + 1 }"
          @click="goTop"
        >
          <router-link :to="{ query: { page: lastPage - n + 1 } }">{{
            lastPage - n + 1
          }}</router-link>
        </li>
        <li class="paginationItem" @click="goTop">
          <router-link :to="{ query: { page: 1 } }"
            ><font-awesome-icon icon="fa-solid fa-chevron-left"
          /></router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import HomeSlider from "@/views/Home/HomeSlider.vue";

export default {
  name: "HomeView",
  data() {
    return {
      lastPage: 3,
    };
  },
  components: {
    homeSlider: HomeSlider,
  },
  methods: {
    goTop() {
      document.querySelector(".title").scrollIntoView();
    },
  },
  computed: {
    movieList() {
      return this.$store.getters.getMoviesList;
    },
    getMetaData() {
      return this.$store.getters.getMoviesListMetaData;
    },
  },
  watch: {
    $route(to) {
      this.$store.dispatch("getMoviesListFromServer", {
        params: {
          page: to.query.page,
        },
      });
    },
  },
  mounted() {
    this.$store.dispatch("getMoviesListFromServer", {
      params: {
        page: this.$route.query.page ? this.$route.query.page : 1,
      },
    });
  },
  updated() {
    this.lastPage = parseInt(this.getMetaData.current_page) + 1;
    if (this.lastPage < 3) {
      this.lastPage = 3;
    } else if (this.lastPage > this.getMetaData.page_count - 2) {
      this.lastPage = this.getMetaData.page_count - 2;
    }
  },
};
</script>

<style lang="scss">
@import "@/styles/homeView.scss";
</style>
