// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  serverDir: 'server/',
  css: ['/assets/scss/index.scss'],

  tailwindcss: {
    cssPath: '~/assets/css/index.scss',
    configPath: 'tailwind.config',
    viewer: false,
  },
  modules: ['@nuxtjs/tailwindcss'],
});
