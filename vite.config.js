import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':'https://property-listing-ns44.onrender.com',
    }
  },
  plugins: [react()],
})
