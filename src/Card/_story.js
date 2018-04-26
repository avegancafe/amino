import React, { Component } from 'react'

import { storiesOf } from '@storybook/react'
import noop from 'lodash/noop'

import Card, {
  CardContent,
  CardHeader,
  CardHeaderLabel,
  CardHeaderOptions,
  CardLabel
} from './'

import AlertCard from '../AlertCard'

import VtsButton from '../VtsButton'

storiesOf('Cards', module)
  .add('Standard card', () => (
    <Card>
      <CardHeader>
        <CardHeaderLabel>
          <div style={{ width: 300 }}>Some Header</div>
        </CardHeaderLabel>
        <CardHeaderOptions>
          <VtsButton icon="icon-plus-v2" onClick={noop}>
            Button!
          </VtsButton>
        </CardHeaderOptions>
      </CardHeader>
      <CardContent>
        <div>Maybe this is a deal profile thing.</div>
        <div style={{ marginBottom: 10 }}>Maybe it's a button</div>
        <VtsButton onClick={noop}>Button!</VtsButton>
      </CardContent>
    </Card>
  ))
  .add('Alert card', () => (
    <AlertCard>
      <div className="-size-md icon-info u-pull-left u-p-sm" />
      <div className="u-pull-left u-p-sm">Something went wrong!</div>
    </AlertCard>
  ))
