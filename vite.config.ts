import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import Unfonts from 'unplugin-fonts/vite'
import topLevelAwait from 'vite-plugin-top-level-await'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    topLevelAwait(),
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
  assetsInclude: ['**/*.gltf', '**/*.glb', '**/*.bin'],
})
