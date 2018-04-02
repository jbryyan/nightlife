import React, { Component } from 'react';
import logo from '../styles/logo.svg';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Form, Input, Menu, Dropdown, Header, Responsive } from 'semantic-ui-react';
import '../styles/SearchForm.css';

class SearchForm extends Component {

  render() {
    const options = [
    
      { key: '.rating', text: 'rating', value: '.rating' },
      { key: '.review', text: 'review count', value: '.review' },
      { key: '.distance', text: 'distance', value: '.distance' },
    ]

    return (
      <div className="search-root">
        <Header>Search for a city and start your night right</Header>
        <div className='search-form'>
       
        <Form onSubmit={this.props.formSubmit}>
          <Input 
            placeholder='Search'
            name='Search'
            action={<Dropdown floating button simple options={options}/>}
            icon={{ name: 'selected radio', color: 'red' }}
            iconPosition='left'
            component={this.renderInput}
            style={{width: '200px'}}
            required
          />
        </Form>
       
        </div>
      </div>
    );
  }
}



export default (SearchForm);
