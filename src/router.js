//import VueRouter from 'vue-router';
import { createWebHistory, createRouter } from "vue-router";
import ClientList from './pages/ClientList.vue';

const routes = [
    { path: '/', component: ClientList },
    { path: '/clients', component: ClientList }
];

/*const router = new VueRouter({
    mode: 'history',
    routes : routes
});*/

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;