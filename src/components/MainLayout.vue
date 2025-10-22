<template>
  <div id="main-layout">
    <Sidebar />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'

export default {
  name: "MainLayout",
  components: { Sidebar }
}
</script>

<style scoped>
#main-layout {
  display: flex;
  min-height: 100vh;
}

.content {
  margin-left: 650px; /* espacio para el sidebar */
  flex: 1;
}
</style>