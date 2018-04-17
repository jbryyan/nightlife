import React, { Component } from 'react';
import { Header, Button, Segment, Divider, List, Container, Statistic, Image, Item, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/About.css';
import reactLogo from '../images/react-logo.png';
import reduxLogo from '../images/redux-logo.png';
import nodeLogo from '../images/node-logo.png';
import expressLogo from '../images/express-logo.png';
import mongoLogo from '../images/mongo-logo.png';
import semanticLogo from '../images/semantic-logo.png';
import yelpLogo from '../images/yelp-logo.png';

class About extends Component {
  
  render() {
    const url = 'https://www.freecodecamp.org/challenges/build-a-nightlife-coordination-app';

    return (
      <div className='about-root'>
      <Segment inverted compact className='about-segment'>
        <Header textAlign='center'>Project Purpose</Header>
          <p>This is a freeCodeCamp full-stack project: <br/>
          <a href=''>Build a Nightlife Coordination App</a></p>
          <List bulleted>
            <List.Header>This project fulfills the following specs:</List.Header>
            <List.Item>As an unauthenticated user, I can view all bars in my area.</List.Item>
            <List.Item>As an authenticated user, I can add myself to a bar to indicate I am going there tonight.</List.Item>
            <List.Item>As an authenticated user, I can remove myself from a bar if I no longer want to go there.</List.Item>
            <List.Item>As an unauthenticated user, when I login I should not have to search again</List.Item>
          </List>
        <Divider inverted/>
        <Header textAlign='center'>Tech Stack, UI Library, and External API</Header>
          <div style={{textAlign: 'center'}}>
          
          <Statistic inverted label='React' value={<Image src={reactLogo} size='mini' circular inline/>}/>
          <Statistic inverted label='Redux' value={<Image src={reduxLogo} size='mini' circular inline/>}/>
          <Statistic inverted label='Node.js' value={<Image src={nodeLogo} size='mini' circular inline/>}/>
          <Statistic inverted label='Express' value={<Image src={expressLogo} size='mini' circular inline/>}/>
          <Statistic inverted label='MongoDB' value={<Image src={mongoLogo} size='mini' circular inline/>}/>
          <Statistic inverted label='Semantic UI' value={<Image src={semanticLogo} size='mini' circular inline/>}/>
          <Statistic inverted label='Yelp' value={<Image src={yelpLogo} size='mini' circular inline/>}/>
          </div>
          
        <Divider inverted/>
        <Header textAlign='center'>About Bryan Juarez</Header>
        <Item.Group inverted>
          <Item>
            <Item.Image size='tiny' src={mongoLogo} />
            <Item.Content>
              <Item.Header>A Web Developer based in Los Angeles, CA</Item.Header>
              <Item.Description className='about-me'>View my portfolio at:&nbsp;&nbsp; <a>Porfolio</a></Item.Description>
              <Item.Description className='about-me'>
                Get in touch with me: &nbsp; &nbsp;
                <List horizontal>
                  <List.Item as={Icon} name='github' inverted/>
                  <List.Item as={Icon} name='github' inverted/>
                  <List.Item as={Icon} name='github' inverted/>
                  <List.Item as={Icon} name='github' inverted/>
                </List> 
               
              </Item.Description>
            </Item.Content>
            
          </Item>
        </Item.Group>
      </Segment>
      </div>
    );
  }
}


export default About;
