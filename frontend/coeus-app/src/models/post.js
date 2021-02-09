const url = `http://localhost:4000/api/v1`

class PostModel {
  // access All Posts from API
  static all = () => {
    // api index route

    return fetch(`${url}/posts`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.uid}`
      }
    }).then(res => res.json())
  }

  // accessed show post by id
  static show = (id) => {
    return fetch(`${url}/posts/${id}`).then(res => res.json())
  }

  // accessed create post route 
  static create = (data) => {
    return fetch(`${url}/posts`, {
      // options
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  } 

  // accessed delete route of post
  static delete = (id) => {
    return fetch(`${url}/posts/${id}`).then(res => res.json())
  }

}

export default PostModel
