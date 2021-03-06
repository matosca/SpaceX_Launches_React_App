import React, { Component } from 'react';
import './LaunchSelect.css';


class LaunchSelect extends Component {

  handleSelectChange(event) {
    const selectedYear = event.target.value;
    this.props.onYearSelected(selectedYear);
  }

  render() {
    const options = this.props.uniqueLaunchYears.map((year, index) => {
      return <option value={year} key={index}>{year}</option>
    });


    return (
      <select
        className="launch-selector"
        onChange={(event) => this.handleSelectChange(event)}>
        <option value="All Launches">Filter by Year</option>
          {options}
      </select>
    );
  }
}

export default LaunchSelect;
