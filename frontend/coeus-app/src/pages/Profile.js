import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader/Loader'
import Header from '../components/UserProfile/Header/Header'
import ProfilePosts from '../components/UserProfile/Posts/Posts';
import PostModel from '../models/post'
import UserModel from '../models/user'

function Profile (props) {
  const [ user, setUser ] = useState([])
  const [ posts, setPosts] = useState([])

  useEffect(function () {
    fetchData();
  }, [ props.match.params.id ]);

  const fetchData = () => {

    PostModel.showByUser(props.match.params.id).then(data => {
      setPosts( data.posts )
    })

    UserModel.showUser(props.match.params.id).then(data => {
      setUser( data.user )
    })
  }

  return (
    <>
 


    <Header user={user} />
    <ProfilePosts posts={posts} />
    

    </>
  )
}


export default Profile;