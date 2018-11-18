import React, { Component, Fragment } from 'react'

import noop from 'lodash/noop'
import { storiesOf } from '@storybook/react'
import cloneDeep from 'lodash/cloneDeep'
import { withInfo } from '@storybook/addon-info'

import VtsButton from '../VtsButton'
import VtsTagInput from './'
import { VtsTagInputWithHooks } from './tmp'

class VtsTagInputWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: []
    }
  }

  onSelect = tag => {
    const tags = this.state.tags
    this.setState({ tags: [...tags, tag] })
  }
  onRemove = i => {
    const tags = cloneDeep(this.state.tags)
    tags.splice(i, 1)
    this.setState({ tags })
  }

  render() {
    return (
      <Fragment>
        {this.props.children({
          tags: this.state.tags,
          onSelect: this.onSelect,
          onRemove: this.onRemove
        })}
      </Fragment>
    )
  }
}

const tagInputInfo = withInfo({
  text: 'Input with tags',
  source: true,
  propTables: [VtsTagInput],
  propTablesExclude: [VtsTagInputWrapper]
})

storiesOf('VtsTagInput', module)
  .addDecorator((story, context) => tagInputInfo(story)(context))
  .addDecorator((story, context) => (
    <VtsTagInputWrapper>
      {props => {
        Object.assign(context, props)
        return <div style={{ width: '800px' }}>{story()}</div>
      }}
    </VtsTagInputWrapper>
  ))
  .add('basic', props => (
    <VtsTagInput
      tags={props.tags}
      onSelect={props.onSelect}
      onRemove={props.onRemove}
    />
  ))
  .add('with hooks', props => <VtsTagInputWithHooks {...props} />)
