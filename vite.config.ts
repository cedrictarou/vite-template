import { defineConfig } from "vite"
import { resolve } from 'path'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')
export default defineConfig({
  root, //開発ディレクトリ設定
  server: {
    host: true,
  },
  base: './',
  publicDir: 'public',
  build: {
    outDir, //出力場所の指定
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo: any) => {
          let extType = assetInfo.name.split(".")[1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "images";
          }
          //ビルド時のCSS名を明記してコントロールする
          // if (extType === "css") {
          //   return `assets/css/style.css`;
          // }
          return `assets/${extType}/[name][extname]`;
        },
        chunkFileNames: "assets/js/[name].js",
        entryFileNames: "assets/js/[name].js",
      },
      input: {
        main: resolve(root, 'index.html'),
        // content: resolve(root, 'content.html')
      }
    },

  },

});
