// ===== components/DarkModeToggle.vue =====
<template>
  <div class="fixed bottom-6 right-6 z-50">
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 scale-50 rotate-180"
      enter-to-class="opacity-100 scale-100 rotate-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 scale-100 rotate-0"
      leave-to-class="opacity-0 scale-50 -rotate-180"
    >
      <button
        @click="toggleDarkMode"
        :aria-pressed="isDark.toString()"
        class="group flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 backdrop-blur-lg border border-sky-200/50 shadow-lg shadow-sky-500/10 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-sky-500/20 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:ring-offset-2 dark:bg-gray-800/80 dark:border-gray-700/50 dark:shadow-gray-900/20 dark:hover:shadow-gray-900/40"
        :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      >
        <!-- Sun Icon (Light Mode) -->
        <SunIcon
          v-if="!isDark"
          class="h-6 w-6 text-amber-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
        />
        <!-- Moon Icon (Dark Mode) -->
        <MoonIcon
          v-else
          class="h-6 w-6 text-sky-400 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12"
        />
        
        <!-- Animated background circle -->
        <div
          class="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
          v-if="!isDark"
        ></div>
        <div
          class="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-400 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
          v-else
        ></div>
      </button>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'

const isDark = ref(false)

// Simple and reliable dark mode implementation
const initDarkMode = () => {
  const html = document.documentElement
  const savedTheme = localStorage.getItem('theme')
  
  console.log('Initializing dark mode:', { savedTheme, hasClass: html.classList.contains('dark') })
  
  if (savedTheme === 'dark') {
    html.classList.add('dark')
    isDark.value = true
    console.log('Set to dark mode from localStorage')
  } else if (savedTheme === 'light') {
    html.classList.remove('dark')
    isDark.value = false
    console.log('Set to light mode from localStorage')
  } else {
    // Use system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    console.log('No saved theme, system prefers dark:', prefersDark)
    if (prefersDark) {
      html.classList.add('dark')
      isDark.value = true
      console.log('Set to dark mode from system preference')
    } else {
      html.classList.remove('dark')
      isDark.value = false
      console.log('Set to light mode from system preference')
    }
  }
  
  console.log('Final state:', { isDark: isDark.value, classList: Array.from(html.classList) })
}

const toggleDarkMode = (event) => {
  console.log('Toggle clicked, current isDark:', isDark.value)
  
  const html = document.documentElement
  
  isDark.value = !isDark.value
  
  console.log('New isDark value:', isDark.value)
  
  if (isDark.value) {
    html.classList.add('dark')
    localStorage.setItem('theme', 'dark')
    console.log('Added dark class, localStorage set to dark')
  } else {
    html.classList.remove('dark')
    localStorage.setItem('theme', 'light')
    console.log('Removed dark class, localStorage set to light')
  }
  
  console.log('Final classList:', Array.from(html.classList))
  console.log('Document has dark class:', html.classList.contains('dark'))
  
  // Visual feedback
  if (event?.currentTarget) {
    const button = event.currentTarget
    button.style.transform = 'scale(0.95)'
    setTimeout(() => {
      button.style.transform = ''
    }, 150)
  }
}

onMounted(() => {
  initDarkMode()
  
  // Listen for system theme changes
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const handleSystemChange = (e) => {
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        document.documentElement.classList.add('dark')
        isDark.value = true
      } else {
        document.documentElement.classList.remove('dark')
        isDark.value = false
      }
    }
  }
  
  mediaQuery.addEventListener('change', handleSystemChange)
  
  onUnmounted(() => {
    mediaQuery.removeEventListener('change', handleSystemChange)
  })
})
</script>