import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.svg',
        'icons.svg',
        'apple-touch-icon.png',
        'pwa-192.png',
        'pwa-512.png',
      ],
      manifest: {
        name: 'SOE Mobile',
        short_name: 'SOE',
        description: 'SOE mobile workspace for attendance, leave, tasks, and leads',
        theme_color: '#f5f7fb',
        background_color: '#f5f7fb',
        display: 'standalone',
        orientation: 'portrait',
        start_url: './',
        scope: './',
        icons: [
          {
            src: 'pwa-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'pwa-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'pwa-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        // Do not precache large APK downloads
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpeg,jpg,webp}'],
        globIgnores: ['**/downloads/**'],
        navigateFallback: 'index.html',
      },
    }),
  ],
  server: {
    host: true,
    port: 5173,
  },
})
