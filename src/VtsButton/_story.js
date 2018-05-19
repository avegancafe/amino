import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import noop from 'lodash/noop'

import VtsButton from './'
const buttonInfo = withInfo('Button with text')

storiesOf('VtsButton', module)
  .addDecorator((story, context) => buttonInfo(story)(context))
  .add('primary', () => <VtsButton onClick={noop}>Hello, VTS!</VtsButton>)
  .add('secondary', () => (
    <VtsButton onClick={noop} type="secondary">
      Hello, VTS!
    </VtsButton>
  ))
  .add('with an icon', () => <VtsButton icon="icon-plus-v2" onClick={noop} />)
  .add('with text and an icon', () => (
    <VtsButton icon="icon-plus-v2" type="secondary" onClick={noop}>
      Hello, VTS!
    </VtsButton>
  ))
  .add('small sized', () => (
    <VtsButton size="sm" onClick={noop}>
      It's a button
    </VtsButton>
  ))
  .add('medium sized', () => (
    <VtsButton size="md" onClick={noop}>
      It's a button
    </VtsButton>
  ))
  .add('large sized', () => (
    <VtsButton size="lg" onClick={noop}>
      It's a button
    </VtsButton>
  ))
