import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
  ],
  server: {
    host: '0.0.0.0', // Allows access from other devices on the network
    port: 5173      // Sets the server to listen on port 5173
  }
})
