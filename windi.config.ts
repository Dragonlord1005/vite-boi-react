import { defineConfig } from 'windicss/helpers'
// import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  darkMode: 'media',
  extract: {
    include: [
      'src/**/*.{vue,jsx,tsx,svelte,css}',
    ]
  }
})