import path from "path";
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  root: "",
  plugins: [
    viteStaticCopy({
      targets: [{
        src: 'wp/wp-theme/*',
        dest: ''
      }]
    })
  ],
  build: {
    outDir: path.resolve(__dirname, "./dist"),
    rollupOptions: {
      input: path.resolve(`${__dirname}/src/assets/app.ts`),
      output: {
        entryFileNames: `assets/js/[name].ts`,
        assetFileNames: 'wp-theme/[name].[ext]'
      }
    },
  },
  server: {
    port: 3000
  },
})