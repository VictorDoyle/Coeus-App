import React from 'react';
import Loader from '../components/Loader/Loader'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/UserProfile/Header/Header'

const Profile = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Header />
    </div>
  );
}

export default Profile;
