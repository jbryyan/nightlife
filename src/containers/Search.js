import React, { Component } from 'react';
import { Grid, Sidebar, Icon, Menu, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import SideBar from '../components/SideBar';
import SearchForm from '../components/SearchForm';
import ItemCards from '../components/ItemCards';
import itemSearch from '../actions/thunks/itemSearch';
import itemSort from '../actions/thunks/itemSort';
import userRsvp from '../actions/thunks/userRsvp';

class Search extends Component {

  formSubmit = (search, option) => {
    this.props.itemSearch(search, option);
  }

  goToLogin = () => {
    this.props.history.push('/login')
  }

  userRsvp = (item, key) => {
    console.log('User rsvp');
    this.props.userRsvp(item, key);
  }

  render() {
    const { user, items } = this.props;

    return (
      <div className={items.searchItems ? 'search-root' : 'search-root-nosearch'}>
        <SearchForm 
          formSubmit={this.formSubmit} 
          loading={user.loading} 
          itemSort={this.props.itemSort}
        />
        { items.searchItems && 
          <ItemCards 
            items={items.searchItems}
            loggedIn={user.loggedIn}
            goToLogin={this.goToLogin}
            userRsvp={this.userRsvp}
            loading={user.loading}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    user: state.user,
    items: state.items
  });
}

export default connect(mapStateToProps, { itemSearch, itemSort, userRsvp })(Search);
