export default defineNuxtConfig({
  compatibilityDate: '2026-11-16',
  devtools: { enabled: false },
  css: ['~/assets/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'sl' },
      title: 'KGT Papež | Klub gorskih tekačev Kamnik',
      meta: [{
        name: 'description',
        content: 'Klub gorskih tekačev Papež iz Kamnika. Koledar tekov, rezultati, vadba za otroke in mladino ter informacije o članstvu.'
      }]
    }
  }
})
