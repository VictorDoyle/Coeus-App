import React, { useEffect, useState } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import emptyAvatarExample from '../../testing/placeholders/emptyAvatarExample.png'
import './UserPost.css'
import CommentBox from '../Comments/Comments'

import PostModel from '../../models/post'
import LikeModel from '../../models/like';




function UserPost (props) {
  const [post, setPost] = useState([])
  
  useEffect(function () {
    fetchData();
  }, [])
  
  const fetchData = () => {
    PostModel.show().then(data => {
      console.log(data)
      setPost( data.post)
    })
  }
  
  function handleLike(event) {
    event.preventDefault();
    LikeModel.create(props).then(json => {
        console.log(json, "liked!"); 
    });
  }
  return(
    <Card className="userPostCard" centered>
      <Card.Content>
      <Card.Header>{props.author.username}</Card.Header>
      </Card.Content>
      <Image src={emptyAvatarExample} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta>
          {/* refactor for styling */}
          <span className='date'>{props.createdAt}</span>
        </Card.Meta>
        <Card.Description>
          {props.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a onClick={handleLike}>
          <Icon name='heart'/>
          Like
        </a>
      </Card.Content>
      <CommentBox/>
    </Card>
  )
}





/* 

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
          
          <span className='date'>{this.props.createdAt}</span>
        </Card.Meta>
        <Card.Description>
          {this.props.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='heart' />
          Like
        </a>
      </Card.Content>
      <CommentBox/>
    </Card>
    )
  };

}
 */
export default UserPost