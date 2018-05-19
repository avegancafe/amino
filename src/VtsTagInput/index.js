import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Style from './VtsTagInput.css'
import VtsTag from './VtsTag'
import * as KeyboardConstants from '../keyboardConstants'
import at from 'lodash/at'
import includes from 'lodash/includes'
import ContentEditable from 'react-contenteditable'
import noop from 'lodash/noop'

class VtsTagInput extends Component {
  createTagKeys = at(KeyboardConstants, ['enter', 'tab', 'space', 'comma'])

  constructor() {
    super()
    this.state = {
      focused: false,
      error: {},
      dirty: false
    }
  }

  createTag() {
    if (this.refs.inputField.htmlEl.textContent) {
      this._selectOption()
    }
  }

  removeTag() {
    if (this.refs.inputField.htmlEl.textContent.length === 0) {
      if (this.state.prepTagForRemoval) {
        this.props.onRemove(this.props.tags.length - 1)
      }
      this.setState({ prepTagForRemoval: !this.state.prepTagForRemoval })
    }
  }

  _selectOption() {
    let tag = this.refs.inputField.htmlEl.textContent
    this.refs.inputField.htmlEl.textContent = ''
    this.props.onSelect(tag)
  }

  preventDefaults(e) {
    // tab normally to the next input when there is no text
    if (
      e.which === KeyboardConstants.tab &&
      this.refs.inputField.htmlEl.textContent === ''
    )
      return

    e.preventDefault()
    e.stopPropagation()
  }

  handleInputBlur() {
    this.setState({ focused: false })
    this.createTag()
  }

  handleFormControlClick() {
    if (this.props.disabled) return
    this.setState({ focused: true })
    this.refs.inputField.htmlEl.focus()
  }

  handleRemoveTag(i) {
    this.props.onRemove(this.props.tags[i])
  }

  handleKeyDown(e) {
    if (e.which !== KeyboardConstants.backspace) {
      this.setState({ prepTagForRemoval: false })
    }

    if (includes(this.createTagKeys, e.which)) {
      this.preventDefaults(e)
      this.createTag()
    } else if (e.which === KeyboardConstants.backspace) {
      this.removeTag()
    }
  }

  render() {
    return (
      <div
        className="form-control-container tag-input"
        onClick={() => this.handleFormControlClick()}>
        <div
          className={classNames({
            'form-control': true,
            'is-focused': this.state.focused,
            'is-disabled': this.props.disabled,
            'is-required':
              this.props.required &&
              this.state.error.required &&
              (this.state.dirty || this.props.submitted) &&
              this.state.error.invalid,
            'is-invalid':
              this.state.error.invalid &&
              (this.state.dirty || this.props.submitted),
            'form-control--icon': this.props.icon
          })}>
          {this.props.tags.map((tag, i) => (
            <VtsTag
              onRemove={() => this.handleRemoveTag(i)}
              key={`${tag}${i}`}
              isBeingRemoved={
                this.state.prepTagForRemoval && i == this.props.tags.length - 1
              }
              disabled={this.props.disabled}>
              {tag}
            </VtsTag>
          ))}
          <ContentEditable
            ref="inputField"
            html=""
            onBlur={() => this.handleInputBlur()}
            className="tag-input-field"
            onKeyDown={e => this.handleKeyDown(e)}
          />
        </div>
      </div>
    )
  }
}

VtsTagInput.propTypes = {
  onSelect: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default VtsTagInput
