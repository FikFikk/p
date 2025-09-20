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
        { rel: 'canonical', href: 'https://fikfikk.github.io/p/' },
        { rel: 'preconnect', href: 'https://images.unsplash.com' },
        { rel: 'dns-prefetch', href: 'https://images.unsplash.com' }
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
  modules: [
    'nuxt-security',
    '@nuxt/image'
  ],
  // security: {
  //   headers: {
  //     contentSecurityPolicy: {
  //       'default-src': ["'self'"],
  //       'img-src': ["'self'", 'https:', 'data:'],
  //       'script-src': ["'self'"],
  //       'style-src': ["'self'", "'unsafe-inline'"],
  //       'font-src': ["'self'", 'https:', 'data:'],
  //       'connect-src': ["'self'", 'https://images.unsplash.com'],
  //       'frame-src': ["'none'"],
  //       'object-src': ["'none'"],
  //       'base-uri': ["'self'"],
  //       'form-action': ["'self'"]
  //     },
  //     permissionsPolicy: {
  //       camera: [],
  //       microphone: [],
  //       geolocation: [],
  //       fullscreen: ["*"]
  //     },
  //     crossOriginEmbedderPolicy: 'require-corp',
  //     crossOriginOpenerPolicy: 'same-origin',
  //     crossOriginResourcePolicy: 'same-origin',
  //     originAgentCluster: '?1',
  //     referrerPolicy: 'strict-origin-when-cross-origin',
  //     strictTransportSecurity: {
  //       maxAge: 63072000,
  //       includeSubdomains: true,
  //       preload: true
  //     },
  //     xContentTypeOptions: 'nosniff',
  //     xDNSPrefetchControl: 'off',
  //     xDownloadOptions: 'noopen',
  //     xFrameOptions: 'SAMEORIGIN',
  //     xPermittedCrossDomainPolicies: 'none',
  //     xXSSProtection: '1; mode=block'
  //   },
  //   rateLimiter: {
  //     tokensPerInterval: 150,
  //     interval: 'minute'
  //   },
  //   requestSizeLimiter: {
  //     maxRequestSizeInBytes: 1024000, // 1MB
  //     maxUploadFileRequestInBytes: 10485760 // 10MB
  //   },
  //   xssValidator: {},
  //   corsHandler: {
  //     origin: '*',
  //     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  //     allowHeaders: ['Content-Type', 'Authorization'],
  //     exposeHeaders: [],
  //     credentials: false,
  //     maxAge: '86400'
  //   },
  //   allowedMethodsRestricter: {
  //     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
  //   },
  //   basicAuth: false,
  //   csrf: false,
  //   hidePoweredBy: true
  // },
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
    }
  },
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