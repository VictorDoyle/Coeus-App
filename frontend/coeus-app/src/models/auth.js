const url = `http://localhost:4000/api/v1`
const userBaseUrl = `http://localhost:4000/api/v1/users`


class AuthModel {
    static register = (data) => {
      console.log(data)
        return fetch(`${url}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json());
        
    };
    

    static login = (data) => {
        return fetch(`${url}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then(response => response.json());
      };

    static verify = () => {
        return fetch(`${userBaseUrl}/verify`, {
          method: "GET",
          // add header authorization with token
          headers: {
            authorization: `Bearer ${localStorage.uid}`,
            // for session based auth
            // withCredientials: true
          },
        }).then(response => response.json());
      };
    }



export default AuthModel;
