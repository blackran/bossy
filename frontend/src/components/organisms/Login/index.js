import React, {useState} from 'react';
import Button from  '../../molecules/Button';
import {
  Colors,
  Spacings,
  Input,
} from '../../';

function Login(props){
  const {setError, onSubmitLogin, error, className, setIsLogin, isLogin} = props
  const [state, setState] = useState({
    client_email: '',
    client_mdp: '',
  })

  const onChangeInput = (e) => {
    setState(Object.assign({}, state, {[e.target.name]: e.target.value }))
  }


  const onSubmit = (e) => {
    e.preventDefault()
    onSubmitLogin(state)
  }

  return(
    <form onSubmit={onSubmit} style={styles(props).principale} className={ className || "Login"}>
      <div style={styles(props).inputs} className="Inputs">
        <Input 
          icon="user" 
          placeholder="Votre email" 
          name="client_email" 
          value={state.client_email}
          onChange={onChangeInput}
          error={error} 
          setError={setError}
          label="Email d'utilisateur"
          principalStyle={{ marginTop: Spacings.large }}
          type="email" 
        />
        <Input 
          icon="key" 
          type="password" 
          placeholder="Mot de passe" 
          error={error} 
          name="client_mdp"
          value={state.client_pdp}
          onChange={onChangeInput}
          setError={setError}
          label="Mot de passe"
          principalStyle={{ marginTop: Spacings.large }}
        />
      </div>
      <div
        style={{ ...styles(props).motdepass }} 
        onClick={() => { console.log('mot de pass oublier') }} 
      >Mot de pass oublier?</div>
      <Button 
        style={{ ...styles(props).button }} 
        onClick={onSubmit} 
      >Se connecter</Button>
      <div 
        style={{ ...styles(props).toggleSign }} 
        onClick={() => { setIsLogin(!isLogin) }} 
      >Creer un compte?</div>
    </form>
    )
}

const styles = () =>  ({
  principale: {
    alignItems: 'center',
    backgroundColor: Colors.PrimaryDark +'40',
    width: 300,
    padding: Spacings.xlarge,
  },
  button: {
    margin: Spacings.tiny, 
    marginTop: Spacings.xlarge,
  },
  motdepass: {
    marginTop: Spacings.xlarge,
    fontSize: Spacings.base,
    color: Colors.PrimaryLight,
    cursor: 'pointer',
    marginLeft: Spacings.small,
  },
  toggleSign: {
    marginTop: Spacings.xlarge,
    fontSize: Spacings.base,
    color: Colors.PrimaryLight,
    textAlign: 'center',
    cursor: 'pointer',
  }
})

export default Login
