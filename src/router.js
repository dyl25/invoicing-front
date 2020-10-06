//import VueRouter from 'vue-router';
import { createWebHistory, createRouter } from "vue-router";
import ClientList from './pages/ClientList.vue';
import InvoicingForm from './pages/InvoicingForm'

const routes = [
    { path: '/', component: ClientList },
    { path: '/clients', component: ClientList },
    { path: '/invoices', component: InvoicingForm }
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