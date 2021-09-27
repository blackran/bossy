import React, {useState} from 'react';
import Button from  '../../molecules/Button';
import {
  Colors,
  Spacings,
  Input,
} from '../../';

function Signin(props){
  const {setError, error, className, onSubmitConfirmation, datas} = props

  const [state, setState] = useState({
    code: '',
  })

  const onChangeInput = (e) => {
    setError([]);
    setState(Object.assign({}, state, {[e.target.name]: e.target.value }));
  }


  const onSubmit = (e) => {
    e.preventDefault()
    onSubmitConfirmation(state);
  }

  return(
    <form onSubmit={onSubmit} style={styles(props).principale} className={ className || "Login"}>
      <div style={styles(props).inputs} className="Inputs">
        <Input 
          label={"Inserer ici le code dans votre email: "+datas?.email} 
          error={error} 
          name="code"
          value={state.code}
          onChange={onChangeInput}
          setError={setError}
          placeholder="Code"
          principalStyle={{ marginTop: Spacings.large }}
        />
      </div>
      
      <Button 
        style={{ ...styles(props).button }} 
        onClick={onSubmit} 
      >Verifier le code</Button>
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
})

export default Signin
