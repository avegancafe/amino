import React, { Component} from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { action } from '@storybook/addon-actions'

import VtsSwitch from './'
const switchInfo = withInfo('A switch that is on or off')

action('toggle-switch')

storiesOf('VtsSwitch', module)
  .addDecorator((story, context) => switchInfo(story)(context))
  .add('basic', () => (
    <VtsSwitch value={true} onChange={action('toggleSwitch')} />
  ))
