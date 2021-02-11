import _ from 'lodash'
import React, { Component } from 'react'
import { Button, Card, Divider, Image, Placeholder } from 'semantic-ui-react'


const HomePostLoader = () => (
      <>
        <Card.Group doubling itemsPerRow={3} stackable>
          
            <Card>
             
                <Placeholder>
                  <Placeholder.Image square />
                </Placeholder>

              <Card.Content>
                
                  <Placeholder>
                    <Placeholder.Header>
                      <Placeholder.Line length='very short' />
                      <Placeholder.Line length='medium' />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                      <Placeholder.Line length='short' />
                    </Placeholder.Paragraph>
                  </Placeholder>
                
                 
                
              </Card.Content>

              <Card.Content extra>
                <Button disabled primary>
                  Like
                </Button>
                <Button disabled>Comment</Button>
              </Card.Content>
            </Card>
        </Card.Group>
          
      </>
    )

export default HomePostLoader