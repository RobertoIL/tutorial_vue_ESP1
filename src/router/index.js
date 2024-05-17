import { createMemoryHistory, createRouter } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import Padre from "@/components/Padre.vue";
const routes = [
  { path: "/", component: HelloWorld },
  { path: "/padre", component: Padre },
  // { path: '/about', component: AboutView },
];
export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
