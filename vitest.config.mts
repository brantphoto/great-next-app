import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  define: {
    'process.env': JSON.stringify({})
  },
  plugins: [tsconfigPaths(), react()],
  test: {
    css: true,
    setupFiles: ['./setup-file.ts'],
    browser: {
      provider: 'playwright', // or 'webdriverio'
      enabled: true,
      headless: false, // run in headless mode
      // at least one instance is required
      instances: [
        { browser: 'chromium' },
      ],
    },
  }
})

