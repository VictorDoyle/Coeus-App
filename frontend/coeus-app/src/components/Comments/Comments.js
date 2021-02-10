import React, { Component } from 'react'
import { Checkbox, Comment, Form, Button } from 'semantic-ui-react'

/* 
function sendComment(state, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { open: true, dimmer: action.dimmer }
    case 'CLOSE_MODAL':
      return { open: false }
    default:
      throw new Error()
  }
}

function CommentBox (props) {
  const [state, dispatch] = React.useReducer(openCloseReducer, {
    open: false,
    dimmer: undefined,
  })
  const [post, setPost] = useState("");
  const [author, setAuthor] = useState("");
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
}









 */













export default class CommentBox extends Component {
  state = { collapsed: true }

  handleCheckbox = (e, { checked }) => this.setState({ collapsed: checked })

  render() {
    const { collapsed } = this.state

    return (
      <div>
        <Checkbox
          defaultChecked
          label='Less Comments'
          onChange={this.handleCheckbox}
        />

        <Comment.Group>
          <Comment>
            <Comment.Avatar as='a' src='/images/avatar/small/christian.jpg' />
            <Comment.Content>
              <Comment.Author as='a'>Christian Rocha</Comment.Author>
              <Comment.Metadata>
                <span>2 days ago</span>
              </Comment.Metadata>
              <Comment.Text>
                I'm very interested in this motherboard. Do you know if it'd
                work in a Intel LGA775 CPU socket?
              </Comment.Text>
              <Comment.Actions>
                <a>Reply</a>
              </Comment.Actions>
            </Comment.Content>

            <Comment.Group collapsed={collapsed}>
              <Comment>
                <Comment.Avatar as='a' src='/images/avatar/small/elliot.jpg' />
                <Comment.Content>
                  <Comment.Author as='a'>Elliot Fu</Comment.Author>
                  <Comment.Metadata>
                    <span>1 day ago</span>
                  </Comment.Metadata>
                  <Comment.Text>No, it wont</Comment.Text>
                  <Comment.Actions>
                    <a>Reply</a>
                  </Comment.Actions>
                </Comment.Content>

                <Comment.Group>
                  <Comment>
                    <Comment.Avatar
                      as='a'
                      src='/images/avatar/small/jenny.jpg'
                    />
                    <Comment.Content>
                      <Comment.Author as='a'>Jenny Hess</Comment.Author>
                      <Comment.Metadata>
                        <span>20 minutes ago</span>
                      </Comment.Metadata>
                      <Comment.Text>Maybe it would.</Comment.Text>
                      <Comment.Actions>
                        <a>Reply</a>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </Comment.Group>
              </Comment>
            </Comment.Group>
          </Comment>
          <Form reply>
      <Form.TextArea />
      {/* Add +1 to post.like.value && push(currentUser.username/or id) into likes[] */}
      <Button content='Like' labelPosition='left' icon='heart' primary />
      <Button content='Add Comment' labelPosition='right' icon='edit' primary />
    </Form>
        </Comment.Group>
      </div>
    )
  }
}