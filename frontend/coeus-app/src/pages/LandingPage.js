import React from 'react';
import Loader from '../components/Loader/Loader'
import SignupForm from '../components/SignupForm/SignupForm'
import '../styles/LandingPage.css'



const LandingPage = () => {
  return (
    <div className="landingPageAll"> 
      <div className="leftSideLanding">
          <div className="ui text container leftSideText">
              <h1 className="ui header"> A Reimagined Social Network </h1>
              <h2 className="ui header">No more Infinite Scrolling without benefit and no more losing productivity! </h2>
              <h3> With The Social Network Coeus, you'll spend time communicating with your friends, all the while learning new things every day
              </h3>

              <h2 className="ui header"> Did You Know: </h2>
              <div>
                <div class="ui statistics">
                    <div class="ui statistic">
                      <div class="label">Users Spend <br></br> An Average of</div>
                      <div class="value">14</div>
                      <div class="label">Hours A Week <br></br> On Social Media</div>
                    </div>
                    <div class="ui statistic">
                      <div class="label"><br></br>In Total</div>
                      <div class="value">35%</div>
                      <div class="label">Of Users Get Their News <br></br> From Social Media</div>
                    </div>
                    <div class="ui statistic">
                      <div class="value">57%</div>
                      <div class="label">Of Millenials in 2020 <br></br> Use Social Media <br></br> As A News Source</div>
                    </div>
                </div>
              </div>




          </div>
      </div>
        <div className="rightSideLanding">
            <div className="signupFormLanding">
                <div className="ui card">
                  <div className="content">
                    <div className="header">
                      Register An Account
                    </div>
                  </div>
                  
                  <div className="content">
                    <div className="description">
                      <SignupForm />
                    </div>  
                  </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LandingPage;
