import React, { Component } from 'react';
import logo from '../styles/logo.svg';

class MyActivities extends Component {
  render() {
    return (
      <div className="my-activities-root">
        <header className="App-header">
          <h1 className="App-title">My Activities</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default MyActivities;
