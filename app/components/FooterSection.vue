<template>
  <footer class="relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-t border-sky-200/30 dark:border-sky-700/30">
    <!-- Background decorations -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-0 left-20 w-40 h-40 bg-gradient-to-r from-sky-400/5 to-blue-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-20 w-32 h-32 bg-gradient-to-r from-blue-400/5 to-purple-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-6 py-16 lg:py-20 relative z-10">
      <div class="text-center space-y-8">
        
        <!-- Logo/Brand Section -->
        <!-- <div class="space-y-4">
          <div class="flex justify-center">
            <div class="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span class="text-white font-bold text-2xl">F</span>
            </div>
          </div>
          
          <div>
            <h3 class="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent mb-2">
              Mochammad Fikri Dwi Fardian
            </h3>
            <p class="text-gray-600 dark:text-gray-400 font-medium">
              Fullstack Developer & CNC Programming Expert
            </p>
          </div>
        </div> -->

        <!-- Social Links -->
        <div class="flex justify-center gap-4">
          <a 
            v-for="social in socialLinks" 
            :key="social.name"
            :href="social.href" 
            target="_blank"
            :title="social.name"
            class="group relative p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          >
            <component 
              :is="social.icon" 
              class="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300"
            />
            
            <!-- Tooltip -->
            <div class="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div class="bg-gray-900 dark:bg-gray-700 text-white text-sm px-3 py-1 rounded-lg shadow-lg">
                {{ social.name }}
                <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
              </div>
            </div>
          </a>
        </div>

        <!-- Quote/Tagline -->
        <!-- <div class="max-w-2xl mx-auto">
          <blockquote class="text-lg italic text-gray-600 dark:text-gray-400 border-l-4 border-sky-400 pl-6 bg-sky-50/50 dark:bg-sky-900/10 rounded-r-2xl py-4">
            "Passionate about transforming complex challenges into elegant digital solutions through innovative technology and creative problem-solving."
          </blockquote>
        </div> -->

        <!-- Divider -->
        <div class="w-24 h-0.5 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto rounded-full"></div>

        <!-- Copyright & Tech Stack -->
        <div class="space-y-4">
          <p class="text-gray-600 dark:text-gray-400 text-sm">
            © {{ currentYear }} Mochammad Fikri Dwi Fardian. All rights reserved.
          </p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-500">
            <span>Built with</span>
            <div class="flex items-center gap-2">
              <span class="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-md font-medium">
                💚 Nuxt 4
              </span>
              <span class="text-gray-400">+</span>
              <span class="px-2 py-1 bg-sky-100 dark:bg-sky-900/20 text-sky-700 dark:text-sky-400 rounded-md font-medium">
                🎨 Tailwind CSS
              </span>
              <span class="text-gray-400">+</span>
              <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-md font-medium">
                ✨ HeadlessUI
              </span>
            </div>
          </div>

          <!-- Made in Indonesia -->
          <div class="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-500">
            <span>Made with</span>
            <span class="text-red-500">FikFikk</span>
            <span>in Surabaya, Indonesia</span>
            <span class="text-red-500 text-base">🇮🇩</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Social media icons
import GitHubIcon from '../icons/GitHubIcon.vue'
import LinkedInIcon from '../icons/LinkedInIcon.vue'
import EmailIcon from '../icons/EmailIcon.vue'
import TwitterIcon from '../icons/TwitterIcon.vue'

const currentYear = new Date().getFullYear()

// Social links data
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
</script>