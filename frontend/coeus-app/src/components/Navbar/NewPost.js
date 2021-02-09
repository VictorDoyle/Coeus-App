import React from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'
import NewPostForm from '../NewPostForm/NewPostForm'
import './NewPost.css'

function openCloseReducer(state, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { open: true, dimmer: action.dimmer }
    case 'CLOSE_MODAL':
      return { open: false }
    default:
      throw new Error()
  }
}

function AddNewPost() {
  const [state, dispatch] = React.useReducer(openCloseReducer, {
    open: false,
    dimmer: undefined,
  })
  const { open, dimmer } = state

  return (
    <div>
        <Icon onClick={() => dispatch({ type: 'OPEN_MODAL' })}>
            <Icon name='plus square'  size='big'className="newPostButton"/>
        </Icon>
    
      <Modal
        dimmer={dimmer}
        open={open}
        onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
      >
        <Modal.Header> Create Post
        <Button circular icon='close' floated='right' onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>  
          </Button>
        </Modal.Header>
        <Modal.Content>
         <NewPostForm />
        </Modal.Content>
        <Modal.Actions>
          <Button fluid onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
            Post
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  )
}

export default AddNewPost