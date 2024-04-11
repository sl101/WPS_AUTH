// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['@/assets/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@pinia/nuxt', 'nuxt-swiper'],
  pinia: { storesDirs: ['./store/**'] },
});