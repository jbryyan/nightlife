import React, { Component } from 'react';
import logo from '../styles/logo.svg';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Form, Input, Menu, Dropdown, Header, Responsive, Button, Loader } from 'semantic-ui-react';
import '../styles/SearchForm.css';

class SearchForm extends Component {

  state = { search: '', option: 'rating' }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
    if(value !== this.state.option){
      this.props.itemSort(value);
    }
  }
  handleSubmit = () => {
    const { search, option } = this.state;
    this.props.formSubmit(search, option);
  }

  render() {
    const options = [
      { key: '.rating', text: 'sort by > rating', value: 'rating' },
      { key: '.review', text: 'sort by > reviews', value: 'review' },
      { key: '.distance', text: 'sort by > distance', value: 'distance' },
    ]

    const { search, option } = this.state;

    return (
      <div className="search-root">
        <Header size='huge'>Search for a city and start your night right</Header>
        <Form onSubmit={this.handleSubmit}>
         
          <Form.Input 
            placeholder='Search'
            name='search'
            value={search}
            onChange={this.handleChange}
            icon={{ name: 'selected radio', color: 'red' }}
            label={<Loader inverted size='mini' active={this.props.loading}/>}
            iconPosition='left'
            className='search-input'
            transparent
            required
          />

          <Form.Dropdown 
            fluid
            options={options}
            value={option}
            name='option'
            onChange={this.handleChange}
            className='search-dropdown'
            
          />
          
        </Form>
      </div>
    );
  }
}



export default (SearchForm);
