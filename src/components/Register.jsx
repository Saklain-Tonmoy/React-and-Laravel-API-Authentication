import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Register extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row justify-content-center mt-5">
                    <div className="jumbotron col-sm-8 col-md-6 col-lg-6 col-xl-6">
                        <h2 className="pb-3 text-center">Register Account</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" id="username"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" id="email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input type="password" className="form-control" id="confirmPassword" />
                            </div>
                            <button type="submit" className="btn btn-success btn-block">Submit</button>
                            <br/>
                            Already have an account? <Link to="/login">Login</Link>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Register
