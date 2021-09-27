import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios'
import './App.css';

axios.defaults.baseURL = 'http://localhost:5000';
// axios.defaults.baseURL = '';


const Auth = lazy(() => import('./pages/Auth'));
const Lecons = lazy(() => import('./pages/Lecons'));
const Exercices = lazy(() => import('./pages/Exercices'));
const Details = lazy(() => import('./pages/Details'));
const LireDocument = lazy(() => import('./pages/LireDocument'));
const Confirmation = lazy(() => import('./pages/Auth/Confirmation'));

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Auth} />
            <Route path="/Confirmation" component={Confirmation} />
            <PrivateRoute exact path="/Lecons" component={Lecons} />
            <PrivateRoute exact path="/Exercices" component={Exercices} />
            <PrivateRoute exact path="/Details=:id" component={Details} />
            <PrivateRoute exact path="/LireDocument=:id" component={LireDocument} />
            <Route component={Auth} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  let isAuth = true;
  isAuth = sessionStorage.hasOwnProperty('token');

  return <Route
    {...rest}
    render={props =>
      isAuth ?
        <Component {...props} />
        : <Redirect to={'/'} />
    }
  />
}

export default App;
