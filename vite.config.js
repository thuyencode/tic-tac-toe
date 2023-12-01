import { defineConfig } from 'vite'
import simpleHtmlPlugin from 'vite-plugin-simple-html'
import { webfontDownload } from 'vite-plugin-webfont-dl'

export default defineConfig({
  base: '/tic-tac-toe/',
  plugins: [simpleHtmlPlugin({ minify: true }), webfontDownload()],
})