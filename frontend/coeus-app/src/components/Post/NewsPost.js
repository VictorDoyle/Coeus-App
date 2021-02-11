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

function NewsPost() {
  return (
    <Card className="newsPostCard" centered>
      <Card.Content>
      <Card.Header> News Source Here</Card.Header>
      </Card.Content>

      <Card.Content>
        <Card.Header> Title Here</Card.Header>
        <Card.Meta>
          {/* refactor for styling */}
          <span className='date'> Created At Here</span>
        </Card.Meta>
        <Card.Description>
          Description Here
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='newspaper' />
          Read Full Article
        </a>
      </Card.Content>
    </Card>
  )
}


export default NewsPost