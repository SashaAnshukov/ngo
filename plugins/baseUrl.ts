export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  return {
    provide: {
      baseUrl: config.public.baseUrl
    }
  }
})
