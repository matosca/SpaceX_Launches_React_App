import React, { Component } from 'react';

class LaunchSelect extends Component {
  render() {
    const options = this.props.uniqueLaunchYears.map((year, index) => {
      return <option value={index} key={index}>{year}</option>
    });

    return (
      <select className="launch-selector">
        <option value="Filter by Year">Filter by Year</option>
        {options}
      </select>
    );
  }
}

export default LaunchSelect;
