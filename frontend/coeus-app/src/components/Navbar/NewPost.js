import React, { Component, useState, useReducer } from 'react'
import { Form, Button, Input, Modal, Icon } from 'semantic-ui-react'
import './NewPost.css'

/* testing */
import PostModel from '../../models/post'
import EmojiBox from '../EmojiBox/EmojiBox'



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



function AddNewPost(props) {
  const [state, dispatch] = useReducer(openCloseReducer, {
    open: false,
    dimmer: undefined,
  })
  const { open, dimmer } = state


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [published, setPublished] = useState(false);
  const [category, setCategory] = useState("");
 
  function handleSubmit(event) {
    event.preventDefault();
    PostModel.create({ title, description, published, category }).then(json => {
      if (json.status === 201) {
        props.history.push("/posts");
      } else {
        console.log(json);
      }
    });
  }

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
        <Form onSubmit={handleSubmit}>
      <Form.Group widths='equal'>
      </Form.Group>
      <Form.Group inline>
      <Form.Field>
        <label>Post Title</label>
        <input type ="text"  placeholder='Your Title Here' value={ title }  onChange={(e) => setTitle(e.target.value)}/>
        </Form.Field>
          
        </Form.Group>
        <Form.TextArea label='About' type ="text" style={{ minHeight: 100, maxHeight: 500 }} placeholder='Your post description goes in here!' value={ description }  onChange={(e) => setDescription(e.target.value)}/>
        <Form.Field>
        <label>Post Category (optional)</label>
        <input placeholder='Choose A Category For Your Post' type ="text"  value={ category } onChange={(e) => setCategory(e.target.value)} />
        </Form.Field>
        <Form.Checkbox label="Publish Now? (If unchecked, we'll save your post for later posting)" value= { published}  onChange={(e) => setPublished(!published)} />

      <EmojiBox />
       
      {/* <Button type='submit' value="submit" onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
        Post
      </Button> */}
      </Form>
        </Modal.Content>
        <Modal.Actions>
        <Button type='submit' value="submit" onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
        Post
      </Button>
        </Modal.Actions>
      </Modal>
    </div>
  )
}

export default AddNewPost