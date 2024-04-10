// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
import serverMiddleware from './server-middleware';

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['@/assets/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@pinia/nuxt', 'nuxt-swiper'],
  pinia: { storesDirs: ['./store/**'] },
  serverMiddleware: [serverMiddleware],
});