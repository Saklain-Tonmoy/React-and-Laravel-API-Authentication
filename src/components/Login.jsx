import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row justify-content-center mt-5">
                    <div className="jumbotron col-sm-8 col-md-6 col-lg-6 col-xl-6">
                        <h2 className="pb-3 text-center">Login to your account</h2>
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-success btn-block">Submit</button>
                            <br/>
                            Forgot Password? <Link to="/forgotpassword">click here</Link>
                            <br/>
                            Don't have an account? <Link to="/register">Register Now</Link>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Login
