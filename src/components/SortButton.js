import React, { Component } from 'react';
import './SortButton.css';
import SortIcon from '../assets/icon/sort@2x.png';

class SortButton extends Component {

  render() {

    return (
      <button onClick={ this.props.onClick}>Sort {this.props.updatingContent} <img src={SortIcon} alt="Sorting arrows up and down" width="13" height="17"/></button>
    );
  }
}

export default SortButton;
