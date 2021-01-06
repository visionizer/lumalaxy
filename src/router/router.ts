import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Dashboard from "../views/Dashboard.vue";

const routes: Array<RouteConfig> = [
  {
    path: '',
    component: Dashboard,
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "Overview" */ '../views/Overview.vue')
      },
      {
        path: 'creator',
        component: () => import(/* webpackChunkName: "Overview" */ '../views/Creator.vue')
      },
      {
        path: 'notifications',
        component: () => import(/* webpackChunkName: "Messages" */ '../views/Notifications.vue')
      },
      {
        path: 'profile',
        component: () => import(/* webpackChunkName: "Profile" */ '../views/Profile.vue')
      },
      {
        path: 'settings',
        component: () => import(/* webpackChunkName: "Settings" */ '../views/Settings.vue')
      }
    ]
  }
]

// Ok, lets settle this once and for all. This is horrible and I know that it is, trust me
// ,but this is responsible for literally everything important on the webiste. If we remove the any nothing will work
// So please do not make any pull requests that do not work or complain to me about this any. I know that it is horrible, but I have
// just spent 1h trying to figure this out so leave me alone, understood??? 
const router: any = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router