import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Home from '../components/Home.vue';
import Dashboard from '../components/Dashboard.vue';
import StudentAdd from '../components/StudentAdd.vue';

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
        path: '/student/add', component: StudentAdd, 'name': 'student-add',meta: {
            requiresAuth: true
        }
    },
    {
        path: '/student/edit/:id', component: StudentAdd, 'name': 'student-edit',meta: {
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

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !autoStore.isAuthenticated) {
        next({ name: 'login' })
    } else {
        next()
    }
})

export default router
