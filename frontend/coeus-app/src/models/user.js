const url = `http://localhost:4000/api/v1`

class UserModel {
  // accessed as GameModel.all()
  static all = () => {
    // calling the index method in the API controller
    return fetch(`${url}/games`).then(res => res.json())
  }

  // accessed as GameModel.show(gameId)
  static show = (gameId) => {
    return fetch(`${url}/games/${gameId}`).then(res => res.json())
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

export default GameModel
