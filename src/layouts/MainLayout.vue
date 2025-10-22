<template>
  <div id="main-layout">
    <Sidebar />
    <main class="content">
      <router-view v-slot="{ Component }">
        <transition :name="transitionName" mode="out-in">
          <div class="view">
            <component :is="Component" />
          </div>
        </transition>
      </router-view>
    </main>
    
    <!-- Section navigation arrows -->
    <div class="nav-arrows">
      <button 
        v-if="canGoUp"
        class="nav-arrow nav-arrow-up"
        @click="goUp"
        :title="upSectionName"
      >
        <img :src="chevronUp" alt="Flecha arriba" />
      </button>
      <button 
        v-if="canGoDown"
        class="nav-arrow nav-arrow-down"
        @click="goDown"
        :title="downSectionName"
      >
        <img :src="chevronDown" alt="Flecha abajo" />
      </button>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import chevronUp from '@/assets/icons/chevron-up.svg'
import chevronDown from '@/assets/icons/chevron-down.svg'

export default {
  name: "MainLayout",
  components: { Sidebar },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const transitionName = ref('slide-up')
    
    const routes = ['home', 'experience', 'studies', 'projects']
    
    // Route names for tooltips
    const routeNames = {
      'home': 'Presentación',
      'experience': 'Experiencia', 
      'studies': 'Estudios',
      'projects': 'Proyectos'
    }
    
    const currentIndex = computed(() => {
      return routes.indexOf(route.path.substring(1) || 'home')
    })
    
    const canGoUp = computed(() => {
      return currentIndex.value > 0
    })
    
    const canGoDown = computed(() => {
      return currentIndex.value < routes.length - 1
    })
    
    const upSectionName = computed(() => {
      if (canGoUp.value) {
        const previousRoute = routes[currentIndex.value - 1]
        return routeNames[previousRoute]
      }
      return ''
    })
    
    const downSectionName = computed(() => {
      if (canGoDown.value) {
        const nextRoute = routes[currentIndex.value + 1]
        return routeNames[nextRoute]
      }
      return ''
    })
    
    const goUp = () => {
      if (canGoUp.value) {
        transitionName.value = 'slide-down'
        router.push('/' + routes[currentIndex.value - 1])
      }
    }
    
    const goDown = () => {
      if (canGoDown.value) {
        transitionName.value = 'slide-up'
        router.push('/' + routes[currentIndex.value + 1])
      }
    }

    return {
      transitionName,
      canGoUp,
      canGoDown,
      goUp,
      goDown,
      chevronUp,
      chevronDown,
      upSectionName,
      downSectionName
    }
  }
}
</script>

<style scoped>
#main-layout {
  display: flex;
  min-height: 100vh;
  overflow-x: hidden;
}

.content {
  /* Let flex layout place content immediately after the sidebar (sidebar is in-flow) */
  margin-left: 0;
  flex: 1 1 auto;
  min-width: 0; /* allow flex item to shrink without overflow */
  width: auto;
  min-height: 100vh;
  overflow-y: auto; /* Allow vertical scrolling */
  overflow-x: hidden;
  position: relative;
  box-sizing: border-box;
  /* Move horizontal padding into sections to avoid confusing left edge perception */
  padding: 2rem 0;
  display: block; /* avoid flex re-centering during transitions */
}

.view {
  width: 100%;
}

/* Asymmetric padding for visual balance */
:deep(.section) {
  padding-left: calc(var(--edge-gap) * 0.5 - 10px);
  padding-right: calc(var(--edge-gap) * 1.5 + 10px);
}

@media (max-width: 360px) {
  /* Mobile layout adjustments */
  .content { margin-left: 0; width: 100%; transform: none; }
}

/* No need to override at 1200/900px here; --sidebar-width already adapts via :root */

@media (max-width: 768px) {
  .content {
    margin-left: 0;
    width: 100%;
  }

  /* Take the sidebar out of the flex flow when hidden so it doesn't reserve space */
  :deep(.sidebar) {
    position: fixed !important;
    left: 0;
    top: 0;
    height: 100vh;
    z-index: 1000;
    transform: translateX(-100%);
  }
  :deep(.sidebar.visible) {
    transform: translateX(0);
  }
}

/* Transiciones */
.slide-up-enter-active,
.slide-up-leave-active,
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.slide-up-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.slide-up-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-down-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-down-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.slide-up-enter-to,
.slide-up-leave-from,
.slide-down-enter-to,
.slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}

/* Navigation arrows */
.nav-arrows {
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1001;
}

.nav-arrow {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(46, 26, 80, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid #c4b5fd;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  user-select: none;
  padding: 0;
}

.nav-arrow img {
  width: 20px;
  height: 20px;
  filter: brightness(0) saturate(100%) invert(84%) sepia(21%) saturate(535%) hue-rotate(227deg) brightness(95%) contrast(98%);
  transition: filter 0.3s ease;
}

.nav-arrow:hover {
  background: rgba(46, 26, 80, 0.95);
  border-color: #d2aff5;
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(196, 181, 253, 0.3);
}

.nav-arrow:hover img {
  filter: brightness(0) saturate(100%) invert(91%) sepia(24%) saturate(1012%) hue-rotate(227deg) brightness(99%) contrast(92%);
}

.nav-arrow:active {
  transform: scale(0.95);
}

.nav-arrow-up {
  margin-bottom: 0.5rem;
}

.nav-arrow-down {
  margin-top: 0.5rem;
}

@media (max-width: 768px) {
  .nav-arrows {
    right: 1rem;
    gap: 0.8rem;
  }
  
  .nav-arrow {
    width: 42px;
    height: 42px;
  }
  
  .nav-arrow img {
    width: 18px;
    height: 18px;
  }
}

@media (max-width: 480px) {
  .nav-arrows {
    right: 0.8rem;
  }
  
  .nav-arrow {
    width: 38px;
    height: 38px;
  }
  
  .nav-arrow img {
    width: 16px;
    height: 16px;
  }
}
</style>