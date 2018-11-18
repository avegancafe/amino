import React, { useRef, useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Style from './VtsTagInput.css'
import VtsTag from './VtsTag'
import * as KeyboardConstants from '../keyboardConstants'
import at from 'lodash/at'
import includes from 'lodash/includes'
import ContentEditable from 'react-contenteditable'
import noop from 'lodash/noop'
import isEmpty from 'lodash/isEmpty'

const createTagKeys = at(KeyboardConstants, ['enter', 'tab', 'space', 'comma'])

export const VtsTagInputWithHooks = ({
  onSelect,
  onRemove,
  tags,
  disabled,
  icon
}) => {
  const inputRef = useRef(null)
  const [focused, setFocused] = useState(false)
  const [prepTagForRemoval, setPrepTagForRemoval] = useState(false)

  function handleFormControlClick() {
    if (disabled) return

    setFocused(true)
    inputRef.current.htmlEl.focus()
  }

  function handleInputBlur() {
    setFocused(false)
    createTag()
  }

  function preventDefaults(e) {
    // tab normally to the next input when there is no text
    if (
      e.which === KeyboardConstants.tab &&
      inputRef.current.htmlEl.textContent === ''
    ) {
      return
    }

    e.preventDefault()
    e.stopPropagation()
  }

  function handleKeyDown(e) {
    if (e.which !== KeyboardConstants.backspace) {
      setPrepTagForRemoval(false)
    }

    if (includes(createTagKeys, e.which)) {
      preventDefaults(e)
      createTag()
    } else if (e.which === KeyboardConstants.backspace) {
      removeTag()
    }
  }

  function createTag() {
    if (inputRef.current.htmlEl.textContent) {
      let tag = inputRef.current.htmlEl.textContent
      inputRef.current.htmlEl.textContent = ''

      onSelect(tag)
    }
  }

  function removeTag() {
    if (isEmpty(inputRef.current.htmlEl.textContent)) {
      console.log('backspace clicked when empty input')

      console.log(prepTagForRemoval)
      if (prepTagForRemoval) {
        console.log('removing tag')
        onRemove(tags.length - 1)
      }

      console.log(`setting flag to: ${!prepTagForRemoval}`)
      setPrepTagForRemoval(!prepTagForRemoval)
    }
  }

  return (
    <div
      className="form-control-container tag-input"
      onClick={() => handleFormControlClick()}>
      <div
        className={classNames({
          'form-control': true,
          'is-focused': focused,
          'is-disabled': disabled,
          'form-control--icon': icon
        })}>
        {tags.map((tag, i) => (
          <VtsTag
            onRemove={() => onRemove(tag)}
            key={`${tag}:${i}`}
            isBeingRemoved={prepTagForRemoval && i == tags.length - 1}
            disabled={disabled}>
            {tag}
          </VtsTag>
        ))}
        <ContentEditable
          ref={inputRef}
          html=""
          onBlur={() => handleInputBlur()}
          className="tag-input-field"
          onKeyDown={e => handleKeyDown(e)}
        />
      </div>
    </div>
  )
}

VtsTagInputWithHooks.propTypes = {
  onSelect: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
}
