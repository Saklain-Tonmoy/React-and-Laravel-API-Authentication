import React, { Component } from 'react'
import Nav from './Nav'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import ForgotPassword from '../components/ForgotPassword'
import Profile from '../components/Profile'
import ResetPassword from '../components/ResetPassword'

export class Header extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Nav/>
                    
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path="/login">
                            <Login/>
                        </Route>
                        <Route exact path="/register">
                            <Register/>
                        </Route>
                        <Route exact path="/forgotpassword">
                            <ForgotPassword/>
                        </Route>
                        <Route exact path="/profile">
                            <Profile/>
                        </Route>
                        <Route exact path="/resetpassword">
                            <ResetPassword/>
                        </Route>
                    </Switch>
                </React.Fragment>
            </Router>
        )
    }
}

export default Header
