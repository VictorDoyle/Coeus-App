import React, {useState, useReducer, useEffect} from 'react'
import { Button, Comment, Form , Icon} from 'semantic-ui-react'
import CommentModel from '../../models/comment'
/* CSS */
import "./CommentShow.css"

function showUnshowComments(state, action) {
    switch (action.type) {
      case 'SHOW_COMMENTS':
        return {  ...state, collapsed: false }
      case 'UNSHOW_COMMENTS':
        return { ...state, collapsed: true }
      default:
        throw new Error()
    }
  }

  const initialState = {
    collapsed: false
  };

function CommentShow(props) {
  const [content, setComment] = useState("");
  const [postId, setpostId ] = useState("");
  /* show comments on/off */
  const [state, dispatch] = useReducer(showUnshowComments, initialState);
  const { collapsed } = state




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
/*   let commentsList = props.comments.map((comment, index) => {
    return  <Comment {...comment} key={ comment.id } /> 

  }) */



  return(
      <>
           {collapsed ? <div className="commentIcon" > <a  onClick={() => dispatch({ type: 'SHOW_COMMENTS' })}>  <Icon  name='comment' color={"blue"}/> Show {props.comments.length} Comments</a> </div> : <div className="commentIcon" ><a  onClick={() => dispatch({ type: 'UNSHOW_COMMENTS' })}> <Icon  name='comment' color={"blue"}/> {props.comments.length} Comments </a> </div>}
     
      <Comment.Group collapsed={collapsed}>

      
        {/* <Icon name='comment' color={"blue"}/> {props.comments.length} Comments */}
     {props.comments.map((comment, index) => {
    /* return  <Comment {...comment} key={ comment.id } />  */
    return  <> 
    <Comment className="commentShow" {...comment} key={ comment.id }>
        <Comment.Content>
        <Comment.Author> {props.author.username}</Comment.Author>
        <Comment.Metadata>
          <div>posted on: {comment.createdAt}</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>
          {comment.content}
          </p>
        </Comment.Text>
      </Comment.Content>
    </Comment>
   
    
    </>
   

  })}
  </Comment.Group>
  <Form reply>
      <Form.TextArea value={ content }  onChange={(e) => setComment(e.target.value)}  />
      <Button className="commentButton" content='Add Comment' labelPosition='left' icon='edit' primary onClick={handleCommentSubmit}/>
    </Form>
  </>
  )
}

export default CommentShow