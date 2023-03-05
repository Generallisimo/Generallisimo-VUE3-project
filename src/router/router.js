
import { createRouter, createWebHistory } from 'vue-router';
// импорт компонентов 
import sCatalog from '../components/s-catalog.vue'
import sCard from '../components/s-card.vue'
// так подключается роутеры на vue 3
const routes = [
    {
        path:'/',
        name:'catalog',
        component:sCatalog
    },
    {
        path:'/card',
        name:'card',
        component:sCard,
        props: true
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;