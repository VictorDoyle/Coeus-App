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
