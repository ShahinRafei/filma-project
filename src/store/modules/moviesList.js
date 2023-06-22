import axios from "axios";

const state = {
  newMovies: [],
  moviesList: [],
  moviesListMetaData: [],
};
const getters = {
  getNewMovies(state) {
    return state.newMovies;
  },
  getMoviesList(state) {
    return state.moviesList;
  },
  getMoviesListMetaData(state) {
    return state.moviesListMetaData;
  },
};
const mutations = {
  setNewMovies(state, newMovies) {
    state.newMovies = newMovies;
  },
  setMoviesList(state, moviesList) {
    state.moviesList = moviesList;
  },
  setMoviesListMetaData(state, moviesListMetaData) {
    state.moviesListMetaData = moviesListMetaData;
  },
};
const actions = {
  getNewMoviesFromServer(context) {
    axios
      .get("/v1/movies?page=25")
      .then((response) => {
        context.commit("setNewMovies", response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  },
  getMoviesListFromServer(context, filters) {
    axios
      .get("/v1/movies", {
        params: {
          page: filters.params.page,
        },
      })
      .then((response) => {
        context.commit("setMoviesList", response.data.data);
        context.commit("setMoviesListMetaData", response.data.metadata);
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
