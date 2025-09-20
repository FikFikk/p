<template>
  <section id="projects" class="py-20 lg:py-32 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"></div>
    
    <!-- Decorative elements -->
    <div class="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-sky-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-sky-100/80 dark:bg-sky-900/30 border border-sky-200/50 dark:border-sky-700/50 backdrop-blur-sm mb-6">
          <RocketLaunchIcon class="w-4 h-4 text-sky-600 dark:text-sky-400 mr-2" />
          <span class="text-sm font-medium text-sky-700 dark:text-sky-300">Portfolio Showcase</span>
        </div>
        
        <h2 class="text-4xl lg:text-5xl font-bold mb-6">
          <span class="text-gray-900 dark:text-white">Featured</span>
          <span class="bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent"> Projects</span>
        </h2>
        
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          A selection of projects that showcase my expertise in full-stack development
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="space-y-20">
        <div 
          v-for="(project, index) in projectsData" 
          :key="index"
          class="project-card group"
          :class="{ 'lg:flex-row-reverse': index % 2 === 1 }"
        >
          <div class="flex flex-col lg:flex-row gap-12 items-center">
            
            <!-- Project Image -->
            <div class="flex-1">
              <div class="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                <!-- Image container -->
                <div class="relative h-80 lg:h-96 overflow-hidden bg-gradient-to-br from-sky-100 to-blue-100 dark:from-gray-800 dark:to-gray-700">
                  <img 
                    :src="project.image" 
                    :alt="project.title"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  >
                  
                  <!-- Overlay -->
                  <div class="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"></div>
                  
                  <!-- Project type badge -->
                  <div class="absolute top-6 left-6">
                    <span class="px-4 py-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm text-sky-600 dark:text-sky-400 text-sm font-semibold rounded-2xl border border-sky-200/50 dark:border-sky-700/50 shadow-lg">
                      {{ project.type }}
                    </span>
                  </div>
                  
                  <!-- View Demo Button -->
                  <div class="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <a 
                      :href="project.demoUrl" 
                      target="_blank"
                      class="flex items-center px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <EyeIcon class="w-4 h-4 mr-2" />
                      View Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Project Content -->
            <div class="flex-1 space-y-6">
              <!-- Title and Description -->
              <div>
                <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {{ project.title }}
                </h3>
                <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {{ project.description }}
                </p>
              </div>

              <!-- Key Features -->
              <div>
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <CheckBadgeIcon class="w-5 h-5 text-sky-600 dark:text-sky-400 mr-2" />
                  Key Features
                </h4>
                <div class="grid sm:grid-cols-2 gap-3">
                  <div 
                    v-for="(feature, featureIndex) in project.features.slice(0, 4)" 
                    :key="featureIndex"
                    class="flex items-start"
                  >
                    <div class="flex-shrink-0 w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3"></div>
                    <span class="text-sm text-gray-600 dark:text-gray-400">{{ feature }}</span>
                  </div>
                </div>
              </div>

              <!-- Tech Stack -->
              <div>
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <CodeBracketIcon class="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                  Tech Stack
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tech in project.techStack" 
                    :key="tech"
                    class="px-3 py-1 bg-gradient-to-r from-sky-100 to-blue-100 dark:from-sky-900/30 dark:to-blue-900/30 text-sky-700 dark:text-sky-300 border border-sky-200/50 dark:border-sky-700/50 text-sm font-medium rounded-xl"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  :href="project.githubUrl" 
                  target="_blank"
                  class="group inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:border-sky-500 dark:hover:border-sky-400 hover:text-sky-600 dark:hover:text-sky-400 transition-all duration-300 hover:scale-105"
                >
                  <component :is="GitHubIcon" class="w-5 h-5 mr-2" />
                  Source Code
                </a>
                
                <a 
                  :href="project.demoUrl" 
                  target="_blank"
                  class="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-sky-500/25 transition-all duration-300 hover:scale-105"
                >
                  <ArrowTopRightOnSquareIcon class="w-5 h-5 mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- View More Projects CTA -->
      <div class="text-center mt-20">
        <a 
          href="https://github.com/fikfikk" 
          target="_blank"
          class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-700 dark:to-gray-800 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <FolderIcon class="w-5 h-5 mr-2" />
          View More Projects
          <ArrowRightIcon class="w-5 h-5 ml-2" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  RocketLaunchIcon,
  EyeIcon,
  CheckBadgeIcon,
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon,
  FolderIcon,
  ArrowRightIcon
} from '@heroicons/vue/24/outline'

import GitHubIcon from '../icons/GitHubIcon.vue'

const projectsData = [
  {
    title: 'Integrated Management System for Compliance & Quality',
    type: 'Enterprise Web App',
    description: 'A robust web application for implementing and managing Quality Management Systems (SMM) and Anti-Bribery Management Systems (SMAP). This integrated platform helps organizations ensure compliance and drive operational excellence.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Secure document control & lifecycle management',
      'Real-time project monitoring & progress tracking', 
      'Automated compliance verification & comprehensive reporting',
      'Granular role-based access control for data security',
      'Seamless integration of SMM & SMAP modules',
      'Dynamic dashboards with insightful analytics'
    ],
    techStack: ['Laravel Framework', 'PHP 8+', 'MySQL', 'JavaScript', 'Bootstrap 5'],
    githubUrl: 'https://github.com/fikfikk',
    demoUrl: '#'
  },
  {
    title: 'Hostel Operations & Tenant Management Platform',
    type: 'Property Management',
    description: 'A dedicated web application for efficient management of monthly hostel/boarding house operations. It features a public portal for property visibility and a dual-role system (Admin/Tenant) for streamlined operational control and convenient tenant self-service.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80',
    features: [
      'Public-facing portal showcasing property details & amenities',
      'Secure dual-role access for administrators & tenants',
      'Comprehensive admin dashboard for operational oversight (rooms, tenants, financials)',
      'Tenant self-service portal for bill management & PDF invoice export (with QR)',
      'Automated monthly billing for rent & utilities',
      '(In Progress) Payment gateway integration for seamless online transactions'
    ],
    techStack: ['Laravel Framework', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'PDF Generation'],
    githubUrl: 'https://github.com/fikfikk',
    demoUrl: '#'
  }
]
</script>