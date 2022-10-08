import { defineConfig } from 'windicss/helpers'
// import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  darkMode: 'media',
  extract: {
    include: [
      'src/**/*.{vue,jsx,tsx,svelte,css}',
      'index.html',
    ]
  },
  plugins: [
    require('@windicss/plugin-heropatterns')({
      patterns: ['hexagons'],
      colors: {
        'default': '#000000'
      }
    })
  ]
})