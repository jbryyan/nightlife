import React, { Component } from 'react';
import logo from '../styles/logo.svg';
import { Link } from 'react-router-dom';
import { Card, Image, Icon, Statistic, Responsive, Button } from 'semantic-ui-react';
import '../styles/ItemCards.css';

class ItemCards extends Component {
  renderStars = (num) => {
    let stars = [];
    for(var i = 0; i < num; i++){
      stars.push(<Icon key={i} color='yellow' name='star'/>)
    }
    return stars;
  };


  render() {
    const imageLink = 'https://s3-media2.fl.yelpcdn.com/bphoto/4idfbOrmGGVZ0oeedVkg5g/o.jpg';
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const { items, goToLogin, loggedIn, userRsvp, userCancel, loading } = this.props;

    return (
      <div className="cards-root">
      <Card.Group centered>
      { Object.keys(items).map(key => {
        return(
          
          <Card key={key} className='cards-root-card' color='purple'>
            <div className='card-image-container'>
              <a href={items[key].url} target='_blank'>
                <img className='card-image' src={items[key].image_url}/>
              </a>
            </div>
            <Card.Content textAlign='center'>
              <Card.Header>{items[key].name}</Card.Header>
              <Card.Meta className='card-meta'>
                {this.renderStars(items[key].rating)}
                {`${items[key].review_count}  Reviews`}
              </Card.Meta>
              <Card.Description>  
                <Statistic 
                  inverted label='Price'  
                  size='mini'
                  value={items[key].price ? items[key].price : '?' }
                />
                <Statistic 
                  inverted label='Going' 
                  size='mini'
                  value={items[key].totalgoing}  
                />
                <Statistic 
                  inverted label='Distance' 
                  size='mini'
                  value={items[key].distance ? `${Math.round(items[key].distance)}m` : '?'}  
                />
              </Card.Description>
            </Card.Content>
            { loggedIn ? 
              <Card.Content 
                className='card-extra' 
                textAlign='center' 
                extra
              >
                <Button inverted={!items[key].going} color='violet' fluid 
                  onClick={() => items[key].going ? userCancel(items[key], key) : userRsvp(items[key], key)}
                >
                  <Icon color={items[key].going ? 'red':'violet' } name='heart'/>
                  {items[key].going ? 'Click to cancel' : 'Click to go!'}
                </Button>
              </Card.Content>
              :
              <Card.Content 
                className='card-extra' 
                textAlign='center' 
                extra
              >
                <Button basic inverted fluid onClick={goToLogin} >
                  <Icon color='purple' name='heart'/>
                  Login to RSVP!
                </Button>
              </Card.Content>
            }
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
