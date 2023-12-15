import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

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
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: '@aigotsrl/rc_shared_components_frontend',
      fileName: 'index',
    },
    rollupOptions: {
      external: [
        'react',
        'classnames',
        'libphonenumber-js',
        'react-auth-code-input',
        'react-hook-form',
        'react-toastify',
      ],
    },
  },
});
