// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
	css: [
    '@/assets/main.css',
  ],
	modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@pinia/nuxt", 'nuxt-icon'],
	pinia:{ storesDirs: ["./store/**"]},
	runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_BASE_URL,
    },
  },
})