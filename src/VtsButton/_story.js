import React from 'react'

import { storiesOf } from '@storybook/react'

import VtsButton from './'

storiesOf('VtsButton', module)
  .add('with text', () => (
    <VtsButton onClick={e => console.log('clicked!', e)}>
      Hello, world!
    </VtsButton>
  ))
  .add('with an icon', () => <VtsButton icon="icon-plus-v2" />)
  .add('with text and an icon', () => (
    <VtsButton icon="icon-plus-v2">Hello, world!</VtsButton>
  ))
  .add('small sized', () => <VtsButton size="sm" icon="icon-plus-v2" />)
  .add('medium sized', () => <VtsButton size="md" icon="icon-plus-v2" />)
  .add('large sized', () => <VtsButton size="lg" icon="icon-plus-v2" />)
