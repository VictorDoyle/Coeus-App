import React from 'react';
import Loader from '../components/Loader/Loader'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/UserProfile/Header/Header'
import ProfilePosts from '../components/UserProfile/Posts/Posts';

const Profile = () => {
  return (
    <div className="homepage">
      <Header />
      <ProfilePosts />  
    </div>
  );
}

export default Profile;
