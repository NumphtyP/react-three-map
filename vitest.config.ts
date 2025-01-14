import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './vitest.global.setup.ts',
    coverage: {
      provider: 'v8',
      reporter: 'clover',
    },
  },
})