import React from 'react';
import Loader from '../components/Loader/Loader'
import SignupForm from '../components/SignupForm/SignupForm'
import LandingPageForm from '../components/SignupForm/LandingPageForm'
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css'

/* external */
import CountUp from 'react-countup';



const LandingPage = () => {
  return (
  <div className="landingPageAll"> 
          <div className="ui text container landingPageText">
              <h1 className="ui header"> A Reimagined Social Network </h1>
              <h2 className="ui header">No more Infinite Scrolling without benefit and no more losing productivity! </h2>
              <h3> With The Social Network Coeus, you'll spend time communicating with your friends, all the while learning new things every day
              </h3>

              <h2 className="ui header"> Did You Know: </h2>
              <div>
                <div className="ui statistics">
                    <div className="ui statistic">
                      <div className="label">Users Spend <br></br> An Average of</div>
                      <div className="value"><CountUp duration={4} end={14} /></div>
                      <div className="label">Hours A Week <br></br> On Social Media</div>
                    </div>
                    <div className="ui statistic">
                      <div className="label"><br></br>In Total</div>
                      <div className="value"><CountUp duration={4} end={35} />%</div>
                      <div className="label">Of Users Get Their News <br></br> From Social Media</div>
                    </div>
                    <div className="ui statistic">
                      <div className="value"><CountUp duration={4} end={57} />%</div>
                      <div className="label">Of Millenials in 2020 <br></br> Use Social Media <br></br> As A News Source</div>
                    </div>
                </div>
                <h2> Ready to join?</h2>
                <Link to='/register'> JOIN !</Link>
              </div>

          </div>

    </div>
   
  );
}

export default LandingPage;
