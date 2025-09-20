export default defineNuxtConfig({
  app: {
    baseURL: '/p/',
    head: {
      htmlAttrs: {
        lang: 'id'
      },
      title: 'Mochammad Fikri Dwi Fardian - Fullstack Developer & CNC Programming Expert',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { 
          name: 'description', 
          content: 'Portfolio Mochammad Fikri Dwi Fardian - Fullstack Developer dengan keahlian CNC Programming. Berpengalaman dalam JavaScript, Vue.js, React.js, Laravel, dan teknologi modern lainnya.' 
        },
        { name: 'author', content: 'Mochammad Fikri Dwi Fardian' },
        { name: 'keywords', content: 'Fullstack Developer, CNC Programming, JavaScript, Vue.js, React.js, Laravel, Portfolio, Bandung' },
        
        // Open Graph
        { property: 'og:title', content: 'Mochammad Fikri Dwi Fardian - Fullstack Developer & CNC Programming Expert' },
        { 
          property: 'og:description', 
          content: 'Portfolio Mochammad Fikri Dwi Fardian - Fullstack Developer dengan keahlian CNC Programming. Berpengalaman dalam JavaScript, Vue.js, React.js, Laravel, dan teknologi modern lainnya.' 
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'id_ID' },
        { property: 'og:url', content: 'https://fikfikk.github.io/p/' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Mochammad Fikri Dwi Fardian - Fullstack Developer & CNC Programming Expert' },
        { 
          name: 'twitter:description', 
          content: 'Portfolio Mochammad Fikri Dwi Fardian - Fullstack Developer dengan keahlian CNC Programming. Berpengalaman dalam JavaScript, Vue.js, React.js, Laravel, dan teknologi modern lainnya.' 
        },
        
        // Additional SEO
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#0ea5e9' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/p/favicon.ico' },
        { rel: 'canonical', href: 'https://fikfikk.github.io/p/' }
      ],
      // script: [
      //   {
      //     innerHTML: `
      //       (function() {
      //         const theme = localStorage.getItem('theme')
      //         if (theme === 'dark') {
      //           document.documentElement.classList.add('dark')
      //         } else if (theme === 'light') {
      //           document.documentElement.classList.remove('dark')
      //         } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      //           document.documentElement.classList.add('dark')
      //         }
      //       })()
      //     `,
      //     type: 'text/javascript'
      //   }
      // ]
    }
  },
  components: [
    {
      path: '~/app/components',
      extensions: ['.vue'],
    }
  ],
  // modules: ['@nuxtjs/tailwindcss'],
  ssr: false,
  nitro: {
    preset: 'github-pages'
  },
  compatibilityDate: "2025-09-17",
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    }
  }
});