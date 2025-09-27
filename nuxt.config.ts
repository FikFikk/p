export default defineNuxtConfig({
  app: {
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: 'id'
      },
      title: 'Mochammad Fikri Dwi Fardian - Fullstack Developer & CNC Programming Expert | FikFikk',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'description',
          content: 'FikFikk | Portfolio Mochammad Fikri Dwi Fardian - Fullstack Developer & CNC Programming Expert. Berpengalaman JavaScript, Vue.js, React.js, Laravel, CNC Programming, Gresik, Sidoarjo, Surabaya, Indonesia.'
        },
        { name: 'author', content: 'Mochammad Fikri Dwi Fardian' },
        { name: 'keywords', content: 'FikFikk, Fikri, Mochammad Fikri Dwi Fardian, Fullstack Developer, CNC Programming, JavaScript, Vue.js, React.js, Laravel, Portfolio, Gresik, Sidoarjo, Surabaya, Indonesia.' },
        // Open Graph
        { property: 'og:title', content: 'Mochammad Fikri Dwi Fardian - Fullstack Developer & CNC Programming Expert | FikFikk' },
        { property: 'og:site_name', content: 'FikFikk' },
        { property: 'og:description', content: 'FikFikk | Portfolio Mochammad Fikri Dwi Fardian - Fullstack Developer & CNC Programming Expert. Berpengalaman JavaScript, Vue.js, React.js, Laravel, CNC Programming, Gresik, Sidoarjo, Surabaya, Indonesia.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'id_ID' },
        { property: 'og:url', content: 'https://fikfikk.my.id/' },
        { property: 'og:image', content: 'https://fikfikk.my.id/favicon.ico' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Mochammad Fikri Dwi Fardian - Fullstack Developer & CNC Programming Expert | FikFikk' },
        { name: 'twitter:description', content: 'FikFikk | Portfolio Mochammad Fikri Dwi Fardian - Fullstack Developer & CNC Programming Expert. Berpengalaman JavaScript, Vue.js, React.js, Laravel, CNC Programming, Gresik, Sidoarjo, Surabaya, Indonesia.' },
        { name: 'twitter:image', content: 'https://fikfikk.my.id/favicon.ico' },
        // Additional SEO
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#0ea5e9' },
        // Mobile performance & SEO best practice
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'HandheldFriendly', content: 'True' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://images.unsplash.com' },
        { rel: 'dns-prefetch', href: 'https://images.unsplash.com' },
          { rel: 'canonical', href: 'https://fikfikk.my.id/' },
          { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
          { rel: 'apple-touch-icon', href: '/favicon.ico' },
      ],
    }
  },
  components: [
    {
      path: '~/app/components',
      extensions: ['.vue'],
    }
  ],
  modules: [
    'nuxt-security',
    '@nuxt/image'
  ],
  security: {
    // Untuk SSG karena kamu pakai GitHub Pages (nitro preset: github-pages)
    ssg: {
      meta: true,        // inject CSP via <meta http-equiv>
      hashScripts: true, // buat hash otomatis untuk inline + external script
      hashStyles: false
    },
    sri: true, // tambahkan integrity otomatis
    headers: {
      contentSecurityPolicy: {
        'default-src': ["'self'"],
        'base-uri': ["'none'"],
        'object-src': ["'none'"],
        'script-src': [
          "'self'",
          "https:",
          "'unsafe-inline'",
          // "'strict-dynamic'",
          "https://static.cloudflareinsights.com"
        ],
        'style-src': [
          "'self'",
          "https:",
          "'unsafe-inline'"
        ],
        'img-src': [
          "'self'",
          "data:",
          "https://images.unsplash.com"
        ],
        'font-src': [
          "'self'",
          "https:",
          "data:"
        ],
        'form-action': ["'self'"],
        'connect-src': [
          "'self'",
          "https://formspree.io"
        ],
        'upgrade-insecure-requests': true
      }
    }
  },
  image: {
    domains: ['images.unsplash.com'],
    providers: {
      unsplash: {
        baseURL: 'https://images.unsplash.com/'
      }
    },
    formats: ['webp', 'avif', 'jpg'],
    quality: 80,
    densities: [1, 2],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    },
    // Disable IPX processing for public folder images
    ipx: {
      modifiers: {}
    },
    // Exclude public folder from auto-processing
    presets: {
      default: {
        modifiers: {
          format: 'webp',
          quality: 80
        }
      }
    }
  },
  ssr: false,
  nitro: {
    preset: 'github-pages',
    routeRules: {
      '/img/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } }
    }
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