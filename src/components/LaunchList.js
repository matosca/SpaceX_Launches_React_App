import React, { Component } from 'react';
import Launch from '../components/Launch';
import './LaunchList.css';
import LaunchLoader from '../components/LaunchLoader';

class LaunchList extends Component {
  render() {

    if (this.props.loading) {
      return (
        <LaunchLoader />
      );
    }

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
        {newSelectedLaunches.length > 0 ? newSelectedLaunches : "No Launches"}
      </div>
    );
  }
}

export default LaunchList;
