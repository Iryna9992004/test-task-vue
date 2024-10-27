// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
  css: ['@/assets/css/main.css'],
  runtimeConfig: {
    public: {
      apiCountriesUrl: process.env.API_COUNTRIES_URL || '',
      apiCountryHolidays: process.env.API_COUNTRY_HOLIDAYS || '',
      apiYearHoidays: process.env.API_YEAR_HOLIDAYS || '',
    },
  },
})
