import React, { Component } from 'react'

export default class VtsSwitch extends Component {
  constructor() {
    super()
    this.state = {
      dataReady: true
    }
  }
  render() {
    return (
      <label className="switch">
        <input
          name={this.props.name}
          onChange={e => this.props.onChange(e)}
          checked={this.props.value}
          type="checkbox"
        />
        {this.state.dataReady ? (
          <div className="switch-background" tabIndex="0">
            <div className="switch-indicator" />
          </div>
        ) : null}
      </label>
    )
  }
}
