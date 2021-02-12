import React, { useState } from "react";
import AuthModel from "../models/auth";
import { Form, Button, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import "../styles/Login.css";


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
    <div className="loginAll">

      <Card centered className="loginCard">
        <Card.Header as="h1"> Login </Card.Header>
  <Form onSubmit={handleSubmit}>
    <Form.Field>
      <input type ="text"  placeholder='Your Email' value={ email }  onChange={(e) => setEmail(e.target.value)}/>
      </Form.Field>
      <Form.Field>
      <input type ="text"  placeholder='Your Password' value={ password }  onChange={(e) => setPassword(e.target.value)}/>
      </Form.Field>

      <Button type='submit' value='Login' color="blue">
        Login
      </Button>
      <Link to="/">
      <Button  color="grey">
        Return
      </Button>
      </Link>

  </Form>
  </Card>
    </div>
  );
}

export default Login;
