import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import SearchBar from '../SearchBar/SearchBar'

export default class MenuExampleLabeledIcons extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu icon='labeled'>
        {/* logo + search bar */}
        <div className="leftNav">
        <Menu.Item
          name='graduation cap'
          active={activeItem === 'graduation cap'}
          onClick={this.handleItemClick}
        >
          <Icon name='graduation cap' />
          
        </Menu.Item>

        <Menu.Item>
          <SearchBar/>
        </Menu.Item>
        </div>

        {/* main nav items */}
        <div className="centerNav">
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          <Icon name='home' />
          Home
        </Menu.Item>

        <Menu.Item
          name='write square'
          active={activeItem === 'write square'}
          onClick={this.handleItemClick}
        >
          <Icon name='write square' />
          Posts
        </Menu.Item>

        <Menu.Item
          name='newspaper outline'
          active={activeItem === 'newspaper outline'}
          onClick={this.handleItemClick}
        >
          <Icon name='newspaper outline' />
          News
        </Menu.Item>
        </div>
        {/* user profile + settings side */}

        <div className="rightNavBar"> 
        <Menu.Item
          name='plus square'
          active={activeItem === 'plus square'}
          onClick={this.handleItemClick}
        >
          <Icon name='plus square' />
          New Post
        </Menu.Item>

        <Menu.Item
          name='setting'
          active={activeItem === 'setting'}
          onClick={this.handleItemClick}
        >
          <Icon name='setting' />
          Settings
        </Menu.Item>
        </div>

      </Menu>
    )
  }
}