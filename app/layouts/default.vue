<template>
  <div class="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
    <!-- Navigation -->
    <Navigation />
    
    <!-- Main Content -->
    <main>
      <slot />
    </main>
    
    <!-- Dark Mode Toggle (Fixed Position) -->
    <DarkModeToggle />
  </div>
</template>

<script setup>
import Navigation from '../components/Navigation.vue'
import DarkModeToggle from '../components/DarkModeToggle.vue'

// Initialize dark mode on app mount
onMounted(() => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('theme')
    const isDark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList.toggle('dark', isDark)
  }
})
</script>