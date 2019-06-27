import React, { Component } from 'react';
import LaunchHome from '../assets/img/launch-home@3x.png';
import './LaunchImg.css';

class LaunchImg extends Component {
  render () {
    return (
      <div className="home-img">
        <img src={LaunchHome} alt="Space rocket launching" width="500" height="850"/>
      </div>
    );
  }
}

export default LaunchImg;
