import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import emptyAvatarExample from '../../testing/placeholders/emptyAvatarExample.png'
import './UserPost.css'

/* autopopulate with props.user */
const props = (
  <a>
    <Icon name='heart' />
    16 Likes
  </a>
)

const NewsPost = () => (
  <Card className="newsPostCard"
  centered
    image={emptyAvatarExample}
    header='News Post'
    meta='BBC News'
    description="Here is some placeholder text to show you that you're looking at a news post!"
    extra={props}
  />
)

export default NewsPost