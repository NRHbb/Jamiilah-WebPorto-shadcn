import { createRouter, createWebHistory } from 'vue-router'
//Layout
import PortoLayout from '@/layouts/default.vue'
import HomeViewVue from '@/views/HomeView.vue'
import DetailLayout from '@/layouts/custom.vue'
import DetailProjects from '@/views/detail/DetailProjectsView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //main porto path
    {
      //layout
      path: '/home',
      component: PortoLayout,
      //content
      children: [
        {
          path: '/',
          name: 'Home',
          component: HomeViewVue
        }
      ]
    },
    {
      path: '/detail',
      component: DetailLayout,
      children: [
        {
          path: 'projects',
          name: 'Projects',
          component: DetailProjects
        },
        // {
        //   path: 'projects/:id',
        //   name: 'Projects',
        //   component: DetailProjects,
        //   props: true
        // }
      ]
    }

  ]
})

export default router
