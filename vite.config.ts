import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      utils: '/src/utils',
      types: '/src/types',
      styles: '/src/styles',
      constants: '/src/constants',
      hooks: '/src/hooks',
    },
  },
});
