import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

function handleRemoveClick(disabled, onRemove) {
  if (!disabled) onRemove()
}

const VtsTag = props => (
  <div
    className={classNames({
      tag: true,
      'is-being-removed': props.isBeingRemoved
    })}>
    <div className="tag-text">{props.children}</div>
    <div
      className={classNames({
        'tag-remove': true,
        'icon-close-v2': true,
        'is-disabled': props.disabled
      })}
      onClick={() => handleRemoveClick(props.disabled, props.onRemove)}
    />
  </div>
)

VtsTag.propTypes = {
  onRemove: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  isBeingRemoved: PropTypes.bool,
  children: PropTypes.node
}

export default VtsTag
