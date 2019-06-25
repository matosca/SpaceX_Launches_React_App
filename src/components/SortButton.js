import React, { Component } from 'react';

class SortButton extends Component {

  handleSortClick(evt) {
    console.log("this has been clicked");
    this.props.onClick(evt);
  }

  render() {

    return (
      <button onClick={ this.handleSortClick}>Sort {this.props.updatingContent}</button>
    );
  }
}

export default SortButton;
