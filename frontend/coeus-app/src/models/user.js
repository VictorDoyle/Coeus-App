/* const url = `http://localhost:4000/api/v1`
const userBaseUrl = `http://localhost:4000/api/v1/users` */
const API = process.env.NODE_ENV === 'production' ? 'https://the-coeus-app.herokuapp.com/api/v1/users' : 'http://localhost:4000/api/v1/users';

class UserModel {
  // access all users
  static all = () => {
    return fetch(`${API}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.uid}`
      }
    }).then(res => res.json())
  }

  // accessed current user via Id+login
  static show = (id) => {
    return fetch(`${API}/verify`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.uid}`
        }

    }).then(res => res.json())
  }


  // show specific user
  static showUser = (id) => {
    return fetch(`${API}/${id}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.uid}`
        }

    }).then(res => res.json())
  }

  // create a user
  static create = (data) => {
    return fetch(`${API}`, {
      // options
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  } 

  // update-Edit user

static update = (data) => {
  return fetch(`${API}/edit`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.uid}`
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
} 


  // delete route for user
  static delete = (id) => {
    console.log("showme user id", id)
    return fetch(`${API}/delete/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.uid}`
      }
    }).then(res => res.json())
  }
}

export default UserModel
