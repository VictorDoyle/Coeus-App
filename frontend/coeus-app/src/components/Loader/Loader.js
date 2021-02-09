import _ from 'lodash'
import React, { Component } from 'react'
import { Button, Card, Divider, Image, Placeholder } from 'semantic-ui-react'
import CommentBox from '../Comments/Comments'


export default class Loader extends Component {
  state = { loading: true }

  handleLoadingClick = () => {
    this.setState({ loading: true })

    setTimeout(() => {
      this.setState({ loading: false })
    }, 3000)
  }

  render() {
    const { loading } = this.state

    return (
      <>
        <Button loading={loading} onClick={this.handleLoadingClick} primary>
          Simulate loading
        </Button>
        <Divider />

        <Card className="userPostCard" centered>
      <Placeholder.Card.Content>
      <Placeholder.Card.Header></Placeholder.Card.Header>
      </Placeholder.Card.Content>
        <Placeholder.Image wrapped ui={false}/> 
      <Placeholder.Card.Content>
        <Placeholder.Card.Header></Placeholder.Card.Header>
        <Placeholder.ard.Meta>
          
        </Placeholder.ard.Meta>
        <Placeholder.Card.Description>
        
        </Placeholder.Card.Description>
      </Placeholder.Card.Content>
      <Placeholder.Card.Content extra>
    
      </Placeholder.Card.Content>
      <CommentBox/>
    </Card>
      </>
    )
  }
}