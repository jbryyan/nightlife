import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Sidebar, Responsive, Button } from 'semantic-ui-react';
import '../styles/Sidebar.css';

class SideBar extends Component {

  render() {
    const { active, loggedIn, logout } = this.props;

    return (
      <Responsive maxWidth={Responsive.onlyTablet.maxWidth}>
        <Sidebar as={Menu} animation='overlay' 
        width='thin' visible={active} icon='labeled' 
        vertical inverted direction='right'
        >
          <Menu.Item as={Link} to='/search' name='cocktail'>
            <Icon name='cocktail' color='violet' />
            Bars & Clubs
          </Menu.Item>
          <Menu.Item as={Link} to='/about' name='info'>
            <Icon name='info'/>
            About
          </Menu.Item>
          { !loggedIn &&
            <Menu.Item as={Link} to='/login' name='sign in'>
              <Icon name='sign in'/>
              Log In
            </Menu.Item>
          }
          { !loggedIn && 
            <Menu.Item as={Link} to='/register' name='add user'>
              <Icon name='add user'/>
              Sign Up
            </Menu.Item>
          }
          { loggedIn &&
            <Menu.Item as={Link} to='/usernamehere' name='user'>
              <Icon name='user'/>
              My Activities
            </Menu.Item>
          }
          { loggedIn &&
            <Menu.Item onClick={() => logout()} name='logout'>
              <Icon name='sign out'/>
              Logout
            </Menu.Item>
          }
          
        </Sidebar>
      </Responsive>
    );
  }
}




export default SideBar;