import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
    include: ['app/**/*.{test,spec}.{ts,tsx}', 'lib/**/*.{test,spec}.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      reportsDirectory: './coverage',
      include: ['app/**/*.{ts,tsx}', 'lib/**/*.{ts,tsx}'],
      exclude: [
        '**/*.stories.*',
        '**/__tests__/**',
        'app/**/layout.*',
        'app/**/loading.*',
        'app/**/error.*',
        'next-env.d.ts',
        '**/types.*',
      ],
      thresholds: { lines: 60, statements: 60, functions: 60, branches: 50 },
    },
  },
});
