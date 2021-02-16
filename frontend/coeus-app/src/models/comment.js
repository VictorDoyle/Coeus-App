/* const url = `http://localhost:4000/api/v1/comments` */
const API = process.env.NODE_ENV === 'production' ? 'https://the-coeus-app.herokuapp.com/api/v1/comments' : 'http://localhost:4000/api/v1/comments';

class CommentModel {

 // all comments
  static all = () => {
    return fetch(`${API}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.uid}`
      }
    }).then(res => res.json())
  }

  // access create comment route 
  static create = (data) => {
    return fetch(`${API}`, {
      // options
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.uid}`
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  } 

  // accessed delete route of comment
  static delete = (id) => {
    return fetch(`${API}/${id}`).then(res => res.json())
  }
}

export default CommentModel
