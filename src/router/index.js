import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/movies/:id",
    name: "movies",
    component: () =>
      import(/* webpackChunkName: "movies" */ "../views/MovieDetail.vue"),
  },
  {
    path: "/request",
    name: "movieRequest",
    component: () =>
      import(
        /* webpackChunkName: "movieRequest" */ "../views/MovieRequest.vue"
      ),
  },
  {
    path: "/genres",
    name: "genres",
    component: () =>
      import(/* webpackChunkName: "genres" */ "../views/MovieGenres.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      const el = window.location.href.split("#")[1];
      if (el.length) {
        document.getElementById(el).scrollIntoView();
      }
    } else {
      document.getElementById("app").scrollIntoView();
    }
  },
});

export default router;
