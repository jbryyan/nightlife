import React, { Component } from 'react';
import { Menu, Divider, Image, Responsive } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import martini from '../images/martini.jpg';
import NormalNavbar from '../components/NormalNavbar';
import SmallNavbar from '../components/SmallNavbar';
import { active_sidebar } from '../actions/index';

class Navbar extends Component {

  state= { activeItem: 'home' }

  render() {
    const activeItem = this.props.location.pathname;
    const { user, active_sidebar } = this.props;
    return (
      <div className="navbar-root">
        <Responsive minWidth={Responsive.onlyTablet.maxWidth}> 
          <NormalNavbar />
        </Responsive>
        <Responsive maxWidth={Responsive.onlyTablet.maxWidth}>
          <SmallNavbar sidebar={active_sidebar} active={user.sidebar}/>
          
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

export default withRouter( connect(mapStateToProps, { active_sidebar })(Navbar));