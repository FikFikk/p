// ===== components/PortfolioSection.vue =====
<template>
  <section id="portfolio" class="section-padding bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Featured <span class="text-gradient">Projects</span>
      </h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        <div v-for="(project, index) in projects" :key="index"
             class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <!-- Project Image -->
          <div class="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
            <img :src="project.image" :alt="project.title" 
                 class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
          </div>
          
          <!-- Project Info -->
          <div class="p-6 bg-white dark:bg-gray-800">
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">{{ project.description }}</p>
            
            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tech in project.technologies" :key="tech"
                    class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                {{ tech }}
              </span>
            </div>
            
            <!-- Links -->
            <div class="flex gap-4">
              <a :href="project.liveUrl" target="_blank"
                 class="flex items-center gap-2 text-sky-500 hover:text-sky-600 transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
              <a :href="project.githubUrl" target="_blank"
                 class="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Code
              </a>
            </div>
          </div>
          
          <!-- Hover Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-sky-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <a href="https://github.com/fikfikk" target="_blank" class="btn-primary inline-block">
          View More Projects on GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-featured e-commerce solution with payment integration, inventory management, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&w=600&q=80',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Stripe API'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/fikfikk/ecommerce'
  },
  {
    title: 'Quality Management System',
    description: 'Enterprise QMS for manufacturing with real-time monitoring, reporting, and compliance tracking.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&w=600&q=80',
    technologies: ['Laravel', 'Livewire', 'PostgreSQL', 'ChartJS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/fikfikk/qms'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, kanban boards, and team chat.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&w=600&q=80',
    technologies: ['Vue 3', 'Node.js', 'Socket.io', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/fikfikk/taskapp'
  },
  {
    title: 'Healthcare Portal',
    description: 'Patient management system with appointment scheduling, medical records, and telemedicine features.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&w=600&q=80',
    technologies: ['Laravel', 'Vue.js', 'Redis', 'WebRTC'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/fikfikk/healthcare'
  },
  {
    title: 'Real Estate Platform',
    description: 'Property listing and management platform with virtual tours, advanced search, and CRM integration.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&w=600&q=80',
    technologies: ['Nuxt.js', 'Laravel API', 'Mapbox', 'Algolia'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/fikfikk/realestate'
  },
  {
    title: 'Learning Management System',
    description: 'Online education platform with course creation, student tracking, and interactive content delivery.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&w=600&q=80',
    technologies: ['Laravel', 'Inertia.js', 'MySQL', 'AWS S3'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/fikfikk/lms'
  }
]
</script>