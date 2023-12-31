import { createRouter, createWebHistory } from 'vue-router';

import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Home from '../components/Home.vue';

const routes = [
    {
        path: '/', component: Home, name: 'home'
    },
    
    {
        path: '/dashboard', component: Dashboard, 'name': 'dashboard',meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login', component: Login, 'name': 'login'
    },
    {
        path: '/register', component: Register, 'name': 'register'
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
