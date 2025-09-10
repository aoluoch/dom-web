import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  // Use absolute paths for better cPanel compatibility
  // Change this to your actual domain path if deploying to a subdirectory
  base: "/",
  build: {
    // Ensure assets are properly referenced
    assetsDir: "assets",
    // Generate manifest for better asset handling
    manifest: false,
    // Optimize for production - use esbuild (default) instead of terser
    minify: 'esbuild',
    // Ensure proper chunking
    rollupOptions: {
      output: {
        // Ensure consistent naming for assets
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  // Configure server for development
  server: {
    // Ensure proper MIME types during development
    fs: {
      strict: false
    }
  }
})
