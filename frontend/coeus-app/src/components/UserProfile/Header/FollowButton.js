import React, { Component } from 'react'
import { Button, Grid, Segment } from 'semantic-ui-react'

export default class FollowButton extends Component {
  state = { log: [] }

  handleClick = () => this.updateLog('Follow button was clicked')
  //Add a push to follower array from originated user.id

  updateLog = (message) =>
    this.setState((prevState) => ({ log: [message, ...prevState.log] }))

  render() {
    const { log } = this.state

    return (
<>
          <Button
            attached='bottom'
            content='Follow'
            onClick={this.handleClick}
          />
{/* NOTE: For testing purposes
        <Grid.Column width={8}>
          <Segment>
            <pre style={{ height: 100, overflowY: 'scroll' }}>
              {log.map((e, i) => (
                <p key={i}>{e}</p>
              ))}
            </pre>
          </Segment>
        </Grid.Column> */}
</>
    )
  }
}