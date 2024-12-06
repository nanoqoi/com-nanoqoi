import { vitePlugin as remix } from '@remix-run/dev'
import { createRoutesFromFolders } from '@remix-run/v1-route-convention'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import mdx from '@mdx-js/rollup'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    mdx({
      providerImportSource: '@mdx-js/react',
    }),
    process.env.VITEST
      ? react()
      : remix({
          future: {
            v3_fetcherPersist: true,
            v3_relativeSplatPath: true,
            v3_throwAbortReason: true,
            v3_singleFetch: true,
            v3_lazyRouteDiscovery: true,
          },
          ignoredRouteFiles: ['**/*'],
          routes: (defineRoutes) => {
            return createRoutesFromFolders(defineRoutes, {
              ignoredFilePatterns: ['**/.*', '**/*.css'],
            })
          },
        }),
    tsconfigPaths(),
  ],
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
    },
  },
  test: {
    browser: {
      enabled: true,
      name: 'chromium',
      provider: 'playwright',
    },
  },
  build: {
    target: 'esnext',
    sourcemap: false,
    rollupOptions: {
      treeshake: 'recommended',
    },
  },
  assetsInclude: ['app/routes/**/*.mdx'],
})
