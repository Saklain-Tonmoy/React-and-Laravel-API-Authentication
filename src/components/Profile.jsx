import React, { Component } from 'react'

export class Profile extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row justify-content-center mt-5">
                    <div className="jumbotron col-sm-8 col-md-6 col-lg-6 col-xl-6">
                        <h3 className="pb-3 text-center">User Information</h3>
                        <ul className="list">
                            <li className="list-item">ID: 1</li>
                            <li className="list-item">Name: Golam Saklain</li>
                            <li className="list-item">Email: tonmoysaklain@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Profile
