import React, {useState} from 'react';
import Button from  '../../molecules/Button';
import {
  Colors,
  Spacings,
  Input,
} from '../../';

function Signin(props){
  const {setError, onSubmitSignin, error, className, setIsLogin, isLogin} = props

  const [state, setState] = useState({
    client_nom: '',
    client_mdp: '',
    client_email: '',
    client_mdp_conf: '',
  })

  const onChangeInput = (e) => {
    setError([]);
    setState(Object.assign({}, state, {[e.target.name]: e.target.value }));
  }


  const onSubmit = (e) => {
    e.preventDefault()
    if (state.client_mdp === state.client_mdp_conf && state.client_mdp) {
      onSubmitSignin(state);
    } else {
      console.log(['client_mdp_conf', 'client_mdp'])
      setError(['client_mdp_conf', 'client_mdp'])
    }
  }

  return(
    <form onSubmit={onSubmit} style={styles(props).principale} className={ className || "Login"}>
      <div style={styles(props).inputs} className="Inputs">
        <Input 
          icon="user" 
          placeholder="Nom d'utilisateur" 
          name="client_nom" 
          value={state.client_nom}
          onChange={onChangeInput}
          error={error} 
          setError={setError}
          label="Nom d'utilisateur"
          principalStyle={{ marginTop: Spacings.large }}
        />
        <Input 
          icon="email" 
          placeholder="Example@example.com" 
          name="client_email" 
          value={state.client_email}
          onChange={onChangeInput}
          error={error} 
          setError={setError}
          label="Email"
          principalStyle={{ marginTop: Spacings.large }}
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
        <Input 
          icon="key" 
          type="password" 
          placeholder="Confirmation" 
          error={error} 
          name="client_mdp_conf"
          value={state.client_mdp_conf}
          onChange={onChangeInput}
          setError={setError}
          label="Confirmation"
          principalStyle={{ marginTop: Spacings.large }}
        />
      </div>
      
      <Button 
        style={{ ...styles(props).button }} 
        onClick={onSubmit} 
      >Creer compte</Button>
      <div 
        style={{ ...styles(props).toggleSign }} 
        onClick={() => { setIsLogin(!isLogin) }} 
      >Se connecter?</div>
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
  inputs: {
  },
  button: {
    margin: Spacings.tiny, 
    marginTop: Spacings.xlarge,
  },
  toggleSign: {
    marginTop: Spacings.xlarge,
    fontSize: Spacings.base,
    color: Colors.PrimaryLight,
    textAlign: 'center',
    cursor: 'pointer',
  }
})

export default Signin
