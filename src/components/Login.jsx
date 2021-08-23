import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password: '',
             message: ''
        }
    }

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        console.log(this.state.email);
        console.log(this.state.password);

        const data = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('/login', data)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="row justify-content-center mt-5">
                    <div className="jumbotron col-sm-8 col-md-6 col-lg-6 col-xl-6">
                        <h2 className="pb-3 text-center">Login to your account</h2>
                        <form onSubmit={this.onFormSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    className="form-control" 
                                    required
                                    onChange = {this.onChangeHandler}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    className="form-control" 
                                    required
                                    onChange = {this.onChangeHandler}
                                />
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
