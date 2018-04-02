import React, { Component } from 'react';
import logo from '../styles/logo.svg';
import { Card, Image, Icon, Statistic, Responsive } from 'semantic-ui-react';

class ItemCards extends Component {
  
  render() {
    const imageLink = 'https://s3-media2.fl.yelpcdn.com/bphoto/4idfbOrmGGVZ0oeedVkg5g/o.jpg';
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
      <div className="cards-root">
      <Card.Group centered>
      { Object.keys(arr).map(key => {
        return(
          
          <Card raised color='purple'>
            <Image centered size='large' src={imageLink} />
            <Card.Content>
              <Card.Header>Perch</Card.Header>
              <Card.Meta>
                <Icon color='yellow' name='star'/>
                (5485)
              </Card.Meta>
              <Card.Description>
                <Statistic label='Price' value='$$$' size='mini'/>
                <Statistic label='Distance' value='6603M' size='mini'/>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name='heart'/>
              Login to RSVP!
            </Card.Content>
          </Card>
          )
        })
      }
      </Card.Group>
      </div>
    );
  }
}

export default ItemCards;
