import React, { useState } from "react";
import AuthModel from "../models/auth";

function Register(props) {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    AuthModel.register({ firstname, lastname, username, email, password }).then(json => {
      if (json.status === 201) {
        props.history.push("/login");
      } else {
        console.log(json);
      }
    });
  }

  return (
    <div>
      <h2>Register for an Account!</h2>
      <form onSubmit={handleSubmit}>
      <div className='form-input'>
          <label htmlFor='firstname'>First Name</label>
          <input
            type='text'
            name='firstname'
            onChange={(e) => setFirstName(e.target.value)}
            value={firstname}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='lastname'>Last Name</label>
          <input
            type='text'
            name='lastname'
            onChange={(e) => setLastName(e.target.value)}
            value={lastname}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className='form-input'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <input type='submit' value='Register' />
      </form>
    </div>
  );
}

export default Register;
