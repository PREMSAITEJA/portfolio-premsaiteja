import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // base: '/premsaiteja', // Base URL for the app
 server: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: process.env.PORT ? Number(process.env.PORT) : 3000, // Use Render's PORT or default to 3000
  },
  build: {
    target: 'esnext', // Optimize for modern browsers
    minify: 'esbuild', // Use esbuild for faster builds
    sourcemap: false, // <--- add this line to silence sourcemap warnings
    chunkSizeWarningLimit: 2000, // (in KB, default is 500)
  },
  define: {
    'process.env': {} // Or specific environment variables you need
  }
})
