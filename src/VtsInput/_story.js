import React from 'react'
import noop from 'lodash/noop'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import VtsInput from './'

let inputValue = ''

const inputInfo = withInfo('Input with potential validations')

storiesOf('VtsInput', module)
  .addDecorator((story, context) => inputInfo(story)(context))
  .add('basic', () => <VtsInput onChange={noop} value={inputValue} />)
  .add('with a label', () => (
    <VtsInput onChange={noop} value={inputValue} label="mo" />
  ))
  .add('with a placeholder', () => (
    <VtsInput
      onChange={noop}
      value={inputValue}
      placeholder="Search for a property..."
    />
  ))
  .add('with an icon', () => (
    <VtsInput onChange={noop} value={inputValue} icon="icon-mag" />
  ))
