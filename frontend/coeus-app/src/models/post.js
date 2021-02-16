/* const url = `http://localhost:4000/api/v1` */
const API = process.env.NODE_ENV === 'production' ? 'https://the-coeus-app.herokuapp.com/api/v1' : 'http://localhost:4000/api/v1';

class PostModel {
  // access All Posts from API
  static all = () => {
    // api index route

    return fetch(`${API}/posts`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.uid}`
      }
    }).then(res => res.json())
  }

  // accessed show post by id
  static show = (id) => {
    return fetch(`${API}/posts/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.uid}`
      }
  }).then(res => res.json())
  }

   // access all posts by by specifc user
   static showByUser = (id) => {
    return fetch(`${API}/posts/profile/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.uid}`
      }
  }).then(res => res.json())
  }

  // accessed create post route 
  static create = (data) => {
    return fetch(`${API}/posts`, {
      // options
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.uid}`
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  } 

  // accessed delete route of post
  static delete = (id) => {
    return fetch(`${API}/posts/${id}`).then(res => res.json())
  }

}

export default PostModel
