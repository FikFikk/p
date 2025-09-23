
<template>
  <section id="contact" class="py-20 lg:py-32 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-white via-sky-50/30 to-white dark:from-gray-900 dark:via-sky-900/10 dark:to-gray-900"></div>
    
    <!-- Decorative elements -->
    <div class="absolute top-1/4 right-20 w-72 h-72 bg-gradient-to-r from-sky-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-sky-100/80 dark:bg-sky-900/30 border border-sky-200/50 dark:border-sky-700/50 backdrop-blur-sm mb-6">
          <ChatBubbleLeftRightIcon class="w-4 h-4 text-sky-600 dark:text-sky-400 mr-2" />
          <span class="text-sm font-medium text-sky-700 dark:text-sky-300">Let's Connect</span>
        </div>
        
        <h2 class="text-4xl lg:text-5xl font-bold mb-6">
          <span class="text-gray-900 dark:text-white">Get In</span>
          <span class="bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent"> Touch</span>
        </h2>
        
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Have a project in mind or want to collaborate? I'd love to hear from you
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
        
        <!-- Contact Form -->
        <div class="order-2 lg:order-1">
          <div class="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid sm:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label for="name" class="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Your Name *
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name" 
                    required
                    class="w-full px-4 py-4 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all duration-300"
                    placeholder="Enter your name"
                  >
                </div>
                
                <div class="space-y-2">
                  <label for="email" class="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email" 
                    required
                    class="w-full px-4 py-4 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all duration-300"
                    placeholder="your.email@example.com"
                  >
                </div>
              </div>
              
              <div class="space-y-2">
                <label for="subject" class="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Subject *
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="form.subject" 
                  required
                  class="w-full px-4 py-4 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all duration-300"
                  placeholder="What's this about?"
                >
              </div>
              
              <div class="space-y-2">
                <label for="message" class="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Message *
                </label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  rows="6" 
                  required
                  class="w-full px-4 py-4 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                :disabled="loading"
                class="group w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:shadow-sky-500/25 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span v-if="!loading" class="flex items-center">
                  Send Message
                  <PaperAirplaneIcon class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                <span v-else class="flex items-center">
                  <ArrowPathIcon class="animate-spin mr-2 h-5 w-5" />
                  Sending...
                </span>
              </button>
            </form>
            
            <!-- Success Message -->
            <Transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="opacity-0 transform scale-95 translate-y-2"
              enter-to-class="opacity-100 transform scale-100 translate-y-0"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="opacity-100 transform scale-100 translate-y-0"
              leave-to-class="opacity-0 transform scale-95 translate-y-2"
            >
              <div v-if="showSuccess" class="mt-6 p-4 bg-green-100/80 dark:bg-green-900/30 border border-green-200/50 dark:border-green-700/50 rounded-2xl backdrop-blur-sm">
                <div class="flex items-center">
                  <CheckCircleIcon class="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
                  <p class="text-green-700 dark:text-green-300 font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              </div>
            </Transition>

            <!-- Error Message -->
            <Transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="opacity-0 transform scale-95 translate-y-2"
              enter-to-class="opacity-100 transform scale-100 translate-y-0"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="opacity-100 transform scale-100 translate-y-0"
              leave-to-class="opacity-0 transform scale-95 translate-y-2"
            >
              <div v-if="showError" class="mt-6 p-4 bg-red-100/80 dark:bg-red-900/30 border border-red-200/50 dark:border-red-700/50 rounded-2xl backdrop-blur-sm">
                <div class="flex items-start">
                  <ExclamationTriangleIcon class="h-6 w-6 text-red-600 dark:text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div class="flex-1">
                    <p class="text-red-700 dark:text-red-300 font-medium">
                      {{ errorMessage }}
                    </p>
                    <p class="text-red-600 dark:text-red-400 text-sm mt-1">
                      You can also reach me directly at 
                      <a href="mailto:fikri225456@gmail.com" class="underline hover:no-underline">fikri225456@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="order-1 lg:order-2 space-y-8">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Let's start a conversation
            </h3>
            <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Whether you have a project in mind, need technical consultation, or just want to say hi, 
              I'm always excited to connect with fellow developers and potential collaborators.
            </p>
          </div>

          <!-- Contact Methods -->
          <div class="space-y-4">
            <a 
              href="mailto:fikri225456@gmail.com"
              class="group flex items-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <EnvelopeIcon class="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white">Email Me</h4>
                <p class="text-sky-600 dark:text-sky-400">fikri225456@gmail.com</p>
              </div>
            </a>

            <a 
              href="tel:+6285157584466"
              class="group flex items-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <PhoneIcon class="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white">Call Me</h4>
                <p class="text-green-600 dark:text-green-400">+62 851 5758 4466</p>
              </div>
            </a>

            <div class="flex items-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-lg">
              <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                <MapPinIcon class="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white">Location</h4>
                <p class="text-purple-600 dark:text-purple-400">Surabaya, Indonesia</p>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div>
            <h4 class="font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
            <div class="flex gap-4">
              <a 
                v-for="social in socialLinks" 
                :key="social.name"
                :href="social.href" 
                target="_blank"
                :title="social.name"
                class="group p-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <component 
                  :is="social.icon" 
                  class="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-200"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { 
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/vue/24/outline'

import GitHubIcon from '../icons/GitHubIcon.vue'
import LinkedInIcon from '../icons/LinkedInIcon.vue'
import TwitterIcon from '../icons/TwitterIcon.vue'

// Form state
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const loading = ref(false)
const showSuccess = ref(false)

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
  }
]

// Enhanced form submission with better error handling and UX
const showError = ref(false)
const errorMessage = ref('')

const handleSubmit = async () => {
  // Reset states
  loading.value = true
  showSuccess.value = false
  showError.value = false
  
  try {
    // Client-side validation
    if (!isFormValid.value) {
      throw new Error('Please fill in all required fields.')
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.email)) {
      throw new Error('Please enter a valid email address.')
    }

    // Submit to API
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: form,
      timeout: 10000, // 10 second timeout
    })

    if (response.status === 200) {
      // Success - reset form and show success message
      Object.keys(form).forEach(key => form[key] = '')
      showSuccess.value = true
      
      // Auto hide success message after 5 seconds
      setTimeout(() => { 
        showSuccess.value = false 
      }, 5000)
    } else {
      throw new Error(response.message || 'Failed to send message')
    }

  } catch (error) {
    // Enhanced error handling
    console.error('Contact form error:', error)
    
    errorMessage.value = error.message || 'Failed to send message. Please try again or contact me directly.'
    showError.value = true
    
    // Auto hide error after 5 seconds
    setTimeout(() => { 
      showError.value = false 
    }, 5000)
    
  } finally {
    loading.value = false
  }
}

// Form validation (you can extend this)
const isFormValid = computed(() => {
  return form.name.trim() && 
         form.email.trim() && 
         form.subject.trim() && 
         form.message.trim()
})
</script>