import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import '../Posts/Posts.css'


const ProfilePosts = () => (
  <Grid columns={6} centered>
    <Grid.Row  verticalAlign='top'>
      <Grid.Column>
        <Image src='https://picsum.photos/200' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://picsum.photos/200' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://picsum.photos/200' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://picsum.photos/200' />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row verticalAlign='top'>
      <Grid.Column>
        <Image src='https://picsum.photos/200' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://picsum.photos/200' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://picsum.photos/200' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://picsum.photos/200' />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row verticalAlign='top'>
      <Grid.Column>
        <Image src='https://picsum.photos/200' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://picsum.photos/200' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://picsum.photos/200' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://picsum.photos/200' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default ProfilePosts








/* 

<div class="column">
    <div class="ui fluid card">
      <div class="image">
        <img class="ui medium rounded image" src="/<%=post.image.image %>" >
      </div>  
      <div class="extra content"> 
        <span class="left floated like" id="likeButton">
          <form action="/posts" method="POST" >
          <i id="heartIcon"class="like icon"></i>
          <span id="likeCounter">
          <script>
            let likes =  post.likes;
            </script>
            <%= post.likes %>
          </span>
        </form>
        </span>
       

        <span class="right floated star">
          Save 
          <i class="blue bookmark icon"></i>
        </span>
      </div>
    </div>
  </div> */