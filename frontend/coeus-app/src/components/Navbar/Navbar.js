import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import SearchBar from '../SearchBar/SearchBar'
import './Navbar.css'
import NewPost from './NewPost'

export default class MenuExampleLabeledIcons extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state

    return (
      <div className="NavBar">
      <Menu icon='labeled'>
     
        {/* logo + search bar */}
        <Menu.Menu position='left'> 
        <Menu.Item
          name='graduation cap'
          active={activeItem === 'graduation cap'}
          onClick={this.handleItemClick}
        >
          <Icon name='graduation cap' />
          Logo
        </Menu.Item>

        <Menu.Item>
          <SearchBar/>
        </Menu.Item>
        </Menu.Menu>

        {/* main nav items */}
        <Menu.Menu position='right'> 
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
        </Menu.Menu>
      
        {/* user profile + settings side */}

        <Menu.Menu position='right'> 
        <Menu.Item
          name='plus square'
          active={activeItem === 'plus square'}
          /* TODO: CHANGE HERE TO HANDLE Click */
          onClick={this.handleItemClick}
        >
          <Icon name='plus square' />
          <NewPost />
        </Menu.Item>

        <Menu.Item
          name='setting'
          active={activeItem === 'setting'}
          onClick={this.handleItemClick}
        >
          <Icon name='setting' />
          Settings
        </Menu.Item>
        </Menu.Menu>

      </Menu>
      </div>
    )
  }
}