import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'

import VtsInput from './'

let inputValue = ''

const inputInfo = withInfo('Input with potential validations')

storiesOf('VtsInput', module)
  .addDecorator((story, context) => inputInfo(story)(context))
  .addWithJSX('basic', () => (
    <VtsInput onChange={action('input-changed')} value={inputValue} />
  ))
  .addWithJSX('with a label', () => (
    <VtsInput
      onChange={action('input-changed')}
      value={inputValue}
      label="mo"
    />
  ))
  .addWithJSX('with a placeholder', () => (
    <VtsInput
      onChange={action('input-changed')}
      value={inputValue}
      placeholder="Search for a property..."
    />
  ))
  .addWithJSX('with an icon', () => (
    <VtsInput
      onChange={action('input-changed')}
      value={inputValue}
      icon="icon-mag"
    />
  ))
