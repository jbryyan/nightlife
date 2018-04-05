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
import { user_logout } from './actions/index';

import './styles/Approot.css';

class App extends Component {
  
  render() {
    const { user, user_logout } = this.props;

    return (
      <Router basename='/night-app'>
        <div className='app-root'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/search' component={Search} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/:user' 
              render={() => user.loggedIn ? <MyActivities /> : <Redirect to='/'/> }/>
            <Route component={Page404} />
          </Switch>
          <Bg />
          <SideBar 
            active={user.sidebar} 
            loggedIn={user.loggedIn} 
            logout={user_logout}
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

export default connect(mapStateToProps, { user_logout })(App);