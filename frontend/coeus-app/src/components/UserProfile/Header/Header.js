import React from 'react'
import { Button, Image, Item, Container } from 'semantic-ui-react'
import emptyAvatarExample from '../../../testing/placeholders/emptyAvatarExample.png'
import FollowButton from './FollowButton'


const ProfileHeader = () => (
<Container> 
    <Item.Group relaxed>
        <Item>
        <Item.Image size='small' src={emptyAvatarExample} circular />

        <Item.Content verticalAlign='middle'>
            <Item.Header> USERNAME OF USER HERE </Item.Header>
            <Item.Description>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</Item.Description>
            <Item.Extra>
            <FollowButton />
            </Item.Extra>
        </Item.Content>
        </Item>

    </Item.Group>
</Container>
)

export default ProfileHeader






