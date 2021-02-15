import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react'
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
import PostModal from '../components/UserProfile/Posts/PostModal'
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
  const [likes, setLike] = useState([]);
  const [ advice, setAdvice ] = useState([])


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
  }

  /*TODO: For every 5 posts, fetch Advice Slip API */
  // Get request = https://api.adviceslip.com/advice
  /* callback/ string To define your own callback function name and return the JSON in a function wrapper (as JSONP), add the parameter callback with your desired name as the value. */
  // render advice slips in simple container boxes or UserPosts

  //TODO: For every 10 posts, fetch https://uselessfacts.jsph.pl/random.json
  // render same as fetchAdviceSlip



 /*  let postsList = posts.map((post, index) => {
    return <Link to={`/profile/${ post.authorId }`}><UserPost {...post} key={ post.id } /></Link>
  }) */

  let postsList = posts.map((post, index) => {
    if (advice.slip && post.id % 2 == 0) {
    return <>
     <Card className="newsPostCard" centered>
     <Card.Content>
     <Card.Header> {advice.slip.advice}</Card.Header>
     </Card.Content>
   </Card>
    {/* <UserPost {...post} key={ post.id } /> */}
    </>
    }  
    return  <UserPost {...post} key={ post.id } />
  })

  
  return (
<>
    <div className="homepage">
      <LeftSideBar user={user} />
      <RightSideBar user={user} />

    
      





      { posts ? postsList : HomePostLoader }

    </div>
</>
)

}

 

export default Home;


/* { posts.length % 1 === 0 ? <> { posts ? postsList : HomePostLoader } </> : HomePostLoader } */