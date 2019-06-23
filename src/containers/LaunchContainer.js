import React, {Component} from 'react';
import axios from 'axios';
import LaunchList from '../components/LaunchList';
import LaunchSelect from '../components/LaunchSelect';

class LaunchContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      spaceLaunches: [],
      launchYears: []
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
        <LaunchSelect uniqueLaunchYears={ uniqueYears }/>
        <LaunchList spaceLaunches={ this.state.spaceLaunches }/>
      </div>
    );
  }
}


export default LaunchContainer;
