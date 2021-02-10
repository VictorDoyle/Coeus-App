import React, { Component, useState } from 'react'
import { Form, Button, Input } from 'semantic-ui-react'
import PostModel from '../../models/post'
import EmojiBox from '../EmojiBox/EmojiBox'
import { userState } from  "../../recoil/atoms"

function NewPostForm(props) {
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
        <Form.Checkbox label="Publish Now? (If unchecked, we'll save your post for later posting)" value= {published} onChange={(e) => setPublished(!published)} />
      {/* TODO: add smiley functionality + image input box */}
      <EmojiBox />
      <Button type='submit' value="submit">
        Post
      </Button>
      </Form>
    </div>
  );
}

export default NewPostForm;
