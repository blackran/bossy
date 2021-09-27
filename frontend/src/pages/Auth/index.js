import React from 'react';
import {
  Login,
  Signin,
} from '../../components'
import './statics/css/Login.css';
import axios from 'axios';

function Auth(props) {
  const [isLogin, setIsLogin] = React.useState(true);

  const onSubmitLogin = (data) => {
    // if (props.history.location.pathname !== '/') {
    //   props.history.push('/');
    // }
    const { client_email, client_mdp } = data;
    axios.post('/api/user/login', { email: client_email, password: client_mdp })
      .then(({ data }) => {
        if (data.status === 'success') {
          sessionStorage.setItem('token', data.token);
          setTimeout(() => {
            props.history.push('/Lecons');
            window.location.reload(false);
          }, 1000)
        }
      })
      .catch(() => {
        setError(['client_email', 'client_mdp'])
      })
  }

  const onSubmitSignin = (datas) => {
    console.log('onSubmitSignin()');
    const { client_nom, client_mdp, client_email } = datas;
    axios.post('/api/user/signup', { 
      firstname: client_nom,
      email: client_email, 
      password: client_mdp,
    })
      .then(({ data }) => {
        if (data.status === 'success') {
          props.history.push(`/Confirmation?email=${data.email}`);
        }
      })
      .catch((error) => {
        console.log({ error })
      })
  }

  const [error, setError] = React.useState([]);

  return (
    <div className="Auth">
      {
        isLogin ?
          <Login
            className='Login'
            onSubmitLogin={onSubmitLogin}
            {...{ isLogin, setIsLogin, error, setError }}
          /> :
          <Signin
            className='Singin'
            onSubmitSignin={onSubmitSignin}
            {...{ isLogin, setIsLogin, error, setError }}
          />
      }
    </div>
  )
}

export default Auth
