import React, { Component } from 'react';
import './Launch.css';

class Launch extends Component {

  render () {
    const formattedDate = new Date(this.props.launchDate);
    const options = { day: "2-digit", month: "short", year: "numeric"}
    const dateLaunchFormatted = formattedDate.toLocaleString("en-GB", options)

    return(
      <div className="launch-item">
        <div className="launch-item-left">
          <div className="launch-item-number">#{this.props.flightNumber}</div>
          <div className="launch-item-name">{this.props.missionName}</div>
        </div>
        <div className="launch-item-right">
          <div className="launch-item-date">{dateLaunchFormatted}</div>
          <div className="launch-item-rocket">{this.props.rocketName}</div>
        </div>
      </div>
    );
  }
}

export default Launch;
