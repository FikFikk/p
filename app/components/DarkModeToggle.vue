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
import { ref, onMounted, nextTick, watch } from 'vue'
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'

const isDark = ref(false)

// Debug function
const debugLog = (message, data = {}) => {
  console.log(`[Dark Mode Debug] ${message}:`, data)
}

// Force refresh theme
const applyTheme = (dark) => {
  const html = document.documentElement
  
  debugLog('Applying theme', { dark, currentClasses: Array.from(html.classList) })
  
  // Force remove all theme classes first
  html.classList.remove('dark', 'light')
  
  // Force add the correct class
  if (dark) {
    html.classList.add('dark')
    localStorage.setItem('theme', 'dark')
    debugLog('Applied dark theme', { classList: Array.from(html.classList) })
  } else {
    html.classList.add('light')
    localStorage.setItem('theme', 'light')
    debugLog('Applied light theme', { classList: Array.from(html.classList) })
  }
  
  // Force repaint
  document.body.style.display = 'none'
  document.body.offsetHeight // Force reflow
  document.body.style.display = ''
}

const toggleDarkMode = () => {
  debugLog('Toggle clicked', { currentIsDark: isDark.value })
  
  isDark.value = !isDark.value
  applyTheme(isDark.value)
  
  debugLog('Toggle completed', { 
    newIsDark: isDark.value,
    htmlClasses: Array.from(document.documentElement.classList),
    localStorage: localStorage.getItem('theme')
  })
}

const initTheme = () => {
  if (typeof window === 'undefined') return
  
  debugLog('Initializing theme')
  
  const savedTheme = localStorage.getItem('theme')
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  debugLog('Theme detection', { savedTheme, systemPrefersDark })
  
  let shouldBeDark = false
  
  if (savedTheme === 'dark') {
    shouldBeDark = true
  } else if (savedTheme === 'light') {
    shouldBeDark = false
  } else {
    shouldBeDark = systemPrefersDark
  }
  
  isDark.value = shouldBeDark
  applyTheme(shouldBeDark)
  
  debugLog('Theme initialized', { 
    isDark: isDark.value, 
    htmlClasses: Array.from(document.documentElement.classList) 
  })
}

// Watch for reactive changes
watch(isDark, (newValue) => {
  debugLog('isDark changed reactively', { newValue })
  applyTheme(newValue)
})

onMounted(async () => {
  await nextTick()
  
  debugLog('Component mounted, starting initialization')
  
  // Small delay to ensure DOM is ready
  setTimeout(() => {
    initTheme()
  }, 100)
  
  // Listen for system theme changes
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const handleSystemChange = (e) => {
    if (!localStorage.getItem('theme')) {
      debugLog('System theme changed', { matches: e.matches })
      isDark.value = e.matches
    }
  }
  
  mediaQuery.addEventListener('change', handleSystemChange)
})
</script>