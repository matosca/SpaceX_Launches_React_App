import React, { Component } from 'react';

class Launch extends Component {
  render () {
    const formattedDate = new Date(this.props.launchDate);
    // console.log('date......', formattedDate);
    const options = { day: "2-digit", month: "short", year: "numeric"}
    const dateLaunchFormatted = formattedDate.toLocaleString("en-GB", options)
    // console.log(formattedDate.toLocaleString('en-GB', options));


    return(
      <div className="launch-item">
        <h2>#{this.props.flightNumber}</h2>
        <h2>{this.props.missionName}</h2>
        <time>{dateLaunchFormatted}</time>
        <h4>{this.props.rocketName}</h4>
      </div>
    );
  }
}

export default Launch;
