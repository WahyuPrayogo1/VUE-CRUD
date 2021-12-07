//import vue router
import { createRouter, createWebHistory } from 'vue-router'


import Home from '../views/Index.vue'
import Edit from '../views/Edit.vue'
import Create from '../views/Create.vue'



const routes = [{
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Create',
        path: '/create',
        component: Create
    },
    {
        name:   'Edit',
        path: '/edit/:id?',
        component:  Edit,
    },
   
]

const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router
