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
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/images/*',
          dest: 'assets/images'
        }
      ]
    })
  ],
  build: {
    outDir: path.resolve(__dirname, "./dist"),
    rollupOptions: {
      input: {
        style: path.resolve(`${__dirname}/src/assets/css/style.scss`),
        app: path.resolve(`${__dirname}/src/assets/ts/app.ts`)
      },
      output: {
        entryFileNames: `assets/js/[name].js`,
        chunkFileNames: `assets/js/[name].js`,
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpeg|jpg|png|svg|webp)$/.test(name ?? "")) {
            return "assets/images/[name].[ext]";
          }
          if (/\.css$/.test(name ?? "")) {
            return "assets/css/[name].[ext]";
          }
          if (/\.ts$/.test(name ?? "")) {
            return "assets/js/[name].[ext]";
          }
          return "assets/[name].[ext]";
        }
      }
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$base_url: ${process.env.NODE_ENV === "development" ? "'http://localhost:3000/src/'" : "'/wp-content/themes/dist/'"};`,
      },
    },
  },
  server: {
    port: 3000
  },
})