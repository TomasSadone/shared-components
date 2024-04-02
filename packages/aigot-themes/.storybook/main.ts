import type { StorybookConfig } from '@storybook/react-vite'

import { join, dirname } from 'path'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig & {
  features: { emotionAlias: boolean }
} = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@chakra-ui/storybook-addon'),
  ],
  features: {
    emotionAlias: false,
  },
  framework: {
    name: getAbsolutePath('@storybook/react-vite') as '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
