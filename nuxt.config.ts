// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
	css: [
    '@/assets/main.css',
  ],
	modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@pinia/nuxt",],
	pinia:{ storesDirs: ["./store/**"]}
})