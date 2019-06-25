import React, { Component } from 'react';

class ReloadButton extends Component {

  render() {
    return (
      <button onClick={this.props.handleReloadClick}>Reload Data</button>
    );
  }
}

export default ReloadButton;
