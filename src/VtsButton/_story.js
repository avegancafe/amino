import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { action } from '@storybook/addon-actions'
import noop from 'lodash/noop'

import VtsButton from './'
const buttonInfo = withInfo('Button with text')

storiesOf('VtsButton', module)
  .addDecorator((story, context) => buttonInfo(story)(context))
  .addWithJSX('with text', () => (
    <VtsButton onClick={action('button-click')}>Hello, VTS!</VtsButton>
  ))
  .addWithJSX('with an icon', () => (
    <VtsButton icon="icon-plus-v2" onClick={noop} />
  ))
  .addWithJSX('with text and an icon', () => (
    <VtsButton icon="icon-plus-v2" onClick={noop}>
      Hello, VTS!
    </VtsButton>
  ))
  .addWithJSX('small sized', () => (
    <VtsButton size="sm" onClick={noop}>
      It's a button
    </VtsButton>
  ))
  .addWithJSX('medium sized', () => (
    <VtsButton size="md" onClick={noop}>
      It's a button
    </VtsButton>
  ))
  .addWithJSX('large sized', () => (
    <VtsButton size="lg" onClick={noop}>
      It's a button
    </VtsButton>
  ))
