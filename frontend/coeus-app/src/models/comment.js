const url = `http://localhost:4000/api/v1/comments`

class LikeModel {

 // all comments
  static all = () => {
    return fetch(`${url}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.uid}`
      }
    }).then(res => res.json())
  }

  // access create comment route 
  static create = (data) => {
    return fetch(`${url}`, {
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
    return fetch(`${url}/${id}`).then(res => res.json())
  }
}

export default LikeModel
