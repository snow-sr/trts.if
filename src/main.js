import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./views/HomeView.vue";
import Play from "./views/PlayView.vue";
import Principal from "./views/PrincipalView.vue";

import { createPinia } from "pinia";
import "@/assets/base.css";
import "tw-elements";

const routes = [
  { path: "/", component: Home },
  { path: "/Play", component: Play },
  { path: "/Principal", component: Principal },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(createPinia()).mount("#app");
