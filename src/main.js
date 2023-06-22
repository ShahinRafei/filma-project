import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

// axios base api url
axios.defaults.baseURL = "http://moviesapi.ir/api";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import {
  faSearch,
  faChevronUp,
  faChevronRight,
  faChevronLeft,
  faPlayCircle,
  faDownload,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTelegram,
  faWhatsapp,
  faImdb,
} from "@fortawesome/free-brands-svg-icons";
/* add icons to the library */
library.add(
  faSearch,
  faChevronUp,
  faChevronRight,
  faChevronLeft,
  faPlayCircle,
  faDownload,
  faHeart,
  faInstagram,
  faTelegram,
  faWhatsapp,
  faImdb
);

createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
