<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 flex flex-col items-center justify-center px-4">
    <div class="max-w-2xl w-full bg-white/80 rounded-3xl shadow-2xl p-10 backdrop-blur-md border border-indigo-100">
      <div class="flex items-center gap-4 mb-8">
        <img src="https://i.pravatar.cc/100?img=3" alt="Avatar" class="w-16 h-16 rounded-full shadow-lg border-2 border-indigo-400" />
        <div>
          <h1 class="text-3xl font-extrabold text-indigo-700">Nama Anda</h1>
          <p class="text-indigo-400 font-medium">Frontend Developer & UI Enthusiast</p>
        </div>
      </div>
      <p class="text-gray-600 mb-8 leading-relaxed">
        Saya adalah developer yang passionate membangun web modern, minimalis, dan cepat. Fokus pada pengalaman pengguna dan desain yang elegan.
      </p>
      <div>
        <h2 class="text-xl font-bold text-indigo-600 mb-4">Portofolio</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="bg-white rounded-xl shadow hover:shadow-xl transition p-4 border border-indigo-50">
            <img src="https://source.unsplash.com/400x200/?website,design" alt="Project 1" class="rounded-lg mb-3" />
            <h3 class="font-semibold text-indigo-700">Landing Page Startup</h3>
            <p class="text-gray-500 text-sm">Desain landing page modern untuk startup teknologi.</p>
          </div>
          <div class="bg-white rounded-xl shadow hover:shadow-xl transition p-4 border border-indigo-50">
            <img src="https://source.unsplash.com/400x200/?dashboard,ui" alt="Project 2" class="rounded-lg mb-3" />
            <h3 class="font-semibold text-indigo-700">Dashboard Admin</h3>
            <p class="text-gray-500 text-sm">Dashboard interaktif dengan statistik real-time.</p>
          </div>
        </div>
      </div>
      <div class="mt-10 flex gap-4">
        <a href="mailto:email@anda.com" class="px-5 py-2 rounded-full bg-indigo-600 text-white font-bold shadow hover:bg-indigo-700 transition">Kontak</a>
        <a href="https://github.com/" target="_blank" class="px-5 py-2 rounded-full border border-indigo-600 text-indigo-600 font-bold hover:bg-indigo-50 transition">GitHub</a>
      </div>
    </div>
    <footer class="mt-8 text-gray-400 text-xs">© 2025 Nama Anda. All rights reserved.</footer>
  </div>
</template>