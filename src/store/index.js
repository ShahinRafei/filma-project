import { createStore } from "vuex";
// import modules
import slider from "./modules/slider.js";
import moviesList from "./modules/moviesList.js";
import movieDetails from "./modules/movieDetails.js";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    slider,
    moviesList,
    movieDetails,
  },
});
