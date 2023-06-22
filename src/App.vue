<template>
  <app-header />
  <transition enter-active-class="fadeIn">
    <router-view />
  </transition>
  <app-footer />
</template>

<script>
// @ is an alias to /src
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    appHeader: AppHeader,
    appFooter: AppFooter,
  },
};
</script>

<style lang="scss">
@import "@/styles/root.scss";
</style>
