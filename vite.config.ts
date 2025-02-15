import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  server: {
    host: '0.0.0.0', // Allow external access
    port: 5173, // Ensure this is your correct Vite port
    strictPort: true, // Prevents fallback to another port
    allowedHosts: ['.ngrok-free.app'], // Allow all ngrok subdomains
    cors: true // Allow cross-origin requests
  }
})
