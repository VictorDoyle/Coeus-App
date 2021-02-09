import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import PostModel from '../../models/post'
import EmojiBox from '../EmojiBox/EmojiBox'

class NewPostForm extends Component {
  state = {
    title: '',
    description: '',
    published: false,
    category: '',
    author: '',
    completed: false,
  }
  
  handleSubmit = (event) => {
    event.preventDefault()

    PostModel.create(this.state)
      .then(data => {
        // redirecting with react router
        this.props.history.push('/posts')
      })
  }

  handleChange = (event) => {
    if (event.target.type !== 'text') {
      this.setState({ completed: !this.state.completed })
    }

    this.setState({
      [event.target.name]: event.target.value
    })
  }

/* FIXME: form not filling with information + test submission */
  render() {
    return (
      <Form onSubmit={ this.handleSubmit }>
        <Form.Group widths='equal'>
        </Form.Group>
        <Form.Group inline>
        <Form.Field>
        <label>Post Title</label>
        <input type ="text"  placeholder='Your Title Here' value={ this.state.title}  onChange={this.handleChange}/>
        </Form.Field>
          
        </Form.Group>
        <Form.TextArea label='About' type ="text" style={{ minHeight: 100, maxHeight: 500 }} placeholder='Your post description goes in here!' value={ this.state.description }  onChange={this.handleChange}/>
        <Form.Field>
        <label>Post Category (optional)</label>
        <input placeholder='Choose A Category For Your Post' type ="text"  value={ this.state.category}  />
        </Form.Field>
        <Form.Checkbox label="Publish Now? (If unchecked, we'll save your post for later posting)" onChange={this.handleChange} />
       
      {/* TODO: add smiley functionality + image input box */}
      <EmojiBox />
      </Form>
    )
  }
}

export default NewPostForm