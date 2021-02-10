import React, { useState } from "react";

import AuthModel from "../models/auth";

import { userState } from "../recoil/atoms";
import { useSetRecoilState } from "recoil";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setUser = useSetRecoilState(userState);

  function handleSubmit(event) {
    
    event.preventDefault();
    AuthModel.login({ email, password }).then(json => {
      
      console.log(json);
      localStorage.setItem("uid", json.signedJwt);
      setUser(json);
      props.history.push("/home");
      /* AuthModel.verify().then(data => {
        console.log(data.user)
        setUser(data.user);
        props.history.push("/home");
      }); */
    });
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-input'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <input type='submit' value='Login' />
      </form>
    </div>
  );
}

export default Login;
