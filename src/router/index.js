import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Related from "@/views/Related.vue"
import Sort from "@/views/Sort.vue"
import Top from "@/views/Top.vue"
import Cart from "@/views/Cart.vue"
import Mytesco from "@/views/Mytesco.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Related',
    component: Related
  },
  {
    path: '/sort',
    name: 'Sort',
    component: Sort
  },
  {
    path: '/top',
    name: 'Top',
    component: Top
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/mytesco',
    name: 'Mytesco',
    component: Mytesco
  }
 
]

const router = new VueRouter({
  routes
})

export default router
