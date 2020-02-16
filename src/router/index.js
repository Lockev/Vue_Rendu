import Vue from "vue";
import Router from "vue-router";

import Films from "./../views/AllFilms.vue";
import Details from "./../views/Details.vue";
import Favoris from "./../views/Favoris.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", component: Films },
    { path: "/details/:id", component: Details },
    { path: "/favoris", component: Favoris }
  ]
});
