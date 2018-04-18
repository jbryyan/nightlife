import React, { Component } from 'react';
import { Menu, Divider, Image, Responsive } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import martini from '../images/martini.jpg';
import NormalNavbar from '../components/NormalNavbar';
import SmallNavbar from '../components/SmallNavbar';
import userAuth from '../actions/thunks/userAuth';
import { active_sidebar, user_logout } from '../actions/index';

class Navbar extends Component {

  state= { activeItem: 'home' }

  componentWillMount(){
    console.log('component will mount');
    this.props.userAuth();
  }

  render() {
    const activeItem = this.props.location.pathname;
    const { user, active_sidebar, user_logout } = this.props;
    
    return (
      <div className="navbar-root">
        <Responsive minWidth={Responsive.onlyTablet.maxWidth}> 
          <NormalNavbar 
            loggedIn={user.loggedIn} 
            user={user.username}
            logout={user_logout}
          />
        </Responsive>
        <Responsive maxWidth={Responsive.onlyTablet.maxWidth}>
          <SmallNavbar 
            sidebar={active_sidebar} 
            active={user.sidebar}
            loggedIn={user.loggedIn}
          />
        </Responsive>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return({
    user: state.user
  });
};

export default withRouter( connect(mapStateToProps, { user_logout, active_sidebar, userAuth })(Navbar));