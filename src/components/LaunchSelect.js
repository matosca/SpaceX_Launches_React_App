import React, { Component } from 'react';

class LaunchSelect extends Component {
  render() {
    const options = this.props.uniqueLaunchYears.map((year, index) => {
      return <option value={year} key={index}>{year}</option>
    });

    function handleSelectChange(event) {
      console.log(event.target.value);
      const selectedYear = event.target.value;
      this.props.onYearSelected(selectedYear);
    }

    return (
      <select
      className="launch-selector"
      onChange={handleSelectChange}>
        <option value="Filter by Year">Filter by Year</option>
        {options}
      </select>
    );
  }
}

export default LaunchSelect;
