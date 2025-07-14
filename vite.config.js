import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  base: '/svelte-about-me',    // right here! your repository name
  plugins: [svelte()],
})