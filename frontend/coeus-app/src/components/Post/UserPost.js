import React, { Component }  from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import emptyAvatarExample from '../../testing/placeholders/emptyAvatarExample.png'
import './UserPost.css'
import CommentBox from '../Comments/Comments'

import PostModel from '../../models/post'

class UserPost extends Component {
  state = {
    post: {},
   
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    PostModel.show(this.state.currentPost).then(data => {
      this.setState({ post: data.post })
    })
  }
  

  render() {

    return (
    <Card className="userPostCard" centered>
      <Card.Content>
      <Card.Header>{this.props.author.username}</Card.Header>
      </Card.Content>
      <Image src={emptyAvatarExample} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{this.props.title}</Card.Header>
        <Card.Meta>
          {/* refactor for styling */}
          <span className='date'>{this.props.createdAt}</span>
        </Card.Meta>
        <Card.Description>
          {this.props.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          22 Friends
        </a>
      </Card.Content>
      <CommentBox/>
    </Card>
    )
  };

}

export default UserPost