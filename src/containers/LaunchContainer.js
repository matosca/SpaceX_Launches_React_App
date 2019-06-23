import React, {Component} from 'react';
import axios from 'axios';
import LaunchList from '../components/LaunchList'

class LaunchContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      spaceLaunches: []
    };
  }

  componentDidMount() {
    axios.get('https://api.spacexdata.com/v3/launches')
      .then(response => {
        const launchesData = response.data;
        this.setState({ spaceLaunches: launchesData });
        // console.log(response);
      });
  }

  render () {
    return (
      <div className="container">
        <h1>Launches</h1>
        <LaunchList spaceLaunches= { this.state.spaceLaunches }/>
      </div>
    );
  }
}


export default LaunchContainer;
