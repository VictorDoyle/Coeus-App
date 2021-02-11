/* eslint-disable max-len */
import React, {useState} from 'react'
import { Container, Header, Icon, Form, Input, Button } from 'semantic-ui-react'
import UserModel from '../../../models/user';
import { useRecoilState } from "recoil"
import { userState } from "../../../recoil/atoms"

function UserSettings (props) {
    /* getting user instance from recoilState for handleProfileEdit */
    const [ user, setUser ] = useRecoilState(userState)
    console.log(user)
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [bio, setBio] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 
  function handleProfileEdit(event) {
    event.preventDefault();
    UserModel.update({ firstname, lastname, username, bio, email, password }).then(json => {
      if (json.status === 201) {
        props.history.push("/profile");
        setUser(json.user)
      } else {
        console.log(json);
      }
    });
  }

    return (
        <>
    <Container text textAlign='center'>
    <Header as='h2' icon>
        <Icon name='settings' />
        Account Settings
        <Header.Subheader>
        Manage your account settings and preferences.
        </Header.Subheader>
        <Form onSubmit={handleProfileEdit}>

        <Form.Field inline>
        <label>First name</label>
        <Input placeholder='First name'  defaultValue={user.firstname}  value={ firstname }  onChange={(e) => setFirstName(e.target.value)} />
        </Form.Field>

        <Form.Field inline>
        <label>Last name</label>
        <Input placeholder='Last name' default={user.lastname} value={ lastname }  onChange={(e) => setLastName(e.target.value)} />
        </Form.Field>

        <Form.Field inline>
        <label>Username</label>
        <Input placeholder='Username' default={user.username} value={ username }  onChange={(e) => setUsername(e.target.value)} />
        </Form.Field>

        <Form.Field inline>
        <label>Edit Your Bio</label>
        <Input placeholder='Profile Bio' default={user.bio} value={ bio }  onChange={(e) => setBio(e.target.value)}/>
        </Form.Field>

        <Form.Field inline>
        <label>Email </label>
        <Input placeholder='Email Address' default={user.email} value={ email }  onChange={(e) => setEmail(e.target.value)}/>
        </Form.Field>

        <Form.Field inline>
        <label>Change Password  </label>
        <Input placeholder='Password' default={user.password} value={ password }  onChange={(e) => setPassword(e.target.value)}/>
        </Form.Field>
        <Button type='submit' value="submit" >
        Submit these changes
      </Button>
        </Form>
    </Header>

    </Container>
</>
    )
}

export default UserSettings