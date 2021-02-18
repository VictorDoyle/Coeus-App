import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react'
/* Components */
import LeftSideBar from '../components/LeftSidebar/LeftSideBar';
import Navbar from '../components/Navbar/Navbar'
import UserPostContainer from '../components/Post/UserPostContainer';
import RightSideBar from '../components/RightSideBar/RightSideBar';
import UserPost from '../components/Post/UserPost';
/* Models */
import PostModel from '../models/post'
import UserModel from '../models/user';
import AdviceModel from '../models/advice';
import NewsModel from '../models/news';
/* User info */
import { useRecoilState } from "recoil";
import { userState } from "../recoil/atoms"
/* Loader for homepage */
import HomePostLoader from '../components/Loader/HomePostLoader';
/* CSS */
import "../styles/Home.css"
import NewsPost from '../components/Post/NewsPost';







function Home (props) {
  const [user, setCurrentUser] = useState([])
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [likes, setLike] = useState([])
  const [ advice, setAdvice ] = useState([])
  /* multiple quotes */
  const [ quotes, setQuotes ] = useState([])
  /* unique quote */
  const [ quote, setQuote ] = useState([])


  /* fetch advice for homepage posts */
   /*  const getDailyAdvice = (event) => {
      event.preventDefault();
      AdviceModel.getWeeklyNews().then(json => {
          if (json) {
            setAdvice(json)
            console.log(json)
          } else {
            console.log("advice was not fetched");
          }
      })
      
    } */

  useEffect(function () {
    fetchData();
  }, [props.match.params.id ])

  const fetchData = () => {
    PostModel.all().then(data => {
      console.log(data)
      setPosts( data.posts )
    })
    UserModel.all().then(data => {
      console.log(data)
      setUsers(data.users )
    })
    UserModel.show().then(data => {
      console.log(data)
      setCurrentUser(data.user )
    })
    AdviceModel.getDailyAdvice().then(json => {
      if (json) {
        setAdvice(json)
        console.log(json)
      } else {
        console.log("advice was not fetched");
      }
  })
    AdviceModel.getDailyQuote().then(json => {
      if (json) {
        setQuote(json)
        console.log("dailyquotes json", json)
      } else {
        console.log("daily quotes were not fetched");
      }
  })

  }
  

  /* SECTION: Quote Cards version 1 */

  /* let quotesList = quotes.map((quote, index) => {
    return <> <Card className="newsPostCard" centered>
    <Card.Content>
    <Card.Header> Here's A Daily Quote For Your Thoughts </Card.Header>
    <Card.Description>
       {quote.content.rendered}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Icon name='hand point right' />
        Quote by: {quote.title.rendered}  
    </Card.Content>
  </Card> </>
  }) */

/* SECTION: Quotes Cards  version 2*/
  /* let quotesList = quotes.map((quote, index) => {
    return <> <Card className="newsPostCard" centered>
    <Card.Content>
    <Card.Header> Here's A Daily Quote For Your Thoughts </Card.Header>
    <Card.Description>
       {quote.content.rendered}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Icon name='hand point right' />
        Quote by: {quote.title.rendered}  
    </Card.Content>
  </Card> </>
  }) */

  /* SECTION: Advice cards */

  let postsList = posts.map((post, index) => {
    if (advice.slip && post.id % 2 == 0) {
    return <>
   {/*   <Card className="newsPostCard" centered>
     <Card.Content>
     <Card.Header> Here's A Daily Advice Slip For You</Card.Header>
     <Card.Description>
        {advice.slip.advice}
       </Card.Description>
     </Card.Content>
     <Card.Content extra>
       <a href="#">
         <Icon name='newspaper' />
         Read Full Article
       </a>
     </Card.Content>
   </Card> */}
    <UserPost {...post} key={ post.id } />
    </>
    }  else if (post.id % 2 !== 0) {
      return  <UserPost {...post} key={ post.id } />
    }
    
    return <>
    
     <UserPost {...post} key={ post.id } /> 
    
    </>
  })

  

  
  return (
<>
    <div className="homepage">
      <LeftSideBar user={user} />
      <RightSideBar user={user} />


      { posts ? postsList : HomePostLoader }
      {/* { quotes ? quotesList :  HomePostLoader} */}

      {/* generate new per 5 posts */}
      <Card className="newsPostCard" centered>
    <Card.Content>
    <Card.Header> Here's A Daily Quote For Your Thoughts </Card.Header>
    <Card.Description>
      "{quote.content}"
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Icon name='hand point right' />
        By: {quote.author}
        
    </Card.Content>
  </Card>
      {/* end of daily quote content */}



    </div>
</>
)

}

 

export default Home;


/* { posts.length % 1 === 0 ? <> { posts ? postsList : HomePostLoader } </> : HomePostLoader } */