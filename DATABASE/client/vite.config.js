import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/api':{
        target:'127.0.0.1:3001',
        changeOrigin: true,
        secure:false
      }
    }
  }
})