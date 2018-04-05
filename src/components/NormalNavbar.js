import React, { Component } from 'react';
import { Menu, Divider, Image} from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import martini from '../images/martini.jpg';

class NormalNavbar extends Component {

  state= { activeItem: 'home' }

  render() {
    const { loggedIn, user } = this.props;
    
    return (
      <Menu borderless inverted secondary pointing vertical={true} fixed='left' >
        <Menu.Item as={Link} to='/'>
          <Image size='small' circular src={martini}/>
        </Menu.Item>
        <Menu.Item>
          Created by Bryan Juarez
          <Divider/>
          GitHub Repository
          <Divider/>
        </Menu.Item>
        <Menu.Item as={Link} to='/search'>Bars & Clubs</Menu.Item>
        <Menu.Item>About</Menu.Item>
        { loggedIn ? 
          <Menu.Item as={Link} to={`/${user}`}>My Activities</Menu.Item>
          :
          <Menu.Item as={Link} to='/login'>Log In</Menu.Item>
        }
        { loggedIn ? 
          <Menu.Item as={Link} to='/'>Logout</Menu.Item>
          :
          <Menu.Item as={Link} to='/register'>Sign Up</Menu.Item>
        }
      </Menu>
    );
  }
}




export default NormalNavbar;