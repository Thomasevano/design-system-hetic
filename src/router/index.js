import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Register from '../pages/Register.vue';
import Login from '../pages/Login.vue';
import ResetPassword from '../pages/ResetPassword.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/reset',
    name: 'ResetPassword',
    component: ResetPassword,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router