import React, { Component } from 'react';


class LaunchSelect extends Component {


  handleSelectChange(event) {
    // console.log(event.target.value);
    // console.log("this:", this);
    const selectedYear = event.target.value;
    this.props.onYearSelected(selectedYear);
  }

  render() {

    const options = this.props.uniqueLaunchYears.map((year, index) => {
      return <option value={year} key={index}>{year}</option>
    });


    return (
      <div className="wrapper">

      <select
        className="launch-selector"
        onChange={(evt) => this.handleSelectChange(evt)}>
        <option value="Filter by Year">Filter by Year</option>
          {options}
      </select>

      </div>
    );
  }
}

export default LaunchSelect;
