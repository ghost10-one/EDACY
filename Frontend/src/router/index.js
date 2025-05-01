
import { createRouter, createWebHistory } from 'vue-router';
import HomePage  from '@/pages/HomePage.vue';    
import DetailsPage from '@/pages/DetailsPage.vue';
import RegisterPage from '@/pages/RegisterPage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import Vue from 'vue';

import Router from 'vue-router';

Vue.use(Router)

export default new Router({

       routes: [
             
                     {
                            path: '/#',
                            name: 'home',
                            component: HomePage
                     },
                     {
                            path: '/produits',
                            name: '/produits/:id',
                            component:DetailsPage
                     },
                     {
                            path:'register',
                            name:'register',
                            component:RegisterPage
                     },
                     {
                            path:'Login',
                            name:'Login',
                            component:LoginPage
                     }
              ]
       }) 
       




// const router = createRouter({
//        history: createWebHistory(import.meta.env.BASE_URL),
//        routes
// })
// export default router