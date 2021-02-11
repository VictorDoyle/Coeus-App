import React, { useEffect, useState, useReducer } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import emptyAvatarExample from '../../testing/placeholders/emptyAvatarExample.png'
import './UserPost.css'
import CommentBox from '../Comments/Comments'
import PostModel from '../../models/post'
import LikeModel from '../../models/like';

/* function likeUnlikeReducer(state, action) {
  switch (action.type) {
    case 'LIKE_POST':
      return {  ...state, liked: true }
    case 'UNLIKE_POST':
      return { ...state, liked: false }
    default:
      throw new Error()
  }
} */

function likeUnlikeReducer(prevState, action) {
  switch (action.type) {
    case 'LIKE_POST':
      return {  ...prevState, liked: true }
    case 'UNLIKE_POST':
      return { ...prevState, liked: false }
    default:
      throw new Error()
  }
}

const initialState = {
  liked: false
};

function UserPost (props) {
  /* get post info */
  const [post, setPost] = useState([])
  /* like/unlike functionality */
  const [state, dispatch] = useReducer(likeUnlikeReducer, initialState);
  const { liked } = state
  
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

  function handleDislike(event) {
    event.preventDefault();
    LikeModel.delete(props).then(json => {
        console.log(json, "unliked :( " ); 
    });
  }


  return(
    <Card className="userPostCard" centered>
      <Card.Content>
      <Card.Header>{props.author.username}  </Card.Header>
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
      <a  onClick={() => dispatch({ type: 'LIKE_POST' }), handleDislike}> <Icon name='heart' color={"grey"}  /> {props.likes.length} Likes</a>

      {/* {state ? <a  onClick={() => dispatch({ type: 'LIKE_POST' }), handleLike}> <Icon name='heart' color={"grey"}  /> Like </a> 
      : <a  onClick={() => dispatch({ type: 'UNLIKE_POST' }), handleDislike}> <Icon name='heart' color={"red"}  />  Unlike </a>}

 */}




        {/* <a  onClick={() => dispatch({ type: 'OPEN_MODAL' }), handleLike}>
        
          <Icon name='heart' color={"red"}  />
          Like
        </a> */}
      </Card.Content>
      <CommentBox {...props}/>
    </Card>
  )
}





  {/* if like.post.id === null ? <> <Icon name='heart' color={"blue"} />  Unlike </>: <Icon name='heart {red}' />  */}
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