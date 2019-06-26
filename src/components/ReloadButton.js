import React, { Component } from 'react';

class ReloadButton extends Component {

  render() {
    return (
      <button onClick={this.props.onClick}>Reload Data</button>
    );
  }
}

export default ReloadButton;
