<template>
  <div>
    <div class="detailHeader">
      <div class="headBackground">
        <img
          v-for="(image, index) in getDetail.images"
          :key="index"
          :src="image"
          :alt="'image' + (index + 1)"
          :class="{ active: index == 0 }"
        />
      </div>
      <div class="detailCover">
        <div class="posterContainer">
          <div class="poster">
            <img :src="getDetail.poster" :alt="getDetail.title" />
          </div>
          <h1>{{ getDetail.title }}</h1>
        </div>
        <div class="detailContainer">
          <h2>اطلاعات فیلم</h2>
          <div class="detailItems">
            <div class="detailItem">
              <p>رده سنی : {{ getDetail.rated }}</p>
              <p>سال ساخت : {{ getDetail.year }}</p>
              <p>زمان انتشار : {{ getDetail.released }}</p>
            </div>
            <div class="detailItem">
              <p>مدت زمان : {{ getDetail.runtime }}</p>
              <p>کشور سازنده : {{ getDetail.country }}</p>
              <p>ژانر : {{ getDetail.genres.join(" , ") }}</p>
            </div>
            <div class="detailItem">
              <div class="numberDetail">
                <a
                  :href="'https://www.imdb.com/title/' + getDetail.imdb_id"
                  target="_blank"
                >
                  <div class="awesomeContainer" id="imdb">
                    <font-awesome-icon icon="fa-brands fa-imdb" />
                  </div>
                </a>
                <p>
                  {{ getDetail.imdb_rating }}
                  <span> از {{ getDetail.imdb_votes }} رای</span>
                </p>
              </div>
              <div class="numberDetail">
                <div class="awesomeContainer" id="like">
                  <font-awesome-icon icon="fa-solid fa-heart" />
                </div>
                <p>{{ getDetail.metascore }} %</p>
              </div>
            </div>
          </div>
          <div class="between"></div>
          <div class="actorDetail">
            <p>کارگردان : {{ getDetail.director }}</p>
            <p>نویسندگان : {{ getDetail.writer }}</p>
            <p>بازیگران : {{ getDetail.actors }}</p>
            <p>جوایز : {{ getDetail.awards }}</p>
          </div>
          <div class="between"></div>
          <p class="plot">خلاصه : {{ getDetail.plot }}</p>
        </div>
      </div>
    </div>
    <div class="detailBody">
      <div class="downloadContainer">
        <h2>دانلود</h2>
        <div class="downloadItem">
          <p>انکودر BluRay</p>
          <div class="resolution">
            <a href="#" id="p1080" target="_blank">1080p</a>
            <a href="#" id="p720" target="_blank">720p</a>
            <a href="#" id="p480" target="_blank">480p</a>
          </div>
        </div>
        <div class="downloadItem">
          <p>انکودر HDRip</p>
          <div class="resolution">
            <a href="#" id="p1080" target="_blank">1080p</a>
            <a href="#" id="p720" target="_blank">720p</a>
            <a href="#" id="p480" target="_blank">480p</a>
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
      interval: null,
    };
  },
  methods: {
    slider() {
      const img = document.querySelectorAll(".headBackground img");
      let index = 1;
      this.interval = setInterval(() => {
        for (let image of img) {
          image.classList.remove("active");
        }
        img[index].classList.add("active");
        index = index == 2 ? 0 : ++index;
      }, 7000);
    },
  },
  computed: {
    getDetail() {
      return this.$store.getters.getDetails;
    },
  },
  created() {
    this.$store.dispatch("getDetailsFromServer", this.$route.params.id);
  },
  mounted() {
    if (this.getDetail.images) this.slider();
  },
  unmounted() {
    if (this.interval) clearInterval(this.interval);
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/movieDetail.scss";
</style>
