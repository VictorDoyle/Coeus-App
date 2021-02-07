import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import emptyAvatarExample from '../../testing/placeholders/emptyAvatarExample.png'
import './UserPost.css'
import CommentBox from '../Comments/Comments'

const props = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)
const UserPost = () => (
  <Card className="userPostCard" centered>
    <Image src={emptyAvatarExample} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
    <CommentBox/>
  </Card>
)

export default UserPost