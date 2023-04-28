import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/",
      name: "home",
      component: () => import("../views/Students/View.vue"),
    },
    {
      path: "/student/create",
      name: "studentsCreate",
      component: () => import("../views/Students/Create.vue"),
    },
    {
      path: "/student/:id/edit",
      name: "studentsEdit",
      component: () => import("../views/Students/Edit.vue"),
    },
  ],
});

export default routes;
