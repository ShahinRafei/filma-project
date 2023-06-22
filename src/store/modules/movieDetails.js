import axios from "axios";

const state = {
  movieDetails: [],
};
const getters = {
  getDetails(state) {
    return state.movieDetails;
  },
};
const mutations = {
  setDetails(state, movieDetails) {
    state.movieDetails = movieDetails;
  },
};
const actions = {
  getDetailsFromServer(context, filters) {
    axios
      .get("/v1/movies/" + filters)
      .then((response) => {
        context.commit("setDetails", response.data);
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
