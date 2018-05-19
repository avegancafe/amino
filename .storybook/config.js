import { configure } from '@storybook/react'
import { setDefaults } from '@storybook/addon-info'
import { setOptions } from '@storybook/addon-options'

// configure addon-info
setDefaults({
  inline: true
})

// configure addon-options
setOptions({
  name: 'VTS Style-Guide',
  addonPanelInRight: true,
  hierarchyRootSeparator: /\|/,
  enableShortcuts: true,
  sortStoriesByKind: true
})

// load index story
const req = require.context('../stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
