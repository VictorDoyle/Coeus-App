import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/* Components */
import LeftSideBar from '../components/LeftSidebar/LeftSideBar';
import Loader from '../components/Loader/Loader'
import Navbar from '../components/Navbar/Navbar'
import UserPostContainer from '../components/Post/UserPostContainer';
import RightSideBar from '../components/RightSideBar/RightSideBar';
import UserPost from '../components/Post/UserPost';
/* Models */
import PostModel from '../models/post'


class Home extends Component {
  state = {
    posts: [],
    users: [],
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    PostModel.all().then(data => {
      this.setState({ posts: data.posts })
    })
  }
  
  render() {
      let postsList = this.state.posts.map((post, index) => {
      return <Link to={`/posts/${ post.id }`}><UserPost {...post} key={ post.id } /></Link>
    })

    return (
      <div className="homepage">
        <UserPostContainer posts={this.state.posts}/>
        <LeftSideBar />
        <RightSideBar />
        <h1>
          All posts
        </h1>
        { this.state.posts ? postsList : 'Loading...' }
      </div>
    );
  } 
}

export default Home;
