import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { action } from '@storybook/addon-actions'

import VtsButton from './'
const buttonInfo = withInfo('Button with text')

action('button-click')

storiesOf('VtsButton', module)
  .addDecorator((story, context) => buttonInfo(story)(context))
  .add('with text', () => (
    <VtsButton onClick={action('button-click')}>Hello, world!</VtsButton>
  ))
  .add('with an icon', () => (
    <VtsButton icon="icon-plus-v2" onClick={action('button-click')} />
  ))
  .add('with text and an icon', () => (
    <VtsButton icon="icon-plus-v2" onClick={action('button-click')}>
      Hello, world!
    </VtsButton>
  ))
  .add('small sized', () => (
    <VtsButton size="sm" onClick={action('button-click')}>
      It's a button
    </VtsButton>
  ))
  .add('medium sized', () => (
    <VtsButton size="md" onClick={action('button-click')}>
      It's a button
    </VtsButton>
  ))
  .add('large sized', () => (
    <VtsButton size="lg" onClick={action('button-click')}>
      It's a button
    </VtsButton>
  ))
