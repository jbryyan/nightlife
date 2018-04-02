import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './containers/Navbar';
import Homepage from './containers/Homepage';
import Page404 from './components/Page404';

class App extends Component {
  
  render() {
    return (
      <Router basename='/night-app'>
        <div className='app-root'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route component={Page404} />
          </Switch>
        </div>      
      </Router>
    );
  }
}

export default App;