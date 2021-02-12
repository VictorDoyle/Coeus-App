/* eslint-disable max-len */
import React, {useState, useEffect} from 'react'
import { Container, Header, Icon, Form, Input, Button, Segment, Grid } from 'semantic-ui-react'
import UserModel from '../../../models/user';
import { useRecoilState } from "recoil"
import { userState } from "../../../recoil/atoms"

import "./Settings.css"

function UserSettings (props) {
    /* getting user instance from recoilState for handleProfileEdit */
    const [ user, setUser ] = useRecoilState(userState)
    console.log(user)
    const [username, setUsername] = useState("");
    const [bio, setBio] = useState("");
    const [email, setEmail] = useState("");
   /*  const [delete, setDelete] = useState([])
 */
  function handleProfileEdit(event) {
    event.preventDefault();
      UserModel.update({ username, bio, email }).then(json => {
      if (json.status === 201) {
        props.history.push("/profile");
        setUser(json.user)
        console.log(json)
      } else {
        console.log(json);
      }
    });
  }

  function deleteUser(event) {
      event.preventDefault();
      UserModel.delete(user.id).then(json => {
          console.log(json, "user was deleted ")
      })
  }
    

    return (
        <>
        <Segment>
          <Grid columns={2} relaxed="very">
          <Grid.Column>
    <Container text textAlign='center'>
    <Header as='h2' icon>
        <Icon name='settings' />
        Account Settings
        <Header.Subheader>
        Manage your account settings and preferences.
        </Header.Subheader>
        <Form onSubmit={handleProfileEdit}>

       

        <Form.Field inline>
        <label>Username</label>
        <Input placeholder={user.username} default={user.username} value={ username }  onChange={(e) => setUsername(e.target.value)} />
        </Form.Field>

        <Form.Field inline>
        <label>Edit Your Bio</label>
        <Input placeholder={user.bio} default={user.bio} value={ bio }  onChange={(e) => setBio(e.target.value)}/>
        </Form.Field>

        <Form.Field inline>
        <label>Email </label>
        <Input placeholder={user.email} default={user.email} value={ email }  onChange={(e) => setEmail(e.target.value)}/>
        </Form.Field>
        <Button type='submit' value="submit" >
        Submit these changes
      </Button>
        </Form>
    </Header>

    </Container>
    </Grid.Column>
    <Grid.Column>
    <Container text textAlign='center'>
    <Header as='h2' icon>
    <Icon name='user delete' />
        Looking To Delete Your Account?
        <Header.Subheader>
        The button below will delete the entirety of your account.
        </Header.Subheader>
        <Button color="red" onClick={deleteUser}> Delete My Account </Button>
    </Header>
    </Container>
    </Grid.Column>
    </Grid>
    </Segment>
</>
    )
}

export default UserSettings