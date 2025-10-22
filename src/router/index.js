import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import HomeSection from '../components/HomeSection.vue'
import ExperienceSection from '../components/ExperienceSection.vue'
import StudiesSection from '../components/StudiesSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: HomeSection },
      { path: 'home', component: HomeSection },
      { path: 'experience', component: ExperienceSection },
      { path: 'studies', component: StudiesSection },
      { path: 'projects', component: ProjectsSection },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Navigation guard removed - external links issue

export default router