import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 8080,
    strictPort: true,
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ['@mui/material'], // Assuming you want to exclude MUI from the build
      output: {
        // This is optional; specify this only if you need to customize output options
        globals: {
          '@mui/material': 'mui', // Adjust the global name if necessary
        },
      },
    },
  },
});
