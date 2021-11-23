import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Facemask from '../views/MobileAppFaceMask.vue'
import FPGMS from '../views/FPGMS.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/resume',
        name: 'Resume',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Resume.vue')
    },
    {
        path: '/fpg-ms',
        name: 'FPG-MS',
        component: FPGMS
    },
    {
        path: '/facemask',
        name: 'Facemask',
        component : Facemask
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router