import { createWebHistory, createRouter } from 'vue-router';
import Home from '../pages/Home/Home.vue';
import NewQuestion from '../pages/NewQuestion/NewQuestion.vue';
import ListTests from '../pages/ListTests/ListTests.vue';
import NewTest from '../pages/NewTest/NewTest.vue';

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
    {
      path: "/provas",
      name: "tests",
      component: ListTests
    },
    {
      path: "/provas/nova",
      name: "newTest",
      component: NewTest
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

