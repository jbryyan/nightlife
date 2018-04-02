import React, { Component } from 'react';
import { Menu, Divider, Image} from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import martini from '../images/martini.jpg';

class NormalNavbar extends Component {

  state= { activeItem: 'home' }

  render() {

    return (
      <Menu borderless inverted pointing vertical={true} fixed='left' >
        <Menu.Item>
          <Image size='small' circular src={martini}/>
        </Menu.Item>
        <Menu.Item>
          Created by Bryan Juarez
          <Divider/>
          GitHub Repository
          <Divider/>
        </Menu.Item>
        <Menu.Item>Bars & Clubs</Menu.Item>
        <Menu.Item>About</Menu.Item>
        <Menu.Item>Log In</Menu.Item>
        <Menu.Item>Sign Up</Menu.Item>
      </Menu>
    );
  }
}




export default NormalNavbar;