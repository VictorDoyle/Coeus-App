import React from 'react'
import { Image, List } from 'semantic-ui-react'
import Loader from "../../Loader/Loader"

const ListExampleHorizontal = (props) => (
  <List horizontal>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/tom.jpg' />
      <List.Content>
        <List.Header>Posts</List.Header>
       {props.user.posts ? props.user.posts.length : <Loader/>}
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/tom.jpg' />
      <List.Content>
        <List.Header>Followers</List.Header>
       {"0" ? "0" : <Loader/>}
      </List.Content>
    </List.Item>
  </List>
)

export default ListExampleHorizontal