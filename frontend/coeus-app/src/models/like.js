/* const url = `http://localhost:4000/api/v1/likes` */
const API = process.env.NODE_ENV === 'production' ? 'https://the-coeus-app.herokuapp.com/api/v1/likes' : 'http://localhost:4000/api/v1/likes';

class LikeModel {

 // all likes
  static all = () => {
    return fetch(`${API}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.uid}`
      }
    }).then(res => res.json())
  }

  // access create like route 
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

  // accessed delete route of like
  /* FIXME: improper use of delete - need to pass in an ID but no Id on URL to query from since inside of post comp */
  static delete = (id) => {
    console.log("from model like", id)
    return fetch(`${API}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.uid}`
      },
    }).then(res => res.json())
  }
}

export default LikeModel
