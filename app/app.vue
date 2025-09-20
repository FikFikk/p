// ===== app.vue =====
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
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