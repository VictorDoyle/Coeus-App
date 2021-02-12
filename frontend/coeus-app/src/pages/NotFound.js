import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css'
import {  Button, Card } from 'semantic-ui-react'


/* external */
import CountUp from 'react-countup';


const NotFound = () => {
  return (
  <div className="notFoundContent"> 
         
              <h2> Looks Like You Hit A Wrong Page! </h2>
             
                    
      <Card>
      <Card.Content>
        <Card.Header> Here's how much time you're <br/> wasting away from the app </Card.Header>
        <Card.Description as='h2'centered>
        <div> <CountUp duration={10000} end={1000} /> seconds </div>
        </Card.Description>
        <Card.Description as='h4'centered>
        Find Your Way: 
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
        <Link to='/register'> To Registration 
          <Button basic color='green'>
          To Registration 
          </Button>
          </Link>
          <Link to='/login'>
          <Button basic color='blue'>
            To Login
          </Button>
          </Link>
        </div>
      </Card.Content>
    </Card>
              

        

    </div>
   
  );
}

export default NotFound;
;
