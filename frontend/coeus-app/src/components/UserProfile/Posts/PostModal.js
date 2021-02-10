import React , { useEffect, useState } from 'react'
import { Button, Header, Icon, Modal, Image } from 'semantic-ui-react'
import ProfilePosts from './Posts'
/* 
function PostModal(props) {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>{props.post.author}</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
        <Modal.Description>
          <Header>{props.post.title}</Header>
          <p>
            {props.post.description}
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default PostModal
 */

function PostModal(props) {
  const [open, setOpen] = React.useState(false)
  

  return (
    <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      /* FIXME: restyle Button for no styling */
      trigger={<Button><Image src='https://picsum.photos/200' /></Button>}
    >
      <Modal.Header>{props.author.username}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          {props.post.description}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>OK</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default PostModal