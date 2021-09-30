import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App'
import ForgotPassword from './auth/ForgotPassword';
import Login from './auth/Login';
import UpdatePassword from './auth/UpdatePassword';
import DocsScreens from './screens/DocsScreens';
import NiveauScreens from './screens/NiveauScreens';
import TypeScreens from './screens/TypeScreens';
// import PrivateRoute from './helpers/PrivateRoute';





const Routes = () => {
    return (
        <BrowserRouter basename={'/admin-dashboard'}>
            <Switch>
                <Route path="/dashboard" exact component={App} />
                <Route path="/" exact component={Login} />
                <Route path="/forgotpassword" exact component={ForgotPassword} />
                <Route path="/updatepassword" exact component={UpdatePassword} />
                <Route path="/documents" exact component={DocsScreens} />
                <Route path="/type" exact component={TypeScreens} />
                <Route path="/niveau" exact component={NiveauScreens} />

                {/* <PrivateRoute path="/create" exact component={Create} />
                <Route path="/login" exact component={Login} />
                <Route path="/post/:slug" exact component={GetOne} />
                <PrivateRoute path="/post/update/:slug" exact component={Update} /> */}
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
