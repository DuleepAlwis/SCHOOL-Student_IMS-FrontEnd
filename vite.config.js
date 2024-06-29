import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: { '.js': 'jsx' },
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  server: {    
    watch:{
      usePolling: true
    },
    host: true,
    strictPort: true,
    port:8080,
    middleware: []
  },
})
