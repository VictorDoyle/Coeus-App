import React , { useEffect, useState } from 'react'
import { Button, Header, Icon, Modal, Image, Comment } from 'semantic-ui-react'
import ProfilePosts from './Posts'
import LikeModel from '../../../models/like'

function PostModal(props) {
  const [open, setOpen] = useState(false)


  function handleLike(event) {
    event.preventDefault();
    LikeModel.create(props).then(json => {
        console.log(json, "liked!"); 
    });
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button><Image src='https://picsum.photos/200' /></Button>}
    >
      <Modal.Header>{props.post.author.username}</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
        <Modal.Description>
          <Header>{props.post.title}</Header>
          <p>
          {props.post.description}
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Content>
      <Modal.Description>
          <Header> Post Comments: </Header>
          
     
        {props.post.comments.map((comment, index) => {
     return <> 
     <Comment name="comment" color="blue" {...comment} key={ comment.id } >

     <Comment.Content>
        <Comment.Author> {/* pass in comment.author.name here */}</Comment.Author>
        <Comment.Metadata>
         
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
    </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={handleLike}>
          <Icon name="heart"></Icon>Like
        </Button>
        <Button
          content="Return"
          labelPosition='right'
          icon='long arrow alternate right'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default PostModal

