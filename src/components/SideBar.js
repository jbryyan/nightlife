import React, { Component } from 'react';
import { Menu, Icon, Sidebar, Responsive } from 'semantic-ui-react';
import '../styles/Sidebar.css';

class SideBar extends Component {

  render() {
    return (
      <Responsive maxWidth={Responsive.onlyTablet.maxWidth}>
        <Sidebar as={Menu} animation='overlay' 
        width='thin' visible={this.props.active} icon='labeled' 
        vertical inverted direction='right'
        >
          <Menu.Item name='cocktail'>
            <Icon name='cocktail' color='violet' />
            Bars & Clubs
          </Menu.Item>
          <Menu.Item name='info'>
            <Icon name='info'/>
            About
          </Menu.Item>
          <Menu.Item name='sign in'>
            <Icon name='sign in'/>
            Log In
          </Menu.Item>
          <Menu.Item name='add user'>
            <Icon name='add user'/>
            Sign Up
          </Menu.Item>
        </Sidebar>
      </Responsive>
    );
  }
}




export default SideBar;