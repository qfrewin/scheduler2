import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Assignments from '../views/Assignments.vue'
import Rotations from '../views/Rotations.vue'
import Schedules from '../views/Schedules.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/assignments',
    name: 'Assignments',
    component: Assignments
  },
  {
    path: '/rotations',
    name: 'Rotations',
    component: Rotations
  },
  {
    path: '/schedules',
    name: 'Schedules',
    component: Schedules
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
