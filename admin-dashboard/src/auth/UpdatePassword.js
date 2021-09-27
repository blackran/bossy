import React from 'react'

function UpdatePassword() {
    return (
        <div className="app-content content">
            <div className="content-overlay"></div>
            <div className="header-navbar-shadow"></div>
            <div className="content-wrapper">
                <div className="content-header row">
                </div>
                <div className="content-body">
                    <section className="row flexbox-container">
                        <div className="col-xl-7 col-10 d-flex justify-content-center">
                            <div className="card bg-authentication rounded-0 mb-0 w-100">
                                <div className="row m-0">
                                    <div className="col-lg-6 d-lg-block d-none text-center align-self-center p-0">
                                        <img src="../../../app-assets/images/pages/reset-password.png" alt="branding logo" />
                                    </div>
                                    <div className="col-lg-6 col-12 p-0">
                                        <div className="card rounded-0 mb-0 px-2">
                                            <div className="card-header pb-1">
                                                <div className="card-title">
                                                    <h4 className="mb-0">Reset Password</h4>
                                                </div>
                                            </div>
                                            <p className="px-2">Please enter your new password.</p>
                                            <div className="card-content">
                                                <div className="card-body pt-1">
                                                    <form>

                                                        <fieldset className="form-label-group">
                                                            <input type="password" className="form-control" id="user-password" placeholder="Password" required />
                                                            <label for="user-password">Password</label>
                                                        </fieldset>

                                                        <fieldset className="form-label-group">
                                                            <input type="password" className="form-control" id="user-confirm-password" placeholder="Confirm Password" required />
                                                            <label for="user-confirm-password">Confirm Password</label>
                                                        </fieldset>
                                                        <div className="row pt-2">
                                                            <div className="col-12 col-md-6 mb-1">
                                                                <a href="auth-login.html" className="btn btn-outline-primary btn-block px-0">Go Back to Login</a>
                                                            </div>
                                                            <div className="col-12 col-md-6 mb-1">
                                                                <button type="submit" className="btn btn-primary btn-block px-0">Reset</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}

export default UpdatePassword
