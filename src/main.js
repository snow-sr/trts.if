import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import Home from "./views/HomeView.vue";
import CreatePost from "./views/PlayView.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/createPost", component: CreatePost },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
