import React from 'react';
import LeftSideBar from '../components/LeftSidebar/LeftSideBar';
import Loader from '../components/Loader/Loader'
import Navbar from '../components/Navbar/Navbar'
import NewsPostContainer from '../components/Post/NewsPostContainer';
import RightSideBar from '../components/RightSideBar/RightSideBar';

const News = () => {
  return (
    <div className="homepage">
      <LeftSideBar />
      <RightSideBar />
      <NewsPostContainer />
    </div>
  );
}

export default News;
