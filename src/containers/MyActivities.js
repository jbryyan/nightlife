import React, { Component } from 'react';
import logo from '../styles/logo.svg';
import { connect } from 'react-redux';
import { List, Loader, Segment, Dimmer, Button, Header, Card, Image, Divider } from 'semantic-ui-react';
import userCancel from '../actions/thunks/userCancel';
import '../styles/MyActivities.css';

class MyActivities extends Component {

  componentDidUpdate(){
    if(!this.props.user.loggedIn){
      this.props.history.push('/login');
    }
  }

  userCancel = (item, key) => {
    console.log('cancel rsvp');
    this.props.userCancel(item, key);
  }

  render() {
    const { loggedIn, activities } = this.props.user;
    const date = new Date();
    const today = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();

    if(!loggedIn){ return (
      <Segment>
      <Dimmer active>
        <Loader content='Loading' />
      </Dimmer>
      </Segment>
    )}
    
    return (
      <div className="my-activities-root">
      <Header textAlign='center' size='huge'>My Activities</Header>
      { activities.map(item =>
          item.bars.length > 0 &&
          <div key={item.date}>
            <Divider inverted/>
            <Header size='large' textAlign='center'>{item.date}</Header>
            <Card.Group centered>
            { item.bars.map(bar_item => 
              
                <Card>
                  <div className='card-image-container'>
                    <a href={'www.google.com'} target='_blank'>
                    <img className='card-image' src={bar_item.image}/>
                    </a>
                  </div>                  
                  <Card.Content textAlign='center'>
                  <Card.Header>{bar_item.name}<br/>{item.date}</Card.Header>
                  <p>{bar_item.location}</p>
                  <p>{bar_item.phone}</p>
                  </Card.Content>
                  { item.date === today && 
                    <Card.Content textAlign='center' extra>
                      <Button onClick={() => this.userCancel(bar_item, bar_item.name)}>Cancel RSVP</Button>
                    </Card.Content>
                  }
                </Card>

             
              )
            } 
            </Card.Group>
          </div>        
        )
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return({
    user: state.user
  });
};
export default connect(mapStateToProps, { userCancel })(MyActivities);
