/* eslint-disable max-len */
import React, {useState, useEffect} from 'react'
import { Container, Header, Icon, Form, Input, Button } from 'semantic-ui-react'
import UserModel from '../../../models/user';
import { useRecoilState } from "recoil"
import { userState } from "../../../recoil/atoms"

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

   /*  useEffect(function () {
        fetchData();
      }, [props.match.params.id ])
     */

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

    <Container text textAlign='center'>
    <Header as='h2' icon>
    <Icon name='user delete' />
        Looking To Delete Your Account?
        <Header.Subheader>
        The button below will delete the entirety of your account.
        </Header.Subheader>
        <Button color="red"> Delete My Account </Button>
    </Header>
    </Container>

</>
    )
}

export default UserSettings