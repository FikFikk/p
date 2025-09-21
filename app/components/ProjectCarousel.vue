<!-- components/ProjectCarousel.vue -->
<template>
  <div class="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
    <!-- Main Image Display -->
    <div class="relative h-80 lg:h-96 overflow-hidden bg-gradient-to-br from-sky-100 to-blue-100 dark:from-gray-800 dark:to-gray-700">
      <Transition
        name="carousel"
        mode="out-in"
      >
        <NuxtImg 
          :key="currentIndex"
          :src="images[currentIndex]" 
          :alt="`${title} - Screenshot ${currentIndex + 1}`"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          width="600"
          height="400"
          sizes="sm:600px lg:800px"
          loading="lazy"
          format="webp"
          quality="80"
        />
      </Transition>
      
      <!-- Navigation Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <!-- Navigation Arrows -->
        <button
          v-if="images.length > 1"
          @click="prevImage"
          class="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-sky-600/80 hover:bg-sky-400/90 backdrop-blur-sm rounded-full text-white transition-all duration-200 hover:scale-110"
        >
          <ChevronLeftIcon class="w-5 h-5 text-white drop-shadow-[0_0_6px_#38bdf8]" />
        </button>
        
        <button
          v-if="images.length > 1"
          @click="nextImage"
          class="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-sky-600/80 hover:bg-sky-400/90 backdrop-blur-sm rounded-full text-white transition-all duration-200 hover:scale-110"
        >
          <ChevronRightIcon class="w-5 h-5 text-white drop-shadow-[0_0_6px_#38bdf8]" />
        </button>
        
        <!-- Fullscreen Button -->
        <button
          @click="openModal"
          class="absolute top-4 right-4 p-3 bg-sky-600/80 hover:bg-sky-400/90 shadow-lg shadow-sky-400/40 border-2 border-white/60 rounded-full text-white transition-all duration-200 hover:scale-110 ring-2 ring-sky-400/40 z-20"
        >
          <ArrowsPointingOutIcon class="w-5 h-5" />
        </button>
      </div>

      <!-- Image Counter -->
      <div v-if="images.length > 1" class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        <button
          v-for="(image, index) in images"
          :key="index"
          @click="currentIndex = index"
          class="w-2 h-2 rounded-full transition-all duration-200"
          :class="[
            index === currentIndex 
              ? 'bg-white w-8' 
              : 'bg-white/50 hover:bg-white/75'
          ]"
        />
      </div>
    </div>

    <!-- Fullscreen Modal -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isModalOpen"
          @click="closeModal"
          class="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div class="relative max-w-7xl w-full">
            <!-- Close Button -->
            <button
              @click="closeModal"
              class="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
            >
              <XMarkIcon class="w-8 h-8" />
            </button>
            
            <!-- Full Size Image -->
            <div class="relative rounded-2xl overflow-hidden">
              <NuxtImg 
                :src="images[modalIndex]" 
                :alt="`${title} - Screenshot ${modalIndex + 1}`"
                class="w-full h-auto max-h-[80vh] object-contain"
                format="webp"
                quality="90"
            />
                <!-- sizes="100vw" -->
              
              <!-- Modal Navigation -->
              <button
                v-if="images.length > 1"
                @click.stop="prevModalImage"
                class="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full text-white transition-all duration-200"
              >
                <ChevronLeftIcon class="w-6 h-6" />
              </button>
              
              <button
                v-if="images.length > 1"
                @click.stop="nextModalImage"
                class="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full text-white transition-all duration-200"
              >
                <ChevronRightIcon class="w-6 h-6" />
              </button>
            </div>

            <!-- Modal Image Counter -->
            <div v-if="images.length > 1" class="flex justify-center mt-4 gap-2">
              <button
                v-for="(image, index) in images"
                :key="index"
                @click.stop="modalIndex = index"
                class="w-3 h-3 rounded-full transition-all duration-200"
                :class="[
                  index === modalIndex 
                    ? 'bg-white w-10' 
                    : 'bg-white/50 hover:bg-white/75'
                ]"
              />
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowsPointingOutIcon,
  XMarkIcon
} from '@heroicons/vue/24/outline'

const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  autoPlay: {
    type: Boolean,
    default: true
  },
  autoPlayInterval: {
    type: Number,
    default: 4000
  }
})

const currentIndex = ref(0)
const isModalOpen = ref(false)
const modalIndex = ref(0)
let autoPlayTimer = null

// Navigation functions
const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prevImage = () => {
  currentIndex.value = currentIndex.value === 0 ? props.images.length - 1 : currentIndex.value - 1
}

const nextModalImage = () => {
  modalIndex.value = (modalIndex.value + 1) % props.images.length
}

const prevModalImage = () => {
  modalIndex.value = modalIndex.value === 0 ? props.images.length - 1 : modalIndex.value - 1
}

// Modal functions
const openModal = () => {
  modalIndex.value = currentIndex.value
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = ''
}

// Auto-play functionality
const startAutoPlay = () => {
  if (props.autoPlay && props.images.length > 1) {
    autoPlayTimer = setInterval(nextImage, props.autoPlayInterval)
  }
}

const stopAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
    autoPlayTimer = null
  }
}

// Keyboard navigation
const handleKeydown = (event) => {
  if (!isModalOpen.value) return
  
  switch (event.key) {
    case 'ArrowLeft':
      event.preventDefault()
      prevModalImage()
      break
    case 'ArrowRight':
      event.preventDefault()
      nextModalImage()
      break
    case 'Escape':
      event.preventDefault()
      closeModal()
      break
  }
}

onMounted(() => {
  startAutoPlay()
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  stopAutoPlay()
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})

// Pause auto-play on hover
defineExpose({
  startAutoPlay,
  stopAutoPlay
})
</script>

<style scoped>
.carousel-enter-active,
.carousel-leave-active {
  transition: all 0.5s ease;
}

.carousel-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.carousel-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>