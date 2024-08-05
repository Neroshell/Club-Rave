import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Output directory for production build
    outDir: 'dist',
    // Set the base path for the production build
    base: './',
    // Specify the directory where Vite will place generated static files
    assetsDir: 'assets',
    // Minify the code for production build
    minify: true,
    // Inline assets that are smaller than specified size (bytes)
    inlineAssetsLimit: 4096,
    // Enable brotli compression for production build
    brotliSize: true,
    // Set this to false to disable sourcemap generation
    sourcemap: false,
    // Optionally, configure additional rollup plugins for production build
    // rollupOptions: {
    //   plugins: [
    //     // Add any additional rollup plugins here
    //   ],
    // },
  },
});
