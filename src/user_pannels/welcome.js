import React, { Component } from 'react';
class Welcome extends Component {
    state = {}
    render() {
        return (

            <div className="row h-100 d-flex">

                <div className="col-md-12 d-flex justify-content-center">
                    <img data-aos="zoom-in" data-aos-duration="1000" className="welcome-logo mt-5" src="../assets/images/exported/logo.svg" alt="" />
                </div>

                <div className="col-md-12 get-started d-flex justify-content-center mt-4">
                    <a data-aos="fade-up" data-aos-delay="250" onClick={() => this.props.welcome()} href="#">Get Started</a>
                </div>
            </div>

        );
    }
}

export default Welcome;