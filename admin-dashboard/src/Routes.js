import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App'
import ForgotPassword from './auth/ForgotPassword';
import Login from './auth/Login';
import UpdatePassword from './auth/UpdatePassword';
import DocsScreens from './screens/DocsScreens/DocsScreens';





const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/login" exact component={Login} />
                <Route path="/principal" exact component={App} />
                <Route path="/forgotpassword" exact component={ForgotPassword} />
                <Route path="/updatepassword" exact component={UpdatePassword} />
                <Route path="/documents" exact component={DocsScreens} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
