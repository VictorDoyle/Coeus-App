import React from 'react'
import { Switch, Route } from 'react-router-dom'

/* Pages */
import LandingPage from '../pages/LandingPage'
import Homepage from '../pages/Homepage'
import News from '../pages/News'
import Profile from '../pages/Profile'

export default (
    <Switch>
        <Route exact path='/' component={ LandingPage } />
        <Route path='/home' component={ Homepage } />
        <Route path='/posts' component={ Homepage } />
        <Route path='/news' component= { News } />
        <Route path='/profile/' component= { Profile } />
    </Switch>
)

