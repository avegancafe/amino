import centered from '@storybook/addon-centered'
import backgrounds from '@storybook/addon-backgrounds'
import { setAddon, addDecorator } from '@storybook/react'

import '../src/index.css'
import '../src/utilities.css'

addDecorator(centered)
addDecorator(
  backgrounds([
    { name: 'white', value: '#ffffff', default: true },
    { name: 'gray', value: '#f4f4f4' }
  ])
)

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext)
}

requireAll(require.context('../src', true, /_story\.jsx?$/))
