<template>
  <section id="education" class="py-20 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"></div>
    
    <!-- Decorative elements -->
    <div class="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-sky-400/10 to-blue-500/10 rounded-full blur-3xl"></div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-sky-100/80 dark:bg-sky-900/30 border border-sky-200/50 dark:border-sky-700/50 backdrop-blur-sm mb-6">
          <AcademicCapIcon class="w-4 h-4 text-sky-600 dark:text-sky-400 mr-2" />
          <span class="text-sm font-medium text-sky-700 dark:text-sky-300">Academic Journey</span>
        </div>
        
        <h2 class="text-4xl lg:text-5xl font-bold mb-6">
          <span class="text-gray-900 dark:text-white">Education &</span>
          <span class="bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent"> Learning</span>
        </h2>
        
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Continuous learning and formal education that shaped my technical expertise
        </p>
      </div>

      <!-- Timeline -->
      <div class="max-w-4xl mx-auto">
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-400 to-blue-600 hidden md:block"></div>
          
          <div class="space-y-8">
            <div 
              v-for="(edu, index) in education" 
              :key="index"
              class="relative group"
            >
              <!-- Timeline dot -->
              <div class="absolute left-6 w-4 h-4 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg hidden md:flex items-center justify-center">
                <div class="w-2 h-2 bg-white rounded-full"></div>
              </div>
              
              <!-- Content card -->
              <div class="md:ml-16">
                <div class="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02]">
                  <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    
                    <!-- Education Info -->
                    <div class="flex-1">
                      <div class="flex items-start gap-4">
                        <!-- Icon -->
                        <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl flex items-center justify-center">
                          <component :is="edu.icon" class="w-6 h-6 text-white" />
                        </div>
                        
                        <!-- Details -->
                        <div class="flex-1 min-w-0">
                          <h3 class="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {{ edu.degree }}
                          </h3>
                          <div class="space-y-1">
                            <p class="text-sky-600 dark:text-sky-400 font-semibold">
                              {{ edu.school }}
                            </p>
                            <p class="text-gray-600 dark:text-gray-400">
                              {{ edu.field }}
                            </p>
                            <div v-if="edu.gpa" class="flex items-center gap-2 mt-2">
                              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">IPK:</span>
                              <span class="px-3 py-1 bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-bold rounded-full border border-emerald-200 dark:border-emerald-700">
                                {{ edu.gpa }}/4.00
                              </span>
                            </div>
                            <p v-if="edu.description" class="text-sm text-gray-500 dark:text-gray-500 mt-2">
                              {{ edu.description }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Year Badge -->
                    <div class="flex-shrink-0">
                      <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-sky-100 to-blue-100 dark:from-sky-900/30 dark:to-blue-900/30 border border-sky-200/50 dark:border-sky-700/50 rounded-2xl">
                        <CalendarIcon class="w-4 h-4 text-sky-600 dark:text-sky-400 mr-2" />
                        <span class="text-sky-700 dark:text-sky-300 font-semibold">{{ edu.year }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Skills/Achievements -->
                  <div v-if="edu.skills" class="mt-6 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
                    <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Key Skills Acquired:</h4>
                    <div class="flex flex-wrap gap-2">
                      <span 
                        v-for="skill in edu.skills" 
                        :key="skill"
                        class="px-3 py-1 bg-sky-50 dark:bg-sky-900/20 text-sky-700 dark:text-sky-300 border border-sky-200/50 dark:border-sky-700/50 text-xs font-medium rounded-xl"
                      >
                        {{ skill }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  AcademicCapIcon,
  CalendarIcon,
  BuildingLibraryIcon,
  ComputerDesktopIcon
} from '@heroicons/vue/24/outline'

const education = [
  {
    degree: "S1 Teknik Informatika",
    school: "Universitas 17 Agustus 1945 Surabaya",
    field: "Graduated February 2025",
    year: "2021 - 2025",
    gpa: "3.68",
    icon: AcademicCapIcon,
    description: "Completed bachelor's degree in Informatics Engineering with focus on software development and system analysis. Achieved strong academic performance with consistent high grades in programming and system design courses.",
    skills: ["Software Engineering", "Database Systems", "Web Development", "System Analysis", "Programming", "Laravel Framework", "Vue.js", "MySQL"]
  }
]
</script>