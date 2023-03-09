export default defineNuxtConfig({
  app: {
    head: {
      meta: [{
        name: 'Linect',
        content: 'This is Linect.'
      }]
    },
  },
  css: [
    '@/assets/main.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;'
        }
      }
    }
  },
  modules: [
    '@nuxtjs/device',
  ]
})
