<!-- components/LoadingScreen.vue -->
<template>
  <!-- Option 5: Modern Glassmorphism (commented) -->
  <!--
  <div class="fixed inset-0 bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center z-50">
    <div class="backdrop-blur-xl bg-white/30 dark:bg-gray-800/30 p-12 rounded-3xl border border-white/20 dark:border-gray-700/20 shadow-2xl text-center">
      <div class="relative mb-8">
        <div class="w-24 h-24 mx-auto relative">
          <div class="absolute inset-0 border-4 border-transparent border-t-sky-500 border-r-blue-500 rounded-full animate-spin"></div>
          <div class="absolute inset-2 border-2 border-transparent border-b-indigo-400 border-l-purple-400 rounded-full animate-spin" style="animation-direction: reverse; animation-duration: 2s;"></div>
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
            <span class="text-white font-bold text-lg">F</span>
          </div>
        </div>
      </div>
      <div class="space-y-3">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white">
          <span class="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 dark:from-sky-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Mochammad Fikri
          </span>
        </h2>
        <p class="text-gray-600 dark:text-gray-300 text-sm">Fullstack Developer & CNC Programming Expert</p>
        <div class="w-32 h-1 mx-auto bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
  -->
  <!-- Option 4: Floating Particles (Dark/Light Mode Support) -->
  
  <div class="fixed inset-0 bg-gradient-to-br from-slate-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center z-50 overflow-hidden">
    <div class="absolute inset-0">
      <div class="absolute w-1 h-1 bg-sky-500 rounded-full opacity-60 animate-float-1"></div>
      <div class="absolute w-1.5 h-1.5 bg-blue-500 rounded-full opacity-50 animate-float-2"></div>
      <div class="absolute w-1 h-1 bg-indigo-500 rounded-full opacity-70 animate-float-3"></div>
      <div class="absolute w-2 h-2 bg-sky-400 rounded-full opacity-40 animate-float-4"></div>
      <div class="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-float-5"></div>
    </div>
    <div class="text-center z-10 relative">
      <div class="w-16 h-16 mx-auto mb-6 relative">
        <div class="absolute inset-0 border-2 border-transparent border-t-sky-500 rounded-full animate-spin"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
          <span class="text-white font-bold">F</span>
        </div>
      </div>
      <h2 class="text-gray-900 dark:text-white font-semibold text-xl mb-2">Mochammad Fikri</h2>
      <p class="text-gray-600 dark:text-gray-400 text-sm">Fullstack Developer & CNC Expert</p>
    </div>
  </div>
 


  <!-- Option 8: Holographic Interface (commented) -->
  <!--
  <div class="fixed inset-0 bg-gradient-to-br from-slate-100 to-indigo-100 dark:from-black dark:via-gray-900 dark:to-indigo-900 flex items-center justify-center z-50 overflow-hidden">
    <div class="absolute inset-0">
      <div class="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30 animate-scan-vertical"></div>
      <div class="absolute h-full w-px bg-gradient-to-b from-transparent via-sky-500 to-transparent opacity-20 animate-scan-horizontal"></div>
      <div v-for="i in 15" :key="`holo-${i}`" 
           class="absolute rounded-full animate-holo-float"
           :class="[
             i % 3 === 0 ? 'w-1 h-1 bg-cyan-500' : 
             i % 3 === 1 ? 'w-1.5 h-1.5 bg-sky-500' : 'w-0.5 h-0.5 bg-blue-500'
           ]"
           :style="{
             left: (i * 6.67) + '%',
             top: (i * 6.67) + '%',
             animationDelay: (i * 0.3) + 's',
             opacity: 0.4
           }">
      </div>
    </div>
    <div class="text-center z-10 relative">
      <div class="relative p-12 border border-cyan-300 dark:border-cyan-400/30 rounded-2xl bg-cyan dark:bg-gradient-to-br dark:from-cyan-400/5 dark:to-blue-500/5 backdrop-blur-sm">
        <div class="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-500 animate-pulse"></div>
        <div class="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-500 animate-pulse" style="animation-delay: 0.5s;"></div>
        <div class="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-500 animate-pulse" style="animation-delay: 1s;"></div>
        <div class="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-500 animate-pulse" style="animation-delay: 1.5s;"></div>
        
        <div class="w-20 h-20 mx-auto mb-6 relative">
          <div class="absolute inset-0 border-2 border-cyan-400/50 rounded-full animate-spin" style="animation-duration: 3s;"></div>
          <div class="absolute inset-1 border border-sky-400/30 rounded-full animate-spin" style="animation-direction: reverse; animation-duration: 2s;"></div>
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50 animate-pulse">
            <span class="text-white font-bold text-lg">F</span>
          </div>
        </div>
        <h2 class="text-cyan-600 dark:text-cyan-400 text-xl font-bold mb-2 animate-pulse">MOCHAMMAD FIKRI</h2>
        <p class="text-sky-600 dark:text-sky-300 text-sm font-mono">SYSTEM_LOADING.EXE</p>
      </div>
    </div>
  </div>
  -->
 

  <!-- NEW Option 9: Smooth Gradient Waves (Performance Optimized) - ACTIVE -->
  <!-- <div class="fixed inset-0 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 flex items-center justify-center z-50 overflow-hidden">
    <div class="absolute inset-0">
      <div class="absolute inset-0 opacity-20">
        <div class="wave wave-1 bg-gradient-to-r from-sky-400 to-blue-500"></div>
        <div class="wave wave-2 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
        <div class="wave wave-3 bg-gradient-to-r from-indigo-400 to-purple-500"></div>
      </div>
    </div>
    <div class="text-center z-10 relative backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 p-8 rounded-3xl border border-sky-200 dark:border-sky-500/30 shadow-2xl">
      <div class="w-24 h-24 mx-auto mb-8 relative">
        <div class="absolute inset-0 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 rounded-full opacity-20 animate-ping"></div>
        <div class="absolute inset-2 border-2 border-sky-400 rounded-full animate-spin" style="animation-duration: 2s;"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 rounded-full flex items-center justify-center shadow-lg">
          <span class="text-white font-bold text-xl">F</span>
        </div>
      </div>
      <h2 class="text-gray-800 dark:text-white text-2xl font-bold mb-2">
        <span class="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 dark:from-sky-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
          Mochammad Fikri
        </span>
      </h2>
      <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">Fullstack Developer & CNC Programming Expert</p>
      <div class="w-32 h-1 mx-auto bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
    </div>
  </div> -->
 

  <!-- NEW Option 11: Elegant Particles (Balanced Performance) -->
<!--   
  <div class="fixed inset-0 bg-gradient-to-br from-slate-50 via-sky-50 to-blue-50 dark:from-slate-900 dark:via-gray-900 dark:to-blue-900 flex items-center justify-center z-50 overflow-hidden">
    <div class="absolute inset-0">
      <div v-for="i in 8" :key="`particle-${i}`" 
           class="absolute rounded-full animate-elegant-float"
           :class="[
             i % 4 === 0 ? 'w-2 h-2 bg-sky-300 dark:bg-sky-400' :
             i % 4 === 1 ? 'w-1 h-1 bg-blue-400 dark:bg-blue-300' :
             i % 4 === 2 ? 'w-1.5 h-1.5 bg-indigo-300 dark:bg-indigo-400' : 'w-3 h-3 bg-sky-200 dark:bg-sky-500'
           ]"
           :style="{
             left: (12.5 * i) + '%',
             top: (12.5 * (i % 4)) + 25 + '%',
             animationDelay: (i * 0.5) + 's',
             opacity: 0.6
           }">
      </div>
    </div>
    <div class="text-center z-10 relative">
      <div class="w-28 h-28 mx-auto mb-8 relative">
        <div class="absolute inset-0 border-2 border-sky-300 dark:border-sky-400 rounded-full animate-spin opacity-50" style="animation-duration: 4s;"></div>
        <div class="absolute inset-3 border border-blue-300 dark:border-blue-400 rounded-full animate-spin opacity-30" style="animation-direction: reverse; animation-duration: 3s;"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-xl">
          <span class="text-white font-bold text-2xl">F</span>
        </div>
      </div>
      <h2 class="text-gray-800 dark:text-white text-2xl font-bold mb-3">Mochammad Fikri</h2>
      <p class="text-gray-600 dark:text-gray-300 text-sm">Crafting amazing experiences...</p>
    </div>
  </div>
  -->

</template>

<style scoped>
/* Optimized floating animations - reduced complexity for better performance */
@keyframes float-1 {
  0%, 100% { transform: translate(10vw, 70vh) scale(1); }
  50% { transform: translate(80vw, 20vh) scale(1.1); }
}

@keyframes float-2 {
  0%, 100% { transform: translate(70vw, 60vh) scale(1); }
  50% { transform: translate(20vw, 80vh) scale(0.9); }
}

@keyframes float-3 {
  0%, 100% { transform: translate(50vw, 20vh) scale(1); }
  50% { transform: translate(30vw, 70vh) scale(1.05); }
}

@keyframes float-4 {
  0%, 100% { transform: translate(90vw, 40vh) scale(1); }
  50% { transform: translate(10vw, 30vh) scale(0.95); }
}

@keyframes float-5 {
  0%, 100% { transform: translate(30vw, 90vh) scale(1); }
  50% { transform: translate(70vw, 10vh) scale(1.08); }
}


.animate-float-1 { animation: float-1 8s ease-in-out infinite; }
.animate-float-2 { animation: float-2 9s ease-in-out infinite; }
.animate-float-3 { animation: float-3 7s ease-in-out infinite; }
.animate-float-4 { animation: float-4 10s ease-in-out infinite; }
.animate-float-5 { animation: float-5 6s ease-in-out infinite; }

/* Performance optimizations */

.animate-float-1,
.animate-float-2,
.animate-float-3,
.animate-float-4,
.animate-float-5,
.animate-elegant-float {
  will-change: transform;
  transform: translateZ(0);
}

.wave {
  will-change: transform;
  transform: translateZ(0);
}
</style>