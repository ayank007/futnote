import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/futnote/',
  plugins: [svelte({
    preprocess: sveltePreprocess()
  })]
})
