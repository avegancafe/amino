import React, { Component } from 'react'

import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import cloneDeep from 'lodash/cloneDeep'
import { withInfo } from '@storybook/addon-info'

import VtsButton from '../VtsButton'
import VtsTagInput from './'

const tagInputInfo = withInfo('Input with tags')

class VtsTagInputWrapper extends Component {
  constructor() {
    super()
    this.state = {
      tags: []
    }
  }

  onSelect = tag => {
    const tags = this.state.tags
    this.setState({ tags: [...tags, tag] })
    action('tag-addition')(tag)
  }
  onRemove = i => {
    const tags = cloneDeep(this.state.tags)
    tags.splice(i, 1)
    this.setState({ tags })
    action('tag-removal')(i)
  }

  render() {
    return (
      <div style={{ width: 300 }}>
        <VtsTagInput
          tags={this.state.tags}
          onSelect={this.onSelect}
          onRemove={this.onRemove}
        />
      </div>
    )
  }
}

storiesOf('VtsTagInput', module)
  .addDecorator((story, context) => tagInputInfo(story)(context))
  .add('basic', () => <VtsTagInputWrapper />)
