import React, {Component} from 'react';
import axios from 'axios';
import LaunchList from '../components/LaunchList';
import LaunchSelect from '../components/LaunchSelect';
import ReloadButton from '../components/ReloadButton';

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

    if (year.toString() === "All Launches") {
      this.setState(prevState => {
        return { selectedLaunchObjects: prevState.spaceLaunches };
      });
    } else {
      this.state.spaceLaunches.forEach( (launchObject) => {
       if (launchObject.launch_year === year.toString()) {
         newSpaceLaunchesObjects.push(launchObject);
       }
       return newSpaceLaunchesObjects;
     });
     this.setState({ selectedLaunchObjects: newSpaceLaunchesObjects });
    }
  }


  handleSortClick() {
    let newDataSorted = this.state.spaceLaunches.reverse();
    this.setState(prevState => {
      return {
        spaceLaunches: newDataSorted,
        selectedSpaceLaunches: newDataSorted,
        descending: !prevState.descending
      };
    });
  }

  render () {
    return (
      <div className="container">
        <h1>Launches</h1>
        <ReloadButton onClick={this.handleReloadClick.bind(this)}/>
        <button onClick={this.handleSortClick.bind(this)}>Sort {this.state.descending ? "ascending" : "descending"}</button>
        <LaunchSelect
        uniqueLaunchYears={ this.state.yearsInteval }
        onYearSelected={this.handleSelectedYear.bind(this)}/>
        <LaunchList
        loading={this.state.loading}
        selectedSpaceLaunches= {this.state.selectedLaunchObjects}/>
      </div>
    );
  }
}


export default LaunchContainer;
