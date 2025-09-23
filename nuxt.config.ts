export default defineNuxtConfig({
  app: {
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: 'id'
      },
      title: 'FikFikk - Mochammad Fikri Dwi Fardian | Fullstack Developer & CNC Programming Expert Indonesia',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'description',
          content: 'FikFikk - Mochammad Fikri Dwi Fardian, Fullstack Developer & CNC Programming Expert terbaik Indonesia. Spesialis JavaScript, Vue.js, React.js, Laravel, PHP. Portfolio Fikri Gresik, Sidoarjo, Surabaya.'
        },
        { name: 'author', content: 'Mochammad Fikri Dwi Fardian (FikFikk)' },
        { name: 'keywords', content: 'FikFikk, Fikri, Mochammad Fikri, Fikri Dwi Fardian, Mochammad Fikri Dwi Fardian, Fullstack Developer Indonesia, CNC Programming Expert, JavaScript Developer, Vue.js Developer, React.js Developer, Laravel Developer, PHP Developer, Web Developer Gresik, Web Developer Sidoarjo, Web Developer Surabaya, Portfolio Fikri, Developer Indonesia Terbaik' },
        
        // Additional SEO Meta Tags
        { name: 'geo.region', content: 'ID-JI' },
        { name: 'geo.placename', content: 'Gresik, Jawa Timur' },
        { name: 'geo.position', content: '-7.1559;112.6536' },
        { name: 'ICBM', content: '-7.1559, 112.6536' },
        { name: 'language', content: 'Indonesian' },
        { name: 'revisit-after', content: '7 days' },
        { name: 'distribution', content: 'global' },
        { name: 'rating', content: 'general' },
        // Open Graph
        { property: 'og:title', content: 'FikFikk - Mochammad Fikri Dwi Fardian | Fullstack Developer & CNC Programming Expert Indonesia' },
        { property: 'og:site_name', content: 'FikFikk Portfolio' },
        { property: 'og:description', content: 'FikFikk - Mochammad Fikri Dwi Fardian, Fullstack Developer & CNC Programming Expert terbaik Indonesia. Spesialis JavaScript, Vue.js, React.js, Laravel, PHP. Portfolio Fikri Gresik, Sidoarjo, Surabaya.' },
        { property: 'og:type', content: 'profile' },
        { property: 'og:locale', content: 'id_ID' },
        { property: 'og:url', content: 'https://fikfikk.my.id/' },
        { property: 'og:image', content: 'https://fikfikk.my.id/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'FikFikk - Mochammad Fikri Dwi Fardian Portfolio' },
        
        // Profile specific (for personal portfolio)
        { property: 'profile:first_name', content: 'Mochammad Fikri' },
        { property: 'profile:last_name', content: 'Dwi Fardian' },
        { property: 'profile:username', content: 'FikFikk' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@MochamadFardian' },
        { name: 'twitter:creator', content: '@MochamadFardian' },
        { name: 'twitter:title', content: 'FikFikk - Mochammad Fikri Dwi Fardian | Fullstack Developer Indonesia' },
        { name: 'twitter:description', content: 'FikFikk - Mochammad Fikri Dwi Fardian, Fullstack Developer & CNC Programming Expert terbaik Indonesia. Spesialis JavaScript, Vue.js, React.js, Laravel.' },
        { name: 'twitter:image', content: 'https://fikfikk.my.id/og-image.png' },
        // Additional SEO
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'bingbot', content: 'index, follow' },
        { name: 'theme-color', content: '#0ea5e9' },
        { name: 'msapplication-TileColor', content: '#0ea5e9' },
        { name: 'application-name', content: 'FikFikk Portfolio' },
        { name: 'apple-mobile-web-app-title', content: 'FikFikk' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'mobile-web-app-capable', content: 'yes' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.ico' },
        { rel: 'mask-icon', href: '/favicon.ico', color: '#0ea5e9' },
        { rel: 'canonical', href: 'https://fikfikk.my.id/' },
        { rel: 'sitemap', type: 'application/xml', href: '/sitemap.xml' },
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'preconnect', href: 'https://images.unsplash.com' },
        { rel: 'dns-prefetch', href: 'https://images.unsplash.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
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
          "https:",             // allow https scripts
          "'unsafe-inline'",    // fallback, kalau masih ada inline
          // "'strict-dynamic'",   // aktifkan strict CSP
          "https://static.cloudflareinsights.com" // <- tambah Cloudflare Insights
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
    quality: 85, // Slightly higher quality for better visual experience
    densities: [1, 2],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    },
    // Performance optimizations
    preload: false, // Disable automatic preloading
    loading: 'lazy', // Enable lazy loading by default
    // Disable IPX processing for public folder images
    ipx: {
      modifiers: {}
    },
    // Optimized presets for better compression
    presets: {
      default: {
        modifiers: {
          format: 'webp',
          quality: 85,
          progressive: true, // Enable progressive JPEG
          optimizeCss: true,
          mozjpeg: { progressive: true }
        }
      },
      avatar: {
        modifiers: {
          format: 'webp',
          quality: 90,
          width: 200,
          height: 200,
          fit: 'cover'
        }
      }
    }
  },
  ssr: false,
  nitro: {
    preset: 'github-pages',
    prerender: {
      routes: ['/'], // Pre-render home page for better performance
    },
    routeRules: {
      '/': { 
        prerender: true,
        headers: { 
          'cache-control': 'public, max-age=3600, s-maxage=3600' 
        }
      },
      '/api/**': { 
        cors: true,
        headers: { 
          'cache-control': 'no-cache' 
        }
      },
      '/img/**': { 
        headers: { 
          'cache-control': 'public, max-age=31536000, immutable',
          'vary': 'Accept-Encoding'
        } 
      },
      '/_nuxt/**': { 
        headers: { 
          'cache-control': 'public, max-age=31536000, immutable',
          'vary': 'Accept-Encoding'
        } 
      },
      '/favicon.ico': { 
        headers: { 
          'cache-control': 'public, max-age=86400' 
        } 
      }
    },
    experimental: {
      wasm: false // Disable WASM for smaller bundle
    },
    minify: true,
    sourceMap: false // Disable source maps in production
  },
  compatibilityDate: "2025-09-17",
  devtools: { 
    enabled: false // Disabled for production performance
  },
  css: ['./app/assets/css/main.css'],
  
  // Performance optimizations
  experimental: {
    payloadExtraction: false, // Disable payload extraction for better performance
    viewTransition: true // Enable view transitions for better UX
  },
  
  // Build optimizations for Lighthouse scores
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', '@headlessui/vue'],
            icons: ['@heroicons/vue/24/outline'],
          },
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "sass:math";`
        }
      }
    },
    optimizeDeps: {
      include: ['vue', '@headlessui/vue', '@heroicons/vue/24/outline']
    }
  },
  
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
      cssnano: {
        preset: ['default', {
          discardComments: {
            removeAll: true,
          },
          normalizeWhitespace: true,
          minifySelectors: true
        }]
      }
    }
  }
});