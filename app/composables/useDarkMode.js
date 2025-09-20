// composables/useDarkMode.js
import { ref, onMounted } from 'vue'

export const useDarkMode = () => {
  const isDark = ref(false)

  const setDarkMode = (dark) => {
    isDark.value = dark
    const html = document.documentElement
    
    if (dark) {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const toggleDarkMode = () => {
    setDarkMode(!isDark.value)
  }

  const initDarkMode = () => {
    if (typeof window === 'undefined') return
    
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark') {
      setDarkMode(true)
    } else if (savedTheme === 'light') {
      setDarkMode(false)
    } else {
      setDarkMode(prefersDark)
    }
  }

  onMounted(() => {
    initDarkMode()
  })

  return {
    isDark,
    toggleDarkMode,
    setDarkMode,
    initDarkMode
  }
}