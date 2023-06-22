import axios from "axios";

const state = {
  sliders: [],
};
const getters = {
  getSlider(state) {
    return state.sliders;
  },
};
const mutations = {
  setSlider(state, sliders) {
    state.sliders = sliders;
  },
};
const actions = {
  getSliderFromServer(context) {
    axios
      .get("/v1/movies?page=1")
      .then((response) => {
        context.commit("setSlider", response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
