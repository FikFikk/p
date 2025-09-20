// ===== components/HeroSection.vue =====
<template>
  <section id="home" class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 -z-10">
      <!-- Animated gradient background -->
      <div class="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      <!-- Floating particles -->
      <div class="absolute inset-0">
        <div 
          v-for="i in 20" 
          :key="i"
          class="absolute animate-float-slow bg-sky-200/20 dark:bg-sky-500/10 rounded-full"
          :class="`w-${Math.random() * 4 + 2} h-${Math.random() * 4 + 2}`"
          :style="{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animationDelay: Math.random() * 5 + 's',
            animationDuration: (Math.random() * 10 + 10) + 's'
          }"
        ></div>
      </div>
      
      <!-- Gradient orbs -->
      <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-sky-400/30 to-blue-500/30 rounded-full mix-blend-multiply blur-xl animate-pulse-slow"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mix-blend-multiply blur-xl animate-pulse-slow animation-delay-2000"></div>
    </div>

    <div class="container mx-auto lg:px-20 lg:py-25 px-6 py-20">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <!-- Text Content -->
        <div class="text-center lg:text-left space-y-8">
          <!-- Greeting Badge -->
          <!-- <div class="inline-flex items-center px-4 py-2 rounded-full bg-sky-100/80 dark:bg-sky-900/30 border border-sky-200/50 dark:border-sky-700/50 backdrop-blur-sm animate-fade-in-up animation-delay-200">
            <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
            <span class="text-sm font-medium text-sky-700 dark:text-sky-300">Available for work</span>
            <span class="text-sm font-medium text-sky-700 dark:text-sky-300">Not Available for work</span>
          </div> -->

          <!-- Main Heading -->
          <div class="space-y-4 animate-fade-in-up animation-delay-400">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span class="block bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 dark:from-sky-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Mochammad Fikri Dwi Fardian
              </span>
            </h1>
            
            <!-- Typing effect for roles -->
            <div class="h-16 lg:h-5">
              <p class="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-medium">
                <span class="text-sky-600 dark:text-sky-400">{{ currentRole }}</span>
                <span class="animate-blink text-sky-600 dark:text-sky-400">|</span>
              </p>
            </div>
          </div>

          <!-- Description -->
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up animation-delay-600">
            Passionate developer with a unique journey from precision manufacturing to digital innovation. 
            Specializing in Laravel-based web applications, quality management systems, and bringing creative solutions to complex technical challenges.
          </p>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-800">
            <a 
              href="#contact" 
              @click="scrollToSection('#contact')"
              class="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-sky-500/25 transition-all duration-300 hover:scale-105"
            >
              <span class="relative z-10">Let's Connect</span>
              <ArrowRightIcon class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              <div class="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a 
              href="#projects" 
              @click="scrollToSection('#projects')"
              class="group inline-flex items-center justify-center px-8 py-4 font-semibold text-sky-600 dark:text-sky-400 bg-sky-50/80 dark:bg-sky-900/30 border border-sky-200/50 dark:border-sky-700/50 rounded-2xl backdrop-blur-sm hover:bg-sky-100/80 dark:hover:bg-sky-900/50 transition-all duration-300 hover:scale-105"
            >
              <EyeIcon class="mr-2 h-5 w-5" />
              View Projects
            </a>
          </div>

          <!-- Social Links -->
          <div class="flex gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-1000">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.href" 
              :title="social.name"
              target="_blank"
              class="group p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
            >
              <component 
                :is="social.icon" 
                class="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-200"
              />
            </a>
          </div>
        </div>

        <!-- Hero Image/3D Element -->
        <div class="flex justify-center lg:justify-end animate-fade-in-up animation-delay-600">
          <div class="relative">
            <!-- Floating rings -->
            <div class="absolute -inset-4 animate-spin-slow">
              <div class="w-full h-full border-2 border-sky-200/30 dark:border-sky-700/30 rounded-full"></div>
            </div>
            <div class="absolute -inset-8 animate-spin-reverse-slow">
              <div class="w-full h-full border border-blue-200/20 dark:border-blue-700/20 rounded-full border-dashed"></div>
            </div>
            
            <!-- Main profile container -->
            <div class="relative z-10">
              <!-- Glow effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full blur-2xl opacity-20 animate-pulse-slow"></div>
              
              <!-- Profile image -->
              <div class="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/50 dark:border-gray-700/50 shadow-2xl backdrop-blur-sm">
                <img 
                  src="~/assets/img/hero.webp" 
                  alt="Mochammad Fikri Dwi Fardian - Full Stack Developer" 
                  class="w-full h-full object-cover"
                >
                <!-- <NuxtImg 
                  src="/img/hero.jpg"
                  alt="Mochammad Fikri Dwi Fardian - Full Stack Developer"
                  class="w-full h-full object-cover"
                  width="320"
                  height="320"
                  sizes="sm:256px lg:320px"
                  priority
                  format="webp"
                  quality="80"
                /> -->
                <!-- Overlay gradient -->
                <div class="absolute inset-0 bg-gradient-to-t from-sky-900/20 to-transparent"></div>
              </div>
            </div>

            <!-- Floating tech badges -->
            <div class="absolute -top-4 -right-4 animate-float">
              <div class="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-sky-200/50 dark:border-sky-700/50 rounded-full shadow-lg">
                <span class="text-sm font-semibold text-sky-600 dark:text-sky-400">Vue.js</span>
              </div>
            </div>
            
            <div class="absolute -bottom-4 -left-4 animate-float animation-delay-1000">
              <div class="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 rounded-full shadow-lg">
                <span class="text-sm font-semibold text-blue-600 dark:text-blue-400">Laravel</span>
              </div>
            </div>

            <div class="absolute -top-8 -left-8 animate-float animation-delay-500">
              <div class="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50 rounded-full shadow-lg">
                <span class="text-sm font-semibold text-purple-600 dark:text-purple-400">Nuxt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="flex flex-col items-center space-y-2">
        <div class="w-6 h-10 border-2 border-gray-400/50 dark:border-gray-600/50 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-scroll"></div>
        </div>
        <ChevronDownIcon class="h-4 w-4 text-gray-400 dark:text-gray-600" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { 
  ArrowRightIcon, 
  EyeIcon, 
  ChevronDownIcon 
} from '@heroicons/vue/24/outline'

// Social media icons
import GitHubIcon from '../icons/GitHubIcon.vue'
import LinkedInIcon from '../icons/LinkedInIcon.vue'
import EmailIcon from '../icons/EmailIcon.vue'
import TwitterIcon from '../icons/TwitterIcon.vue'

// Role typing animation
const roles = [
  'Fullstack Developer',
  'CNC Programming Expert', 
  'Laravel Specialist',
  'Quality Management System Developer',
  'Creative Problem Solver'
]

const currentRole = ref('')
const currentIndex = ref(0)
const isDeleting = ref(false)
let typeInterval = null

// Social links
const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/fikfikk',
    icon: GitHubIcon
  },
  {
    name: 'LinkedIn', 
    href: 'https://linkedin.com/in/mochammad-fikri-dwi-fardian',
    icon: LinkedInIcon
  },
  {
    name: 'Twitter',
    href: 'https://x.com/MochamadFardian',
    icon: TwitterIcon
  },
  {
    name: 'Email',
    href: 'mailto:fikri225456@gmail.com',
    icon: EmailIcon
  }
]

// Typing animation logic
const typeRole = () => {
  const current = roles[currentIndex.value]
  
  if (isDeleting.value) {
    currentRole.value = current.substring(0, currentRole.value.length - 1)
    
    if (currentRole.value === '') {
      isDeleting.value = false
      currentIndex.value = (currentIndex.value + 1) % roles.length
    }
  } else {
    currentRole.value = current.substring(0, currentRole.value.length + 1)
    
    if (currentRole.value === current) {
      setTimeout(() => {
        isDeleting.value = true
      }, 2000)
    }
  }
}

// Smooth scroll function
const scrollToSection = (href) => {
  if (href.startsWith('#')) {
    const element = document.querySelector(href)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth'
      })
    }
  }
}

onMounted(() => {
  typeInterval = setInterval(typeRole, 100)
})

onUnmounted(() => {
  if (typeInterval) {
    clearInterval(typeInterval)
  }
})
</script>