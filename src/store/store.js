import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    favorites: []
  },
  mutations: {
    newFav(state, favorite) {
      let isAlreadyFav = state.favorites.find(elem => elem === favorite);
      if (isAlreadyFav) {
        state.favorites.splice(favorite, 1);
        // console.log(state.favorites);
      } else {
        state.favorites.push(favorite);
        // console.log(state.favorites);
      }
    }
  },
  getters: {
    favorites: state => state.favorites
  }
});
