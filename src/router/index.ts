import { createRouter, createWebHistory } from 'vue-router'
//Layout
import PortoLayout from '@/layouts/default.vue'
import HomeViewVue from '@/views/HomeView.vue'
import welcomeLayout from '@/layouts/welcome.vue'
import WelcomeViewVue from '@/views/WelcomeView.vue'





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // layout
      path: '/start',
      component: welcomeLayout,
      children: [
        {
          path: '/welcome',
          name: 'Welcome',
          component: WelcomeViewVue,
          beforeEnter: (to, from, next) => {
            // Check if the route is accessed directly or through a reload
            if (from.name !== null) {
              // Direct access or reload, go to '/welcome'
              next('/home')
            } else {
              // Redirect to '/welcome' on initial load
              next()
            }
          }
        }
      ]
    },
    //main porto path
    {
      //layout
      path: '/home',
      component: PortoLayout,
      //content
      children : [
        {
          path: '/',
          name: 'Home',
          component: HomeViewVue
        }
      ]
    },
    
  ]
})

export default router
