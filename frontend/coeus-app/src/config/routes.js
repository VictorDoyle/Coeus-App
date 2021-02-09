import React from 'react'
import { Switch, Route } from 'react-router-dom'

/* Pages */
import LandingPage from '../pages/LandingPage'
import Homepage from '../pages/Homepage'
import News from '../pages/News'
import Profile from '../pages/Profile'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Settings from '../pages/Settings'


export default (
    <Switch>
        <Route exact path='/' component={ LandingPage } />
        {/* AUTH ROUTES */}
        <Route path='/register' component = { Register } />
        <Route path='/login' component = { Login } />
        {/* APP ROUTES */}
        <Route path='/home' component={ Homepage } />
        <Route path='/posts' component={ Homepage } />
        {/* TODO: add component for "postShow"  */}
        <Route path='/posts/:id' component= { Homepage } />
        <Route path='/news' component= { News } />
        <Route path='/profile/' component= { Profile } />
        <Route path='/settings' component= { Settings } />
    </Switch>
)

