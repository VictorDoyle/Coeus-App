import React, {useState} from 'react'
import { Button, Comment, Form } from 'semantic-ui-react'
import CommentModel from '../../models/comment'

function CommentBox (props) {
  const [content, setComment] = useState("");
  const [postId, setpostId ] = useState("");

  console.log("this post is", props.id)
  
  function handleCommentSubmit(event) {
    event.preventDefault();
    CommentModel.create({ content, postId:props.id}).then(json => {
      if (json.status === 201) {
        console.log(json, "user commented"); 
        console.log(json);
      }
    });
  }


  /* mapping out comments */
  let commentsList = props.comments.map((comment, index) => {
    return  <Comment {...comment} key={ comment.id } /> 

  })



  return(
    <Comment.Group>
     {props.comments.map((comment, index) => {
    /* return  <Comment {...comment} key={ comment.id } />  */
    return  <Comment {...comment} key={ comment.id } />

  })}
    <Comment>

      <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
      <Comment.Content>
        <Comment.Author>{/* {comment.authorId} */}</Comment.Author>
        <Comment.Metadata>
          <div>{/* {comment.createdAt} */}</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>
          {/* {comment.content} */}
          </p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Form reply>
      <Form.TextArea value={ content }  onChange={(e) => setComment(e.target.value)}  />
      <Button content='Add Comment' labelPosition='left' icon='edit' primary onClick={handleCommentSubmit}/>
    </Form>
  </Comment.Group>

  )
}

export default CommentBox