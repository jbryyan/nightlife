import React, { Component } from 'react';
import { Form, Button, Header, Label } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import userLogin from '../actions/thunks/userLogin';
import '../styles/Login.css';

class Login extends Component {

  state = { username: '', password: '' }

  formSubmit = () => {
    console.log('In form submit');
    const user = { 
      username: this.state.username, 
      pwd: this.state.password 
    };
    this.props.userLogin(user);
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
      <div className="login-root">
        <Form onSubmit={this.formSubmit}>
          <Header size='huge' color='purple'>Login</Header>
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
            basic
            content='Login' 
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

export default connect(mapStateToProps, { userLogin })(Login);
