import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import Unfonts from 'unplugin-fonts/vite'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    Unfonts({
      google: {
        preconnect: true,
        injectTo: 'head-prepend',
        families: [
          {
            name: 'Rubik',
            styles: 'wght@400;500;600;700',
          },
        ],
      },
    }),
  ],
})
