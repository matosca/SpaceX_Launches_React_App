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
          spaceLaunches: launchesData
        });
        // console.log(response);
      });
  }






  render () {
    return (
      <div className="container">
        <h1>Launches</h1>
        <LaunchSelect spaceLaunches={ this.state.spaceLaunches}/>
        <LaunchList spaceLaunches={ this.state.spaceLaunches }/>
      </div>
    );
  }
}


export default LaunchContainer;
