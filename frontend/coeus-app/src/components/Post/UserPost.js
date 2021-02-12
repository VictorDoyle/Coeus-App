import React, { useEffect, useState, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Image, Button, Label } from 'semantic-ui-react'
import emptyAvatarExample from '../../testing/placeholders/emptyAvatarExample.png'
import './UserPost.css'
import CommentBox from '../Comments/Comments'
import PostModel from '../../models/post'
import LikeModel from '../../models/like';
import CommentShow from '../Comments/CommentShow';


function likeUnlikeReducer(state, action) {
  switch (action.type) {
    case 'LIKE_POST':
      return {  ...state, liked: true }
    case 'UNLIKE_POST':
      return { ...state, liked: false }
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
  }, [ ])
  
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
    LikeModel.delete(props.id).then(json => {
        console.log(json, "unliked :( " ); 
    });
  }


  return(
    <Card className="userPostCard" centered>
      <Card.Content>
      <Link className="postAuthorLink" to={`/profile/${props.authorId}`}>
      <Card.Header>{props.author.username}  </Card.Header>
      </Link>
      </Card.Content>
     
      <Image src={emptyAvatarExample} wrapped ui={false} />
      <Card.Content>
      <Link className="postTitleLink" to={`/profile/${props.authorId}`}>
        <Card.Header>{props.title}</Card.Header>
        </Link>
        <Card.Meta>
          {/* refactor for styling */}
          <span className='date'>{props.createdAt}</span>
        </Card.Meta>
        <Card.Description>
          {props.description}
        
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
       <a  onClick={() => dispatch({ type: 'LIKE_POST' }), handleLike}> <Icon name='heart' color={"grey"}  /> {props.likes.length} Likes! </a> 
      {/* 
      {liked ? <a  onClick={() => dispatch({ type: 'LIKE_POST' }), handleLike}> <Icon name='heart' color={"grey"}  /> {props.likes.length} Likes </a> 
      : <a  onClick={() => dispatch({ type: 'UNLIKE_POST' }), handleDislike}> <Icon name='heart' color={"red"}  />  Unlike </a>}
 */}
     {/*  if state = liked do UNLIKE POST else if state = not liked do LIKE POST */}

{/* if currentUser.id ===/present IN likes=[] show icon red unlike  */}


      </Card.Content>
      {/* <CommentBox {...props}/> */}
      <CommentShow {...props} />
    </Card>
  )
}

export default UserPost