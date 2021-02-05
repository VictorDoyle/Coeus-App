import React, { Component } from 'react'
import { Icon, Menu, Header } from 'semantic-ui-react'
import '../LeftSidebar/LeftSideBar.css'

export default class MenuExampleLabeledIconsVertical extends Component {
  state = { activeItem: 'gamepad' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
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

        </Menu>
    </div>
    )
  }
}
