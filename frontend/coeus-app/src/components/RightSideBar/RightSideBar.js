import React, { Component } from 'react'
import { Icon, Menu, Header } from 'semantic-ui-react'
import '../RightSideBar/RightSideBar.css'
import FriendsList from '../../components/FriendsList/FriendsList'

export default class MenuExampleLabeledIconsVertical extends Component {
  state = { activeItem: 'gamepad' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    /* keep state for remounting main components of friends user profile */
    const { activeItem } = this.state

    return (
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
}
