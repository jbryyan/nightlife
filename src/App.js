import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './containers/Navbar';
import Homepage from './containers/Homepage';
import Search from './containers/Search';
import Page404 from './components/Page404';
import Login from './containers/Login';
import Register from './containers/Register';
import Bg from './components/Bg';
import SideBar from './components/SideBar';
import MyActivities from './containers/MyActivities';
import About from './containers/About';

import { user_logout, active_sidebar } from './actions/index';


import './styles/Approot.css';

class App extends Component {
  
  render() {
    const { user, user_logout, active_sidebar } = this.props;

    return (
      <Router basename='/nightlife'>
        <div className='app-root'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/about' component={About} />
            <Route path='/search' component={Search} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/:user' 
              component={MyActivities}/>
            <Route component={Page404} />
          </Switch>
          <Bg />
          <SideBar 
            active={user.sidebar} 
            loggedIn={user.loggedIn} 
            logout={user_logout}
            toggle={active_sidebar}
          />
        </div>      
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    user: state.user
  });
}

export default connect(mapStateToProps, { user_logout, active_sidebar })(App);