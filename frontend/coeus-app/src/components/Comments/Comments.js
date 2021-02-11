import React, {useState} from 'react'
import { Button, Comment, Form } from 'semantic-ui-react'
import CommentModel from '../../models/comment'

function CommentBox () {
  const [content, setComment] = useState("");
  
  function handleCommentSubmit(event) {
    event.preventDefault();
    CommentModel.create({ content}).then(json => {
      if (json.status === 201) {
        console.log(json);
      }
    });
  }
  return(
    <Comment.Group>
    <Comment>
      <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
      <Comment.Content>
        <Comment.Author>Joe Henderson</Comment.Author>
        <Comment.Metadata>
          <div>1 day ago</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>
            The hours, minutes and seconds stand as visible reminders that your
            effort put them all there.
          </p>
          <p>
            Preserve until your next run, when the watch lets you see how
            Impermanent your efforts are.
          </p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
      <Comment.Content>
        <Comment.Author>Christian Rocha</Comment.Author>
        <Comment.Metadata>
          <div>2 days ago</div>
        </Comment.Metadata>
        <Comment.Text>I re-tweeted this.</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Form reply>
      <Form.TextArea />
      <Button content='Add Comment' value={ content }  onChange={(e) => setComment(e.target.value)} labelPosition='left' icon='edit' primary onClick={handleCommentSubmit}/>
    </Form>
  </Comment.Group>

  )
}

export default CommentBox