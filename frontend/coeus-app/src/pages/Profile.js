import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader/Loader'
import Header from '../components/UserProfile/Header/Header'
import ProfilePosts from '../components/UserProfile/Posts/Posts';
import PostModel from '../models/post'
import UserModel from '../models/user'
/* user */


function Profile () {
  const [ user, setUser ] = useState([])
  const [ posts, setPosts] = useState([])

  useEffect(function () {
    fetchData();
  }, []);

  const fetchData = () => {

    PostModel.showByUser().then(data => {
      setPosts( data.posts )
    })

    UserModel.show().then(data => {
      setUser( data.user )
    })
  }

  return (
    <>
  
    <Header user={user} />
    {/* <ProfilePosts posts={posts} /> */}
    <ProfilePosts user={user} />

    </>
  )
}


export default Profile;