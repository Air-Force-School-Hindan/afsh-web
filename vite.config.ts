import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode),
      'process.env.GITHUB_BRANCH': JSON.stringify(env.GITHUB_BRANCH || env.CF_PAGES_BRANCH),
      'process.env.VERCEL_GIT_COMMIT_REF': JSON.stringify(env.VERCEL_GIT_COMMIT_REF),
      'process.env.HEAD': JSON.stringify(env.HEAD),
      'process.env.NEXT_PUBLIC_TINA_CLIENT_ID': JSON.stringify(env.NEXT_PUBLIC_TINA_CLIENT_ID),
      'process.env.TINA_TOKEN': JSON.stringify(env.TINA_TOKEN),
    },
    server: {
      host: '0.0.0.0',
      port: 5000,
      allowedHosts: true,
    },
    build: {
      outDir: 'dist',
      chunkSizeWarningLimit: 1600,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            'vendor-three': ['three', '@react-three/fiber'],
            'vendor-ui': ['lucide-react', 'embla-carousel', 'embla-carousel-react', 'embla-carousel-autoplay'],
          },
        },
      },
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), './'),
      },
    },
  };
});
