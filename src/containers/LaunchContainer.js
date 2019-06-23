import React, {Component} from 'react';
import axios from 'axios';
import LaunchList from '../components/LaunchList';
import LaunchSelect from '../components/LaunchSelect';

class LaunchContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      spaceLaunches: [],
      launchYears: [],
      selectedYear: null
    };
  }

  componentDidMount() {
    axios.get('https://api.spacexdata.com/v3/launches')
      .then(response => {
        const launchesData = response.data;
        this.setState({
          spaceLaunches: launchesData, launchYears: launchesData
        });
        // console.log(response);
      });
  }

  handleSelectedYear(year) {
    const selectedYear = this.state.spaceLaunches.find((launchObject) => {
      // console.log('object', launchObject);
      return launchObject.launch_year === year;
    });
    console.log(selectedYear);
    return selectedYear;
    this.setState({ selectedYear: selectedYear });

  }



  render () {
    const years = this.state.launchYears.map(launch => launch.launch_year);
    // console.log(years);
    const uniqueYears = years.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    console.log(uniqueYears);
    return (
      <div className="container">
        <h1>Launches</h1>
        <LaunchSelect
        uniqueLaunchYears={ uniqueYears }
        onYearSelected={this.handleSelectedYear.bind(this)}/>
        <LaunchList spaceLaunches={ this.state.spaceLaunches }/>
      </div>
    );
  }
}


export default LaunchContainer;
