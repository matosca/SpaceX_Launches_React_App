import React, { Component } from 'react';
import RefreshIcon from '../assets/icon/refresh@2x.png';
import './ReloadButton.css';

class ReloadButton extends Component {

  render() {
    return (
      <div className="reload-container">
        <button onClick={this.props.onClick}>Reload Data  <img src={RefreshIcon} alt="Loading arrow icon" width="11" height="12"/></button>
      </div>

    );
  }
}

export default ReloadButton;
