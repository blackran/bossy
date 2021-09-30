import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { authenticate, getUser } from '../helpers/Helpers';
import Swal from "sweetalert2";

const Login = props => {
    // create a state
    const [state, setState] = useState({
        email: '',
        password: ''
    });
    const { email, password } = state; // destructure values from state

    useEffect(() => {
        getUser() && props.history.push('/');
    }, [props.history]);

    // onchange event handler
    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.table({ email, password });
        axios
            .post(`${process.env.REACT_APP_API}/api/user/login`, { email, password })
            .then(response => {
                console.log(response);
                // response will contain token and name
                authenticate(response, () => props.history.push('/dashboard'));
                // redirect to create page
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'oups...',
                    text: "Votre E-mail ou mots de passe est incorrect ! réessayer",
                })
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
                    <section className="row flexbox-container">
                        <div className="col-xl-8 col-11 d-flex justify-content-center">
                            <div className="card bg-authentication rounded-0 mb-0">
                                <div className="row m-0">
                                    <div className="col-lg-6 d-lg-block d-none text-center align-self-center px-1 py-0">
                                        <img src="../../../app-assets/images/pages/login.png" alt="branding logo" />
                                    </div>
                                    <div className="col-lg-6 col-12 p-0">
                                        <div className="card rounded-0 mb-0 px-2">
                                            <div className="card-header pb-1">
                                                <div className="card-title">
                                                    <h4 className="mb-0">Login</h4>
                                                </div>
                                            </div>
                                            <p className="px-2">Welcome back, please login to your account.</p>
                                            <div className="card-content">
                                                <div className="card-body pt-1">
                                                    <form onSubmit={handleSubmit}>
                                                        <fieldset className="form-label-group form-group position-relative has-icon-left">
                                                            <input
                                                                onChange={handleChange('email')}
                                                                value={email}
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="E-mail" required />
                                                            <div className="form-control-position">
                                                                <i className="feather icon-user"></i>
                                                            </div>
                                                            <label>E-mail</label>
                                                        </fieldset>
                                                        {/* Warning: Invalid event handler property `onchange`. Did you mean `onChange`? */}
                                                        <fieldset className="form-label-group position-relative has-icon-left">
                                                            <input
                                                                onChange={handleChange('password')}
                                                                value={password}
                                                                type="password"
                                                                className="form-control"
                                                                placeholder="Mot de passe" required />
                                                            <div className="form-control-position">
                                                                <i className="feather icon-lock"></i>
                                                            </div>
                                                            <label>Mot de passe</label>
                                                        </fieldset>
                                                        <div className="form-group d-flex justify-content-between align-items-center">

                                                            <div className="text-right"><a href="auth-forgot-password.html" className="card-link">Mot de passe oublié?</a></div>
                                                        </div>
                                                        <button type="submit" className="btn btn-primary float-right btn-inline">Se connecter</button>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="login-footer">
                                                <div className="divider">

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

export default withRouter(Login);
