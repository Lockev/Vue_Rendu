import Vue from "vue";
import Router from "vue-router";

import HomePage from "./../views/HomePage.vue";
import DetailsPage from "./../views/DetailsPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", component: HomePage },
    { path: "/details", component: DetailsPage }
  ]
});
