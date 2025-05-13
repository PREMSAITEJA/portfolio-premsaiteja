import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/premsaiteja', // Base URL for the app
  server: {
    port: 3000, // Ensure Bun uses the correct port
  },
  build: {
    target: 'esnext', // Optimize for modern browsers
    minify: 'esbuild', // Use esbuild for faster builds
  },
  define: {
    'process.env': {} // Or specific environment variables you need
  }
})