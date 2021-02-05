import React from 'react';
import LeftSideBar from '../components/LeftSidebar/LeftSideBar';
import Loader from '../components/Loader/Loader'
import Navbar from '../components/Navbar/Navbar'
import RightSideBar from '../components/RightSideBar/RightSideBar';


const Home = () => {
  return (
    <div className="homepage">
      <Navbar />
      <LeftSideBar />
      <RightSideBar />
    </div>
  );
}

export default Home;
