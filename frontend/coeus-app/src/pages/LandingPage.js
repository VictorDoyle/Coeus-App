import React from 'react';
import { Header, Icon, Button, Card, Segment, Form,Grid, Input, Divider } from 'semantic-ui-react'

import SignupForm from '../components/SignupForm/SignupForm'
import LandingPageForm from '../components/SignupForm/LandingPageForm'
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css'

/* external */
import CountUp from 'react-countup';


const LandingPage = () => {
  return (
  <>
  <div className="landingPageAll"> 
  <div className="landingHeaderIntro"> 
      <Header as='h2' icon>
          <Icon name='graduation cap' />
          A Reimagined Social Network 
          <Header.Subheader>
          No more Infinite Scrolling without benefit and no more losing productivity!
          </Header.Subheader>
      </Header>
      </div>

      
      

<Card.Group centered className="landingPageCards">
  {/* card 1 */}
    <Card>
      <Card.Content>
        <Card.Header> Users Spend An Average of </Card.Header>
        <Card.Description as='h2'centered>
        <div> <CountUp duration={4} end={14} /> Hours </div>
        </Card.Description>
        <Card.Description as='h4'centered>
        A Week On Social Media
        </Card.Description>
      </Card.Content>
    </Card>
  {/* card 2 */}
  <Card>
      <Card.Content>
        <Card.Header> A total of  </Card.Header>
        <Card.Description as='h2'centered>
        <div> <CountUp duration={4} end={35} /> % </div>
        </Card.Description>
        <Card.Description as='h4'centered>
        Of Users Get Their News From Social Media
        </Card.Description>
      </Card.Content>
    </Card>
    {/* card 3 */}
    <Card>
      <Card.Content>
        <Card.Header> A total of  </Card.Header>
        <Card.Description as='h2'centered>
        <div> <CountUp duration={4} end={57} /> % </div>
        </Card.Description>
        <Card.Description as='h4'centered>
        Of Millenials Look At <br/> Social Media As A News Source 
        </Card.Description>
      </Card.Content>
    </Card>
  </Card.Group>

  {/* LOGIN OR REGISTER SECTION */}




  <Segment basic textAlign='center'>
  <Link to={"/register"}>
  <Button
      color='green'
      content='Register'
      icon='add'
      labelPosition='left'
    />
    </Link>

    <Divider horizontal>Or</Divider>
    <Link to={"/login"}>
    <Button
      color='blue'
      content='Login'
      icon='add'
      labelPosition='left'
    />
    </Link>
  </Segment>
  </div>
  </>
  );
}

export default LandingPage;
