import React from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'

function exampleReducer(state, action) {
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
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
  })
  const { open, dimmer } = state

  return (
    <div>
     <Icon name='plus square' />
      <Button onClick={() => dispatch({ type: 'OPEN_MODAL' })}>Default</Button>
      <Modal
        dimmer={dimmer}
        open={open}
        onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
      >
        <Modal.Header>Use Google's location service?</Modal.Header>
        <Modal.Content>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
            Disagree
          </Button>
          <Button positive onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
            Agree
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  )
}

export default AddNewPost