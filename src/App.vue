<template>
  <router-view />
  <div class="custom-cursor"></div>
</template>

<script>
import { onMounted } from 'vue'

export default {
  name: "App",
  setup() {
    onMounted(() => {
      const cursor = document.querySelector('.custom-cursor')
      document.addEventListener('mousemove', (e) => {
        cursor.style.opacity = 1
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
      })
    })
  }
}
</script>

<style>
.custom-cursor {
  position: fixed;
  top: 0; left: 0;
  width: 400px; height: 400px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.2s;
  background: radial-gradient(circle, rgba(255,255,255,0.015) 0%, rgba(255,255,255,0.01) 20%, rgba(255,255,255,0.005) 40%, rgba(255,255,255,0.003) 60%, rgba(255,255,255,0.001) 80%);
}
</style>