import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/details/Login.vue'
import DashboardLayout from './components/DashboardLayout.vue'


Vue.use(VueRouter)


export class VueRouterS {
    constructor() {
       this.routez = '';
       const routes = [
        { 
            path: '/' , 
            name: "Login",
            component: Login
        },
        { 
          path: '/dashboard' , 
          name: "dashboard",
          component: DashboardLayout
      },
      ]
       this.routez = new VueRouter({
        routes
      })
      
    }
  }