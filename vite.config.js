import path from 'path'
import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vuePlugin()],
  resolve: {
    alias: {
      'obsidian': '/obsidian-shim.js'
    }
  },
  build: {
    minify: false,
    // Use Vite lib mode https://vitejs.dev/guide/build.html#library-mode
    lib: {
      entry: path.resolve(__dirname, 'main.ts'),
      formats: ['cjs'],
    },
    rollupOptions: {
      output: {
        // Overwrite default Vite output fileName
        entryFileNames: 'main.js',
        assetFileNames: 'styles.css',
      },
      external: ['obsidian'],
    },
    // Use root as the output dir
    emptyOutDir: false,
    outDir: '.'
  }
})