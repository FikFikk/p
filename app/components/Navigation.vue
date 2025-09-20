<template>
  <header class="fixed top-0 w-full z-40 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-sky-200/50 dark:border-gray-800/50 transition-all duration-300">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
      <!-- Logo/Brand -->
      <div class="flex lg:flex-1">
        <a href="#home" @click.prevent="scrollToSection('#home')" class="group -m-1.5 p-1.5 flex items-center">
          <span class="font-bold text-xl bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            Fikri
          </span>
        </a>
      </div>

      <!-- Mobile menu button -->
      <div class="flex lg:hidden">
        <button 
          type="button" 
          class="inline-flex items-center justify-center rounded-xl p-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          @click="handleMobileMenuToggle"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <!-- Desktop navigation -->
      <div class="hidden lg:flex lg:gap-x-8">
        <a 
          v-for="item in navigation" 
          :key="item.name"
          :href="item.href" 
          @click="scrollToSection(item.href)"
          class="relative text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-200 group"
        >
          {{ item.name }}
          <!-- Hover underline effect -->
          <span class="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-sky-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
      </div>

      <!-- CTA Button -->
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a 
          href="#contact" 
          @click="scrollToSection('#contact')"
          class="group relative overflow-hidden rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:shadow-sky-500/25 transition-all duration-300 hover:scale-105"
        >
          <span class="relative z-10">Get In Touch</span>
          <div class="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
      </div>
    </nav>

    <!-- Mobile menu -->
    <Teleport to="body">
      <div v-if="mobileMenuOpen" class="lg:hidden fixed inset-0 z-50">
        <!-- Backdrop -->
        <div class="fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity duration-300" @click="mobileMenuOpen = false"></div>
        
        <!-- Panel -->
        <div class="fixed inset-y-0 right-0 max-w-md w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-2xl border-l border-gray-200/50 dark:border-gray-700/50 transform transition-transform duration-300">
          
          <!-- Header -->
          <div class="px-6 py-6 border-b border-gray-200/50 dark:border-gray-700/50">
            <div class="flex items-center justify-between">
              <a href="#home" @click="scrollToSection('#home'); mobileMenuOpen = false" class="flex items-center">
                <span class="font-bold text-xl bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent">
                  Fikri
                </span>
              </a>
              <button 
                type="button" 
                class="rounded-xl p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                @click="mobileMenuOpen = false"
              >
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>

          <!-- Navigation -->
          <div class="flex-1 px-6 py-6">
            <nav class="space-y-2">
              <a 
                v-for="(item, index) in navigation" 
                :key="item.name"
                :href="item.href" 
                @click.prevent="scrollToSection(item.href); mobileMenuOpen = false"
                class="group flex items-center px-4 py-3 text-lg font-semibold rounded-2xl transition-all duration-200 text-gray-900 dark:text-white hover:bg-sky-50 dark:hover:bg-sky-900/20 hover:text-sky-600 dark:hover:text-sky-400"
              >
                <span class="w-2 h-2 bg-sky-400 rounded-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                {{ item.name }}
              </a>
            </nav>
          </div>
          
          <!-- CTA Button -->
          <div class="px-6 py-6 border-t border-gray-200/50 dark:border-gray-700/50">
            <a 
              href="#contact" 
              @click.prevent="scrollToSection('#contact'); mobileMenuOpen = false"
              class="flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:shadow-sky-500/25 transition-all duration-300 hover:scale-105"
            >
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      </div>
    </Teleport>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

// Navigation items
const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

// Mobile menu state
const mobileMenuOpen = ref(false)

// Debug mobile menu
const handleMobileMenuToggle = () => {
  console.log('[Mobile Menu] Toggle clicked, current state:', mobileMenuOpen.value)
  mobileMenuOpen.value = !mobileMenuOpen.value
  console.log('[Mobile Menu] New state:', mobileMenuOpen.value)
}

// Smooth scroll to section
const scrollToSection = (href) => {
  if (href.startsWith('#')) {
    const element = document.querySelector(href)
    if (element) {
      const headerHeight = 80 // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth'
      })
    }
  }
}
</script>