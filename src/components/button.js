import React, { Component } from 'react';
import '../css/button.css';

class Button extends Component {
  render() {
    return (
      <button className="appButton"
        style={{
          width:this.props.width
        }}
        onClick={this.props.onClick}
        >{this.props.label}
        </button>
    );
  }
}

export default Button;
