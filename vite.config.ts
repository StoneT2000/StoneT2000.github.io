import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Vite configuration for the personal site.
 *
 * @returns Vite config object used for local dev and production builds.
 */
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    outDir: 'dist',
  },
});
