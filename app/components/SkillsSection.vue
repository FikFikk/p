<template>
  <section id="skills" class="py-20 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900"></div>
    
    <!-- Decorative elements -->
    <div class="absolute top-1/4 right-10 w-72 h-72 bg-gradient-to-r from-sky-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-sky-100/80 dark:bg-sky-900/30 border border-sky-200/50 dark:border-sky-700/50 backdrop-blur-sm mb-6">
          <CommandLineIcon class="w-4 h-4 text-sky-600 dark:text-sky-400 mr-2" />
          <span class="text-sm font-medium text-sky-700 dark:text-sky-300">Technical Expertise</span>
        </div>
        
        <h2 class="text-4xl lg:text-5xl font-bold mb-6">
          <span class="text-gray-900 dark:text-white">My</span>
          <span class="bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent"> Skills</span>
        </h2>
        
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          A comprehensive toolkit of modern technologies and frameworks
        </p>
      </div>

      <!-- Skills Categories -->
      <div class="grid lg:grid-cols-3 gap-8 mb-16">
        
        <!-- Frontend Skills -->
        <div class="group">
          <div class="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-sky-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <DevicePhoneMobileIcon class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Frontend</h3>
            </div>
            
            <div class="space-y-4">
              <div 
                v-for="skill in frontendSkills" 
                :key="skill.name"
                class="skill-item"
              >
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-gray-700 dark:text-gray-300">{{ skill.name }}</span>
                  <span class="text-sm font-bold text-sky-600 dark:text-sky-400">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-2 overflow-hidden">
                  <div 
                    class="bg-gradient-to-r from-sky-400 to-blue-500 h-full rounded-full transition-all duration-1000 ease-out skill-progress"
                    :data-width="skill.level + '%'"
                    style="width: 0%"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Backend Skills -->
        <div class="group">
          <div class="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-blue-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                <ServerIcon class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Backend</h3>
            </div>
            
            <div class="space-y-4">
              <div 
                v-for="skill in backendSkills" 
                :key="skill.name"
                class="skill-item"
              >
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-gray-700 dark:text-gray-300">{{ skill.name }}</span>
                  <span class="text-sm font-bold text-blue-600 dark:text-blue-400">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-2 overflow-hidden">
                  <div 
                    class="bg-gradient-to-r from-blue-400 to-indigo-500 h-full rounded-full transition-all duration-1000 ease-out skill-progress"
                    :data-width="skill.level + '%'"
                    style="width: 0%"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tools & DevOps -->
        <div class="group lg:col-span-1">
          <div class="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                <WrenchScrewdriverIcon class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Tools & DevOps</h3>
            </div>
            
            <div class="space-y-4">
              <div 
                v-for="skill in toolsSkills" 
                :key="skill.name"
                class="skill-item"
              >
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-gray-700 dark:text-gray-300">{{ skill.name }}</span>
                  <span class="text-sm font-bold text-purple-600 dark:text-purple-400">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-2 overflow-hidden">
                  <div 
                    class="bg-gradient-to-r from-purple-400 to-pink-500 h-full rounded-full transition-all duration-1000 ease-out skill-progress"
                    :data-width="skill.level + '%'"
                    style="width: 0%"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Technologies -->
      <div class="text-center">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Additional Technologies</h3>
        
        <div class="flex flex-wrap justify-center gap-4">
          <span 
            v-for="(tech, index) in additionalTech" 
            :key="tech"
            class="group relative px-6 py-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl font-medium text-gray-700 dark:text-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-sky-50/70 dark:hover:bg-sky-900/30 cursor-default"
            :style="{ 'animation-delay': index * 100 + 'ms' }"
          >
            {{ tech }}
            <!-- Hover effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-sky-400/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { 
  CommandLineIcon,
  DevicePhoneMobileIcon,
  ServerIcon,
  WrenchScrewdriverIcon
} from '@heroicons/vue/24/outline'

// Frontend skills
const frontendSkills = [
  { name: 'Vue.js / Nuxt', level: 92 },
  { name: 'JavaScript / TypeScript', level: 88 },
  { name: 'HTML5 / CSS3', level: 95 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Responsive Design', level: 93 }
]

// Backend skills
const backendSkills = [
  { name: 'Laravel / PHP', level: 95 },
  { name: 'Node.js', level: 80 },
  { name: 'MySQL', level: 85 },
  { name: 'REST API', level: 90 },
  { name: 'Authentication', level: 88 }
]

// Tools & DevOps skills
const toolsSkills = [
  { name: 'Git / GitHub', level: 92 },
  { name: 'Docker', level: 20 },
  { name: 'CI/CD Pipeline', level: 10 },
  { name: 'Linux / Server', level: 50 },
  { name: 'AWS / Cloud', level: 40 }
]

// Additional technologies
const additionalTech = [
  'React', 'Redux', 'Vite', 'Webpack', 'Sass/SCSS', 'Bootstrap',
  'MySQL', 'Redis', 'GraphQL', 'Socket.io', 'PHPUnit',
  'Nginx', 'Apache', 'Vercel', 'Figma', 'Adobe XD',
  'SilverStripe', 'NextJs', 'Prisma', 'Laravel Mix', 'Livewire',
  'Laravel Fillament', 'TypeScript', 'N8N', 'Express'
]

let observer = null

// Animate skill progress bars
const animateSkillBars = () => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const skillItems = entry.target.querySelectorAll('.skill-item')
        
        skillItems.forEach((item, index) => {
          const progressBar = item.querySelector('.skill-progress')
          const targetWidth = progressBar.getAttribute('data-width')
          
          setTimeout(() => {
            progressBar.style.width = targetWidth
          }, index * 100) // Stagger animation
        })
        
        // Animate additional tech tags
        const techTags = document.querySelectorAll('#skills .group:not(.group)')
        techTags.forEach((tag, index) => {
          setTimeout(() => {
            tag.style.opacity = '1'
            tag.style.transform = 'translateY(0)'
          }, index * 50)
        })
      }
    })
  }, { threshold: 0.3 })

  // Observe the skills section
  const skillsSection = document.getElementById('skills')
  if (skillsSection) {
    observer.observe(skillsSection)
  }
}

onMounted(() => {
  // Initialize skill bars animation
  animateSkillBars()
  
  // Set initial state for tech tags
  const techTags = document.querySelectorAll('#skills .group:not(.group)')
  techTags.forEach((tag) => {
    tag.style.opacity = '0'
    tag.style.transform = 'translateY(20px)'
    tag.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out'
  })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>