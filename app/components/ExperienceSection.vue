<template>
  <section id="experience" class="py-20 lg:py-32 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-white via-sky-50/30 to-white dark:from-gray-900 dark:via-sky-900/10 dark:to-gray-900"></div>
    
    <!-- Decorative elements -->
    <div class="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"></div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-sky-100/80 dark:bg-sky-900/30 border border-sky-200/50 dark:border-sky-700/50 backdrop-blur-sm mb-6">
          <BriefcaseIcon class="w-4 h-4 text-sky-600 dark:text-sky-400 mr-2" />
          <span class="text-sm font-medium text-sky-700 dark:text-sky-300">Professional Journey</span>
        </div>
        
        <h2 class="text-4xl lg:text-5xl font-bold mb-6">
          <span class="text-gray-900 dark:text-white">Work</span>
          <span class="bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent"> Experience</span>
        </h2>
        
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          A track record of delivering high-quality solutions and driving technical excellence
        </p>
      </div>

      <!-- Experience Timeline -->
      <div class="max-w-4xl mx-auto">
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-400 to-blue-600"></div>
          
          <div class="space-y-12">
            <div 
              v-for="(exp, index) in experiences" 
              :key="index"
              class="relative group"
            >
              <!-- Timeline dot -->
              <div class="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10">
                <div class="w-1 h-1 bg-white rounded-full m-auto mt-0.5"></div>
              </div>

              <!-- Content Card -->
              <div class="ml-16">
                <div class="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02]">
                  
                  <!-- Header -->
                  <div class="flex items-start gap-4 mb-6">
                    <div class="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <component :is="exp.icon" class="w-6 h-6 text-white" />
                    </div>
                    <div class="flex-1">
                      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ exp.position }}</h3>
                        <span class="inline-flex items-center px-3 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400 text-xs font-medium rounded-full border border-sky-200 dark:border-sky-700">
                          {{ exp.type }}
                        </span>
                      </div>
                      <p class="text-lg text-sky-600 dark:text-sky-400 font-semibold">{{ exp.company }}</p>
                      <p class="text-sm text-gray-500 dark:text-gray-400">{{ exp.period }}</p>
                    </div>
                  </div>

                  <!-- Description -->
                  <div class="space-y-4">
                    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {{ exp.description }}
                    </p>

                    <!-- Key Achievements -->
                    <div v-if="exp.achievements" class="space-y-2">
                      <h4 class="font-semibold text-gray-900 dark:text-white text-sm">Key Achievements:</h4>
                      <ul class="space-y-1">
                        <li 
                          v-for="achievement in exp.achievements" 
                          :key="achievement"
                          class="flex items-start text-sm text-gray-600 dark:text-gray-400"
                          :class="[
                            // index % 2 === 0 ? 'lg:flex-row-reverse lg:text-right' : ''
                          ]"
                        >
                          <CheckIcon class="w-4 h-4 text-sky-600 dark:text-sky-400 flex-shrink-0 mt-0.5" :class="[
                            index % 2 === 0 ? 'lg:ml-2 lg:mr-0 mr-2' : 'mr-2'
                          ]" />
                          <span>{{ achievement }}</span>
                        </li>
                      </ul>
                    </div>

                    <!-- Technologies Used -->
                    <div v-if="exp.technologies" class="pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                      <div class="flex flex-wrap gap-2">
                        <span 
                          v-for="tech in exp.technologies" 
                          :key="tech"
                          class="px-3 py-1 bg-sky-50 dark:bg-sky-900/20 text-sky-700 dark:text-sky-300 border border-sky-200/50 dark:border-sky-700/50 text-xs font-medium rounded-xl"
                        >
                          {{ tech }}
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
    </div>
  </section>
</template>

<script setup>
import { 
  BriefcaseIcon,
  CheckIcon,
  BuildingOfficeIcon,
  ComputerDesktopIcon,
  RocketLaunchIcon,
  CodeBracketIcon
} from '@heroicons/vue/24/outline'

const experiences = [
  {
    position: "Fullstack Developer Intern",
    company: "INKINDO",
    period: "Dec 2023 - Dec 2024",
    type: "Internship",
    icon: RocketLaunchIcon,
    description: "Developed a comprehensive web-based system using Laravel framework to support project documentation management and Anti-Bribery Management System. Built the entire system from scratch, including document control, project monitoring, and compliance tracking features to improve internal workflows and enhance organizational transparency.",
    achievements: [
      "Built complete Laravel system from scratch for documentation management",
      "Implemented Anti-Bribery Management System (SMAP) features",
      "Developed document control and project monitoring capabilities",
      "Enhanced organizational transparency through compliance tracking"
    ],
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap", "Document Management"]
  },
  {
    position: "CNC Operator",
    company: "PT. Dantrindo",
    period: "Nov 2020 - Jan 2021",
    type: "Full Time",
    icon: ComputerDesktopIcon,
    description: "Operated CNC machinery with precision and efficiency, ensuring high-quality production standards and maintaining optimal machine performance in a fast-paced manufacturing environment.",
    achievements: [
      "Maintained high-quality production standards",
      "Operated CNC machinery with precision and efficiency",
      "Ensured optimal machine performance in manufacturing environment",
      "Contributed to fast-paced production workflows"
    ],
    technologies: ["CNC Operations", "Quality Control", "Manufacturing"]
  },
  {
    position: "CNC Programmer",
    company: "PT. Katwara",
    period: "Jul 2019 - Jul 2020",
    type: "Full Time",
    icon: CodeBracketIcon,
    description: "Specialized in modifying and creating technical drawings, determining production quantities, and optimizing machine operations. Proficient in Maestro (Morbidelli) and Alpacam software. Skilled in tool alignment, clamp positioning, and executing precision program tasks while coordinating with operators for quality assurance.",
    achievements: [
      "Specialized in technical drawing modification and creation",
      "Optimized machine operations and production quantities",
      "Mastered Maestro (Morbidelli) and Alpacam software",
      "Coordinated with operators for quality assurance"
    ],
    technologies: ["Maestro (Morbidelli)", "Alpacam", "Technical Drawing", "CNC Programming", "Quality Control"]
  }
]
</script>