<template>
  <div class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <!-- Background with image -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-900 via-sky-900 to-gray-900"></div>
    <div class="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-10"></div>
    
    <!-- Animated background elements -->
    <div class="absolute top-20 left-10 w-72 h-72 bg-neon-cyan/20 rounded-full filter blur-xl animate-pulse"></div>
    <div class="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/20 rounded-full filter blur-xl animate-pulse" style="animation-delay: 2s;"></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-blue/20 rounded-full filter blur-xl animate-pulse" style="animation-delay: 4s;"></div>
    
    <div class="relative z-10 text-center px-4 max-w-2xl">
      <!-- 404 Number -->
      <div class="text-8xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text animate-glow mb-8">
        404
      </div>
      
      <!-- Error message -->
      <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
        Page Not Found
      </h1>
      
      <p class="text-xl text-gray-300 mb-8 leading-relaxed">
        Oops! The page you're looking for seems to have wandered off into the digital void. 
        Don't worry, even the best developers encounter 404s sometimes.
      </p>
      
      <!-- Action buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink to="/" 
                  class="px-8 py-4 bg-gradient-to-r from-primary-600 to-sky-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-primary-700 hover:to-sky-700 transition-all duration-300 group">
          <span class="mr-2">🏠</span>
          Go Home
          <svg class="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </NuxtLink>
        
        <button @click="goBack" 
                class="px-8 py-4 border-2 border-neon-cyan text-neon-cyan font-semibold rounded-lg hover:bg-neon-cyan hover:text-gray-900 transition-all duration-300 neon-border">
          <span class="mr-2">←</span>
          Go Back
        </button>
      </div>
      
      <!-- Fun fact -->
      <div class="mt-12 p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl">
        <p class="text-gray-400 text-sm">
          <strong class="text-neon-cyan">Fun Fact:</strong> 
          HTTP 404 errors were named after room 404 at CERN, where the World Wide Web was born. 
          The room contained the central database for the original web!
        </p>
      </div>
    </div>
    
    <!-- Floating elements -->
    <div class="absolute top-10 right-1/4 text-neon-cyan opacity-30 animate-float">
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    </div>
    
    <div class="absolute bottom-32 left-1/4 text-neon-purple opacity-30 animate-float" style="animation-delay: 3s;">
      <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
      </svg>
    </div>
  </div>
</template>

<script setup>
// Set page meta
definePageMeta({
  layout: 'error'
})

// Go back function
const goBack = () => {
  if (window.history.length > 1) {
    window.history.back()
  } else {
    navigateTo('/')
  }
}

// SEO
useSeoMeta({
  title: '404 - Page Not Found | FikFikk Portfolio',
  description: 'The page you are looking for could not be found.',
})
</script>