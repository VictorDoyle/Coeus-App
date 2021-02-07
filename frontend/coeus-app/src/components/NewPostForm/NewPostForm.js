import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'


class NewPostForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
        </Form.Group>
        <Form.Group inline>
          
        </Form.Group>
        <Form.TextArea label='About' style={{ minHeight: 100, maxHeight: 500 }} placeholder='Write what you want to post about!' />
        <Form.Checkbox label="Publish immediately? (If unchecked, we'll save your post for later posting)" />
      {/* TODO: add smiley functionality + image input box */}
      </Form>
    )
  }
}

export default NewPostForm