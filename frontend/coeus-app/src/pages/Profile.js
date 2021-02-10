import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader/Loader'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/UserProfile/Header/Header'
import ProfilePosts from '../components/UserProfile/Posts/Posts';
import PostModel from '../models/post'
import UserModel from '../models/user'

class Profile extends Component {
  state = {
    user: [],
    posts: [],
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    PostModel.all().then(data => {
      this.setState({ posts: data.posts })
    })
    UserModel.show().then(data => {
      this.setState({user: data.user})
    })
  }
  
  render() {
      let postsList = this.state.posts.map((post, index) => {
      return <Link to={`/posts/${ post.id }`}><ProfilePosts {...post} key={ post.id } /></Link>
    })

    return (
      <>
     
      <Header />
      <ProfilePosts /> 
      {/* below is testing to see population of posts */}
      { this.state.posts ? postsList : Loader }
        
     
      </>
    );
  } 
}



export default Profile;