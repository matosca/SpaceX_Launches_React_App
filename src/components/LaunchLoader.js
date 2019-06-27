import React, { Component } from 'react';
import Loader from "../assets/svg/loader.svg";
import './LaunchLoader.css';

class LaunchLoader extends Component {
  render() {
    return (
      <div className="loading-img">
        <img src={Loader} alt="Animated loading icon"/>
      </div>
    );
  }
}

export default LaunchLoader;
