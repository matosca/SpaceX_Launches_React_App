import React, { Component } from 'react';
import Launch from '../components/Launch';
import './LaunchList.css';

class LaunchList extends Component {
  render() {

    const newSelectedLaunches = this.props.selectedSpaceLaunches.map((launch) => {
      return (
        <Launch
        key={ launch.flight_number }
        flightNumber={ launch.flight_number }
        missionName={ launch.mission_name }
        launchDate={ launch.launch_date_utc }
        rocketName={ launch.rocket.rocket_name }
        />
      );
    })


    return (
      <div className="launch-list">
        {newSelectedLaunches}
      </div>
    );
  }
}

export default LaunchList;
