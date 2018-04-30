import centered from '@storybook/addon-centered'
import { setAddon, addDecorator } from '@storybook/react'

import '../src/stylesheets/horse-style.css'
import JSXAddon from 'storybook-addon-jsx'

setAddon(JSXAddon)
addDecorator(centered)

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext)
}

requireAll(require.context('..', true, /_story\.jsx?$/))
