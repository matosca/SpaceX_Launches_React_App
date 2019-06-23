import React, { Component } from 'react';
import Launch from '../components/Launch';

class LaunchList extends Component {
  render() {
    const launchesNodes = this.props.spaceLaunches.map((launch) => {
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
        {launchesNodes}
      </div>
    );
  }
}

export default LaunchList;
