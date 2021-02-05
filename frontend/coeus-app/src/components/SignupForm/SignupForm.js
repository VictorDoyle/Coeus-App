import React from 'react'
import { Button, Checkbox, Form, Message } from 'semantic-ui-react'

const SignupForm = () => (
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Input label='Email' placeholder='youremail@email.com' />
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
   {/*  <Form success>
    <Message
      success
      header='Form Completed'
      content="You're all signed up for the newsletter"
    />
    </Form> */}
  </Form>
)

export default SignupForm