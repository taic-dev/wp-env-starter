import path from "path";
import { defineConfig } from 'vite';
import { liveReload } from "vite-plugin-live-reload";
import { viteStaticCopy } from 'vite-plugin-static-copy'
import sassGlobImports from "vite-plugin-sass-glob-import";

export default defineConfig({
  root: "",
  plugins: [
    sassGlobImports(),
    liveReload("./**/**/*.php"),
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
      input: path.resolve(`${__dirname}/src/assets/ts/app.ts`),
      output: {
        entryFileNames: `assets/ts/[name].ts`,
        chunkFileNames: `assets/ts/[name].ts`,
        assetFileNames: ({ name }) => {
          console.log(name)
          if (/\.(gif|jpeg|jpg|png|svg|webp)$/.test(name ?? "")) {
            return "assets/images/[name].[ext]";
          }
          if (/\.css$/.test(name ?? "")) {
            return "assets/css/[name].[ext]";
          }
          if (/\.ts$/.test(name ?? "")) {
            return "assets/ts/[name].[ext]";
          }
          return "assets/[name].[ext]";
        }
      }
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$base_url: ${process.env.NODE_ENV === "development" ? "'http://localhost:3000/src/'" : "'/wp-content/themes/wp-template/'"};`,
      },
    },
  },
  server: {
    port: 3000
  },
})