import React, { Component } from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { action } from '@storybook/addon-actions'

import VtsSwitch from './'
class VtsSwitchWrapper extends Component {
  constructor() {
    super()
    this.state = {
      toggled: false
    }
  }

  toggle = e => {
    this.setState({ toggled: !this.state.toggled })
    action('toggle-switch')(e)
  }

  render() {
    return <VtsSwitch value={this.state.toggled} onChange={this.toggle} />
  }
}

storiesOf('VtsSwitch', module)
  .add('basic', () => <VtsSwitchWrapper />)
