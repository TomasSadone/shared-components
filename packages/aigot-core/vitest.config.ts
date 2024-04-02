import { defineConfig } from 'vitest/config'
const exclude = [
  '**/node_modules/**',
  '**/dist/**',
  '**/*.d.ts',
  '**/*.stories.ts',
  '**/.storybook/**',
  '*eslint*',
]
export default defineConfig({
  test: {
    testTimeout: 30000,
    environment: 'happy-dom',
    exclude,
    coverage: {
      exclude,
      provider: 'v8',
      thresholds: {
        branches: 90,
        functions: 90,
        lines: 90,
        perFile: true,
      },
    },
  },
})
