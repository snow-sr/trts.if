import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import Home from "./views/HomeView.vue";
import Play from "./views/PlayView.vue";
import Principal from "./views/PrincipalView.vue";
import "@/assets/base.css";
import "tw-elements";

const routes = [
  { path: "/", component: Home },
  { path: "/Play", component: Play },
  { path: "/Principal", component: Principal}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
