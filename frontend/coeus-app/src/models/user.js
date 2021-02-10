const url = `http://localhost:4000/api/v1`

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

  // accessed user via ID
  static show = (id) => {
    return fetch(`${url}/users/${id}`).then(res => res.json())
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
  // delete route for user
  static delete = (id) => {
    return fetch(`${url}/users/${id}`).then(res => res.json())
  }
}

export default UserModel
