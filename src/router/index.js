import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Dashboard.vue';
import Login from '../views/Login.vue';
import Configuracoes from '../views/Configuracoes.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
 
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Home
  },
  {
    path: '/configuracoes',
    name: 'Configuracoes',
    component: Configuracoes
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
