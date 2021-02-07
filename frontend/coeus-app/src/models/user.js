const url = `http://localhost:4000/api/v1`

class UserModel {
  // access all users
  static all = () => {
    return fetch(`${url}/users`).then(res => res.json())
  }

  // accessed as GameModel.show(gameId)
  static show = (id) => {
    return fetch(`${url}/user/${id}`).then(res => res.json())
  }

  // accessed as GameModel.create(gameData)
  static create = (gameData) => {
    return fetch(`${url}/games`, {
      // options
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(gameData)
    }).then(res => res.json())
  } 
}

export default UserModel
