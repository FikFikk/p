// ===== app.vue =====
<template>
  <div>
    <!-- Loading Screen -->
    <LoadingScreen v-if="isLoading" />
    
    <!-- Main App -->
    <NuxtLayout v-else>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import LoadingScreen from '~/components/LoadingScreen.vue'

// Loading state
const isLoading = ref(true)

// Hide loading after 2-3 seconds or when app is ready
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 2500) // Adjust timing as needed
})
// Structured data for SEO
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Mochammad Fikri Dwi Fardian",
        "jobTitle": "Fullstack Developer & CNC Programming Expert",
        "description": "Fullstack Developer dengan keahlian CNC Programming. Berpengalaman dalam JavaScript, Vue.js, React.js, Laravel, dan teknologi modern lainnya.",
        "url": "https://fikfikk.github.io/p/",
        "sameAs": [
          "https://github.com/fikfikk",
          "https://linkedin.com/in/fikfikk"
        ],
        "knowsAbout": [
          "JavaScript",
          "Vue.js", 
          "React.js",
          "Laravel",
          "CNC Programming",
          "Fullstack Development",
          "Web Development"
        ],
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Universitas Komputer Indonesia",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bandung",
            "addressCountry": "ID"
          }
        },
        "address": {
          "@type": "PostalAddress", 
          "addressLocality": "Bandung",
          "addressCountry": "ID"
        }
      })
    }
  ]
})
</script>