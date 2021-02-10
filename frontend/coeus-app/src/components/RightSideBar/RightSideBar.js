import React, { Component } from 'react'
import { Icon, Menu, Header } from 'semantic-ui-react'
import '../RightSideBar/RightSideBar.css'
import FriendsList from '../../components/FriendsList/FriendsList'


function RightSideBar(props) {
  return(
    <div className="rightSideBar">
        <Menu icon='labeled' vertical>
          <Menu.Item>
            <div>
            <Header size='medium'>Your Friends List</Header>
            </div>
          </Menu.Item>

          <Menu.Item>
              <FriendsList />
          </Menu.Item>

        </Menu>
    </div>
  )
}
export default  RightSideBar 
