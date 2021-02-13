import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Signup } from '../pages/Signup'
import { PrivateMessage } from '../pages/PrivateMessage'
import { Error } from '../pages/Error'
import {
    HOME,
    LOGIN,
    SIGNUP,
    ME,
    SERVER,
    PRIVATEMESSAGE,
    ERROR
} from './pages'
import { Me } from '../pages/Me'
import { Server } from '../pages/Server'

export default function Routes() {
    return (
        <Switch>
            <Route path={HOME} exact component={Home} />
            <Route path={LOGIN} exact component={Login} />
            <Route path={ME} exact component={Me} />
            <Route path={SIGNUP} exact component={Signup} />
            <Route path={`${SERVER}/:id`} exact component={Server} />
            <Route path={PRIVATEMESSAGE} exact component={PrivateMessage} />
            <Route path={ERROR} exact component={Error} />

        </Switch>
    )
}