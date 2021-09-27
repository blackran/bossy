import React, { useState } from 'react'
import axios from "axios";

function ForgotPassword() {
    const [state, setState] = useState({
        email: '',
        error: '',
        success: ''

    });
    const { email, error, success } = state;

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.value });
    };

    const forgotPasswordHandler = async (event) => {
        event.preventDefault();
        console.table({ email });
        axios
            .post(`${process.env.REACT_APP_API}/api/user/forgotPassword`, { email })
            .then(response => {
                console.log(response);
                // response will contain token and name
                setState({
                    ...state,
                    email: '',
                });
                // redirect to create page
            })
            .catch(error => {
                console.log(error.response);
                alert(error.response.data.error);
            });
    };
    return (

        <div className="app-content content">
            <div className="content-overlay"></div>
            <div className="header-navbar-shadow"></div>
            <div className="content-wrapper">
                <div className="content-header row">
                </div>
                <div className="content-body">
                    {error && <div className="alert alert-danger mt-1 alert-validation-msg" role="alert">
                        <i className="feather icon-info mr-1 align-middle"></i>
                        <span><strong>{error}</strong></span>
                    </div>
                    }
                    {success && <div className="alert alert-primary mb-2" role="alert">
                        <strong>{success}</strong>
                    </div>}
                    <div className="row flexbox-container">
                        <div className="col-xl-7 col-md-9 col-10 d-flex justify-content-center px-0">
                            <div className="card bg-authentication rounded-0 mb-0">
                                <div className="row m-0">
                                    <div className="col-lg-6 d-lg-block d-none text-center align-self-center">
                                        <img src="../../../app-assets/images/pages/forgot-password.png" alt="branding logo" />
                                    </div>
                                    <div className="col-lg-6 col-12 p-0">
                                        <div className="card rounded-0 mb-0 px-2 py-1">
                                            <div className="card-header pb-1">
                                                <div className="card-title">
                                                    <h4 className="mb-0">Récupérez votre mot de passe</h4>
                                                </div>
                                            </div>
                                            <p className="px-2 mb-0">Veuillez entrer votre adresse e-mail et nous vous enverrons des instructions pour réinitialiser votre mot de passe.</p>
                                            <div className="card-content">
                                                <div className="card-body">
                                                    <form onSubmit={forgotPasswordHandler}>
                                                        <div className="form-label-group">
                                                            <input
                                                                onChange={handleChange('email')}
                                                                value={email}
                                                                type="email"
                                                                className="form-control"
                                                                placeholder="E-mail" />
                                                            <label>E-mail</label>
                                                        </div>
                                                    </form>
                                                    <div className="float-md-left d-block mb-1">
                                                        <a href="auth-login.html" className="btn btn-outline-primary btn-block px-75">
                                                            Retour connexion</a>
                                                    </div>
                                                    <div className="float-md-right d-block mb-1">
                                                        <button className="btn btn-primary btn-block px-75">Envoyer</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default ForgotPassword
