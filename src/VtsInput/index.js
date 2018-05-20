import React, { Component } from 'react'
import classNames from 'classnames'
import { get } from 'lodash'
import PropTypes from 'prop-types'

import './VtsInput.css'

class VtsInput extends Component {
  constructor() {
    super()
    this.state = {
      focused: false,
      error: {}
    }
  }

  handleChange = val => this.props.onChange(val)

  render() {
    return (
      <div className="form-control-container">
        <div
          className={classNames({
            'form-control': true,
            'is-focused': this.state.focused,
            'is-disabled': this.props.disabled,
            'is-required':
              this.props.required &&
              this.state.error.required &&
              (this.state.dirty || this.props.submitted) &&
              this.state.invalid &&
              !this.state.value,
            'is-invalid':
              this.state.invalid && (this.state.dirty || this.props.submitted),
            'form-control--icon': this.props.icon
          })}>
          {this.props.icon ? (
            <i
              className={classNames({
                'form-icon': true,
                [this.props.icon]: true,
                'form-icon--first': this.props.iconFirst
              })}
            />
          ) : null}
          {this.props.label ? (
            <div className="form-label" ng-if="$ctrl.label">
              {this.props.label}
            </div>
          ) : null}
          <input
            id={this.props.name}
            name={this.props.name}
            className={classNames({ 'has-dropdown': this.props.labelOptions })}
            autoComplete={this.props.autocomplete}
            onBlur={() => this.setState({ focused: false })}
            onChange={e => this.handleChange(e)}
            disabled={this.props.disabled}
            onFocus={() => this.setState({ focused: true })}
            required="this.props.required"
            placeholder={this.props.placeholder}
            type={this.props.type || 'text'}
          />
        </div>
        {(this.state.dirty && this.state.invalid) || this.props.submitted ? (
          <div class="form-messages" role="alert">
            {this.state.error.required ? <div>Required field.</div> : null}
            {this.state.error.nonzero ? (
              <div>Requires nonzero input.</div>
            ) : null}
            {this.state.error.pattern ||
            this.state.error.minLength ||
            this.state.error.maxLength ? (
              <ng-message when-exp="['pattern', 'minlength', 'maxlength']">
                This is invalid.
              </ng-message>
            ) : null}
          </div>
        ) : null}
      </div>
    )
  }
}

VtsInput.propTypes = {
  /** Whether or not this field is required to be filled out */
  required: PropTypes.bool,
  /** What should happen when the value is changedd */
  onChange: PropTypes.func.isRequired,
  /** if this input is changed */
  disabled: PropTypes.bool,
  /** The icon to show on the right side of the input */
  icon: PropTypes.string
}

VtsInput.defaultProps = {
  required: false,
  disabled: false
}

export default VtsInput
