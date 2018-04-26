import React, { Component } from "react";
import classNames from "classnames";

export default class VtsButton extends Component {
  render() {
    return (
      <div>
        <button
          class="button -fc"
          name={this.props.name}
          ng-class={classNames({
            [`-type-${this.props.type}`]: this.props.type,
            [`-size-${this.props.size}`]: this.props.size,
            "is-disabled": this.props.disabled,
            "button--icon-only": !!(
              this.props.textSlotName === undefined && this.props.icon
            )
          })}
          onClick={e => this.props.handleClick(e)}
          type={this.props.buttonType}
        >
          {this.props.icon ? <i className={this.props.icon} /> : null}
          <div className="button-text">{this.props.children}</div>
        </button>
      </div>
    );
  }
}
