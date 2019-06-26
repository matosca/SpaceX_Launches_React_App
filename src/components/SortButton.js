import React, { Component } from 'react';

class SortButton extends Component {

  render() {

    return (
      <button onClick={ this.props.onClick}>Sort {this.props.updatingContent}</button>
    );
  }
}

export default SortButton;
