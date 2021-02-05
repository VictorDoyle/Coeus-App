import React from 'react'
import { Card, Feed } from 'semantic-ui-react'
import '../Notification/Notification.css'

/* TODO: transfer into Class component for easier State management and populating */

const Notification = () => (
  <Card>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image='/images/avatar/small/jenny.jpg' />
          <Feed.Content>
            <Feed.Date content='1 day ago' />
            <Feed.Summary>
              A <a> User</a> liked your <a> Recent Post </a>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
       
      </Feed>
    </Card.Content>
  </Card>
)

export default Notification