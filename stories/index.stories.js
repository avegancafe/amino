import centered from '@storybook/addon-centered'
import { addDecorator } from '@storybook/react'

import '../src/stylesheets/horse-style.css'

addDecorator(centered)

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(require.context("..", true, /_story\.jsx?$/));
