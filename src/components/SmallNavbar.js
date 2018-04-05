import React, { Component } from 'react';
import { Menu, Header, Image, Icon, Sidebar, Input, Container} from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import martini from '../images/martini.jpg';

class SmallNavbar extends Component {

  state= { activeItem: 'home', visible: false }

  openSideMenu = () => {
    console.log('Open menu')
    this.setState({ visible: true });
  }

  render() {
    const { visible } = this.state;

    return (
        <div>
          <Menu fixed='top' borderless inverted pointing >
          <Container>
            <Menu.Item as={Link} to='/'>
              <Icon name='cocktail' size='large' color='purple' />
            </Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item onClick={() => this.props.sidebar(!this.props.active)} >
                <Icon
                  size='large' 
                  name='bars' 
                  circular 
                  color='violet' 
                  inverted
                />
              </Menu.Item>
            </Menu.Menu>
            </Container>
          </Menu>
        </div>
        
  
    );
  }
}




export default SmallNavbar;