import { createWebHistory, createRouter } from 'vue-router';
import Home from '../pages/Home/Home.vue';
import NewQuestion from '../pages/NewQuestion/NewQuestion.vue';

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/questoes/criar",
        name: "newQuestion",
        component: NewQuestion
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

