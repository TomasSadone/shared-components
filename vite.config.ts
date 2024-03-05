import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';

export default defineConfig({
  plugins: [
    react({
      include: '**/*.tsx',
    }),
    dts({ include: ['lib'], copyDtsFiles: true }),
    libInjectCss(),
  ],
  resolve: {
    alias: {
      components: '/lib/components',
      utils: '/lib/utils',
      types: '/lib/types',
      styles: '/lib/styles',
      constants: '/lib/constants',
      hooks: '/lib/hooks',
    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'react',
        'classnames',
        'libphonenumber-js',
        'react-auth-code-input',
        'react-hook-form',
        'react-router-dom',
        'react-dom',
        'react-toastify',
        'react/jsx-runtime',
        'react-dropzone',
        'react-colorful',
        'fabric',
        'jotai',
      ],
      input: Object.fromEntries(
        glob
          .sync('lib/**/!(*.d).{ts,tsx}')
          .map((file) => [
            relative('lib', file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
  },
});
