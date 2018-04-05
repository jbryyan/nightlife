import React, { Component } from 'react';
import { Header, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../styles/Homepage.css';

class Homepage extends Component {

  formSubmit = (search, option) => {
    console.log(search, option);
  }

  render() {
    const { user } = this.props;

    return (
      <div className="homepage-root">
        <div>
          <Header size='huge'>Start Your Night Here</Header>
          <div className='homepage-content'>
            <p>Find bars & clubs near you</p>
            <p>Start by searching your area</p>
          </div>
          <Button as={Link} to='/search' basic color='purple' content='Search'/>
        </div>  
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    user: state.user
  });
}

export default connect(mapStateToProps)(Homepage);
