import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class ForgotPassword extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row justify-content-center mt-5">
                    <div className="jumbotron col-sm-8 col-md-6 col-lg-6 col-xl-6">
                        <h2 className="pb-3 text-center">Forgot Password</h2>
                        <form>
                            <div className="form-group">
                                <label for="email">Email address</label>
                                <input type="email" className="form-control" id="email"/>
                            </div>
                            <button type="submit" className="btn btn-success btn-block">Submit</button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ForgotPassword
