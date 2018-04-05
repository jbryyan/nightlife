import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Button, Header, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';
import userRegister from '../actions/thunks/userRegister';

import '../styles/Register.css';

class Register extends Component {

  state = { username: '', password: '' }

  formSubmit = () => {
    const username = this.state.username;
    const pwd = this.state.password;
    this.props.userRegister(username, pwd);
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  render() {
    const { user } = this.props;
    const { username, password } = this.state;

    if(user.redirect){
      return <Redirect to={user.redirect} />
    }

    return (
      <div className="register-root">
        <Form onSubmit={this.formSubmit}>
          <Header size='huge' color='purple'>Register</Header>
          <Form.Input 
            icon='user'
            name='username'
            value={username} 
            iconPosition='left'
            placeholder='Username'
            onChange={this.handleChange}  
          />
          <Form.Input
            icon='lock'
            name='password'
            value={password}
            iconPosition='left'
            placeholder='Password'
            onChange={this.handleChange}
          />
          <Button fluid 
            type='submit' 
            color='purple' 
            content='Register' 
            loading={user.loading}
          />
          { user.error && <Label color='red'>{user.error}</Label> }
        </Form>
      
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    user: state.user
  });
}

export default connect(mapStateToProps, { userRegister })(Register);
