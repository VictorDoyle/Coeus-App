import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
/* Components */
import LeftSideBar from '../components/LeftSidebar/LeftSideBar';
import Loader from '../components/Loader/Loader'
import Navbar from '../components/Navbar/Navbar'
import UserPostContainer from '../components/Post/UserPostContainer';
import RightSideBar from '../components/RightSideBar/RightSideBar';
import UserPost from '../components/Post/UserPost';
import { useRecoilState } from "recoil";
/* Models */
import PostModel from '../models/post'
import UserModel from '../models/user';
import PostModal from '../components/UserProfile/Posts/PostModal'
/* User info */
import { userState } from "../recoil/atoms"

function Home () {
  const [user, setCurrentUser] = useState([])
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(function () {
    fetchData();
  }, [])

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
  }

  /*TODO: For every 5 posts, fetch Advice Slip API */
  // Get request = https://api.adviceslip.com/advice
  /* callback/ string To define your own callback function name and return the JSON in a function wrapper (as JSONP), add the parameter callback with your desired name as the value. */
  // render advice slips in simple container boxes or UserPosts

  //TODO: For every 10 posts, fetch https://uselessfacts.jsph.pl/random.json
  // render same as fetchAdviceSlip



  let postsList = posts.map((post, index) => {
    return <Link to={`/posts/${ post.id }`}><UserPost {...post} key={ post.id } /></Link>
  })

  
  return (
<>
    <div className="homepage">
      <LeftSideBar user={user} />
      <RightSideBar user={user} />
      
      { posts ? postsList : Loader }
    </div>
</>
)

}

 

export default Home;
