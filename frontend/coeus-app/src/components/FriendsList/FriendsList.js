import React from 'react'
import { Image as ImageComponent, Item } from 'semantic-ui-react'
import emptyAvatarExample from '../../testing/placeholders/emptyAvatarExample.png'
import '../FriendsList/FriendsList.css'

const FriendsList = () => (
  <Item.Group>
      <Item>
      <Item.Image size='tiny' src={emptyAvatarExample}  />

      <Item.Content verticalAlign='middle'>
        <Item.Header>Your Friend Number 1</Item.Header>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='tiny' src={emptyAvatarExample}  />

      <Item.Content verticalAlign='middle'>
        <Item.Header>Friend Number 2</Item.Header>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='tiny' src={emptyAvatarExample}  />

      <Item.Content verticalAlign='middle'>
        <Item.Header>Friend number 3</Item.Header>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default FriendsList