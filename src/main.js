import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router';

import App from './App.vue'

import store from './store';

const Error404Page = () => import("@/pages/Error404Page");
const MainPage = () => import("@/pages/MainPage");
const WishlistPage = () => import("@/pages/WishlistPage");
const CartPage = () => import("@/pages/CartPage");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/wishlist',
      component: WishlistPage
    },
    {
      path: '/cart',
      component: CartPage
    },
    {
      path: '/404',
      component: Error404Page
    },
    {
      path: '/:pathMatch(.*)*',
      component: Error404Page
    }
  ],
  linkActiveClass: 'active'
});

const app = createApp(App);

app
  .use(router)
  .use(store);

app.mount('#app')
