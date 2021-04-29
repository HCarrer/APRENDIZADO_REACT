import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'


import login from './Components/login'
import mainpage from './Components/mainpage'
import error404 from './Components/404'


ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={mainpage}/>
            <Route exact path="/login" component={login}/>
            <Route component={error404}/>
        </Switch>
    </Router>,
    document.getElementById('root')
)