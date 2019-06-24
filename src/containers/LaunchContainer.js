import React, {Component} from 'react';
import axios from 'axios';
import LaunchList from '../components/LaunchList';
import LaunchSelect from '../components/LaunchSelect';

class LaunchContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      spaceLaunches: [],
      selectedLaunchObjects: [],
      descending: false
    };
  }

  componentDidMount() {
    axios.get('https://api.spacexdata.com/v3/launches')
      .then(response => {
        const launchesData = response.data;
        this.setState({
          spaceLaunches: launchesData
        });
        // console.log(response);
      });
  }

  handleSelectedYear(year) {
    const newSpaceLaunchesObjects = [];
    this.state.spaceLaunches.forEach( (launchObject) => {
     if (launchObject.launch_year === year.toString()) {
       newSpaceLaunchesObjects.push(launchObject);
     }
     // console.log("selected objects by year",newSpaceLaunchesObjects);
     return newSpaceLaunchesObjects;
   });
   this.setState({ selectedLaunchObjects: newSpaceLaunchesObjects });
  }

  handleReloadClick() {
    console.log("click");
    axios.get('https://api.spacexdata.com/v3/launches')
      .then(response => {
        const launchesData = response.data;
        this.setState({
          spaceLaunches: launchesData
        });
        // console.log(response);
      });
  }

  handleSortClick() {
    console.log('click for sorting');
    const data = this.state.spaceLaunches;
      const newDataSorted = data.sort(function(object1, object2) {
        return object1.launch_date_utc - object2.launch_date_utc;
      });
      newDataSorted.reverse()
      this.setState({
        spaceLaunches: newDataSorted,
        descending: !this.state.descending
      });
  }

  render () {
    // console.log("render");

    const years = this.state.spaceLaunches.map(launch => launch.launch_year);
    // console.log(years);
    const uniqueYears = years.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    // console.log(uniqueYears);

    return (
      <div className="container">
        <h1>Launches</h1>
        <button onClick={this.handleReloadClick.bind(this)}>Reload</button>
        <button onClick={this.handleSortClick.bind(this)}>Sort</button>
        <LaunchSelect
        uniqueLaunchYears={ uniqueYears }
        onYearSelected={this.handleSelectedYear.bind(this)}/>
        <LaunchList
        spaceLaunches={ this.state.spaceLaunches }
        selectedSpaceLaunches= {this.state.selectedLaunchObjects}/>
      </div>
    );
  }
}


export default LaunchContainer;
