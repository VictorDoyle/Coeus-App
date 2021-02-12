import React, { useState } from "react";
import AuthModel from "../models/auth";
import { Form, Button, Card } from 'semantic-ui-react'
import "../styles/Register.css";
import { Link } from 'react-router-dom';


function Register(props) {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function handleSubmit(event) {
    event.preventDefault();
    AuthModel.register({ firstname, lastname, username, bio, email, password }).then(json => {
      if (json.status === 201) {
        props.history.push("/login");
      } else {
        console.log(json);
      }
    });
  }

  return (
    <div className="registerAll">

    <Card centered className="registerCard">
            <Card.Header as="h1"> Register For An Account </Card.Header>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <input type ="text" name='firstname' placeholder='First Name' value={ firstname }  onChange={(e) => setFirstName(e.target.value)}/>
          </Form.Field>
          <Form.Field>
          <input type='text' placeholder='Last Name' name='lastname' value={lastname} onChange={(e) => setLastName(e.target.value)} />
          </Form.Field>
          <Form.Field>
          <input type ="password" name='password' placeholder='Your Password' value={ password }  onChange={(e) => setPassword(e.target.value)}/>
          </Form.Field>

          <Form.Field> 
          <input type='text' placeholder='Username' name='username'  value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Field>

          <Form.Field> 
          <input type='text' placeholder='Your Profile Bio' name='bio' value={bio} onChange={(e) => setBio(e.target.value)}/>
          </Form.Field> 

          <Form.Field> 
          <input type='text' placeholder='Email Address' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          </Form.Field> 

    


          <Button type='submit' value='Register' color="blue">
            Register
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

export default Register;
