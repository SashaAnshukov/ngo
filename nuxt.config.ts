// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  pages: true,
  app: {
    head: {
      title: 'Наш проект для НКО',
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: 'preconnect',href: 'https://fonts.googleapis.com'},
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap" }
      ],
    },
  },
  modules: [
    '@pinia/nuxt',
  ],
  css: ['@/assets/normalize.css'],
  runtimeConfig: {
    apiKey: '', // Default to an empty string, automatically set at runtime using process.env.NUXT_API_KEY
    public: {
      baseUrl: process.env.BASE_URL || "http://localhost:1337"
    }
  }
})
