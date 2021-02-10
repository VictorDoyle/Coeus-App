import React, { Component } from 'react'
import { Icon, Menu, Header, Feed } from 'semantic-ui-react'
import '../LeftSidebar/LeftSideBar.css'
import Notification from '../../components/Notification/Notification'


function LeftSideBar (props) {
  return(
    <div className="leftSideBar"> 
        <Menu borderless icon='labeled' vertical>
            <Menu.Item
            /* TODO: refactor for comp mounting of rerender of "your user profile"
            name='user'
            active={activeItem === 'user'}
            onClick={this.handleItemClick} */
            >
              <Header as='h3'>
              <Icon name='user' /> 
                <Header.Content>
                Your Username Here
                </Header.Content>
              </Header>
            </Menu.Item>

            <Menu.Item>
                Notifications here
            </Menu.Item>
           
            <Feed>
              Notifications brought in Here
              <Notification/>
            </Feed>

        </Menu>
    </div>
  )
}




export default LeftSideBar

