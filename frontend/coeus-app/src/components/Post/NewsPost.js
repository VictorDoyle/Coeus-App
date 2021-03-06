import React, { useState, useEffect } from 'react'
import { Card, Icon, Button} from 'semantic-ui-react'
import NewsModel from '../../models/news'
import './UserPost.css'
import Loader from '../Loader/Loader'
import "./NewsPost.css"

function NewsPost() {
  const [ news, setNews ] = useState([])


/* fetch most viewed articles for the last seven days from NY TIMES */
  /* const fetchWeeklyNews = (event) => {
    event.preventDefault();
    NewsModel.getWeeklyNews().then(json => {
        if (json) {
         setNews(json)
          console.log(json)
        } else {
          console.log("news was not fetched");
        }
    })
    
  } */

  const fetchLatestNews = (event) => {
    event.preventDefault();
    NewsModel.getLatestNews().then(json => {
      if (json) {
        setNews(json)
        console.log(json)
      } else {
        console.log("the latest news was not fetched")
      }
    })
  }

/* FIXME: Use this for fetching top 20 posts */
 /*  useEffect(function () {
    fetchData();
  }, [])

  const fetchData = () => {
    NewsModel.getWeeklyNews().then(json => {
      if (json) {
       setNews(json)
        console.log(json)
      } else {
        console.log("news was not fetched");
      }
  })
  } */



 

  console.log(news)

  return (
<>  



  
    <Card className="newsPostCard" centered>
      <Card.Content>
      <Card.Header > Latest News</Card.Header>
      </Card.Content>

      
          <Button onClick={fetchLatestNews}></Button>
       
    </Card>


    { news.results ? news.results.map((article, index) => {
   return  <> 
   <Card className="newsPostCard" centered>
     <Card.Content>
     <Card.Header> {article.source}</Card.Header>
     </Card.Content>

     <Card.Content>
       <Card.Header> {article.title}</Card.Header>
       <Card.Meta>
         
         <span className='date'> {article.published_date}</span>
       </Card.Meta>
       <Card.Description>
        {article.abstract}
       </Card.Description>
     </Card.Content>
     <Card.Content extra>
       <a href={article.url}>
         <Icon name='newspaper' />
         Read Full Article

         
       </a>
     </Card.Content>
   </Card>
   
   
   
   
    </> }) : <h1 className="errorNewsPost"> There seems to be an error! <br/> We'll be right with you </h1> } 
  
    </>
  )
}


export default NewsPost