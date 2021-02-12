import React from 'react'
import { Card, Icon, Button} from 'semantic-ui-react'
import NewsModel from '../../models/news'
import './UserPost.css'



function NewsPost() {
/* fetch most viewed articles for the last seven days from NY TIMES */
  const fetchWeeklyNews = (event) => {
    event.preventDefault();
    NewsModel.getWeeklyNews().then(json => {
        if (json) {
         
          console.log(json)
        } else {
          console.log("news was not fetched");
        }
    })
    
  }










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
          <Button onClick={fetchWeeklyNews}></Button>
        </a>
      </Card.Content>
    </Card>
  )
}


export default NewsPost