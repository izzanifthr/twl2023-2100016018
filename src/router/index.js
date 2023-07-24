import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../components/Dashboard.vue';
import Login from '../components/Login.vue';

const routes = [
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '',
    name: 'Login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;