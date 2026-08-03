import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    include: ['lucide-react'],
  },
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'lucide': ['lucide-react'],
          'articles-data': [
            './src/data/articles-1', './src/data/articles-2', './src/data/articles-3',
            './src/data/articles-4', './src/data/articles-5', './src/data/articles-6',
            './src/data/articles-7', './src/data/articles-8', './src/data/articles-9', './src/data/articles-10',
          ],
        },
      },
    },
  },
});
