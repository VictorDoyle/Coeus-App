import React, { useEffect, useState } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import SearchBar from '../SearchBar/SearchBar'
import './Navbar.css'
import NewPost from './NewPost'
import { Link } from 'react-router-dom'
import { userState } from "../../recoil/atoms"
import { useRecoilState } from "recoil"
import UserModel from '../../models/user'

function Navbar () {
  const [ activeItem, setActiveItem] = useState("home")
  /* find currentUser via recoilstate (jwt token) */
  const [ user, setUser ] = useRecoilState(userState)
  const handleItemClick = (e, { name }) => setActiveItem( name )

    /* findUsers for searchbar query set */
    const [users, setUsers] = useState([])

    useEffect(function () {
      fetchData();
    }, [])
  
  
    const fetchData = () => {
      UserModel.all().then(data => {
        console.log(data)
        setUsers( data.users )
      })}
    


 
    return (
      <div className="NavBar">
      <Menu icon='labeled'>
     
        {/* logo + search bar */}
        <Menu.Menu position='left'> 
        <Link to={'/home'}>
        <Menu.Item
          name='graduation cap'
          active={activeItem === 'graduation cap'}
          onClick={handleItemClick}
        >
          <Icon name='graduation cap' />
          Logo
        </Menu.Item>
        </Link>

        <Menu.Item>
          <SearchBar users={users} />
        </Menu.Item>
        </Menu.Menu>

        {/* main nav items */}
        <Menu.Menu position='right'> 
        <Link to={'/home'}>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        >
          <Icon name='home' />
          Home
        </Menu.Item>
        </Link>

        <Link to={'/posts'}>
        <Menu.Item
          name='write square'
          active={activeItem === 'write square'}
          onClick={handleItemClick}
        >
          <Icon name='write square' />
          Posts
        </Menu.Item>
        </Link>

        <Link to={'/news'}>
        <Menu.Item
          name='newspaper outline'
          active={activeItem === 'newspaper outline'}
          onClick={handleItemClick}
        >
          <Icon name='newspaper outline' />
          News
        </Menu.Item>
        </Link>
        </Menu.Menu>
      
        {/* user profile + settings side */}
        <Menu.Menu position='right'> 

        <Link to={`/profile/${user && user.id }`}>
        <Menu.Item
          name='user'
          active={activeItem === 'user'}
          onClick={handleItemClick}
        >
          <Icon name='user' />
          {user && user.username }
        </Menu.Item>
        </Link>

        <Menu.Item
          name='plus square'
          active={activeItem === 'plus square'}
          /* TODO: CHANGE HERE TO HANDLE Click */
          onClick={handleItemClick}
        >
          <NewPost />
        </Menu.Item>

        <Link to={'/settings'}>
        <Menu.Item
          name='setting'
          active={activeItem === 'setting'}
          onClick={handleItemClick}
        >
          <Icon name='setting' />
          Settings
        </Menu.Item>
        </Link>
        </Menu.Menu>

      </Menu>
      </div>
    )
  }


export default Navbar