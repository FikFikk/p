<template>
  <section id="about" class="py-20 lg:py-32 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 -z-10">
      <!-- Gradient background -->
      <div class="absolute inset-0 bg-gradient-to-b from-white via-sky-50/30 to-white dark:from-gray-900 dark:via-sky-900/10 dark:to-gray-900"></div>
      
      <!-- Decorative elements -->
      <div class="absolute top-20 left-10 w-20 h-20 bg-sky-200/20 dark:bg-sky-800/20 rounded-full blur-xl"></div>
      <div class="absolute bottom-20 right-10 w-32 h-32 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-xl"></div>
    </div>

    <div class="container mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-sky-100/80 dark:bg-sky-900/30 border border-sky-200/50 dark:border-sky-700/50 backdrop-blur-sm mb-6">
          <UserIcon class="w-4 h-4 text-sky-600 dark:text-sky-400 mr-2" />
          <span class="text-sm font-medium text-sky-700 dark:text-sky-300">Get to know me</span>
        </div>
        
        <h2 class="text-4xl lg:text-5xl font-bold mb-6">
          <span class="text-gray-900 dark:text-white">About</span>
          <span class="bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent"> Me</span>
        </h2>
        
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Passionate full-stack developer with a love for creating exceptional digital experiences
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 lg:px-20 items-center">
        
        <!-- Content Column -->
        <div class="space-y-8 animate-fade-in-up animation-delay-200">
          <div class="space-y-6">
            <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white hover-lift">
              Building the future, one line of code at a time
            </h3>
            
            <div class="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                I'm a passionate full-stack developer with expertise in building scalable web applications 
                and creating seamless user experiences. With a strong foundation in modern web technologies, 
                I transform complex problems into simple, elegant solutions.
              </p>
              
              <p>
                My journey began with curiosity about how the web works and has evolved into a career 
                focused on <strong class="text-sky-600 dark:text-sky-400">Laravel</strong>, 
                <strong class="text-sky-600 dark:text-sky-400">Vue.js</strong>, and creating impactful 
                digital products. I believe in writing clean, maintainable code and staying at the 
                forefront of web development.
              </p>
            </div>
          </div>

          <!-- Skills Preview -->
          <div class="grid grid-cols-2 gap-4 animate-fade-in-up animation-delay-600">
            <div class="space-y-3">
              <h4 class="font-semibold text-gray-900 dark:text-white">Frontend</h4>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium hover:bg-sky-200 dark:hover:bg-sky-800/50 hover:scale-110 transition-all duration-300 cursor-default hover-lift">
                  Vue.js
                </span>
                <span class="px-3 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium hover:bg-sky-200 dark:hover:bg-sky-800/50 hover:scale-110 transition-all duration-300 cursor-default hover-lift">
                  Nuxt
                </span>
                <span class="px-3 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium hover:bg-sky-200 dark:hover:bg-sky-800/50 hover:scale-110 transition-all duration-300 cursor-default hover-lift">
                  Tailwind
                </span>
              </div>
            </div>
            
            <div class="space-y-3">
              <h4 class="font-semibold text-gray-900 dark:text-white">Backend</h4>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800/50 hover:scale-110 transition-all duration-300 cursor-default hover-lift">
                  Laravel
                </span>
                <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800/50 hover:scale-110 transition-all duration-300 cursor-default hover-lift">
                  PHP
                </span>
                <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800/50 hover:scale-110 transition-all duration-300 cursor-default hover-lift">
                  MySQL
                </span>
              </div>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="pt-4">
            <a 
              href="#contact" 
              @click="scrollToSection('#contact')"
              class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-sky-500/25 transition-all duration-300 hover:scale-105"
            >
              Let's Work Together
              <ArrowRightIcon class="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

        <!-- Stats Column -->
        <div class="space-y-8">
          <!-- Main Stats Card -->
          <div class="relative">
            <!-- Glass card -->
            <div class="glass dark:glass-dark rounded-3xl p-8 shadow-2xl">
              <div class="grid grid-cols-2 gap-8">
                <div 
                  v-for="(stat, index) in stats" 
                  :key="index"
                  class="text-center group"
                >
                  <div class="relative">
                    <!-- Animated counter -->
                    <div class="text-4xl lg:text-5xl font-bold text-sky-600 dark:text-sky-400 mb-2 transition-all duration-300 group-hover:scale-110">
                      {{ animatedStats[index] }}+
                    </div>
                    <div class="text-sm lg:text-base text-gray-600 dark:text-gray-400 font-medium">
                      {{ stat.label }}
                    </div>
                    
                    <!-- Hover glow effect -->
                    <div class="absolute inset-0 bg-gradient-to-r from-sky-400/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Decorative border -->
            <div class="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl opacity-20 blur-sm -z-10"></div>
          </div>

          <!-- Achievement Cards -->
          <div class="grid gap-4">
            <div 
              v-for="achievement in achievements" 
              :key="achievement.title"
              class="flex items-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-sky-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <component :is="achievement.icon" class="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white">{{ achievement.title }}</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">{{ achievement.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { 
  UserIcon, 
  ArrowRightIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  BoltIcon,
  HeartIcon 
} from '@heroicons/vue/24/outline'

// Stats data
const stats = [
  { value: 5, label: 'Years Experience' },
  { value: 50, label: 'Projects Done' },
  { value: 30, label: 'Happy Clients' },
  { value: 15, label: 'Technologies' }
]

// Achievement data
const achievements = [
  {
    title: 'Clean Code Advocate',
    description: 'Writing maintainable, scalable code',
    icon: CodeBracketIcon
  },
  {
    title: 'Continuous Learner',
    description: 'Always exploring new technologies',
    icon: AcademicCapIcon
  },
  {
    title: 'Performance Focused',
    description: 'Optimizing for speed and efficiency',
    icon: BoltIcon
  },
  {
    title: 'User Experience First',
    description: 'Designing with empathy and purpose',
    icon: HeartIcon
  }
]

// Animated stats
const animatedStats = ref([0, 0, 0, 0])
let animationFrames = []

// Animate number counting
const animateNumber = (index, target, duration = 2000) => {
  const start = performance.now()
  const startValue = 0

  const animate = (currentTime) => {
    const elapsed = currentTime - start
    const progress = Math.min(elapsed / duration, 1)
    
    // Easing function for smooth animation
    const easeOut = 1 - Math.pow(1 - progress, 3)
    
    animatedStats.value[index] = Math.floor(startValue + (target - startValue) * easeOut)
    
    if (progress < 1) {
      animationFrames[index] = requestAnimationFrame(animate)
    }
  }
  
  animationFrames[index] = requestAnimationFrame(animate)
}

// Intersection observer for scroll animations
let observer = null

// Scroll to section function
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
  // Set up intersection observer for stats animation
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Start animating stats when section comes into view
        stats.forEach((stat, index) => {
          setTimeout(() => {
            animateNumber(index, stat.value, 2000 + (index * 200))
          }, index * 100)
        })
        
        // Disconnect observer after first animation
        observer.disconnect()
      }
    })
  }, { threshold: 0.3 })
  
  // Observe the about section
  const aboutSection = document.getElementById('about')
  if (aboutSection) {
    observer.observe(aboutSection)
  }
})

onUnmounted(() => {
  // Clean up animation frames
  animationFrames.forEach(frame => {
    if (frame) {
      cancelAnimationFrame(frame)
    }
  })
  
  // Clean up intersection observer
  if (observer) {
    observer.disconnect()
  }
})
</script>