import React, { Component } from 'react';


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
        onChange={(evt) => this.handleSelectChange(evt)}>
        <option value="All Launches">Filter by Year</option>
          {options}
      </select>
    );
  }
}

export default LaunchSelect;
