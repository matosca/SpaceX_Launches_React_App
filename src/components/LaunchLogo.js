import React, { Component } from 'react';
import Logo from '../assets/spacex-logo.png';

class LaunchLogo extends Component {
  render() {
    return(
      <img src={Logo} alt="" width="130" height="17"/>
    );
  }
}

export default LaunchLogo;
