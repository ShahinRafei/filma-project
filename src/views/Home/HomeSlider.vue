<template>
  <section class="slider">
    <div class="sliderBg"></div>
    <p>محبوب ترین فیلم های سایت</p>
    <div class="sliderContainer">
      <div class="slideContainer">
        <div
          class="slideItem"
          v-for="(slide, index) in sliderImg.filter((slider) => {
            return slider.id != 9;
          })"
          :key="index"
          :class="{ active: index > 0 && index < 8 }"
        >
          <router-link :to="{ name: 'movies', params: { id: slide.id } }">
            <div class="imgCover">
              <font-awesome-icon icon="fa-solid fa-play-circle" />
            </div>
            <img :src="slide.poster" alt="test" />
          </router-link>
        </div>
      </div>
      <div class="slideRight" @click="goRight()">
        <font-awesome-icon icon="fa-solid fa-chevron-right" />
      </div>
      <div class="slideLeft" @click="goLeft()">
        <font-awesome-icon icon="fa-solid fa-chevron-left" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
    };
  },
  methods: {
    ChangeSlide(position) {
      const item = document.querySelectorAll(".slideItem");
      if (position === "right") {
        item[8].classList.add("active");
        item[1].classList.remove("active");
        item[0].remove();
        item[8].after(item[0]);
      } else {
        item[0].classList.add("active");
        item[7].classList.remove("active");
        item[8].remove();
        item[0].before(item[8]);
      }
    },
    goRight() {
      this.clearAuto();
      this.ChangeSlide("right");
      this.autoGoleft();
    },
    goLeft() {
      this.clearAuto();
      this.ChangeSlide("left");
      this.autoGoleft();
    },
    autoGoleft() {
      this.timer = setInterval(() => {
        this.ChangeSlide("left");
      }, 4000);
    },
    clearAuto() {
      clearInterval(this.timer);
    },
  },
  computed: {
    sliderImg() {
      return this.$store.getters.getSlider;
    },
  },
  created() {
    if (this.sliderImg.length == 0) {
      this.$store.dispatch("getSliderFromServer");
    }
  },
  mounted() {
    this.autoGoleft();
  },
  unmounted() {
    this.clearAuto();
  },
};
</script>

<style lang="scss">
@import "@/styles/homeSlider.scss";
</style>
