import React from 'react'
import { Link } from 'react-router-dom';
import { Grid, Image } from 'semantic-ui-react'
import '../Posts/Posts.css'
import Loader from '../../Loader/Loader'
import PostModal from '../Posts/PostModal'

/* 

function ProfilePosts (props) {

  console.log(props)
  
  return(
  
  <>
    <Grid columns={6} centered>
    <Grid.Row  verticalAlign='top'>
       <Grid.Column>
       <Image src='https://picsum.photos/200' />
      
      </Grid.Column>
            {props.posts.map((post) => {
              
          return (<Grid.Column {...post} key={ post.id } />)
        })}
       
    </Grid.Row>
  </Grid>
  </>
  )
}

export default ProfilePosts
 */



function ProfilePosts (props) {

  console.log(props)
  
  return(
  
  <>
    <Grid columns={6} centered>
    <Grid.Row  verticalAlign='top'>
       
            {props.posts.map((post) => {
              
          return (<PostModal /* {...post} */ key={ post.id } post={post} author={post.author} />)
        })}
       
    </Grid.Row>
  </Grid>
  </>
  )
}

export default ProfilePosts
