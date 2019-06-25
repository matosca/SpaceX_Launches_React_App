import React, {Component} from 'react';
import axios from 'axios';
import LaunchList from '../components/LaunchList';
import LaunchSelect from '../components/LaunchSelect';

class LaunchContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      spaceLaunches: [],
      yearsInteval: [],
      selectedLaunchObjects: [],
      descending: false,
      loading: false
    };
  }

  getLaunchesData() {
    this.setState({ loading: true });
    axios.get('https://api.spacexdata.com/v3/launches')
      .then(response => {
        const launchesData = response.data;
        this.processResponse(launchesData);
      })
      .catch(error => {
        console.log("Error", error);
        this.setState({ loading: false });
      });
  }

  processResponse(launchesData) {
    let years = this.createYearsInterval(launchesData);
    this.setState({
      spaceLaunches: launchesData,
      yearsInteval: years,
      selectedLaunchObjects: launchesData,
      loading: false
    });
  }

  createYearsInterval(launchesData) {
    // Get first year of array
    let firstYearObject = launchesData.slice(0)[0];
    let firstYearInterval = firstYearObject.launch_year;

    // Get last year of array
    let lastYearObject = launchesData.slice(-1)[0];
    let lastYearInterval = lastYearObject.launch_year;

    let years = [];
    for (let i = parseInt(firstYearInterval); i <= lastYearInterval; i++) {
      years.push(i);
    }

    return years;
  }

  componentDidMount() {
    this.getLaunchesData();
  }

  handleReloadClick() {
    this.getLaunchesData();
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
