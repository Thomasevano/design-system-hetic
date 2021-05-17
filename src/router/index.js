import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/pages/Home.vue'
const routes = [
  {
    path: '/pages',
    name: 'Home',
    component: Home,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router