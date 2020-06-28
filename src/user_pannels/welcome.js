import React, { Component } from 'react';

class User extends Component {


    render() {

        return (
            <div className="bg-image">
                {/*  <!-- nav -->  */}
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-10 mx-auto">
                            <nav class="navbar navbar-expand-lg navbar-light">
                                <a class="navbar-brand" href="#">
                                    <img src="../assets/images/exported/logo.svg" alt="" />
                                </a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNav">
                                    <ul class="navbar-nav ml-auto">
                                        <li class="nav-item dropdown mx-2">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                EN
                                        </a>
                                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a class="dropdown-item" href="#">ARAB</a>
                                                <a class="dropdown-item" href="#">SPANISH</a>
                                                <a class="dropdown-item" href="#">ANOTHER LANGUAGE</a>
                                            </div>
                                        </li>
                                        <li class="nav-item mx-2">
                                            <a class="nav-link" href="#">SUPPORT</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>


                <section class="login-n-regigster">
                    <div class="container-fluid user-container">
                        <div className="row mt-5">

                            <div className="col-xl-1"></div>
                            <div className="col-xl-11 mt-5 m-hide welcome-heading">
                                <h1>See the ads you need <span className="font-light">and</span> get paid</h1>
                                <h1 className="font-light">doing just that!</h1>
                            </div>

                            <div className="col-xl-8 d-flex ads-container"></div>

                            <div className="col-xl-4 d-flex">
                                <a className="mx-auto f-image" href="#"><img src="../assets/images/F.png" /> </a>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-xl-8"></div>
                            <div className="col-xl-4 d-flex justify-content-center l-hinde">
                                <button className="start-btn">START</button>
                            </div>
                        </div>


                        <div className="row mt-5">
                            <div className="col-xl-1"></div>
                            <div className="col-xl-11 contact-us">
                                <div>You want your ad listed here?</div>
                                <button>Contact Us</button>
                            </div>
                        </div>

                        <div className="row welcome-socials">
                            <div class="col-xl-8 mt-5 mb-5 socials d-flex">
                                <div class="social-buttons">
                                    <a class="mr-3" href="#"><img
                                        src="../assets/images/exported/login_socials/medium-with-circle.svg"
                                        alt="flash wallet medium" /></a>
                                    <a class="mr-3" href="#"><img
                                        src="../assets/images/exported/login_socials/facebook-with-circle.svg"
                                        alt="flash wallet facebook" /></a>
                                    <a class="mr-3" href="#"><img
                                        src="../assets/images/exported/login_socials/twitter-with-circle.svg"
                                        alt="flash wallet twitter" /></a>
                                    <a class="mr-3" href="#"><img
                                        src="../assets/images/exported/login_socials/instagram-with-circle.svg"
                                        alt="flash wallet instagram" /></a>
                                    <a class="mr-3" href="#"><img
                                        src="../assets/images/exported/login_socials/linkedin-with-circle.svg"
                                        alt="flash wallet linkedIn" /></a>
                                    <a href="#"><img src="../assets/images/exported/login_socials/dribbble-with-circle.svg"
                                        alt="flash wallet dribbble" /></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>


        );
    }
}
export default User;