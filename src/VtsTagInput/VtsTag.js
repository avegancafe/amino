import React from 'react'
import classNames from 'classnames'

export default function VtsTag(props) {
  function handleRemoveClick() {
    if (!props.disabled) props.onRemove()
  }

  return (
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
        onClick={() => handleRemoveClick()}
      />
    </div>
  )
}
