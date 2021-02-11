const url = `http://localhost:4000/api/v1`
const userBaseUrl = `http://localhost:4000/api/v1/users`

class UserModel {
  // access all users
  static all = () => {
    return fetch(`${url}/users`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.uid}`
      }
    }).then(res => res.json())
  }

  // accessed current user via Id+login
  static show = (id) => {
    return fetch(`${userBaseUrl}/verify`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.uid}`
        }

    }).then(res => res.json())
  }


  // show specific user
  static showUser = (id) => {
    return fetch(`${userBaseUrl}/${id}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.uid}`
        }

    }).then(res => res.json())
  }

  // create a user
  static create = (data) => {
    return fetch(`${url}/users`, {
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
  return fetch(`${url}/users/edit`, {
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
    return fetch(`${url}/users/${id}`).then(res => res.json())
  }
}

export default UserModel
