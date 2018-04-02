import React, { Component } from 'react';
import { Grid, Sidebar, Icon, Menu, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import SideBar from '../components/SideBar';
import SearchForm from '../components/SearchForm';
import ItemCards from '../components/ItemCards';

import '../styles/Homepage.css';

class Homepage extends Component {

  formSubmit = (value) => {
    console.log(value);
  }

  render() {
    const { user } = this.props;

    return (
      <div className="homepage-root">
        <Grid textAlign='center' style={{ height: '100%' }}>
          <Grid.Row columns='equal' >
            <Grid.Column  
              tablet={1}
              computer={3} 
              widescreen={3}
            />
            <Grid.Column  
              mobile={16} 
              tablet={14} 
              computer={12}
              widescreen={6} 
            >
              <SearchForm formSubmit={this.formSubmit} />
            </Grid.Column>
            <Grid.Column
              tablet={1}
            />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column
              tablet={2}
              computer={3}
              widescreen={2}
            />
            <Grid.Column
              tablet={16}
              computer={12}
              widescreen={14}
            >
              <ItemCards />
            </Grid.Column>
            <Grid.Column tablet={2}>
              <SideBar active={user.sidebar} />
                <Sidebar.Pushable>
              </Sidebar.Pushable>
            </Grid.Column>
          </Grid.Row>
        </Grid>
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
