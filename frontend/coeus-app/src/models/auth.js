/* const url = `http://localhost:4000/api/v1`
const userBaseUrl = `http://localhost:4000/api/v1/users` */
const API = process.env.NODE_ENV === 'production' ? 'https://the-coeus-app.herokuapp.com/api/v1' : 'http://localhost:4000/api/v1';


class AuthModel {
    static register = (data) => {
      console.log(data)
        return fetch(`${API}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json());
        
    };
    

    static login = (data) => {
        return fetch(`${API}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then(response => response.json());
      };

    static verify = () => {
        return fetch(`${API}/users/verify`, {
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
