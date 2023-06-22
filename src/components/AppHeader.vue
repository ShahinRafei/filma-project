<template>
  <header>
    <div class="headerContainer">
      <div class="logoContainer">
        <img src="../assets/images/logo.png" alt="logo" />
      </div>
      <div class="navContainer">
        <nav>
          <router-link :to="{ name: 'home' }" active-class="active"
            >خانه</router-link
          >
          <router-link :to="{ name: 'genres' }" active-class="active"
            >ژانرها</router-link
          >
          <router-link :to="{ name: 'movieRequest' }" active-class="active"
            >فیلم درخواستی</router-link
          >
          <router-link :to="{ name: 'about' }" active-class="active"
            >درباره ما</router-link
          >
        </nav>
        <div class="searchContainer" :class="{ active: searchShow }">
          <div class="awesomeContainer" @click="activeSearch()">
            <font-awesome-icon icon="fa-solid fa-search" />
          </div>
          <input type="text" name="search" id="search" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchShow: false,
    };
  },
  methods: {
    activeSearch() {
      this.searchShow = !this.searchShow;
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/header.scss";
</style>
