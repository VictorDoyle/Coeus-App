import React from 'react'
import { Link } from 'react-router-dom';
import { Grid, Image } from 'semantic-ui-react'
import '../Posts/Posts.css'
import Loader from '../../Loader/Loader'
import PostModal from '../Posts/PostModal'


function ProfilePosts (props) {
  
  return(
  
  <>
    <Grid columns={6} centered>
    <Grid.Row  verticalAlign='top'>

    {props.posts.map((post) => {
     
      return <PostModal key={ post.id } post={post} />
          })}
       
    </Grid.Row>
  </Grid>
  </>
  )
}

export default ProfilePosts


 {/* {props.posts.map((post) => {
          return <PostModal key={ post.id } post={post} author={post.author} />
        })} */}

       /*  {props.posts.map((post) => {
          if (props.posts.authorId === props.author[1]) {
      return (<PostModal key={ post.id } post={post} author={post.author} />)
          }})} */